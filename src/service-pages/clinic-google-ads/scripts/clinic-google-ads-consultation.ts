// Destination-owned enhancement. The form remains a local preview, without an endpoint.
class ClinicGoogleAdsConsultation extends HTMLElement {
  private controller?:AbortController;
  private motion?:MediaQueryList;
  private observer?:IntersectionObserver;
  private entered=new WeakSet<Element>();
  private animations=new Set<Animation>();
  connectedCallback(){
    this.controller?.abort();this.controller=new AbortController();
    this.motion=matchMedia('(prefers-reduced-motion: reduce)');
    this.motion.addEventListener('change',()=>{this.stop();this.observe();},{signal:this.controller.signal});this.observe();
  }
  private observe(){
    if(this.motion?.matches||!this.isConnected)return;
    this.observer=new IntersectionObserver(entries=>{for(const entry of entries){
      if(!entry.isIntersecting||this.entered.has(entry.target))continue;
      this.entered.add(entry.target);this.observer?.unobserve(entry.target);
      const animation=entry.target.animate([{transform:'translateY(12px)'},{transform:'translateY(0)'}],{duration:700,easing:'cubic-bezier(.215,.61,.355,1)',fill:'none'});
      this.animations.add(animation);animation.finished.then(()=>this.animations.delete(animation),()=>this.animations.delete(animation));
    }},{rootMargin:'0px 0px -8% 0px'});
    this.querySelectorAll('.seo-consultation-introduction,.seo-consultation-contact,clinic-google-ads-enquiry').forEach(target=>{if(!this.entered.has(target))this.observer!.observe(target);});
  }
  private stop(){this.observer?.disconnect();this.animations.forEach(animation=>animation.cancel());this.animations.clear();}
  disconnectedCallback(){this.controller?.abort();this.stop();}
}
class ClinicGoogleAdsEnquiry extends HTMLElement {
  private controller?:AbortController;
  connectedCallback(){
    this.controller?.abort();this.controller=new AbortController();
    const form=this.querySelector<HTMLFormElement>('form'),button=this.querySelector<HTMLButtonElement>('button[type="submit"]'),status=this.querySelector<HTMLElement>('[role="status"]');
    if(!form||!button||!status)return;
    form.addEventListener('submit',event=>{event.preventDefault();status.textContent='This form is a preview. Your enquiry has not been sent.';},{signal:this.controller.signal});
    form.addEventListener('input',()=>{status.textContent='';},{signal:this.controller.signal});button.disabled=false;
  }
  disconnectedCallback(){this.controller?.abort();const button=this.querySelector<HTMLButtonElement>('button[type="submit"]');if(button)button.disabled=true;}
}
if(!customElements.get('clinic-google-ads-consultation'))customElements.define('clinic-google-ads-consultation',ClinicGoogleAdsConsultation);
if(!customElements.get('clinic-google-ads-enquiry'))customElements.define('clinic-google-ads-enquiry',ClinicGoogleAdsEnquiry);
