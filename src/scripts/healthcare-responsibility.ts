import {defineScrollSection} from './scroll-section';

defineScrollSection('responsible-healthcare', (element, gsap) => {
  // Each static image gently opens into its full frame. No pinning, text
  // clipping, scroll interception or continuous animation is needed.
  element.querySelectorAll<HTMLElement>('.responsibility-photo').forEach(photo => {
    const timeline = gsap.timeline({scrollTrigger: {
      trigger: photo, start: 'top 92%', end: 'clamp(top 40%)', scrub: .25,
    }});
    timeline.fromTo(photo.querySelector('.responsibility-image-frame'), {
      clipPath: 'inset(2% 3% round 22% 6% 22% 6%)',
    }, {
      clipPath: 'inset(0% 0% round 6% 6% 6% 6%)', duration: 1, ease: 'none',
    }, 0);
    timeline.fromTo(photo.querySelector('img'), {scale: 1.035}, {
      scale: 1, duration: 1, ease: 'none',
    }, 0);
  });
});
