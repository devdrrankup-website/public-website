class DoctorProcess extends HTMLElement {
  private stepObserver?: IntersectionObserver;
  private sectionObserver?: IntersectionObserver;
  private animations = new Set<Animation>();
  private motion?: MediaQueryList;
  private cleanup?: AbortController;

  connectedCallback() {
    this.motion = matchMedia('(prefers-reduced-motion: reduce)');
    this.cleanup = new AbortController();
    this.motion.addEventListener('change', () => this.configure(), { signal: this.cleanup.signal });
    this.configure();
  }

  private configure() {
    this.stop();
    if (this.motion?.matches || !('IntersectionObserver' in window)) {
      this.complete();
      return;
    }

    this.classList.add('is-enhanced');
    const steps = [...this.querySelectorAll<HTMLElement>('[data-process-step]')];
    this.stepObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting);
      visible.forEach((entry, visibleIndex) => {
        this.stepObserver?.unobserve(entry.target);
        const step = entry.target as HTMLElement;
        const content = step.querySelector<HTMLElement>('[data-process-copy]');
        const node = step.querySelector<HTMLElement>('.doctor-process-node');
        const delay = innerWidth >= 1100 ? visibleIndex * 90 : 0;
        step.style.setProperty('--process-delay', `${delay}ms`);
        step.classList.add('is-active');
        if (content) this.play(content, 14, 620, delay);
        if (node) this.play(node, 0, 520, delay, true);
      });
    }, { threshold: 0.34, rootMargin: '0px 0px -8% 0px' });
    steps.forEach(step => this.stepObserver?.observe(step));

    const section = this.querySelector<HTMLElement>('#doctor-process');
    if (section) {
      this.sectionObserver = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        this.classList.add('is-route-active');
        const header = this.querySelector<HTMLElement>('.doctor-process-header');
        if (header) this.play(header, 14, 680);
        this.sectionObserver?.disconnect();
      }, { threshold: 0.2 });
      this.sectionObserver.observe(section);
    }
  }

  private play(target: HTMLElement, y: number, duration: number, delay = 0, pulse = false) {
    const frames = pulse
      ? [{ transform: 'scale(.84)' }, { transform: 'scale(1.06)', offset: .68 }, { transform: 'scale(1)' }]
      : [{ transform: `translateY(${y}px)` }, { transform: 'translateY(0)' }];
    const animation = target.animate(frames, {
      duration,
      delay,
      easing: 'cubic-bezier(.2,.65,.3,1)',
      fill: 'none',
    });
    this.animations.add(animation);
    animation.finished.then(() => this.animations.delete(animation), () => this.animations.delete(animation));
  }

  private complete() {
    this.classList.remove('is-enhanced');
    this.classList.add('is-route-active');
    this.querySelectorAll('[data-process-step]').forEach(step => step.classList.add('is-active'));
  }

  private stop() {
    this.stepObserver?.disconnect();
    this.sectionObserver?.disconnect();
    this.animations.forEach(animation => animation.cancel());
    this.animations.clear();
  }

  disconnectedCallback() {
    this.stop();
    this.cleanup?.abort();
  }
}

if (!customElements.get('doctor-process')) customElements.define('doctor-process', DoctorProcess);
