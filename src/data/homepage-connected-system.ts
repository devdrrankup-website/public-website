// Homepage content refreshed on 12 October 2026.
// Keep the approved four-part diagram and its companion trust layout.
// The source journey occupies the existing statement; both H3s stay below.
export const homepageConnectedSystem = {
  heading: 'From Discovery to Responsible Action',
  introduction: 'Search helps patients find you; accurate information explains your services; easy contact and suitable software can support office tasks.',
  trustIntroduction: 'Find → Understand → Check → Contact → Manage → Improve',
  stages: [
    {title: 'Search', outputs: ['Discovery']},
    {title: 'Verified Content', outputs: ['Understanding', 'Verification']},
    {title: 'Clear Navigation', outputs: ['Appropriate Contact']},
    {title: 'Scoped Technology', outputs: ['Administration', 'Improvement']},
  ],
  trust: [
    {title: 'Qualifications and Medical Review', description: 'Check qualifications and have qualified professionals review important medical information.'},
    {title: 'Responsibility and Trust', description: "Show who's responsible for information and protect patients' privacy."},
  ],
  conclusion: 'Decisions about treatment and patient safety remain with qualified professionals.',
} as const;
