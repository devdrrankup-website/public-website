// Discovery entry behavior; each instance owns its effects.
// Registered only by pages that render these sections.
class HealthcareSectionReveal extends HTMLElement {
  private observer?: IntersectionObserver;
  private controller?: AbortController;
  private motion?: MediaQueryList;
  private timeline?: import('gsap').gsap.core.Timeline;
  private context?: import('gsap').gsap.Context;
  private preparing = false;
  private played = false;
  private disposed = false;
  private engine?: Promise<typeof import('gsap')>;

  private loadEngine() {
    return this.engine ??= import('gsap').catch(error => {
      this.engine = undefined;
      throw error;
    });
  }

  connectedCallback() {
    this.disposed = false;
    this.controller = new AbortController();
    this.motion = matchMedia('(prefers-reduced-motion: reduce)');
    // Prebuilt HTML stays visible before JS/import, and when motion is reduced.
    this.motion.addEventListener('change', () => {
      if (this.motion?.matches) {
        this.context?.revert();
        this.context = undefined;
        this.timeline = undefined;
      }
    }, { signal: this.controller.signal });
    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (entry.target.matches('[data-reveal-intro]')) {
          this.observer?.unobserve(entry.target);
          if (!this.motion?.matches) void this.loadEngine().catch(() => {});
        } else void this.reveal(entry.target as HTMLElement);
      }
    }, { threshold: 0.12 });
    this.observer.observe(this.querySelector('[data-reveal-intro]')!);
    this.querySelectorAll('[data-reveal-card]').forEach(card => this.observer!.observe(card));
  }

  private async reveal(card: HTMLElement) {
    if (this.motion?.matches || this.disposed || card.dataset.revealed) return;
    // Warm the shared engine as the section introduction enters view, so its
    // first evaluation does not coincide with the cards' first painted frame.
    // Each card animates once, including cards reached later on small screens.
    if (this.preparing) return;
    this.preparing = true;
    try {
      const { gsap } = await this.loadEngine();
      if (this.disposed || this.motion?.matches) return;
      if (!this.context) this.context = gsap.context(() => {}, this);
      this.context.add(() => {
        const cards = [...this.querySelectorAll<HTMLElement>('[data-reveal-card]')].filter(item => {
          const bounds = item.getBoundingClientRect();
          return !item.dataset.revealed && bounds.top < innerHeight && bounds.bottom > 0;
        });
        if (!cards.length) return;
        cards.forEach(item => {
          item.dataset.revealed = 'true';
          this.observer?.unobserve(item);
        });
        this.timeline = gsap.timeline().from(cards, {
          // Preserve paragraph contrast throughout the optional fade.
          y: 20, opacity: 0.95, duration: 0.65, stagger: 0.10,
          ease: 'power2.out', clearProps: 'transform,opacity',
        });
        const connection = this.querySelector('[data-reveal-connection]');
        if (!this.played && connection && matchMedia('(min-width: 1100px)').matches) {
          this.played = true;
          this.timeline.from(connection, {
            scaleX: 0, transformOrigin: 'left center', duration: 0.8,
            ease: 'power2.out', clearProps: 'transform',
          }, 0);
        }
      });
    } catch {
      // Optional motion failure leaves all static content readable.
      this.context?.revert();
    } finally {
      this.preparing = false;
    }
  }

  disconnectedCallback() {
    this.disposed = true;
    this.controller?.abort();
    this.observer?.disconnect();
    this.context?.revert();
    this.context = undefined;
  }
}
class HealthcareDiscovery extends HealthcareSectionReveal {}
if (!customElements.get('healthcare-discovery')) customElements.define('healthcare-discovery', HealthcareDiscovery);
export {};
