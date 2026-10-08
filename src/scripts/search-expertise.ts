import {defineScrollSection} from './scroll-section';

defineScrollSection('search-expertise', (element, gsap) => {
  const photo = element.querySelector('.expertise-photo');
  // A small transform-only portrait entrance; content stays readable and
  // native scrolling, reduced motion and no-JS fallbacks remain unchanged.
  gsap.fromTo(element.querySelector('.expertise-portrait-frame'), {
    y: 18, rotation: -1.5, scale: .98,
  }, {
    y: 0, rotation: 0, scale: 1, duration: .85, ease: 'power2.out',
    scrollTrigger: {trigger: photo, start: 'top 88%', once: true},
  });
});
