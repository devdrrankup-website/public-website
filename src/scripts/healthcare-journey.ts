import { defineScrollSection } from './scroll-section';

defineScrollSection('healthcare-journey', (element, gsap) => {
  // A single image changes its window from an oval to a rounded rectangle.
  // Stable outer dimensions preserve layout; no pinning or scroll interception.
  const photo = element.querySelector('.journey-photo')!;
  const morph = gsap.timeline({ scrollTrigger: {
    trigger: photo, start: 'top 90%', end: 'clamp(top 30%)', scrub: 0.3,
  } });
  morph.fromTo(photo.querySelector('.journey-image-frame'), {
    clipPath: 'inset(6% 10% round 42% 42% 42% 42%)',
  }, {
    clipPath: 'inset(0% 0% round 5% 5% 5% 5%)', duration: 1, ease: 'none',
  }, 0);
  morph.fromTo(photo.querySelector('img'), { scale: 1.045 }, {
    scale: 1, duration: 1, ease: 'none',
  }, 0);
});
