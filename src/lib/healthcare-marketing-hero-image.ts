import { getImage } from 'astro:assets';
import source from '../assets/healthcare-marketing/hero/healthcare-strategy-team-v1.webp';

const widths = [360, 520, 720, 960, 1100];
export const healthcareMarketingHeroSizes = '(min-width: 1100px) min(40vw, 580px), (min-width: 640px) min(72vw, 680px), calc(100vw - 32px)';
const images = await Promise.all(widths.map(width => getImage({ src: source, width, format: 'webp', quality: 70 })));
export const healthcareMarketingHeroImage = {
  src: images[1].src,
  srcset: images.map((image, index) => `${image.src} ${widths[index]}w`).join(', '),
  sizes: healthcareMarketingHeroSizes,
  width: source.width,
  height: source.height,
};
export const healthcareMarketingHeroPreload = { href: healthcareMarketingHeroImage.src, srcset: healthcareMarketingHeroImage.srcset, sizes: healthcareMarketingHeroSizes };
