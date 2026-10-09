import { getImage } from 'astro:assets';
import source from '../assets/for-doctors/doctor-chamber-hero-v1.png';

// Build-time only: the image and preload share responsive URLs and sizing.
const widths = [360, 520, 720, 960, 1100];
export const doctorHeroSizes = '(min-width: 1100px) min(40vw, 580px), (min-width: 640px) min(72vw, 680px), calc(100vw - 32px)';
const images = await Promise.all(widths.map(width => getImage({ src: source, width, format: 'webp', quality: 78 })));
export const doctorHeroImage = {
  src: images[1].src,
  srcset: images.map((image, index) => `${image.src} ${widths[index]}w`).join(', '),
  sizes: doctorHeroSizes,
  width: source.width,
  height: source.height,
};
export const doctorHeroPreload = { href: doctorHeroImage.src, srcset: doctorHeroImage.srcset, sizes: doctorHeroSizes };
