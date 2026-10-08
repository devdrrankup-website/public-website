import { defineScrollSection } from './scroll-section';

defineScrollSection('healthcare-services', (element, gsap, ScrollTrigger) => {
  const experience = element.querySelector<HTMLElement>('.services-experience')!;
  const dock = element.querySelector<HTMLElement>('.services-copy-dock')!;
  const panels = [...element.querySelectorAll<HTMLElement>('.service-copy')];
  const pairs = [...element.querySelectorAll<HTMLElement>('.service-image-pair')];
  const setters = panels.map(panel => gsap.quickSetter(panel, 'y', 'px'));
  const previous = panels.map(() => NaN);
  let copyHeight = 0;
  let boundaries: { start: number; end: number }[] = [];

  element.setAttribute('data-service-window', '');
  const measure = () => {
    // Layout reads happen on refresh, never on each scroll update.
    copyHeight = Math.ceil(Math.max(...panels.map(panel => panel.firstElementChild!.getBoundingClientRect().height)));
    const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80;
    const desktop = innerWidth >= 900 && innerHeight >= 700;
    const top = desktop ? Math.max(header + 24, Math.min(innerHeight * .2, innerHeight - copyHeight - 24)) : header + 12;
    element.style.setProperty('--copy-height', `${copyHeight}px`);
    element.style.setProperty('--service-top', `${top}px`);
    // Reference: full-opacity text moves through a fixed clipping window.
    // Image pairs remain in natural flow; no card pinning or image parallax.
    const endLine = desktop ? innerHeight * .16 : top + copyHeight + innerHeight * .135;
    const startLine = desktop ? innerHeight * .46 : endLine + innerHeight * .33;
    const stickyStart = experience.getBoundingClientRect().top + scrollY - top;
    boundaries = pairs.slice(1).map(pair => {
      const flow = pair.getBoundingClientRect().top + scrollY;
      // A tall tablet can already show the next pair before the copy docks.
      // Let the window settle before its first handover, without pinning it.
      const start = Math.max(flow - startLine, stickyStart + 64);
      return {start, end: Math.max(start + 120, flow - endLine)};
    });
    // While this is the last built section, a tall tablet may hit the document
    // bottom just before the final handover. Reserve only the missing distance.
    const oldTail = parseFloat(element.style.getPropertyValue('--service-tail')) || 0;
    const maximumScroll = document.documentElement.scrollHeight - innerHeight;
    element.style.setProperty('--service-tail', `${Math.max(0, boundaries.at(-1)!.end + 40 - (maximumScroll - oldTail))}px`);
  };
  const render = () => {
    const progress = boundaries.map(({start, end}) => Math.max(0, Math.min(1, (scrollY - start) / (end - start))));
    panels.forEach((_, index) => {
      const incoming = index === 0 ? 0 : 1 - progress[index - 1];
      const outgoing = progress[index] || 0;
      const y = copyHeight * (incoming - outgoing);
      if (Math.abs(y - previous[index]) > .05 || !Number.isFinite(previous[index])) {
        setters[index](y);
        previous[index] = y;
      }
    });
  };
  measure();
  render();
  const trigger = ScrollTrigger.create({
    trigger: experience, start: 'top bottom', end: 'bottom top',
    onUpdate: render, onRefresh: () => {measure(); render();},
  });

  // Every source link remains keyboard-accessible. Reveal the appropriate
  // complete panel when focus reaches a link outside the reading window.
  const focus = (event: FocusEvent) => {
    const index = panels.findIndex(panel => panel.contains(event.target as Node));
    if (index < 0) return;
    const readingWindow = dock.getBoundingClientRect();
    if (Math.abs(previous[index]) < 1 && readingWindow.top >= 0 && readingWindow.bottom <= innerHeight) return;
    const target = index === 0 ? boundaries[0].start - 1 : boundaries[index - 1].end + 1;
    window.scrollTo({top: target, behavior: 'instant'});
    ScrollTrigger.update();
    render();
  };
  dock.addEventListener('focusin', focus);
  const images = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll<HTMLImageElement>('img').forEach(img => {img.loading = 'eager';});
    images.unobserve(entry.target);
  }), {rootMargin: '400px 0px'});
  pairs.forEach(pair => images.observe(pair));

  return () => {
    trigger.kill();
    images.disconnect();
    dock.removeEventListener('focusin', focus);
    // quickSetter has no tween for context.revert(), so clear explicitly.
    gsap.set(panels, {clearProps: 'transform'});
    pairs.forEach(pair => pair.querySelectorAll<HTMLImageElement>('img').forEach(img => {img.loading = 'lazy';}));
    element.removeAttribute('data-service-window');
    element.style.removeProperty('--copy-height');
    element.style.removeProperty('--service-top');
    element.style.removeProperty('--service-tail');
  };
});
