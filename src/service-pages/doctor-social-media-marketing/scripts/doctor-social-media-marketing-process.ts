class DoctorSocialMediaMarketingProcess extends HTMLElement {
  private stepObserver?: IntersectionObserver;
  private sectionObserver?: IntersectionObserver;
  private animations = new Set<Animation>();
  private motion?: MediaQueryList;
  private cleanup?: AbortController;
  private resizeObserver?: ResizeObserver;
  private routeFrame?: number;

  connectedCallback() {
    this.motion = matchMedia('(prefers-reduced-motion: reduce)');
    this.cleanup = new AbortController();
    this.motion.addEventListener('change', () => this.configure(), { signal: this.cleanup.signal });
    this.configure();
    // Read geometry after size changes; never on scroll or every animation frame.
    const flow = this.querySelector<HTMLElement>('.doctor-social-media-marketing-process-flow');
    if (flow && 'ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(() => this.queueRoute());
      this.resizeObserver.observe(flow);
    }
    addEventListener('resize', () => this.queueRoute(), { signal: this.cleanup.signal });
    document.fonts.ready.then(() => {
      if (!this.cleanup?.signal.aborted && this.isConnected) this.queueRoute();
    });
    this.queueRoute();
  }

  private configure() {
    this.stop();
    if (this.motion?.matches || !('IntersectionObserver' in window)) {
      this.complete();
      return;
    }

    this.classList.add('is-enhanced');
    const steps = [...this.querySelectorAll<HTMLElement>('[data-seo-process-step]')];
    this.stepObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting);
      visible.forEach((entry, visibleIndex) => {
        this.stepObserver?.unobserve(entry.target);
        const step = entry.target as HTMLElement;
        const content = step.querySelector<HTMLElement>('[data-seo-process-copy]');
        const node = step.querySelector<HTMLElement>('.doctor-social-media-marketing-process-node');
        const delay = innerWidth >= 1100 ? visibleIndex * 90 : 0;
        step.style.setProperty('--seo-process-delay', `${delay}ms`);
        step.classList.add('is-active');
        if (content) this.play(content, 14, 620, delay);
        if (node) this.play(node, 0, 520, delay, true);
      });
    }, { threshold: 0.34, rootMargin: '0px 0px -8% 0px' });
    steps.forEach(step => this.stepObserver?.observe(step));

    const section = this.querySelector<HTMLElement>('.doctor-social-media-marketing-process');
    if (section) {
      this.sectionObserver = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        this.classList.add('is-route-active');
        const header = this.querySelector<HTMLElement>('.doctor-social-media-marketing-process-header');
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
    this.querySelectorAll('[data-seo-process-step]').forEach(step => step.classList.add('is-active'));
  }

  private stop() {
    this.stepObserver?.disconnect();
    this.sectionObserver?.disconnect();
    this.animations.forEach(animation => animation.cancel());
    this.animations.clear();
  }

  private queueRoute() {
    if (this.routeFrame !== undefined) return;
    this.routeFrame = requestAnimationFrame(() => {
      this.routeFrame = undefined;
      if (!this.isConnected || innerWidth < 1100) return;
      const flow = this.querySelector<HTMLElement>('.doctor-social-media-marketing-process-flow');
      const svg = this.querySelector<SVGSVGElement>('.doctor-social-media-marketing-process-route');
      if (!flow || !svg) return;
      const box = flow.getBoundingClientRect();
      const nodes = [...flow.querySelectorAll<HTMLElement>('.doctor-social-media-marketing-process-node')].map(node => {
        const rect = node.getBoundingClientRect();
        return { x: rect.left + rect.width / 2 - box.left, y: rect.top + rect.height / 2 - box.top };
      });
      if (nodes.length !== 5 || !box.width || !box.height) return;
      const right = box.width - 2;
      const points = [nodes[0], nodes[1], nodes[2], { x: right, y: nodes[2].y }, { x: right, y: nodes[3].y }, nodes[3], nodes[4]];
      // All geometry reads above precede all SVG writes below.
      svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
      const gradient = svg.querySelector('linearGradient');
      gradient?.setAttribute('x2', String(box.width));
      gradient?.setAttribute('y2', String(box.height));
      svg.querySelector('.doctor-social-media-marketing-process-route-base')?.setAttribute('d', points.map((point, index) => `${index ? 'L' : 'M'} ${point.x} ${point.y}`).join(' '));
      svg.querySelectorAll('.doctor-social-media-marketing-process-route-progress line').forEach((line, index) => {
        const start = points[index], end = points[index + 1];
        if (!start || !end) return;
        line.setAttribute('x1', String(start.x)); line.setAttribute('y1', String(start.y));
        line.setAttribute('x2', String(end.x)); line.setAttribute('y2', String(end.y));
      });
      this.setAttribute('data-seo-route-measured', '');
    });
  }

  disconnectedCallback() {
    this.stop();
    this.cleanup?.abort();
    this.resizeObserver?.disconnect();
    if (this.routeFrame !== undefined) cancelAnimationFrame(this.routeFrame);
    this.routeFrame = undefined;
  }
}

if (!customElements.get('doctor-social-media-marketing-process')) customElements.define('doctor-social-media-marketing-process', DoctorSocialMediaMarketingProcess);
