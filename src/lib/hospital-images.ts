import {getImage} from 'astro:assets';
import neutral from '../assets/hospital-neutral.png';
import activated from '../assets/hospital-activated.png';

// One source of truth for the responsive hero preload and rendered images.
// This module is imported only by Astro frontmatter, never by client scripts.
export {neutral,activated};
export const widths=[480,672,736,800,960,1122];
export const sizes='(min-width: 1100px) min(72vw, 800px), 100vw';
const quality=(width:number)=>width===1122?58:64;
export const baseImages=await Promise.all(widths.map(width=>getImage({src:neutral,width,format:'webp',quality:quality(width)})));
export const blueImages=await Promise.all(widths.map(width=>getImage({src:activated,width,format:'webp',quality:quality(width)})));
export const srcset=(images:typeof baseImages)=>images.map((image,i)=>`${image.src} ${widths[i]}w`).join(', ');
export const hospitalPreload={href:baseImages[1].src,srcset:srcset(baseImages),sizes};
