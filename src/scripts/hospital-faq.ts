class HospitalFaq extends HTMLElement {
  private controller?: AbortController;
  private animations = new Map<HTMLElement, Animation>();
  private motion?: MediaQueryList;

  connectedCallback() {
    this.controller?.abort();
    this.controller = new AbortController();
    this.motion = matchMedia('(prefers-reduced-motion: reduce)');

    this.querySelectorAll<HTMLElement>('.hospital-faq-item').forEach((item, index) => {
      const heading = item.querySelector<HTMLHeadingElement>('.hospital-faq-question');
      const panel = item.querySelector<HTMLElement>('.hospital-faq-answer');
      if (!heading || !panel || heading.querySelector('button')) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'hospital-faq-trigger';
      button.setAttribute('aria-controls', panel.id);
      button.setAttribute('aria-expanded', String(index === 0));
      button.append(...Array.from(heading.childNodes));
      heading.append(button);
      panel.hidden = index !== 0;
    });

    this.setAttribute('data-enhanced', '');
    this.addEventListener('click', event => {
      const button = (event.target as Element).closest<HTMLButtonElement>('.hospital-faq-trigger');
      if (!button || !this.contains(button)) return;
      const item = button.closest<HTMLElement>('.hospital-faq-item');
      const panel = item?.querySelector<HTMLElement>('.hospital-faq-answer');
      if (!item || !panel) return;
      const opening = button.getAttribute('aria-expanded') !== 'true';

      if (opening) {
        this.querySelectorAll<HTMLButtonElement>('.hospital-faq-trigger[aria-expanded="true"]').forEach(openButton => {
          if (openButton === button) return;
          const openPanel = openButton.closest('.hospital-faq-item')?.querySelector<HTMLElement>('.hospital-faq-answer');
          openButton.setAttribute('aria-expanded', 'false');
          if (openPanel) this.setPanel(openPanel, false);
        });
      }

      button.setAttribute('aria-expanded', String(opening));
      this.setPanel(panel, opening);
    }, { signal: this.controller.signal });
  }

  private setPanel(panel: HTMLElement, open: boolean) {
    const active = this.animations.get(panel);
    if (active) {
      try { active.commitStyles(); } catch {}
      active.cancel();
      this.animations.delete(panel);
    }

    if (this.motion?.matches || !('animate' in panel)) {
      panel.hidden = !open;
      panel.style.removeProperty('height');
      panel.style.removeProperty('overflow');
      return;
    }

    const wasHidden = panel.hidden;
    if (open) panel.hidden = false;
    const start = open && wasHidden ? 0 : panel.getBoundingClientRect().height;
    const end = open ? panel.scrollHeight : 0;
    panel.style.overflow = 'hidden';
    const animation = panel.animate(
      [{ height: `${start}px` }, { height: `${end}px` }],
      { duration: 360, easing: 'cubic-bezier(.2,.65,.3,1)' },
    );
    this.animations.set(panel, animation);
    animation.finished.then(() => {
      if (this.animations.get(panel) !== animation) return;
      if (!open) panel.hidden = true;
      panel.style.removeProperty('height');
      panel.style.removeProperty('overflow');
      this.animations.delete(panel);
    }, () => {
      if (this.animations.get(panel) === animation) this.animations.delete(panel);
    });
  }

  disconnectedCallback() {
    this.controller?.abort();
    this.animations.forEach(animation => animation.cancel());
    this.animations.clear();
  }
}

if (!customElements.get('hospital-faq')) customElements.define('hospital-faq', HospitalFaq);
