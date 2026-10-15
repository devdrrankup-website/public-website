import homeGraph from './seo/home.json';
import doctorsGraph from './seo/doctors.json';
import doctorSeoGraph from './seo/doctor-seo.json';
import hospitalsGraph from './seo/hospitals.json';
import clinicsGraph from './seo/clinics.json';
import healthcareMarketingGraph from './seo/healthcare-marketing.json';
import aboutGraph from './seo/company-about.json';
import { homepageFaq } from './homepage-faq';
import { doctorFaq } from './for-doctors-faq';
import { doctorSeoFaq } from './doctor-seo-faq';
import { hospitalFaq } from './for-hospital-faq';
import { clinicFaq } from './for-clinic-faq';
import { healthcareMarketingFaq } from './healthcare-marketing-faq';

type FaqItem = { readonly question: string; readonly answer: string };
type SchemaGraph = { '@context': string; '@graph': Record<string, unknown>[] };

// The handoff graphs include FAQ drafts. Use the questions and answers actually
// rendered on each page so the structured data cannot disagree with its HTML.
const withVisibleFaq = (source: unknown, items: readonly FaqItem[]): SchemaGraph => {
  const graph = source as SchemaGraph;
  return {
    ...graph,
    '@graph': graph['@graph'].map(node => {
      const type = node['@type'];
      if (type !== 'FAQPage' && !(Array.isArray(type) && type.includes('FAQPage'))) return node;
      return {
        ...node,
        mainEntity: items.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      };
    }),
  };
};

export const pageMetadata = {
  about: {
    title: 'About Dr RankUP | Healthcare Marketing & Technology',
    description: 'Learn what Dr RankUP does for doctors, clinics and hospitals in Bangladesh, who leads the agency, and how we approach responsible digital work.',
    canonical: 'https://www.drrankup.com/about/',
    twitterCard: 'summary',
    schema: aboutGraph,
  },
  home: {
    title: 'Healthcare SEO, Marketing & Software in BD | Dr RankUp',
    description: 'Healthcare SEO, responsible marketing, websites and scoped software for doctors, clinics and hospitals in Bangladesh. Explore Dr RankUp solutions.',
    canonical: 'https://www.drrankup.com/',
    twitterCard: 'summary',
    schema: withVisibleFaq(homeGraph, homepageFaq.items),
  },
  doctors: {
    title: 'Doctor SEO, Websites & Software in Bangladesh | Dr RankUp',
    description: 'Explore Doctor SEO, local discovery, responsible marketing, websites and chamber software support with verified practice information in Bangladesh.',
    canonical: 'https://www.drrankup.com/doctors/',
    twitterCard: 'summary',
    schema: withVisibleFaq(doctorsGraph, doctorFaq.items),
  },
  hospitals: {
    title: 'Hospital SEO, Websites & Software in BD | Dr RankUP',
    description: 'Hospital SEO, responsible digital marketing, websites and management software planning for verified departments, doctors and branches in Bangladesh.',
    canonical: 'https://www.drrankup.com/hospitals/',
    twitterCard: 'summary',
    schema: withVisibleFaq(hospitalsGraph, hospitalFaq.items),
  },
  clinics: {
    title: 'Clinic SEO, Websites & Software in Bangladesh | Dr RankUP',
    description: 'Compare Clinic SEO, local search, responsible marketing, website development and clinic software workflows for Bangladesh clinic teams.',
    canonical: 'https://www.drrankup.com/clinics/',
    twitterCard: 'summary',
    schema: withVisibleFaq(clinicsGraph, clinicFaq.items),
  },
  healthcareMarketing: {
    title: 'Healthcare Marketing Services in Bangladesh | Dr RankUp',
    description: 'Explore responsible healthcare marketing for doctors, clinics and hospitals in Bangladesh. Compare SEO, content, ads, audits, website improvements and reporting.',
    canonical: 'https://www.drrankup.com/healthcare-marketing/',
    twitterCard: 'summary',
    schema: withVisibleFaq(healthcareMarketingGraph, healthcareMarketingFaq.items),
  },
  doctorSeo: {
    title: 'Doctor SEO Services in Bangladesh | Dr RankUp',
    description: 'Doctor SEO for verified profiles, technical search foundations and clearer practice information in Bangladesh. Explore Dr RankUp services.',
    canonical: 'https://www.drrankup.com/doctors/seo/',
    twitterCard: 'summary_large_image',
    schema: withVisibleFaq(doctorSeoGraph, doctorSeoFaq.items),
  },
} as const;
