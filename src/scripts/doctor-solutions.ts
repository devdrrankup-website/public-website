// Native sticky positioning and cached scroll boundaries; no scroll-time layout reads.
class DoctorSolutions extends HTMLElement {
  private cleanup?: AbortController;
  private tabs: HTMLButtonElement[] = [];
  private panels: HTMLElement[] = [];
  private rows: HTMLElement[][] = [];
  private photos = new Map<HTMLElement, HTMLElement>();
  private homes = new Map<HTMLElement, HTMLElement>();
  private stage?: HTMLElement;
  private dock?: HTMLElement;
  private displayed?: HTMLElement;
  private current?: HTMLElement;
  private hover?: HTMLElement;
  private selected = 0;
  private boundaries: number[] = [];
  private pinAt = Infinity;
  private inView = false;
  private imageVersion = 0;
  private frame = 0;
  private measureFrame = 0;
  private visibility?: IntersectionObserver;
  private activation?: IntersectionObserver;
  private resize?: ResizeObserver;
  private animations = new Set<Animation>();
  private motion = matchMedia('(prefers-reduced-motion: reduce)');
  private compact = matchMedia('(max-width: 1099px)');
  private wide = matchMedia('(min-width: 1100px) and (hover: hover) and (pointer: fine)');
  private initialized = false;

  connectedCallback() {
    this.cleanup = new AbortController();
    this.activation = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      this.activation?.disconnect();
      this.activation = undefined;
      this.initialize();
    }, { rootMargin: '700px 0px' });
    this.activation.observe(this);
  }

  private initialize() {
    if (this.initialized || !this.isConnected || !this.cleanup) return;
    this.initialized = true;
    const options = { signal: this.cleanup.signal };
    this.tabs = [...this.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
    this.panels = [...this.querySelectorAll<HTMLElement>('[data-solution-panel]')];
    this.rows = this.panels.map(panel => [...panel.querySelectorAll<HTMLElement>('.doctor-solution-row')]);
    this.panels.forEach(panel => panel.classList.remove('is-initially-hidden'));
    this.dock = this.querySelector<HTMLElement>('.doctor-solutions-dock')!;
    this.stage = this.querySelector<HTMLElement>('.doctor-solutions-stage')!;
    const tablist = this.querySelector<HTMLElement>('[role="tablist"]')!;
    if (!this.stage || !this.dock || !tablist || this.tabs.length !== this.panels.length) return;
    this.photos.clear(); this.homes.clear();
    this.rows.flat().forEach(row => {
      const photo = row.querySelector<HTMLElement>('.doctor-solution-photo')!;
      this.photos.set(row, photo); this.homes.set(photo, photo.parentElement!);
    });
    this.tabs.forEach((tab, index) => {
      this.panels[index].setAttribute('role', 'tabpanel');
      this.panels[index].setAttribute('aria-labelledby', tab.id);
      this.panels[index].tabIndex = 0;
      tab.addEventListener('click', () => this.select(index), options);
      tab.addEventListener('keydown', event => {
        const previous = this.compact.matches ? 'ArrowLeft' : 'ArrowUp';
        const next = this.compact.matches ? 'ArrowRight' : 'ArrowDown';
        let target: number | undefined;
        if (event.key === previous) target = (index + this.tabs.length - 1) % this.tabs.length;
        if (event.key === next) target = (index + 1) % this.tabs.length;
        if (event.key === 'Home') target = 0;
        if (event.key === 'End') target = this.tabs.length - 1;
        if (target !== undefined) { event.preventDefault(); this.tabs[target].focus(); }
      }, options);
    });
    this.addEventListener('pointerover', event => {
      if (!this.wide.matches) return;
      const row = (event.target as Element).closest<HTMLElement>('.doctor-solution-row');
      if (!row || row === this.hover) return;
      this.hover = row;
      this.showPhoto(row, row.querySelector<HTMLElement>('.doctor-solution-reveal')!);
    }, options);
    this.addEventListener('pointerleave', () => this.clearHover(), options);
    this.addEventListener('pointerout', event => {
      const next = (event as PointerEvent).relatedTarget;
      if (!(next instanceof Element) || !next.closest('.doctor-solution-row')) this.clearHover();
    }, options);
    const mode = () => {
      tablist.setAttribute('aria-orientation', this.compact.matches ? 'horizontal' : 'vertical');
      this.clearHover(); this.stop(); this.queueMeasure();
      if (this.inView && this.current && !this.wide.matches) this.showPhoto(this.current, this.stage!);
    };
    this.compact.addEventListener('change', mode, options);
    this.wide.addEventListener('change', mode, options);
    this.motion.addEventListener('change', () => this.stop(), options);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { this.stop(); this.imageVersion++; }
      else { this.queueMeasure(); if (this.current && !this.wide.matches) this.showPhoto(this.current, this.stage!); }
    }, options);
    window.addEventListener('scroll', () => {
      if (!this.inView || !this.compact.matches || document.hidden || this.frame) return;
      this.frame = requestAnimationFrame(() => { this.frame = 0; this.render(); });
    }, { ...options, passive: true });
    window.addEventListener('resize', () => this.queueMeasure(), options);
    this.classList.add('doctor-solutions-ready');
    tablist.hidden = false; this.stage.hidden = false;
    this.select(0, false); mode();
    this.visibility = new IntersectionObserver(entries => {
      this.inView = entries[0].isIntersecting;
      if (this.inView) {
        this.queueMeasure();
        if (this.current && !this.wide.matches) this.showPhoto(this.current, this.stage!);
      }
    }, { rootMargin: '200px 0px' });
    this.visibility.observe(this);
    this.resize = new ResizeObserver(() => this.queueMeasure());
    this.resize.observe(this); this.resize.observe(this.dock);
    document.fonts.ready.then(() => { if (!this.cleanup?.signal.aborted) this.queueMeasure(); });
  }

  private select(index: number, animate = true) {
    if (animate && this.tabs[index].getAttribute('aria-selected') === 'true') return;
    // One event-time read, before writes. Keep a tapped sticky category in view.
    const pinned = this.compact.matches && this.dock!.getBoundingClientRect().top <= 128;
    this.stop(); this.clearHover(); this.selected = index;
    this.tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index)); tab.tabIndex = i === index ? 0 : -1;
      this.panels[i].hidden = i !== index;
    });
    this.current?.classList.remove('is-current');
    this.current = this.rows[index][0]; this.current.classList.add('is-current');
    if (this.inView && !this.wide.matches) this.showPhoto(this.current, this.stage!);
    this.queueMeasure(pinned && animate);
    if (animate && !this.motion.matches) {
      const animation = this.panels[index].animate([{ transform: 'translateY(18px)' }, { transform: 'translateY(0)' }],
        { duration: 500, easing: 'cubic-bezier(.16,1,.3,1)' });
      this.track(animation);
      animation.finished.then(() => { if (!this.cleanup?.signal.aborted) this.queueMeasure(); }, () => {});
    }
  }

  private queueMeasure(reset = false) {
    if (this.measureFrame) cancelAnimationFrame(this.measureFrame);
    this.measureFrame = requestAnimationFrame(() => {
      this.measureFrame = 0;
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 98;
      const top = header + 12;
      const rootTop = this.getBoundingClientRect().top + scrollY;
      this.pinAt = rootTop - top;
      const readingLine = top + this.dock!.getBoundingClientRect().height + 24;
      const positions = this.rows[this.selected].map(row => row.getBoundingClientRect().top + scrollY);
      const limit = document.documentElement.scrollHeight - innerHeight - 2;
      // Clamp the final handovers to available native scroll range, including
      // a tall tablet at the final built section. No artificial blank tail.
      this.boundaries = positions.map((position, i) => Math.min(position - readingLine,
        limit - (positions.length - 1 - i) * Math.min(110, innerHeight * .1)));
      if (reset) scrollTo({ top: rootTop - top, behavior: 'instant' });
      this.render();
    });
  }

  private render() {
    if (!this.compact.matches) { this.classList.remove('is-pinned'); return; }
    if (!this.inView || document.hidden) return;
    const position = scrollY;
    this.classList.toggle('is-pinned', position >= this.pinAt);
    let index = 0;
    for (let i = 1; i < this.boundaries.length; i++) if (position >= this.boundaries[i]) index = i;
    const row = this.rows[this.selected][index];
    if (row === this.current) return;
    this.current?.classList.remove('is-current'); this.current = row; row.classList.add('is-current');
    this.showPhoto(row, this.stage!);
  }

  private async showPhoto(row: HTMLElement, target: HTMLElement) {
    const photo = this.photos.get(row)!;
    if (photo.parentElement === target) return;
    const version = ++this.imageVersion;
    const image = photo.querySelector<HTMLImageElement>('img')!;
    image.sizes = target === this.stage ? 'min(calc(100vw - 32px), 42svh, 540px)' : '150px';
    image.loading = 'eager';
    try { await image.decode(); } catch { return; }
    if (version !== this.imageVersion || !this.isConnected || document.hidden) return;
    this.restoreDisplayed();
    target.append(photo); this.displayed = photo;
    if (target === this.stage) {
      this.stage.dataset.activeService = row.dataset.service;
      // One image ahead, only in the selected visible category.
      const next = this.rows[this.selected][this.rows[this.selected].indexOf(row) + 1];
      if (next) {
        const upcoming = this.photos.get(next)!.querySelector<HTMLImageElement>('img')!;
        upcoming.sizes = 'min(calc(100vw - 32px), 42svh, 540px)';
        upcoming.loading = 'eager';
      }
      if (!this.motion.matches) this.track(photo.animate([{ opacity: .55, transform: 'scale(1.015)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 320, easing: 'ease-out' }));
    } else row.classList.add('has-photo');
  }

  private restoreDisplayed() {
    if (!this.displayed) return;
    this.displayed.closest('.has-photo')?.classList.remove('has-photo');
    this.homes.get(this.displayed)!.append(this.displayed); this.displayed = undefined;
  }

  private clearHover() {
    if (!this.hover) return;
    this.imageVersion++; this.hover = undefined; this.restoreDisplayed();
  }
  private track(animation: Animation) {
    this.animations.add(animation);
    animation.finished.then(() => this.animations.delete(animation), () => this.animations.delete(animation));
  }
  private stop() { this.animations.forEach(animation => animation.cancel()); this.animations.clear(); }

  disconnectedCallback() {
    this.imageVersion++; this.stop(); this.restoreDisplayed(); this.cleanup?.abort();
    this.activation?.disconnect(); this.visibility?.disconnect(); this.resize?.disconnect();
    cancelAnimationFrame(this.frame); cancelAnimationFrame(this.measureFrame);
    this.classList.remove('doctor-solutions-ready', 'is-pinned');
    this.querySelector<HTMLElement>('[role="tablist"]')?.setAttribute('hidden', '');
    this.stage?.setAttribute('hidden', '');
    this.panels.forEach(panel => { panel.hidden = false; panel.removeAttribute('role'); panel.removeAttribute('aria-labelledby'); panel.removeAttribute('tabindex'); });
    this.initialized = false;
  }
}
if (!customElements.get('doctor-solutions')) customElements.define('doctor-solutions', DoctorSolutions);
