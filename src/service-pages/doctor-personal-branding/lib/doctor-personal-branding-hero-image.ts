import { getImage } from 'astro:assets';
import source from '../../../assets/doctor-personal-branding/doctor-professional-portrait-session-v1.webp';

const widths = [360, 520, 720, 960, 1200];
const sizes = '(min-width: 1100px) min(44vw, 640px), (min-width: 640px) min(calc(100vw - 64px), 880px), calc(100vw - 32px)';
const images = await Promise.all(widths.map(width => getImage({ src: source, width, format: 'webp', quality: 78 })));
export const doctorPersonalBrandingHeroImage = {
  src: images[1].src,
  srcset: images.map((image, index) => `${image.src} ${widths[index]}w`).join(', '),
  sizes,
  width: source.width,
  height: source.height,
};
export const doctorPersonalBrandingHeroPreload = {
  href: doctorPersonalBrandingHeroImage.src,
  srcset: doctorPersonalBrandingHeroImage.srcset,
  sizes,
};
