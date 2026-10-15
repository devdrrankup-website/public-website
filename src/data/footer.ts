// User-supplied contact details. Only the built For Doctors parent is linked.
// Other service/company/contact destinations remain deferred.
export const footer = {
  phone: '01342114762',
  email: 'contact@drrankup.com',
  address: '230A, 2nd Floor, Chowdhury Surgical Market, Topkhana Road, Dhaka South City Corporation, Dhaka 1000',
  hours: '10 AM – 10 PM',
  days: 'Saturday – Thursday',
  closed: 'Friday closed · Bangladesh time',
  tagline: 'Rank Higher. Reach More Patients. Grow Your Practice.',
  description: 'Healthcare marketing, websites and software for doctors, clinics and hospitals in Bangladesh.',
  company: ['Home', 'About', 'Case Studies', 'Resources', 'Pricing', 'Contact'],
  legal: ['Privacy Policy', 'Terms & Conditions'],
  audiences: [{title:'For Doctors',href:'/doctors/'},{title:'For Clinics',href:'/clinics/'},{title:'For Hospitals',href:'/hospitals/'},{title:'For Healthcare'}] as {title:string;href?:string}[],
};
