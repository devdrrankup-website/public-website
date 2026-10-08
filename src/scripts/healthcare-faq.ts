import {defineScrollSection} from './scroll-section';

// Content is static HTML. Only replace the question label with a button once
// interaction can work; without JS all five answers remain visible and readable.
if(!customElements.get('healthcare-faq')) {
  customElements.define('healthcare-faq',class extends HTMLElement {
    private controller?: AbortController;
    connectedCallback() {
      this.controller?.abort();
      this.controller=new AbortController();
      this.querySelectorAll<HTMLElement>('.faq-item').forEach((item,index)=>{
        const heading=item.querySelector<HTMLHeadingElement>('h3')!;
        const panel=item.querySelector<HTMLElement>('.faq-answer')!;
        if(heading.querySelector('button'))return;
        const button=document.createElement('button');
        button.type='button';
        button.className='faq-trigger';
        button.setAttribute('aria-controls',panel.id);
        button.setAttribute('aria-expanded',String(index===0));
        button.append(...Array.from(heading.childNodes));
        heading.append(button);
        panel.hidden=index!==0;
      });
      this.setAttribute('data-enhanced','');
      this.addEventListener('click',event=>{
        const button=(event.target as Element).closest<HTMLButtonElement>('.faq-trigger');
        if(!button||!this.contains(button))return;
        const panel=button.closest('.faq-item')!.querySelector<HTMLElement>('.faq-answer')!;
        const expanded=button.getAttribute('aria-expanded')==='true';
        panel.hidden=expanded;
        button.setAttribute('aria-expanded',String(!expanded));
      },{signal:this.controller.signal});
    }
    disconnectedCallback() {this.controller?.abort();}
  });
}

defineScrollSection('faq-motion',(element,gsap)=>{
  element.querySelectorAll<HTMLElement>('.faq-item').forEach(item=>{
    gsap.fromTo(item,{y:12},{y:0,duration:.6,ease:'power2.out',scrollTrigger:{trigger:item,start:'top 94%',once:true}});
  });
});
