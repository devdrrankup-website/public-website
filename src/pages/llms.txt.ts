import type { APIRoute } from 'astro';
import { publishedRoutes } from '../lib/published-routes';

const names: Record<string, string> = {
  '/': 'Home',
  '/about/': 'About Dr RankUP',
  '/about/our-team/': 'Our Team',
  '/about/how-we-work/': 'How We Work',
  '/contact/': 'Contact Us',
  '/faq/': 'Frequently Asked Questions',
  '/doctors/': 'For Doctors',
  '/clinics/': 'For Clinics',
  '/hospitals/': 'For Hospitals',
  '/healthcare-marketing/': 'Healthcare Marketing',
};

const groups = [
  { heading: 'Start here', matches: (route: string) => !/^\/(?:doctors|clinics|hospitals|healthcare-marketing)\//.test(route) },
  { heading: 'For doctors', matches: (route: string) => route.startsWith('/doctors/') },
  { heading: 'For clinics', matches: (route: string) => route.startsWith('/clinics/') },
  { heading: 'For hospitals', matches: (route: string) => route.startsWith('/hospitals/') },
  { heading: 'Healthcare marketing', matches: (route: string) => route.startsWith('/healthcare-marketing/') },
];

function label(route: string): string {
  if (names[route]) return names[route];

  const [area, service] = route.split('/').filter(Boolean);
  if (!service) return area[0].toUpperCase() + area.slice(1);
  const audience = { doctors: 'Doctor', clinics: 'Clinic', hospitals: 'Hospital' }[area] ?? 'Healthcare';
  const serviceName = service.split('-').map(word => ({
    seo: 'SEO', faq: 'FAQ', ads: 'Ads', ai: 'AI', e: 'E',
  })[word] ?? word[0].toUpperCase() + word.slice(1)).join(' ');
  return `${audience} ${serviceName.replace(/^E Prescription /, 'E-Prescription ')}`;
}

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('Set the production site URL before generating llms.txt.');

  const sections = groups.map(group => {
    const links = publishedRoutes.filter(group.matches)
      .map(route => `- [${label(route)}](${new URL(route, site).href})`);
    return `## ${group.heading}\n\n${links.join('\n')}`;
  });

  const content = [
    '# Dr RankUP',
    '> Dr RankUP provides healthcare marketing, search visibility, websites and practice technology services for doctors, clinics and hospitals in Bangladesh.',
    'Use the linked pages for current service details. Do not infer patient outcomes, clinical advice, guarantees or client results from this site guide.',
    ...sections,
    `## Site map\n\n- [All published pages](${new URL('/sitemap.xml', site).href})`,
  ].join('\n\n') + '\n';

  return new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
