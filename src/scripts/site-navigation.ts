// Native disclosures and static content work without JavaScript. No menu URLs,
// framework hydration, GSAP, image prefetch loop or new dependency is needed.
if(!customElements.get('site-navigation')) {
  customElements.define('site-navigation',class extends HTMLElement {
    private controller?:AbortController;
    private closeTimer?:ReturnType<typeof setTimeout>;
    connectedCallback() {
      this.controller?.abort();
      this.controller=new AbortController();
      const options={signal:this.controller.signal};
      const desktop=matchMedia('(min-width: 1100px)');
      const fineHover=matchMedia('(hover: hover) and (pointer: fine)');
      const toggle=this.querySelector<HTMLButtonElement>('.navigation-toggle')!;
      const menus=[...this.querySelectorAll<HTMLDetailsElement>('[data-nav-menu]')];
      const pending=new WeakMap<HTMLDetailsElement,number>();
      const hoverOpened=new WeakSet<HTMLDetailsElement>();
      let hoveredRow:HTMLElement|null=null;
      const cancelClose=()=>{clearTimeout(this.closeTimer);};
      const closeMenus=()=>{cancelClose();menus.forEach(menu=>{menu.open=false;pending.set(menu,(pending.get(menu)||0)+1);});};
      const setMobile=(open:boolean)=>{
        this.toggleAttribute('data-mobile-open',open);
        toggle.setAttribute('aria-expanded',String(open));
        toggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
      };
      const closeAll=()=>{closeMenus();setMobile(false);};
      const openMenu=(menu:HTMLDetailsElement)=>{
        cancelClose();
        menus.filter(other=>other!==menu).forEach(other=>{other.open=false;});
        menu.open=true;
      };
      const preview=async(row:HTMLElement)=>{
        const menu=row.closest<HTMLDetailsElement>('[data-nav-menu]');
        if(!menu||!menu.open)return;
        const figure=[...menu.querySelectorAll<HTMLElement>('.mega-preview-figure')].find(el=>el.id===row.dataset.preview);
        if(!figure)return;
        const request=(pending.get(menu)||0)+1;pending.set(menu,request);
        const image=figure.querySelector<HTMLImageElement>('img')!;
        // A cold preview can take a network round trip. Acknowledge the selected
        // row immediately, while keeping the previous decoded image visible.
        // Waiting until decode left touch users with no next painted feedback.
        const buttons=[...menu.querySelectorAll<HTMLButtonElement>('.nav-preview-trigger')];
        const stage=menu.querySelector<HTMLElement>('.mega-preview-stage');
        buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.closest('.mega-service')===row)));
        stage?.setAttribute('aria-busy','true');
        // Keep the previous image visible while decoding. Discard stale results
        // after rapid hover, closing, resize or leaving the page.
        image.loading='eager';
        try {await image.decode();} catch {
          if(pending.get(menu)===request){
            const visible=menu.querySelector<HTMLElement>('.mega-preview-figure:not([hidden])');
            buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.getAttribute('aria-controls')===visible?.id)));
            stage?.removeAttribute('aria-busy');
          }
          return;
        }
        if(options.signal.aborted||!this.isConnected||!menu.open||pending.get(menu)!==request)return;
        menu.querySelectorAll<HTMLElement>('.mega-preview-figure').forEach(el=>{el.hidden=el!==figure;});
        stage?.removeAttribute('aria-busy');
      };
      menus.forEach(menu=>{
        menu.querySelectorAll<HTMLElement>('[data-preview-label]').forEach(label=>{
          const row=label.closest<HTMLElement>('.mega-service')!;
          const button=document.createElement('button');
          button.type='button';button.className='nav-preview-trigger';
          button.setAttribute('aria-label',`Preview ${label.querySelector('strong')!.textContent}`);
          button.setAttribute('aria-controls',row.dataset.preview!);
          button.setAttribute('aria-pressed',String(!menu.querySelector<HTMLElement>(`#${row.dataset.preview}`)!.hidden));
          button.append(...Array.from(label.childNodes));label.replaceWith(button);
        });
        const viewLabel=menu.querySelector<HTMLElement>('[data-view-all-label]')!;
        if(viewLabel.tagName!=='BUTTON'){
          const button=document.createElement('button');button.type='button';button.className='nav-view-all';button.dataset.viewAllLabel='';
          button.setAttribute('aria-expanded',String([...menu.querySelectorAll<HTMLDetailsElement>('.mega-category')].every(category=>category.open)));
          button.append(...Array.from(viewLabel.childNodes));viewLabel.replaceWith(button);
        }
        menu.addEventListener('toggle',()=>{
          if(menu.open){
            menus.filter(other=>other!==menu).forEach(other=>{other.open=false;});
            const image=menu.querySelector<HTMLImageElement>('.mega-preview-figure:not([hidden]) img');
            if(image)image.loading='eager';
          } else {
            pending.set(menu,(pending.get(menu)||0)+1);
            menu.querySelector('.mega-preview-stage')?.removeAttribute('aria-busy');
            const visible=menu.querySelector<HTMLElement>('.mega-preview-figure:not([hidden])');
            menu.querySelectorAll<HTMLButtonElement>('.nav-preview-trigger').forEach(button=>button.setAttribute('aria-pressed',String(button.getAttribute('aria-controls')===visible?.id)));
          }
        },options);
        menu.addEventListener('pointerenter',()=>{
          if(desktop.matches&&fineHover.matches){if(!menu.open)hoverOpened.add(menu);openMenu(menu);}
        },options);
        menu.addEventListener('pointerleave',()=>{
          hoverOpened.delete(menu);
          if(desktop.matches&&fineHover.matches){
            cancelClose();
            this.closeTimer=setTimeout(()=>{
              if(!menu.contains(document.activeElement))menu.open=false;
            },180);
          }
        },options);
        menu.querySelectorAll<HTMLDetailsElement>('.mega-category').forEach(category=>{
          category.addEventListener('toggle',()=>{
            if(category.open&&menu.open&&document.activeElement===category.querySelector(':scope > summary')){
              const first=category.querySelector<HTMLElement>('.mega-service');if(first)void preview(first);
            }
            const allOpen=[...menu.querySelectorAll<HTMLDetailsElement>('.mega-category')].every(el=>el.open);
            menu.querySelector('.nav-view-all')?.setAttribute('aria-expanded',String(allOpen));
          },options);
        });
      });
      this.addEventListener('pointermove',event=>{
        if(event.pointerType==='touch'||(!event.movementX&&!event.movementY))return;
        const row=(event.target as Element).closest<HTMLElement>('.mega-service');
        if(row!==hoveredRow){hoveredRow=row;if(row&&this.contains(row))void preview(row);}
      },options);
      this.addEventListener('focusin',event=>{
        const row=(event.target as Element).closest<HTMLElement>('.mega-service');if(row)void preview(row);
      },options);
      this.addEventListener('click',event=>{
        const target=event.target as Element;
        const summary=target.closest('.nav-menu-summary');
        if(summary){
          const menu=summary.closest<HTMLDetailsElement>('[data-nav-menu]')!;
          menus.filter(other=>other!==menu).forEach(other=>{other.open=false;});
          if(event.detail>0&&hoverOpened.has(menu)){event.preventDefault();hoverOpened.delete(menu);}
        }
        if(target.closest('.navigation-toggle')){
          const open=!this.hasAttribute('data-mobile-open');
          if(!open)closeMenus();setMobile(open);
        }
        const previewButton=target.closest('.nav-preview-trigger');
        if(previewButton){const row=previewButton.closest<HTMLElement>('.mega-service');if(row)void preview(row);}
        const viewAll=target.closest<HTMLButtonElement>('.nav-view-all');
        if(viewAll){
          const categories=[...viewAll.closest('[data-nav-menu]')!.querySelectorAll<HTMLDetailsElement>('.mega-category')];
          categories.forEach(category=>{category.open=true;});
          viewAll.setAttribute('aria-expanded','true');
        }
      },options);
      this.addEventListener('keydown',event=>{
        if(event.key!=='Escape')return;
        const activeMenu=menus.find(menu=>menu.open);
        if(activeMenu){closeMenus();activeMenu.querySelector<HTMLElement>('.nav-menu-summary')?.focus();}
        else if(this.hasAttribute('data-mobile-open')){closeAll();toggle.focus();}
        event.preventDefault();
      },options);
      document.addEventListener('pointerdown',event=>{if(!this.contains(event.target as Node))closeAll();},options);
      // Closing another disclosure can blur a hidden preview button with no
      // related target. That must not dismiss the menu just opened by hover.
      // Actual focus moving outside and window blur still dismiss normally.
      this.addEventListener('focusout',event=>{if(event.relatedTarget&&!this.contains(event.relatedTarget as Node))closeAll();},options);
      const resize=()=>{closeAll();toggle.hidden=desktop.matches;};
      desktop.addEventListener('change',resize,options);
      window.addEventListener('blur',closeAll,options);
      document.addEventListener('visibilitychange',()=>{if(document.hidden)closeAll();},options);
      this.setAttribute('data-navigation-enhanced','');resize();
    }
    disconnectedCallback(){this.controller?.abort();clearTimeout(this.closeTimer);}
  });
}
