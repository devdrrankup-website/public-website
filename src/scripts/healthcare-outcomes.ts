import { defineScrollSection } from './scroll-section';

defineScrollSection('healthcare-outcomes', (element, gsap, ScrollTrigger) => {
  const list = element.querySelector<HTMLElement>('.outcomes-list')!;
  const tracks = [...list.querySelectorAll<HTMLElement>('.outcome-track')];
  const rows = tracks.map(track => track.querySelector<HTMLElement>('.outcome-row')!);
  let offsets: number[] = [], tops: number[] = [];
  let frame = 0;

  const measure = () => {
    const heights = rows.map(row => row.offsetHeight);
    const gap = parseFloat(getComputedStyle(list).rowGap);
    const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
    const step = parseFloat(getComputedStyle(tracks[0]).getPropertyValue('--stack-step'));
    let offset = 0;
    offsets = heights.map(height => { const top = offset; offset += height + gap; return top; });
    // Tall cards scroll completely into view before resting against the next card.
    tops = heights.map((height, index) => Math.min(header + 12 + index * step, innerHeight - height - 16));
    tracks.forEach((track, index) => track.style.setProperty('--stack-card-height', `${heights[index]}px`));
  };
  const flowTop = (index: number) => list.getBoundingClientRect().top + scrollY + offsets[index];
  measure();
  element.setAttribute('data-stack-ready', '');
  rows.slice(0, -1).forEach((row, index) => {
    // Native CSS supplies the overlap. GSAP adds depth only as the next card arrives.
    gsap.to(row, {
      scale: 0.975, filter: 'blur(2.4px)', ease: 'none',
      scrollTrigger: {
        trigger: list, start: () => flowTop(index + 1) - (tops[index] + rows[index].offsetHeight * 0.55),
        end: () => flowTop(index + 1) - tops[index + 1],
        scrub: 0.25, invalidateOnRefresh: true,
      },
    });
  });
  const refresh = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => { measure(); ScrollTrigger.refresh(); });
  };
  const observer = new ResizeObserver(refresh);
  observer.observe(list);
  window.addEventListener('resize', refresh, { passive: true });
  return () => {
    observer.disconnect();
    window.removeEventListener('resize', refresh);
    cancelAnimationFrame(frame);
    element.removeAttribute('data-stack-ready');
    tracks.forEach(track => track.style.removeProperty('--stack-card-height'));
  };
});
