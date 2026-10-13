// Destination-owned metadata from For Clinics/Clinic Website Development/Online Appointment System/02-Online-Appointment-System-META-CANONICAL-SCHEMA.md
export const metadata = {
  "title": "Online Appointment System for Clinics | Dr RankUp",
  "description": "Make clinic booking requests clearer with valid visiting sessions, reception confirmation and careful data handling. Plan an Online Appointment System with Dr RankUp.",
  "canonical": "https://www.drrankup.com/clinics/online-appointment-system/",
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
        "@id": "https://www.drrankup.com/clinics/online-appointment-system/#webpage",
        "url": "https://www.drrankup.com/clinics/online-appointment-system/",
        "name": "Online Appointment System",
        "description": "Make clinic booking requests clearer with valid visiting sessions, reception confirmation and careful data handling. Plan an Online Appointment System with Dr RankUp.",
        "inLanguage": "en-BD",
        "isPartOf": {
          "@id": "https://www.drrankup.com/#website"
        },
        "publisher": {
          "@id": "https://www.drrankup.com/#organization"
        },
        "about": {
          "@id": "https://www.drrankup.com/clinics/online-appointment-system/#service"
        },
        "breadcrumb": {
          "@id": "https://www.drrankup.com/clinics/online-appointment-system/#breadcrumb"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Online Appointment System?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is a website-based route for choosing an appropriate clinic visit, sending a booking request and receiving a clear status or confirmation."
            }
          },
          {
            "@type": "Question",
            "name": "Does submitting a form confirm an appointment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not always. Confirmation depends on the clinic's configured booking rules and actual staff or system approval."
            }
          },
          {
            "@type": "Question",
            "name": "Can patients choose a particular doctor and branch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, where implemented and supported by current doctor and branch information."
            }
          },
          {
            "@type": "Question",
            "name": "Can the website support serial-based appointments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. It can offer a valid session and explain how reception allocates serials rather than promise fixed times."
            }
          },
          {
            "@type": "Question",
            "name": "What if a doctor cancels a session?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A connected workflow should identify affected requests and direct staff to review changes and notify patients appropriately."
            }
          },
          {
            "@type": "Question",
            "name": "Are appointment reminders included?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "They can be added when messaging, consent, delivery and operational responsibilities are included in the agreed scope."
            }
          },
          {
            "@type": "Question",
            "name": "Does this replace reception's full appointment software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. This service owns the public booking journey; detailed queue and staff operations may belong to separate software."
            }
          },
          {
            "@type": "Question",
            "name": "Does online booking guarantee more appointments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Clearer booking can reduce confusion, but real demand, eligibility, staffing and patient decisions determine outcomes."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.drrankup.com/clinics/online-appointment-system/#breadcrumb",
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
            "name": "Online Appointment System",
            "item": "https://www.drrankup.com/clinics/online-appointment-system/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.drrankup.com/clinics/online-appointment-system/#service",
        "name": "Online Appointment System",
        "serviceType": "Online Appointment System",
        "url": "https://www.drrankup.com/clinics/online-appointment-system/",
        "description": "Make clinic booking requests clearer with valid visiting sessions, reception confirmation and careful data handling. Plan an Online Appointment System with Dr RankUp.",
        "provider": {
          "@id": "https://www.drrankup.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Bangladesh"
        },
        "audience": {
          "@type": "BusinessAudience",
          "name": "Clinic owners, clinic managers and diagnostic centre operators in Bangladesh"
        },
        "mainEntityOfPage": {
          "@id": "https://www.drrankup.com/clinics/online-appointment-system/#webpage"
        }
      }
    ]
  }
} as const;
