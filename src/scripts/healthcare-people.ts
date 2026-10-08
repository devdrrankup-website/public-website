import {defineScrollSection} from './scroll-section';

defineScrollSection('healthcare-people', (element, gsap) => {
  element.querySelectorAll<HTMLElement>('.people-photo').forEach(photo => {
    gsap.fromTo(photo.querySelector('.people-portrait-frame'), {
      y: 18, rotation: -1.5, scale: .98,
    }, {
      y: 0, rotation: 0, scale: 1, duration: .85, ease: 'power2.out',
      scrollTrigger: {trigger: photo, start: 'top 88%', once: true},
    });
  });
});
