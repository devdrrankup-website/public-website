import seo from '../assets/hospital-seo/hospital-seo-related-preview-v1.webp';
import local from '../assets/clinic-local-seo/clinic-local-seo-related-preview-v1.webp';
import content from '../assets/clinic-content-marketing/clinic-content-marketing-related-preview-v1.webp';
import social from '../assets/hospital-social-media-marketing/hospital-social-media-marketing-related-preview-v1.webp';
import video from '../assets/doctor-video-marketing/doctor-video-marketing-related-preview-v1.webp';
import google from '../assets/clinic-google-ads/clinic-google-ads-related-preview-v1.webp';
import facebook from '../assets/clinic-facebook-ads/clinic-facebook-ads-related-preview-v1.webp';

export const healthcareMarketingSolutionVisuals = [
  { key: 'seo', src: seo, alt: 'Healthcare team reviewing hospital search information' },
  { key: 'local', src: local, alt: 'Clinic location and local search planning' },
  { key: 'content', src: content, alt: 'Clinic team reviewing healthcare content' },
  { key: 'social', src: social, alt: 'Hospital social communication planning' },
  { key: 'video', src: video, alt: 'Planning a doctor educational video' },
  { key: 'google-ads', src: google, alt: 'Clinic paid search campaign planning' },
  { key: 'facebook-ads', src: facebook, alt: 'Clinic social advertising planning' },
] as const;
