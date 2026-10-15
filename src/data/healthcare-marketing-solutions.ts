type LinkedText = string | { label: string; href: string };

const link = (label: string, href: string): LinkedText => ({ label, href });

export const healthcareMarketingSolutions = {
  heading: 'Explore Healthcare Marketing Channels by Your Organization',
  introduction: 'These channel overviews link to provider-specific execution services.',
  groups: [{
    id: 'search', heading: 'Search and local',
    services: [
      { heading: 'Healthcare SEO', segments: [
        'SEO helps people discover accurate information through unpaid search. It may include technical SEO—fixing access barriers—and content architecture—giving each real service a useful page. Compare ',
        link('Doctor SEO', '/doctors/seo/'), ', ', link('Clinic SEO', '/clinics/seo/'), ' and ', link('Hospital SEO', '/hospitals/seo/'), ' according to your organization.',
      ] },
      { heading: 'Healthcare Local SEO', segments: [
        'Nearby discovery needs accurate addresses, branch information and eligible local profiles. Start with ',
        link('Doctor Local SEO', '/doctors/local-seo/'), ', ', link('Clinic Local SEO', '/clinics/local-seo/'), ' or ', link('Clinic Google Business Profile', '/clinics/google-business-profile/'), ' when geography is the real issue.',
      ] },
    ],
  }, {
    id: 'content', heading: 'Content and social',
    services: [
      { heading: 'Healthcare Content Marketing', segments: [
        'Clear service explanations and educational content require genuine sources and qualified medical review when making clinical statements. Explore ',
        link('Doctor Content Marketing', '/doctors/content-marketing/'), ' or ', link('Clinic Content Marketing', '/clinics/content-marketing/'), ' for editorial execution.',
      ] },
      { heading: 'Healthcare Social Media Marketing', segments: [
        'An approved social calendar supports useful, consistent updates—not pressure or unverified outcomes. Compare ',
        link('Doctor Social Media Marketing', '/doctors/social-media-marketing/'), ', ', link('Clinic Social Media Marketing', '/clinics/social-media-marketing/'), ' and ', link('Hospital Social Media Marketing', '/hospitals/social-media-marketing/'), '.',
      ] },
      { heading: 'Healthcare Video Marketing', segments: [
        'Professional explainers need reviewed scripts, confirmed qualifications and permission for identifiable people. ',
        link('Doctor Video Marketing', '/doctors/video-marketing/'), ' covers practitioner-specific video needs; other video work requires its own scope.',
      ] },
    ],
  }, {
    id: 'advertising', heading: 'Paid campaigns',
    services: [
      { heading: 'Healthcare Google Ads', segments: [
        'Paid search can be considered for eligible services with appropriate landing pages. Review ',
        link('Doctor Google Ads', '/doctors/google-ads/'), ' or ', link('Clinic Google Ads', '/clinics/google-ads/'), '. Hospital paid activity belongs to the approved hospital advertising scope, not this hub.',
      ] },
      { heading: 'Healthcare Facebook Ads', segments: [
        'Paid social is distinct from ordinary social posting. Creative, health-related targeting and privacy need separate review. Compare ',
        link('Doctor Facebook Ads', '/doctors/facebook-ads/'), ', ', link('Clinic Facebook Ads', '/clinics/facebook-ads/'), ' and the ', link('For Hospitals', '/hospitals/'), ' marketing options until a Hospital Advertising route is approved.',
      ] },
    ],
  }],
} as const;
