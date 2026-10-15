// Contact page only. No form data is sent, stored or logged.
if (!customElements.get('contact-preview-enquiry')) {
  customElements.define('contact-preview-enquiry', class extends HTMLElement {
    private controller?: AbortController;

    connectedCallback() {
      this.controller?.abort();
      this.controller = new AbortController();
      const form = this.querySelector<HTMLFormElement>('form');
      const button = this.querySelector<HTMLButtonElement>('button[type="submit"]');
      const status = this.querySelector<HTMLElement>('[role="status"]');
      if (!form || !button || !status) return;
      form.addEventListener('submit', event => {
        event.preventDefault();
        status.textContent = 'This form is a preview. Your enquiry has not been sent. Please email or call us instead.';
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
