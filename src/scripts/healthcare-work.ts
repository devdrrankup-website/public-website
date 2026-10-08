import {defineScrollSection} from './scroll-section';

defineScrollSection('healthcare-work',(element,gsap)=>{
  const timelines: ReturnType<typeof gsap.timeline>[] = [];
  // Viewport intersection respects the native horizontal scroll clip, so a
  // swiped-in phone card receives its own entrance instead of playing offscreen.
  const observer = new IntersectionObserver(entries=>{
    entries.filter(entry=>entry.isIntersecting).forEach((entry,index)=>{
      const paper=entry.target as HTMLElement;
      const ribbon=paper.querySelector<HTMLElement>('.work-ribbon');
      const image=paper.querySelector<HTMLImageElement>('.work-image img');
      const timeline=gsap.timeline({delay:index*.07,defaults:{ease:'power2.out'}});
      // Keep paper columns on a common baseline; only ribbon and image settle.
      if(ribbon)timeline.fromTo(ribbon,{x:-10,rotation:-.65},{x:0,rotation:0,duration:.9},.08);
      if(image)timeline.fromTo(image,{scale:1.045},{scale:1,duration:1.1},.05);
      timelines.push(timeline);
      observer.unobserve(paper);
    });
  },{threshold:.3});
  element.querySelectorAll<HTMLElement>('.work-paper').forEach(paper=>observer.observe(paper));
  return ()=>{
    observer.disconnect();
    // Observer callbacks run after the parent GSAP context; revert explicitly.
    timelines.forEach(timeline=>timeline.revert());
  };
});
