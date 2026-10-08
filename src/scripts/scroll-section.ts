type AnimationBuilder = (element: HTMLElement, gsap: typeof import('gsap').gsap, ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger) => void | (() => void);

// One deferred engine/plugin, with a separate lifecycle for each static island.
export function defineScrollSection(name: string, animate: AnimationBuilder) {
  if (customElements.get(name)) return;
  customElements.define(name, class extends HTMLElement {
    private observer?: IntersectionObserver;
    private controller?: AbortController;
    private motion?: MediaQueryList;
    private context?: import('gsap').gsap.Context;
    private preparing = false;

    connectedCallback() {
      this.preparing = false;
      this.controller = new AbortController();
      this.motion = matchMedia('(prefers-reduced-motion: reduce)');
      this.motion.addEventListener('change', () => { this.reset(); this.observe(); }, { signal: this.controller.signal });
      this.observe();
    }

    private observe() {
      if (this.motion?.matches || !this.isConnected) return;
      this.observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) void this.enhance();
      }, { rootMargin: '400px 0px' });
      this.observer.observe(this);
    }

    private async enhance() {
      if (this.preparing || this.context || this.motion?.matches) return;
      this.preparing = true;
      const signal = this.controller!.signal;
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
        if (signal.aborted || !this.isConnected || this.motion?.matches) return;
        gsap.registerPlugin(ScrollTrigger);
        this.context = gsap.context(() => animate(this, gsap, ScrollTrigger), this);
        this.setAttribute('data-scroll-ready', '');
        this.observer?.disconnect();
      } catch {
        this.reset(); // Failed optional motion leaves the static section readable.
      } finally {
        if (!signal.aborted) this.preparing = false;
      }
    }

    private reset() {
      this.observer?.disconnect();
      this.context?.revert();
      this.context = undefined;
      this.removeAttribute('data-scroll-ready');
    }

    disconnectedCallback() { this.controller?.abort(); this.reset(); }
  });
}
