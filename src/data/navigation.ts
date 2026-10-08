import {navigationVisuals} from './navigation-visuals';
export {navigationVisuals};
export type NavigationVisual = keyof typeof navigationVisuals;
export interface NavigationItem {title:string;description:string;visual:NavigationVisual}
export interface NavigationGroup {title:string;items:NavigationItem[]}
export interface NavigationMenu {id:string;title:string;description:string;viewAll:string;groups:NavigationGroup[]}
const item=(title:string,description:string,visual:NavigationVisual):NavigationItem=>({title,description,visual});

// Source taxonomy: WEBSITE_STRUCTURE.md. No URLs/endpoints are assigned.
// Website capabilities remain in their parent category, not new service pages.
export const navigationMenus:NavigationMenu[]=[
  {id:'doctors',title:'For Doctors',description:'Build visibility around your expertise.',viewAll:'View all doctor services',groups:[
    {title:'Doctor Digital Marketing',items:[
      item('Doctor SEO','Help patients discover your expertise in search.','doctor-seo'),
      item('Doctor Local SEO','Make your chamber easier to find locally.','doctor-local-seo'),
      item('Doctor Google Business Profile','Present clear chamber details on Google and Maps.','doctor-google-business-profile'),
      item('Doctor Social Media Marketing','Share your expertise with the right audience.','doctor-social-media-marketing'),
      item('Doctor Facebook Marketing','Build a consistent professional Facebook presence.','doctor-facebook-marketing'),
      item('Doctor Google Ads','Connect relevant searches with your services.','doctor-google-ads'),
      item('Doctor Facebook Ads','Introduce your practice through relevant campaigns.','doctor-facebook-ads'),
      item('Doctor Content Marketing','Explain your expertise through useful content.','doctor-content-marketing'),
      item('Doctor Video Marketing','Make healthcare information easier to understand.','doctor-video-marketing'),
      item('Doctor Personal Branding','Present your credentials and professional identity.','doctor-personal-branding'),
    ]},
    {title:'Doctor Chamber Management Software',items:[
      item('Patient Appointment Management','Coordinate appointments, serials and visit status.','patient-appointment-management'),
      item('Doctor Scheduling Software','Organize chamber hours and availability.','doctor-scheduling-software'),
      item('E-Prescription Software','Support the doctor’s prescription workflow.','e-prescription-software'),
      item('Patient Medical Record Software','Keep essential patient records organized.','patient-medical-record-software'),
      item('Patient Fee Management','Keep consultation fees and payments organized.','patient-fee-management'),
    ]},
    {title:'Doctor Website Development',items:[
      item('Professional Profile & Authority','Bring credentials, specialty and chamber information together.','professional-profile-authority'),
      item('Appointment Booking Integration','Support the patient-facing booking journey.','appointment-booking-integration'),
      item('Online Consultation Integration','Explain and support appropriate online consultation steps.','online-consultation-integration'),
      item('Content Management / Doctor Dashboard','Keep practice information and content up to date.','doctor-content-dashboard'),
      item('Search-Ready Build Foundation','Build a clear, mobile-friendly website foundation.','search-ready-build-foundation'),
    ]},
    {title:'Doctor Marketing Packages',items:[
      item('Doctor Marketing Packages','Explore coordinated marketing support for your practice.','doctor-marketing-packages'),
    ]},
  ]},
  {id:'clinics',title:'For Clinics',description:'Connect visibility with everyday clinic operations.',viewAll:'View all clinic services',groups:[
    {title:'Clinic Digital Marketing',items:[
      item('Clinic SEO','Help patients discover your clinic and services.','clinic-seo'),
      item('Clinic Local SEO','Make your clinic easier to find nearby.','clinic-local-seo'),
      item('Clinic Google Business Profile','Keep location, hours and service information clear.','clinic-google-business-profile'),
      item('Clinic Social Media Marketing','Build a useful, consistent clinic presence.','clinic-social-media-marketing'),
      item('Clinic Google Ads','Connect relevant searches with clinic services.','clinic-google-ads'),
      item('Clinic Facebook Ads','Introduce your clinic through relevant campaigns.','clinic-facebook-ads'),
      item('Clinic Content Marketing','Explain services through helpful healthcare content.','clinic-content-marketing'),
      item('Clinic Branding','Present a clear and consistent clinic identity.','clinic-branding'),
    ]},
    {title:'Clinic Management Software',items:[
      item('Doctor Schedule Management','Coordinate doctor schedules and clinic availability.','clinic-doctor-schedule-management'),
      item('Diagnostic Management','Organize diagnostic requests and related workflows.','diagnostic-management'),
      item('Pathology Reporting Software','Support an organized pathology-reporting workflow.','pathology-reporting-software'),
      item('Clinic Billing Software','Keep clinic billing and payment information organized.','clinic-billing-software'),
      item('Clinic Inventory Management','Support visibility into clinic stock and supplies.','clinic-inventory-management'),
    ]},
    {title:'Clinic Website',items:[
      item('Clinic Website','Present clinic services clearly on every screen.','clinic-website'),
      item('Doctor Directory','Help patients understand the doctors at your clinic.','clinic-doctor-directory'),
      item('Online Appointment System','Make the appointment request journey clearer.','clinic-online-appointment-system'),
      item('Online Report Portal','Support an appropriate digital report-access journey.','clinic-online-report-portal'),
    ]},
  ]},
  {id:'hospitals',title:'For Hospitals',description:'Digital growth for a connected hospital ecosystem.',viewAll:'View all hospital services',groups:[
    {title:'Hospital Digital Marketing',items:[
      item('Hospital Digital Marketing','Coordinate your hospital’s digital presence.','hospital-digital-marketing'),
      item('Hospital SEO','Help patients find departments and hospital services.','hospital-seo'),
      item('Hospital Social Media Marketing','Share useful hospital information consistently.','hospital-social-media-marketing'),
      item('Hospital Advertising','Connect relevant audiences with hospital services.','hospital-advertising'),
    ]},
    {title:'Hospital Management Software',items:[
      item('Hospital Management Software','Bring essential hospital workflows into a connected system.','hospital-management-software'),
    ]},
    {title:'Hospital Website Development',items:[
      item('Hospital Website Development','Create a clear, responsive hospital website.','hospital-website-development'),
    ]},
  ]},
  {id:'about',title:'About',description:'The people and thinking behind Dr RankUP.',viewAll:'View all about Dr RankUP',groups:[
    {title:'About Dr RankUP',items:[
      item('About Dr RankUP','Our focus on doctors, clinics and hospitals in Bangladesh.','about-dr-rankup'),
      item('Our Team','Meet the people behind Dr RankUP.','about-our-team'),
      item('How We Work','Understand our approach from discovery to improvement.','how-we-work'),
    ]},
  ]},
  {id:'resources',title:'Resources',description:'Explore healthcare insights and project stories.',viewAll:'View all resources',groups:[
    {title:'Explore Resources',items:[
      item('Blog','Healthcare marketing, search and technology insights.','resources-blog'),
      item('FAQ','Common questions about working with Dr RankUP.','resources-faq'),
      item('Case Studies','Explore our case study area.','resources-case-studies'),
    ]},
  ]},
];
