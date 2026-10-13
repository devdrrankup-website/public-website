class PatientFeeManagementMapping extends HTMLElement {
  private observer?: IntersectionObserver;
  private animations = new Set<Animation>();
  private entered = new WeakSet<Element>();
  private motion?: MediaQueryList;
  private cleanup?: AbortController;

  connectedCallback() {
    this.cleanup = new AbortController();
    this.motion = matchMedia('(prefers-reduced-motion: reduce)');
    this.motion.addEventListener('change', () => this.configure(), {signal: this.cleanup.signal});
    this.configure();
  }

  private configure() {
    this.stop();
    if (this.motion?.matches || !('IntersectionObserver' in window)) return;
    this.observer = new IntersectionObserver(entries => {
      if (this.motion?.matches) return;
      for (const entry of entries) {
        if (!entry.isIntersecting || this.entered.has(entry.target)) continue;
        this.observer?.unobserve(entry.target);
        this.entered.add(entry.target);
        const target = entry.target as HTMLElement;
        if (target.hasAttribute('data-mapping-visual')) {
          target.querySelectorAll('[data-mapping-page]').forEach((page, index) => {
            this.play(page, [{transform: 'translateY(18px)'}, {transform: 'translateY(0)'}], 650, index * 45);
          });
          target.querySelectorAll('.patient-fee-management-mapping-route').forEach((path, index) => {
            this.play(path, [{strokeDasharray: '1', strokeDashoffset: '1', opacity: .35}, {strokeDasharray: '1', strokeDashoffset: '0', opacity: 1}], 750, index * 45);
          });
        } else {
          this.play(target, [{transform: 'translateY(12px)'}, {transform: 'translateY(0)'}], 650);
          const arrow = target.querySelector('[data-mapping-arrow]');
          if (arrow) this.play(arrow, [{transform: 'translateX(-12px)', opacity: .4}, {transform: 'translateX(0)', opacity: 1}], 520, 70);
        }
      }
    }, {threshold: .16});
    this.querySelectorAll('[data-mapping-entry]').forEach(target => {
      if (!this.entered.has(target)) this.observer?.observe(target);
    });
  }

  private play(target: Element, frames: Keyframe[], duration: number, delay = 0) {
    const animation = target.animate(frames, {duration, delay, easing: 'cubic-bezier(.2,.65,.3,1)', fill: 'none'});
    this.animations.add(animation);
    animation.finished.then(() => this.animations.delete(animation), () => this.animations.delete(animation));
  }

  private stop() {
    this.observer?.disconnect();
    this.animations.forEach(animation => animation.cancel());
    this.animations.clear();
  }

  disconnectedCallback() {
    this.stop();
    this.cleanup?.abort();
  }
}
if (!customElements.get('patient-fee-management-mapping')) customElements.define('patient-fee-management-mapping', PatientFeeManagementMapping);
