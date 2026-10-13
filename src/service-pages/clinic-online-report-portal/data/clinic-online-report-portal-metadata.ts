// Destination-owned metadata from For Clinics/Clinic Website Development/Online Report Portal/02-Online-Report-Portal-META-CANONICAL-SCHEMA.md
export const metadata = {
  "title": "Online Report Portal for Clinics in Bangladesh | Dr RankUp",
  "description": "Give authorised patients protected access to approved laboratory reports, with identity checks and correct release handoffs. Plan an Online Report Portal with Dr RankUp.",
  "canonical": "https://www.drrankup.com/clinics/online-report-portal/",
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
        "@id": "https://www.drrankup.com/clinics/online-report-portal/#webpage",
        "url": "https://www.drrankup.com/clinics/online-report-portal/",
        "name": "Online Report Portal",
        "description": "Give authorised patients protected access to approved laboratory reports, with identity checks and correct release handoffs. Plan an Online Report Portal with Dr RankUp.",
        "inLanguage": "en-BD",
        "isPartOf": {
          "@id": "https://www.drrankup.com/#website"
        },
        "publisher": {
          "@id": "https://www.drrankup.com/#organization"
        },
        "about": {
          "@id": "https://www.drrankup.com/clinics/online-report-portal/#service"
        },
        "breadcrumb": {
          "@id": "https://www.drrankup.com/clinics/online-report-portal/#breadcrumb"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Online Report Portal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is a restricted website pathway for authorised people to view or download diagnostic reports after the laboratory has approved their release."
            }
          },
          {
            "@type": "Question",
            "name": "Can patients download reports from a phone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, where a mobile-accessible portal and the required identity, permission and file handling are implemented and tested."
            }
          },
          {
            "@type": "Question",
            "name": "Can a report be downloaded before approval?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Draft or unapproved results should not be available through a patient-facing portal."
            }
          },
          {
            "@type": "Question",
            "name": "Is entering a report number enough to view a file?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not by itself. The portal needs appropriate identity and document-level access checks."
            }
          },
          {
            "@type": "Question",
            "name": "Who approves the medical report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The clinic's designated qualified laboratory personnel follow its authorised review and release process; the portal does not make that decision."
            }
          },
          {
            "@type": "Question",
            "name": "What if a report is corrected after release?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The clinic needs an approved amendment process that governs the old copy, the replacement and appropriate notification."
            }
          },
          {
            "@type": "Question",
            "name": "Can several branches use one portal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if report ownership, branch context and patient permissions are implemented correctly."
            }
          },
          {
            "@type": "Question",
            "name": "Does this replace Pathology Reporting Software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Pathology Reporting Software prepares and authorises reports; this service provides controlled patient access to released copies."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.drrankup.com/clinics/online-report-portal/#breadcrumb",
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
            "name": "Online Report Portal",
            "item": "https://www.drrankup.com/clinics/online-report-portal/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.drrankup.com/clinics/online-report-portal/#service",
        "name": "Online Report Portal",
        "serviceType": "Online Report Portal",
        "url": "https://www.drrankup.com/clinics/online-report-portal/",
        "description": "Give authorised patients protected access to approved laboratory reports, with identity checks and correct release handoffs. Plan an Online Report Portal with Dr RankUp.",
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
          "@id": "https://www.drrankup.com/clinics/online-report-portal/#webpage"
        }
      }
    ]
  }
} as const;
