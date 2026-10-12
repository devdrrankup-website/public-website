// Reserved space, visible static copy and scoped, one-shot transform motion.
class DoctorSeoExpertise extends HTMLElement {
  private observer?: IntersectionObserver;
  private media?: MediaQueryList;
  private cleanup?: AbortController;
  private animations = new Set<Animation>();
  private entered = new WeakSet<Element>();

  connectedCallback() {
    this.media = matchMedia('(prefers-reduced-motion: reduce)');
    this.cleanup = new AbortController();
    this.media.addEventListener('change', () => {
      this.stop();
      if (!this.media?.matches) this.observe();
    }, { signal: this.cleanup.signal });
    if (!this.media.matches) this.observe();
  }

  private observe() {
    if (!('IntersectionObserver' in window)) return;
    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const target = entry.target as HTMLElement;
        this.observer?.unobserve(target);
        if (this.entered.has(target)) continue;
        this.entered.add(target);
        const kind = target.dataset.expertiseReveal;
        const frames: Keyframe[] = kind === 'portrait'
          ? [{ transform: 'scale(1.045)' }, { transform: 'scale(1)' }]
          : kind === 'rule'
            ? [{ transform: 'scaleX(.15)' }, { transform: 'scaleX(1)' }]
            : [{ transform: 'translateY(16px)', opacity: .8 }, { transform: 'translateY(0)', opacity: 1 }];
        const animation = target.animate(frames, {
          duration: kind === 'portrait' ? 850 : kind === 'rule' ? 750 : 650,
          delay: Math.min(100, Math.max(0, Number(target.dataset.expertiseDelay) || 0)),
          easing: 'cubic-bezier(.16,1,.3,1)',
        });
        this.animations.add(animation);
        animation.finished.then(() => this.animations.delete(animation), () => this.animations.delete(animation));
      }
    }, { threshold: .15 });
    this.querySelectorAll('[data-expertise-reveal]').forEach(target => {
      if (!this.entered.has(target)) this.observer?.observe(target);
    });
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
if (!customElements.get('doctor-seo-expertise')) customElements.define('doctor-seo-expertise', DoctorSeoExpertise);
