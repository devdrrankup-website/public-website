// Registered by the homepage entry; all effects remain scoped to this element.
class HospitalVisual extends HTMLElement {
  private controller?: AbortController;
  private observer?: IntersectionObserver;
  private motion?: MediaQueryList;
  private fade?: ReturnType<typeof import('gsap')['gsap']['quickTo']>;
  private ready?: Promise<void>;
  private visible = true;
  private lastPointerUpdate = 0;
  private lightAmount = 0;
  private disposed = false;

  connectedCallback() {
    this.disposed = false;
    this.controller = new AbortController();
    const options = { signal: this.controller.signal };
    const stage = this.querySelector<HTMLElement>('.hospital-stage')!;
    const active = this.querySelector<HTMLImageElement>('.hospital-active')!;
    const base = this.querySelector<HTMLImageElement>('.hospital-base')!;
    this.motion = matchMedia('(prefers-reduced-motion: reduce)');

    const prepare = () => this.ready ??= (async () => {
      active.srcset = active.dataset.srcset!;
      active.src = active.dataset.src!;
      // Fetch/decode the optional state and load its engine concurrently.
      // Both remain deferred until interaction; reduced motion needs no GSAP.
      const animation = this.motion?.matches ? undefined : import('gsap');
      const [, engine] = await Promise.all([active.decode(), animation]);
      if (this.disposed || this.motion?.matches || !engine) return;
      this.fade = engine.gsap.quickTo(active, 'opacity', { duration: .3, ease: 'power2.out' });
    })();
    const light = async (amount: number) => {
      this.lightAmount = amount;
      // Reset immediately even if the first image/import is still loading.
      if (amount === 0) {
        if (this.fade && !this.motion?.matches) this.fade(0);
        else active.style.opacity = '0';
        return;
      }
      try {
        await prepare();
        if (this.disposed || !this.visible) return;
        if (this.motion?.matches || !this.fade) active.style.opacity = String(this.lightAmount);
        else this.fade(this.lightAmount);
      } catch {
        // The neutral artwork remains readable if the optional lighting asset fails.
        this.ready = undefined;
        this.lightAmount = 0;
        active.style.opacity = '0';
      }
    };
    // Test the actual contained portrait, excluding its letterboxed margins.
    const artworkAt = (x: number, y: number) => {
      const rect = base.getBoundingClientRect();
      const scale = Math.min(rect.width / 1122, rect.height / 1402);
      const width = 1122 * scale;
      const height = 1402 * scale;
      const position = getComputedStyle(base).objectPosition.split(' ').map(parseFloat);
      const left = rect.left + (rect.width - width) * position[0] / 100;
      const top = rect.top + (rect.height - height) * position[1] / 100;
      return x >= left && x <= left + width && y >= top && y <= top + height
        ? (x - left) / width : undefined;
    };
    const reset = () => { void light(0); };
    let mousePosition: { x: number; y: number } | undefined;
    let pointerFocus = false;
    const update = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') mousePosition = { x: event.clientX, y: event.clientY };
      if (!this.visible) { reset(); return; }
      const target = event.target as Element;
      if (target.closest('[data-hospital-light]')) {
        if (this.lightAmount !== 1) void light(1);
        return;
      }
      if (target.closest('a, button, summary')) { reset(); return; }
      const ratio = artworkAt(event.clientX, event.clientY);
      if (ratio === undefined) { reset(); return; }
      const now = performance.now();
      // Always accept re-entry; throttling must not swallow the first light-on.
      if (this.lightAmount > 0 && now - this.lastPointerUpdate < 50) return;
      this.lastPointerUpdate = now;
      void light(this.motion?.matches ? 1 : .75 + ratio * .25);
    };
    stage.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') update(event);
    }, options);
    stage.addEventListener('pointerdown', event => {
      pointerFocus = true;
      update(event);
    }, options);
    stage.addEventListener('pointermove', update, options);
    stage.addEventListener('pointerleave', reset, options);
    stage.addEventListener('focusin', event => {
      // Touch can focus a link after pointerup; it must not pin the light on.
      if (!pointerFocus && (event.target as Element).closest('[data-hospital-light]')) void light(1);
    }, options);
    stage.addEventListener('focusout', event => {
      if ((event.target as Element).closest('[data-hospital-light]')) reset();
    }, options);
    document.addEventListener('pointerup', event => {
      if (event.pointerType !== 'mouse') reset();
    }, options);
    document.addEventListener('keydown', () => { pointerFocus = false; }, options);
    document.addEventListener('pointercancel', reset, options);
    window.addEventListener('blur', reset, options);
    document.addEventListener('pointerout', event => {
      if (!event.relatedTarget) reset();
    }, options);
    document.addEventListener('visibilitychange', () => { if (document.hidden) reset(); }, options);
    window.addEventListener('scroll', () => {
      // Keyboard focus can scroll its CTA into view. A mouse position retained
      // from the navbar must not cancel that focused control's lighting.
      if (!pointerFocus && document.activeElement?.closest('[data-hospital-light]')) return;
      if (!mousePosition || this.lightAmount === 0) return;
      const target = document.elementFromPoint(mousePosition.x, mousePosition.y);
      if (!target || !this.contains(target)) { reset(); return; }
      if (target.closest('[data-hospital-light]')) return;
      if (artworkAt(mousePosition.x, mousePosition.y) === undefined || target.closest('a, button, summary')) reset();
    }, { ...options, passive: true });
    this.motion.addEventListener('change', () => {
      this.fade?.tween.kill();
      this.fade = undefined;
      this.ready = undefined;
      this.lightAmount = 0;
      active.style.opacity = '0';
    }, options);
    this.observer = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
      if (!this.visible) {
        this.lightAmount = 0;
        this.fade?.tween.pause();
        active.style.opacity = '0';
      }
    });
    this.observer.observe(this);
  }
  disconnectedCallback() {
    this.disposed = true;
    this.controller?.abort();
    this.observer?.disconnect();
    this.fade?.tween.kill();
    this.ready = undefined;
  }
}
if (!customElements.get('hospital-visual')) customElements.define('hospital-visual', HospitalVisual);
export {};
