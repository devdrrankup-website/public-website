import {defineScrollSection} from './scroll-section';

defineScrollSection('why-rankup',(element,gsap)=>{
  element.querySelectorAll<HTMLElement>('[data-why-row]').forEach(row=>{
    gsap.fromTo(row,{y:16},{y:0,duration:.65,ease:'power2.out',scrollTrigger:{trigger:row,start:'top 92%',once:true}});
  });
});
