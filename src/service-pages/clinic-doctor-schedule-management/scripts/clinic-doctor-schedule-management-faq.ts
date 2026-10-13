// Owned progressive FAQ: source headings/answers do not depend on JavaScript.
class ClinicDoctorScheduleManagementFaq extends HTMLElement {
  private cleanup?: AbortController;
  private observer?: IntersectionObserver;
  private motion?: MediaQueryList;
  private buttons: HTMLButtonElement[] = [];
  private panels = new Map<HTMLElement,{animation:Animation,open:boolean}>();
  private entrances = new Set<Animation>();
  private entered = new WeakSet<Element>();
  connectedCallback() {
    this.cleanup=new AbortController();this.motion=matchMedia('(prefers-reduced-motion:reduce)');
    const options={signal:this.cleanup.signal};
    this.buttons=[];
    this.querySelectorAll<HTMLElement>('.clinic-doctor-schedule-management-faq-item').forEach((item,index)=> {
      const heading=item.querySelector<HTMLElement>('h3')!,panel=item.querySelector<HTMLElement>('.clinic-doctor-schedule-management-faq-answer')!;
      const button=document.createElement('button');button.type='button';button.className='clinic-doctor-schedule-management-faq-trigger';
      button.setAttribute('aria-controls',panel.id);button.setAttribute('aria-expanded',String(index===0));
      button.append(...heading.childNodes);heading.append(button);this.buttons.push(button);panel.hidden=index!==0;
      button.addEventListener('keydown',event=> {
        let target:number|undefined;
        if(event.key==='ArrowDown')target=(index+1)%this.buttons.length;
        if(event.key==='ArrowUp')target=(index+this.buttons.length-1)%this.buttons.length;
        if(event.key==='Home')target=0;
        if(event.key==='End')target=this.buttons.length-1;
        if(target!==undefined){event.preventDefault();this.buttons[target].focus();}
      },options);
      button.addEventListener('click',()=> {
        const open=button.getAttribute('aria-expanded')!=='true';
        if(open)this.buttons.forEach(other=> {
          if(other!==button&&other.getAttribute('aria-expanded')==='true') {
            other.setAttribute('aria-expanded','false');this.setPanel(this.panelFor(other),false);
          }
        });
        button.setAttribute('aria-expanded',String(open));this.setPanel(panel,open);
      },options);
    });
    this.setAttribute('data-enhanced','');
    this.motion.addEventListener('change',()=>{this.settlePanels();this.configureEntrance();},options);
    window.addEventListener('resize',()=>this.settlePanels(),options);
    this.configureEntrance();
  }
  private panelFor(button:HTMLButtonElement) {return button.closest('.clinic-doctor-schedule-management-faq-item')!.querySelector<HTMLElement>('.clinic-doctor-schedule-management-faq-answer')!;}
  private setPanel(panel:HTMLElement,open:boolean) {
    const active=this.panels.get(panel);
    if(active){try{active.animation.commitStyles();}catch{}active.animation.cancel();this.panels.delete(panel);}
    if(this.motion?.matches||!('animate'in panel)){panel.hidden=!open;this.clearPanelStyle(panel);return;}
    const hidden=panel.hidden;if(open)panel.hidden=false;
    // Only event-time measurement for the two affected panels; no scroll reads.
    const start=hidden?0:panel.getBoundingClientRect().height;
    panel.style.removeProperty('height');
    const end=open?panel.scrollHeight:0;
    panel.style.overflow='hidden';
    const animation=panel.animate([{height:`${start}px`},{height:`${end}px`}],{duration:360,easing:'cubic-bezier(.2,.65,.3,1)'});
    this.panels.set(panel,{animation,open});
    animation.finished.then(()=> {
      if(this.panels.get(panel)?.animation!==animation)return;
      panel.hidden=!open;this.clearPanelStyle(panel);this.panels.delete(panel);
    },()=>{});
  }
  private clearPanelStyle(panel:HTMLElement){panel.style.removeProperty('height');panel.style.removeProperty('overflow');}
  private settlePanels() {
    const active=[...this.panels.entries()];this.panels.clear();
    active.forEach(([panel,state])=>{state.animation.cancel();panel.hidden=!state.open;this.clearPanelStyle(panel);});
  }
  private configureEntrance() {
    this.stopEntrance();if(this.motion?.matches||!('IntersectionObserver'in window))return;
    this.observer=new IntersectionObserver(entries=> {
      for(const entry of entries) {
        if(!entry.isIntersecting||this.entered.has(entry.target)||this.motion?.matches)continue;
        this.entered.add(entry.target);this.observer?.unobserve(entry.target);
        const animation=entry.target.animate([{transform:'translateY(12px)'},{transform:'translateY(0)'}],{duration:600,easing:'cubic-bezier(.16,1,.3,1)'});
        this.entrances.add(animation);animation.finished.then(()=>this.entrances.delete(animation),()=>this.entrances.delete(animation));
      }
    },{threshold:.16});
    this.querySelectorAll('[data-faq-entry]').forEach(target=>{if(!this.entered.has(target))this.observer!.observe(target);});
  }
  private stopEntrance(){this.observer?.disconnect();this.entrances.forEach(a=>a.cancel());this.entrances.clear();}
  disconnectedCallback() {
    this.cleanup?.abort();this.stopEntrance();this.settlePanels();
    this.buttons.forEach(button=>{const panel=this.panelFor(button);panel.hidden=false;this.clearPanelStyle(panel);const heading=button.parentElement!;heading.append(...button.childNodes);button.remove();});
    this.buttons=[];this.removeAttribute('data-enhanced');
  }
}
if(!customElements.get('clinic-doctor-schedule-management-faq'))customElements.define('clinic-doctor-schedule-management-faq',ClinicDoctorScheduleManagementFaq);
