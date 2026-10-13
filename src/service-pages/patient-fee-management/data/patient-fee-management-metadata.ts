// Destination-owned metadata from For Doctors/Doctor Chamber Management Software/Patient Fee Management/02-Patient-Fee-Management-META-CANONICAL-SCHEMA.md
export const metadata = {
  "title": "Patient Fee Management Software Bangladesh | Dr RankUp",
  "description": "Plan doctor consultation-fee workflows for follow-ups, payment checks, receipts and chamber-wise collections in Bangladesh with Dr RankUp.",
  "canonical": "https://www.drrankup.com/doctors/patient-fee-management/",
  "twitterCard": "summary",
  "schema": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.drrankup.com/#organization",
        "name": "Dr RankUp",
        "legalName": "Dr RankUp",
        "url": "https://www.drrankup.com/",
        "description": "Healthcare-focused growth and technology partner providing SEO, digital marketing, professional branding, paid advertising, websites and software services for doctors, clinics and hospitals in Bangladesh.",
        "slogan": "Rank Higher. Reach More Patients. Grow Your Practice.",
        "telephone": "+8801342114762",
        "email": "contact@drrankup.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "230A, 2nd Floor, Chowdhury Surgical Market, Topkhana Road, Dhaka South City Corporation",
          "addressLocality": "Dhaka",
          "postalCode": "1000",
          "addressCountry": "BD"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Bangladesh"
        },
        "sameAs": [
          "https://www.instagram.com/drrankup/",
          "https://www.reddit.com/user/dr_rankup/",
          "https://bsky.app/profile/drrankup.bsky.social",
          "https://www.youtube.com/@drrankup",
          "https://www.pinterest.com/drrankup/",
          "https://linkedin.com/drrankup",
          "https://www.facebook.com/drrankup",
          "https://x.com/DrRankUp",
          "https://medium.com/@drrankup",
          "https://www.tiktok.com/@dr.rankup",
          "https://www.quora.com/profile/Dr-RankUp",
          "https://www.threads.com/@drrankup",
          "https://www.snapchat.com/@drrankup"
        ],
        "founder": [
          {
            "@id": "https://www.drrankup.com/#person-hridoy-chowdhury"
          },
          {
            "@id": "https://www.drrankup.com/#person-monwara-moni"
          },
          {
            "@id": "https://www.drrankup.com/#person-sirajul-islam"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.drrankup.com/#website",
        "name": "Dr RankUp",
        "url": "https://www.drrankup.com/",
        "inLanguage": "en-BD",
        "publisher": {
          "@id": "https://www.drrankup.com/#organization"
        }
      },
      {
        "@type": [
          "WebPage",
          "FAQPage"
        ],
        "@id": "https://www.drrankup.com/doctors/patient-fee-management/#webpage",
        "url": "https://www.drrankup.com/doctors/patient-fee-management/",
        "name": "Patient Fee Management Software Bangladesh | Dr RankUp",
        "description": "Plan doctor consultation-fee workflows for follow-ups, payment checks, receipts and chamber-wise collections in Bangladesh with Dr RankUp.",
        "inLanguage": "en-BD",
        "isPartOf": {
          "@id": "https://www.drrankup.com/#website"
        },
        "publisher": {
          "@id": "https://www.drrankup.com/#organization"
        },
        "about": {
          "@id": "https://www.drrankup.com/doctors/patient-fee-management/#service"
        },
        "breadcrumb": {
          "@id": "https://www.drrankup.com/doctors/patient-fee-management/#breadcrumb"
        },
        "mentions": {
          "@id": "https://www.drrankup.com/#person-sirajul-islam"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is patient fee management software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It helps a doctor or chamber organize consultation-fee rules, payment status, receipts, adjustments and daily collections."
            }
          },
          {
            "@type": "Question",
            "name": "Can new and follow-up patients have different fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, where configured. The doctor sets visit types, fee amounts and any follow-up validity window."
            }
          },
          {
            "@type": "Question",
            "name": "Can different chambers use different fee rules?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Chamber-specific fee schedules can keep location and session charges separate."
            }
          },
          {
            "@type": "Question",
            "name": "Does it verify bKash or Nagad payments automatically?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not necessarily. Personal-wallet payments may need manual verification; automatic confirmation requires an appropriate integration."
            }
          },
          {
            "@type": "Question",
            "name": "Can assistants approve discounts or refunds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Only within assigned permissions. Larger changes can require doctor or administrator approval and an audit trail."
            }
          },
          {
            "@type": "Question",
            "name": "Can it track partial payments and print receipts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Those workflows can be designed into the agreed scope. Receipts must reflect collected amounts and remaining dues accurately."
            }
          },
          {
            "@type": "Question",
            "name": "Is this the same as clinic billing software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. This module tracks visit-level consultation fees; clinic billing covers wider organizational invoicing and accounts."
            }
          },
          {
            "@type": "Question",
            "name": "What if the internet fails during collection?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The fallback depends on the tested implementation. Unverified digital transfers must not silently become paid records."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.drrankup.com/doctors/patient-fee-management/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.drrankup.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "For Doctors",
            "item": "https://www.drrankup.com/doctors/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Patient Fee Management",
            "item": "https://www.drrankup.com/doctors/patient-fee-management/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.drrankup.com/doctors/patient-fee-management/#service",
        "name": "Patient Fee Management Software Design and Implementation for Doctors",
        "serviceType": "Doctor consultation-fee workflow design and implementation",
        "description": "Planning and implementation of consultation-fee workflows covering new and follow-up visits, payment verification, receipts, dues, adjustments and chamber-wise collection reporting for doctors in Bangladesh.",
        "url": "https://www.drrankup.com/doctors/patient-fee-management/",
        "provider": {
          "@id": "https://www.drrankup.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Bangladesh"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Doctors and doctor chamber operators in Bangladesh"
        },
        "mainEntityOfPage": {
          "@id": "https://www.drrankup.com/doctors/patient-fee-management/#webpage"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.drrankup.com/#person-hridoy-chowdhury",
        "name": "Hridoy Chowdhury",
        "jobTitle": "Founder",
        "description": "SEO, technical search architecture and AI-search strategy",
        "worksFor": {
          "@id": "https://www.drrankup.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.drrankup.com/#person-monwara-moni",
        "name": "Monwara Moni",
        "jobTitle": "Co-Founder",
        "description": "Content strategy, social media and professional communication",
        "worksFor": {
          "@id": "https://www.drrankup.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.drrankup.com/#person-sirajul-islam",
        "name": "Sirajul Islam",
        "jobTitle": "Co-Founder",
        "description": "Full-stack development, software systems and technical engineering",
        "worksFor": {
          "@id": "https://www.drrankup.com/#organization"
        }
      }
    ]
  }
} as const;
