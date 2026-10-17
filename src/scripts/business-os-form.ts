// The public website stays static. Only enquiry submissions go to Business OS.
const formSelector = 'form.consultation-form, form.seo-consultation-form, form.company-contact-form';
const endpoint = 'https://businessos.drrankup.com/api/v1/public/forms/website-enquiry/submissions';
const pending = new WeakMap<HTMLFormElement, { body: string; key: string }>();

function organizationType(value: string): string {
  const label = value.trim().toLowerCase();
  if (label === 'doctor' || label === 'clinic' || label === 'hospital') return label;
  return label ? 'other-healthcare' : '';
}

document.addEventListener('submit', async event => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement) || !form.matches(formSelector)) return;

  // Capture before the old preview listeners on each page can handle the event.
  event.preventDefault();
  event.stopPropagation();

  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const status = form.querySelector<HTMLElement>('[role="status"]');
  if (!button || !status || button.disabled) return;

  if (location.origin !== 'https://www.drrankup.com') {
    status.textContent = 'Enquiries can be sent from the live Dr RankUP website.';
    return;
  }

  const fields = new FormData(form);
  const details = String(fields.get('details') ?? '').trim();
  if (details.length < 10 || details.length > 3000) {
    status.textContent = 'Please enter 10–3,000 characters in Project Details.';
    return;
  }

  const body = JSON.stringify({
    name: String(fields.get('name') ?? '').trim(),
    phone: String(fields.get('phone') ?? '').trim(),
    email: String(fields.get('email') ?? '').trim(),
    organizationType: organizationType(String(fields.get('organization') ?? '')),
    message: details,
    sourceUrl: location.origin + location.pathname,
    website: ''
  });
  const previous = pending.get(form);
  const key = previous?.body === body ? previous.key : crypto.randomUUID();
  pending.set(form, {body, key});

  button.disabled = true;
  form.setAttribute('aria-busy', 'true');
  status.textContent = 'Sending your enquiry…';
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      cache: 'no-store',
      referrerPolicy: 'no-referrer',
      headers: {'Content-Type': 'application/json', 'Idempotency-Key': key},
      body,
      signal: controller.signal
    });
    if (response.status === 201) {
      pending.delete(form);
      form.reset();
      status.textContent = 'Your enquiry has been sent. We will be in touch.';
    } else if (response.status === 422) {
      status.textContent = 'Please check your phone number and project details, then try again.';
    } else if (response.status === 429) {
      status.textContent = 'Too many attempts. Please wait a few minutes and try again.';
    } else {
      status.textContent = 'We could not confirm your enquiry. Please try again.';
    }
  } catch {
    // Retain the idempotency key: retrying after an uncertain network result is safe.
    status.textContent = 'We could not confirm your enquiry. Please try again.';
  } finally {
    window.clearTimeout(timeout);
    form.removeAttribute('aria-busy');
    button.disabled = false;
  }
}, true);
