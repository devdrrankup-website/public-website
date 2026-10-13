// Destination-owned bounded motion, without scroll measurement or hidden content.
class ClinicContentMarketingExample extends HTMLElement {
  private cleanup?: AbortController;
  private observer?: IntersectionObserver;
  private motion?: MediaQueryList;
  private entered = new WeakSet<Element>();
  private animations = new Set<Animation>();
  connectedCallback() {
    this.cleanup=new AbortController();this.motion=matchMedia('(prefers-reduced-motion:reduce)');
    this.motion.addEventListener('change',()=>this.configure(),{signal:this.cleanup.signal});this.configure();
  }
  private configure() {
    this.stop();if(this.motion?.matches || !('IntersectionObserver' in window))return;
    this.observer=new IntersectionObserver(entries=> {
      for(const entry of entries) {
        if(!entry.isIntersecting || this.entered.has(entry.target) || this.motion?.matches)continue;
        this.entered.add(entry.target);this.observer?.unobserve(entry.target);
        this.play(entry.target,[{transform:'translateY(12px)'},{transform:'translateY(0)'}],entry.target.hasAttribute('data-example-photo')?650:600);
        const rule=entry.target.querySelector('[data-example-rule]');
        if(rule)this.play(rule,[{transform:'scaleX(.1)'},{transform:'scaleX(1)'}],650);
      }
    },{threshold:.16});
    this.querySelectorAll('[data-example-entry]').forEach(target=> {if(!this.entered.has(target))this.observer!.observe(target);});
  }
  private play(target:Element,frames:Keyframe[],duration:number) {
    const animation=target.animate(frames,{duration,easing:'cubic-bezier(.16,1,.3,1)',fill:'none'});this.animations.add(animation);
    animation.finished.then(()=>this.animations.delete(animation),()=>this.animations.delete(animation));
  }
  private stop(){this.observer?.disconnect();this.animations.forEach(animation=>animation.cancel());this.animations.clear();}
  disconnectedCallback(){this.stop();this.cleanup?.abort();}
}
if(!customElements.get('clinic-content-marketing-example'))customElements.define('clinic-content-marketing-example',ClinicContentMarketingExample);
