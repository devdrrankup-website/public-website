import { defineScrollSection } from './scroll-section';

defineScrollSection('healthcare-marketing-consultation-motion', (element, gsap) => {
  element.querySelectorAll('.consultation-introduction,.consultation-contact,healthcare-marketing-enquiry').forEach((target) => {
    gsap.fromTo(target, { y: 12 }, {
      y: 0,
      duration: .7,
      ease: 'power2.out',
      scrollTrigger: { trigger: target, start: 'top 92%', once: true },
    });
  });
});

// This destination-owned form is a preview. It never sends, stores or logs data.
if (!customElements.get('healthcare-marketing-enquiry')) {
  customElements.define('healthcare-marketing-enquiry', class extends HTMLElement {
    private controller?: AbortController;

    connectedCallback() {
      this.controller?.abort();
      this.controller = new AbortController();
      const form = this.querySelector<HTMLFormElement>('form');
      const button = this.querySelector<HTMLButtonElement>('button[type="submit"]');
      const status = this.querySelector<HTMLElement>('[role="status"]');
      if (!form || !button || !status) return;
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        status.textContent = 'This form is a preview. Your enquiry has not been sent.';
      }, { signal: this.controller.signal });
      form.addEventListener('input', () => { status.textContent = ''; }, { signal: this.controller.signal });
      button.disabled = false;
    }

    disconnectedCallback() {
      this.controller?.abort();
      const button = this.querySelector<HTMLButtonElement>('button[type="submit"]');
      if (button) button.disabled = true;
    }
  });
}
