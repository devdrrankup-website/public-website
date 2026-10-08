import {defineScrollSection} from './scroll-section';

defineScrollSection('why-rankup',(element,gsap)=>{
  const media=gsap.matchMedia();
  media.add({compact:'(max-width: 1099px)',desktop:'(min-width: 1100px)'},context=>{
    const targets=context.conditions?.compact
      ? element.querySelectorAll<HTMLElement>('.why-comparison-scroll')
      : element.querySelectorAll<HTMLElement>('[data-why-row]');
    targets.forEach(target=>{
      gsap.fromTo(target,{y:16},{y:0,duration:.65,ease:'power2.out',scrollTrigger:{trigger:target,start:'top 92%',once:true}});
    });
  });
  return ()=>media.revert();
});
