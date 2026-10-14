// Static content stays visible. A one-shot, transform-only enhancement needs no
// animation engine, scroll handler, layout measurements or hidden initial state.
class ClinicDiscovery extends HTMLElement {
  private observer?: IntersectionObserver;
  private activation?: IntersectionObserver;
  private ready = false;
  private animations = new Set<Animation>();
  private motion?: MediaQueryList;
  private cleanup?: AbortController;

  connectedCallback() {
    this.motion = matchMedia('(prefers-reduced-motion: reduce)');
    this.cleanup = new AbortController();
    this.motion.addEventListener('change', () => {
      this.stop();
      if (!this.motion?.matches) this.observe();
    }, { signal: this.cleanup.signal });
    if (!this.motion.matches) this.observe();
  }

  private observe() {
    if (!('IntersectionObserver' in window)) return;
    if (this.ready) { this.observeTargets(); return; }
    // A section can be thousands of pixels below the fold. Wait until its
    // boundary approaches before registering every child entrance target.
    this.activation?.disconnect();
    this.activation = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      this.activation?.disconnect();
      this.ready = true;
      if (!this.motion?.matches) this.observeTargets();
    }, { rootMargin: '400px 0px' });
    this.activation.observe(this);
  }

  private observeTargets() {
    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        this.observer?.unobserve(entry.target);
        const animation = entry.target.animate(
          [{ transform: 'translateY(12px)' }, { transform: 'translateY(0)' }],
          { duration: 600, easing: 'cubic-bezier(.2,.65,.3,1)' },
        );
        this.animations.add(animation);
        animation.finished.then(() => this.animations.delete(animation), () => this.animations.delete(animation));
      }
    }, { threshold: 0.12 });
    this.querySelectorAll('[data-discovery-motion]').forEach(element => this.observer?.observe(element));
  }

  private stop() {
    this.activation?.disconnect();
    this.observer?.disconnect();
    this.animations.forEach(animation => animation.cancel());
    this.animations.clear();
  }

  disconnectedCallback() {
    this.stop();
    this.cleanup?.abort();
    this.ready = false;
  }
}
if (!customElements.get('clinic-discovery')) customElements.define('clinic-discovery', ClinicDiscovery);
