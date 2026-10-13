// Destination-owned metadata from For Clinics/Clinic Management Software/Doctor Schedule Management/02-Doctor-Schedule-Management-META-CANONICAL-SCHEMA.md
export const metadata = {
  "title": "Doctor Schedule Management in Bangladesh | Dr RankUp",
  "description": "Organise visiting doctors, clinic sessions, leave and branch schedules with clear approval rules. Plan Doctor Schedule Management with Dr RankUp.",
  "canonical": "https://www.drrankup.com/clinics/doctor-schedule-management/",
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
      },
      {
        "@type": "WebSite",
        "@id": "https://www.drrankup.com/#website",
        "url": "https://www.drrankup.com/",
        "name": "Dr RankUp",
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
        "@id": "https://www.drrankup.com/clinics/doctor-schedule-management/#webpage",
        "url": "https://www.drrankup.com/clinics/doctor-schedule-management/",
        "name": "Doctor Schedule Management",
        "description": "Organise visiting doctors, clinic sessions, leave and branch schedules with clear approval rules. Plan Doctor Schedule Management with Dr RankUp.",
        "inLanguage": "en-BD",
        "isPartOf": {
          "@id": "https://www.drrankup.com/#website"
        },
        "publisher": {
          "@id": "https://www.drrankup.com/#organization"
        },
        "about": {
          "@id": "https://www.drrankup.com/clinics/doctor-schedule-management/#service"
        },
        "breadcrumb": {
          "@id": "https://www.drrankup.com/clinics/doctor-schedule-management/#breadcrumb"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Doctor Schedule Management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is a clinic workflow for maintaining visiting doctors' sessions, locations, working hours, leave and approved changes."
            }
          },
          {
            "@type": "Question",
            "name": "Is it the same as patient appointment management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Scheduling determines when doctors are available; appointment management handles individual bookings, serials and patient status."
            }
          },
          {
            "@type": "Question",
            "name": "Can one doctor visit different clinic branches?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a scoped design can hold location-specific sessions and check for overlaps, subject to implementation."
            }
          },
          {
            "@type": "Question",
            "name": "Can reception staff change visiting hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Only within approved permissions. The clinic should decide who requests, edits and confirms important changes."
            }
          },
          {
            "@type": "Question",
            "name": "What happens when a doctor takes leave?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An approved schedule exception can close the affected session and alert the booking team to review existing appointments."
            }
          },
          {
            "@type": "Question",
            "name": "Must every clinic use fixed appointment slots?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Session-based or capacity-based schedules may fit clinics that rely on walk-in patients."
            }
          },
          {
            "@type": "Question",
            "name": "Can schedules appear on the clinic website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "They can, if a tested integration publishes approved availability without exposing staff-only information."
            }
          },
          {
            "@type": "Question",
            "name": "Do you guarantee fewer missed appointments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. We can help organise scheduling and define measurements, but actual outcomes depend on staffing, communication and use."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.drrankup.com/clinics/doctor-schedule-management/#breadcrumb",
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
            "name": "For Clinics",
            "item": "https://www.drrankup.com/clinics/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Doctor Schedule Management",
            "item": "https://www.drrankup.com/clinics/doctor-schedule-management/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.drrankup.com/clinics/doctor-schedule-management/#service",
        "name": "Doctor Schedule Management",
        "serviceType": "Doctor Schedule Management",
        "url": "https://www.drrankup.com/clinics/doctor-schedule-management/",
        "description": "Organise visiting doctors, clinic sessions, leave and branch schedules with clear approval rules. Plan Doctor Schedule Management with Dr RankUp.",
        "provider": {
          "@id": "https://www.drrankup.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Bangladesh"
        },
        "audience": {
          "@type": "BusinessAudience",
          "name": "Clinic owners, clinical operations managers, diagnostic centre managers and laboratory administrators in Bangladesh"
        },
        "mainEntityOfPage": {
          "@id": "https://www.drrankup.com/clinics/doctor-schedule-management/#webpage"
        }
      }
    ]
  }
} as const;
