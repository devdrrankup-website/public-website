// Destination-owned native enhancement. Scroll renders use cached positions only.
class DiagnosticManagementRelated extends HTMLElement {
  private cleanup?: AbortController;
  private activation?: IntersectionObserver;
  private visibility?: IntersectionObserver;
  private entrance?: IntersectionObserver;
  private resize?: ResizeObserver;
  private buttons: HTMLButtonElement[] = [];
  private rows: HTMLElement[] = [];
  private photos = new Map<HTMLElement,HTMLElement>();
  private homes = new Map<HTMLElement,HTMLElement>();
  private dock?: HTMLElement;
  private stage?: HTMLElement;
  private displayed?: HTMLElement;
  private current?: HTMLElement;
  private boundaries: number[] = [];
  private pinAt = Infinity;
  private frame = 0;
  private measureFrame = 0;
  private version = 0;
  private initialized = false;
  private inView = false;
  private entered = new WeakSet<Element>();
  private animations = new Set<Animation>();
  private compact = matchMedia('(max-width:1099px)');
  private wide = matchMedia('(min-width:1100px) and (hover:hover) and (pointer:fine)');
  private motion = matchMedia('(prefers-reduced-motion:reduce)');
  connectedCallback() {
    this.cleanup = new AbortController();
    this.activation = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { this.activation?.disconnect(); this.initialize(); }
    }, {rootMargin:'700px 0px'});
    this.activation.observe(this);
  }
  private initialize() {
    if (this.initialized || !this.isConnected) return;
    this.initialized = true;
    const options = {signal:this.cleanup!.signal};
    this.buttons = [...this.querySelectorAll<HTMLButtonElement>('[data-related-select]')];
    this.rows = [...this.querySelectorAll<HTMLElement>('.diagnostic-management-related-row')];
    this.dock = this.querySelector<HTMLElement>('.diagnostic-management-related-dock')!;
    this.stage = this.querySelector<HTMLElement>('.diagnostic-management-related-stage')!;
    this.rows.forEach(row => { const photo = row.querySelector<HTMLElement>('figure')!; this.photos.set(row,photo); this.homes.set(photo,photo.parentElement!); });
    this.buttons.forEach((button,index) => {
      button.addEventListener('click', () => this.select(index,true), options);
      button.addEventListener('keydown',event => {
        const direction = this.compact.matches ? ['ArrowLeft','ArrowRight'] : ['ArrowUp','ArrowDown'];
        let target: number | undefined;
        if (event.key === direction[0]) target = (index+this.buttons.length-1)%this.buttons.length;
        if (event.key === direction[1]) target = (index+1)%this.buttons.length;
        if (event.key === 'Home') target = 0;
        if (event.key === 'End') target = this.buttons.length-1;
        if (target !== undefined) { event.preventDefault(); this.buttons[target].focus(); }
      },options);
    });
    this.addEventListener('pointerover',event => {
      if (!this.wide.matches) return;
      const row = (event.target as Element).closest<HTMLElement>('.diagnostic-management-related-row');
      if (row) { this.setCurrent(row); this.showPhoto(row,row.querySelector<HTMLElement>('.diagnostic-management-related-reveal')!); }
    },options);
    this.addEventListener('pointerleave',() => { if(this.wide.matches) { this.version++; this.restore(); } },options);
    const mode = () => { this.version++; this.stop(); this.restore(); this.queueMeasure(); if(this.current && !this.wide.matches) this.showPhoto(this.current,this.stage!); };
    this.compact.addEventListener('change',mode,options);
    this.wide.addEventListener('change',mode,options);
    this.motion.addEventListener('change',()=>this.stop(),options);
    document.addEventListener('visibilitychange',()=> { if(document.hidden) {this.version++;this.stop();} else mode(); },options);
    window.addEventListener('scroll',()=> {
      if (!this.inView || !this.compact.matches || document.hidden || this.frame) return;
      this.frame=requestAnimationFrame(()=>{this.frame=0;this.render();});
    },{...options,passive:true});
    window.addEventListener('resize',()=>this.queueMeasure(),options);
    this.classList.add('diagnostic-management-related-ready');
    this.querySelector<HTMLElement>('.diagnostic-management-related-selectors')!.hidden=false;
    this.stage.hidden=false; this.setCurrent(this.rows[0]);
    this.visibility = new IntersectionObserver(entries=> { this.inView=entries[0].isIntersecting; if(this.inView) { this.queueMeasure();if(this.current&&!this.wide.matches)this.showPhoto(this.current,this.stage!); } },{rootMargin:'200px 0px'});
    this.visibility.observe(this);
    this.entrance = new IntersectionObserver(entries=>entries.forEach(entry=> {
      if(!entry.isIntersecting || this.entered.has(entry.target)) return;
      this.entered.add(entry.target);this.entrance?.unobserve(entry.target);
      if(!this.motion.matches)this.track(entry.target.animate([{transform:'translateY(12px)'},{transform:'translateY(0)'}],{duration:600,easing:'cubic-bezier(.16,1,.3,1)'}));
    }),{threshold:.12});
    this.querySelectorAll('[data-related-entry]').forEach(node=>this.entrance!.observe(node));
    this.resize=new ResizeObserver(()=>this.queueMeasure());this.resize.observe(this);this.resize.observe(this.dock);
    document.fonts.ready.then(()=> {if(!this.cleanup?.signal.aborted)this.queueMeasure();});
    this.queueMeasure();
  }
  private setCurrent(row:HTMLElement) {
    this.current?.classList.remove('is-current'); this.current=row; row.classList.add('is-current');
    this.buttons.forEach((button,index)=>button.setAttribute('aria-pressed',String(this.rows[index]===row)));
  }
  private select(index:number,animate=false) {
    const row=this.rows[index];this.setCurrent(row);
    this.showPhoto(row,this.wide.matches?row.querySelector<HTMLElement>('.diagnostic-management-related-reveal')!:this.stage!);
    if(animate) {
      scrollTo({top:Math.max(0,Math.ceil(this.boundaries[index]??0)),behavior:'instant'});
      if(!this.motion.matches)this.track(row.animate([{transform:'translateY(18px)'},{transform:'translateY(0)'}],{duration:500,easing:'cubic-bezier(.16,1,.3,1)'}));
    }
  }
  private queueMeasure() {
    if(this.measureFrame)cancelAnimationFrame(this.measureFrame);
    this.measureFrame=requestAnimationFrame(()=> {
      this.measureFrame=0;if(!this.isConnected||!this.dock)return;
      const header=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height'))||98;
      const top=header+12;
      // Native sticky rect ceases to expose its original position after pinning.
      const rootTop=this.querySelector<HTMLElement>('.diagnostic-management-related-layout')!.getBoundingClientRect().top+scrollY;
      this.pinAt=rootTop-top;
      const reading=top+(this.compact.matches?this.dock.getBoundingClientRect().height:0)+24;
      const positions=this.rows.map(row=>row.getBoundingClientRect().top+scrollY);
      const limit=document.documentElement.scrollHeight-innerHeight-2;
      this.boundaries=positions.map((pos,i)=>Math.min(pos-reading,limit-(positions.length-1-i)*Math.min(110,innerHeight*.1)));
      this.render();
    });
  }
  private render() {
    if(!this.compact.matches){this.classList.remove('is-pinned');return;}
    if(!this.inView||document.hidden)return;
    this.classList.toggle('is-pinned',scrollY>=this.pinAt);
    let index=0;for(let i=1;i<this.boundaries.length;i++)if(scrollY>=this.boundaries[i])index=i;
    const row=this.rows[index];if(row===this.current)return;
    this.setCurrent(row);this.showPhoto(row,this.stage!);
  }
  private async showPhoto(row:HTMLElement,target:HTMLElement) {
    const photo=this.photos.get(row)!;if(photo.parentElement===target)return;
    const version=++this.version,image=photo.querySelector<HTMLImageElement>('img')!;
    image.sizes=target===this.stage?'min(calc(100vw - 32px), 42svh, 540px)':'150px';image.loading='eager';
    try{await image.decode();}catch{return;}
    if(version!==this.version||!this.isConnected||document.hidden)return;
    this.restore();target.append(photo);this.displayed=photo;
    if(target===this.stage) {
      this.stage!.dataset.activeService=row.dataset.service;
      const next=this.rows[this.rows.indexOf(row)+1];if(next){const upcoming=this.photos.get(next)!.querySelector<HTMLImageElement>('img')!;upcoming.sizes=image.sizes;upcoming.loading='eager';}
      if(!this.motion.matches)this.track(photo.animate([{opacity:.55,transform:'scale(1.015)'},{opacity:1,transform:'scale(1)'}],{duration:320,easing:'ease-out'}));
    }else row.classList.add('has-photo');
  }
  private restore() { if(this.displayed){this.displayed.closest('.has-photo')?.classList.remove('has-photo');this.homes.get(this.displayed)!.append(this.displayed);this.displayed=undefined;} }
  private track(animation:Animation) {this.animations.add(animation);animation.finished.then(()=>this.animations.delete(animation),()=>this.animations.delete(animation));}
  private stop(){this.animations.forEach(a=>a.cancel());this.animations.clear();}
  disconnectedCallback() {
    this.version++;this.stop();this.restore();this.cleanup?.abort();this.activation?.disconnect();this.visibility?.disconnect();this.entrance?.disconnect();this.resize?.disconnect();
    cancelAnimationFrame(this.frame);cancelAnimationFrame(this.measureFrame);this.frame=0;this.measureFrame=0;
    this.classList.remove('diagnostic-management-related-ready','is-pinned');
    this.querySelector<HTMLElement>('.diagnostic-management-related-selectors')?.setAttribute('hidden','');this.stage?.setAttribute('hidden','');
    this.initialized=false;this.inView=false;
  }
}
if(!customElements.get('diagnostic-management-related'))customElements.define('diagnostic-management-related',DiagnosticManagementRelated);
