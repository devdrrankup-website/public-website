import {defineScrollSection} from './scroll-section';

defineScrollSection('connected-system',(element,gsap,ScrollTrigger)=>{
  const scene=element.querySelector<HTMLElement>('.system-hub-scene')!;
  const hub=element.querySelector<HTMLElement>('.system-hub')!;
  const connectors=element.querySelector<SVGElement>('.system-connectors')!;
  const cards=element.querySelector<HTMLElement>('.system-cards')!;
  const tracks=[...element.querySelectorAll<HTMLElement>('.system-tape')];
  let loops:gsap.core.Tween[]=[];
  let visible=false,lastWidth=0,lastViewport=0;
  const sync=()=>loops.forEach(loop=>loop.paused(!visible||document.hidden));
  const resize=()=>{
    const width=tracks[0].firstElementChild!.getBoundingClientRect().width;
    if(Math.abs(width-lastWidth)<1&&lastViewport===innerWidth)return;
    const progress=loops[0]?.progress()||0;
    loops.forEach(loop=>loop.kill());
    lastWidth=width;lastViewport=innerWidth;
    // Measured reference motion: viewport width / 240 px per second,
    // opposite directions, linear and seamless. Only two tracks animate.
    const duration=width/(innerWidth/240);
    loops=tracks.map((track,index)=>gsap.fromTo(track,{x:index===0?-width:0},{x:index===0?0:-width,duration,repeat:-1,ease:'none',paused:true}).progress(progress));
    sync();
  };
  resize();
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();});
  observer.observe(scene);
  const dimensions=new ResizeObserver(resize);
  dimensions.observe(scene);
  document.addEventListener('visibilitychange',sync);
  // The live reference first resolves a blurred, -35 degree hub, then reveals
  // its connector and cards with a 40px upward entry. Content stays static HTML.
  const entrance=gsap.timeline({scrollTrigger:{trigger:scene,start:'top 90%',once:true}})
    .fromTo(hub,{autoAlpha:0,rotation:-35,filter:'blur(12px)'},{autoAlpha:1,rotation:0,filter:'blur(0px)',duration:.8,ease:'power2.out'},0)
    .fromTo(connectors,{autoAlpha:0,y:40},{autoAlpha:1,y:0,duration:.6,ease:'power2.out'},.4)
    .fromTo(cards,{autoAlpha:0,y:40},{autoAlpha:1,y:0,duration:.8,ease:'power2.out'},.6);
  return ()=>{
    observer.disconnect();dimensions.disconnect();
    document.removeEventListener('visibilitychange',sync);
    loops.forEach(loop=>loop.kill());
    entrance.scrollTrigger?.kill();entrance.kill();
    gsap.set(tracks,{clearProps:'transform'});
  };
});
