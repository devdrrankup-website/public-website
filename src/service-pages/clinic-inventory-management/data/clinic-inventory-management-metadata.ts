// Destination-owned metadata from For Clinics/Clinic Management Software/Clinic Inventory Management/02-Clinic-Inventory-Management-META-CANONICAL-SCHEMA.md
export const metadata = {
  "title": "Clinic Inventory Management Bangladesh | Dr RankUp",
  "description": "Track reagents, kits, clinic supplies, expiry dates and branch stock movements with clear staff controls. Plan Clinic Inventory Management with Dr RankUp.",
  "canonical": "https://www.drrankup.com/clinics/inventory-management/",
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
        "@id": "https://www.drrankup.com/clinics/inventory-management/#webpage",
        "url": "https://www.drrankup.com/clinics/inventory-management/",
        "name": "Clinic Inventory Management",
        "description": "Track reagents, kits, clinic supplies, expiry dates and branch stock movements with clear staff controls. Plan Clinic Inventory Management with Dr RankUp.",
        "inLanguage": "en-BD",
        "isPartOf": {
          "@id": "https://www.drrankup.com/#website"
        },
        "publisher": {
          "@id": "https://www.drrankup.com/#organization"
        },
        "about": {
          "@id": "https://www.drrankup.com/clinics/inventory-management/#service"
        },
        "breadcrumb": {
          "@id": "https://www.drrankup.com/clinics/inventory-management/#breadcrumb"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Clinic Inventory Management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is a workflow for monitoring clinic supplies, purchases, receipts, stock movements, expiries and reorder needs."
            }
          },
          {
            "@type": "Question",
            "name": "Can we track reagents and test kits by batch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, where implemented, batch tracking can keep quantities and expiry details visible to authorised staff."
            }
          },
          {
            "@type": "Question",
            "name": "Does it automatically decide if an expired item is safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Qualified clinic or laboratory staff follow approved handling and disposal procedures."
            }
          },
          {
            "@type": "Question",
            "name": "Can multiple branches track transfers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A scoped system can record dispatch, receipt and remaining quantities by location."
            }
          },
          {
            "@type": "Question",
            "name": "Can it remind us to reorder supplies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if clinic-defined minimum levels and alert rules are included and maintained."
            }
          },
          {
            "@type": "Question",
            "name": "Can stock deduct automatically when a test runs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "That is possible only after validated test-to-supply mappings and actual system integration."
            }
          },
          {
            "@type": "Question",
            "name": "Is this the same as pharmacy management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Clinic supplies and reagent controls are distinct from medicine dispensing and pharmacy-specific responsibilities."
            }
          },
          {
            "@type": "Question",
            "name": "Will it guarantee no stockouts or waste?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Outcomes still depend on physical stock counts, suppliers, storage conditions and trained staff."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.drrankup.com/clinics/inventory-management/#breadcrumb",
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
            "name": "Clinic Inventory Management",
            "item": "https://www.drrankup.com/clinics/inventory-management/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.drrankup.com/clinics/inventory-management/#service",
        "name": "Clinic Inventory Management",
        "serviceType": "Clinic Inventory Management",
        "url": "https://www.drrankup.com/clinics/inventory-management/",
        "description": "Track reagents, kits, clinic supplies, expiry dates and branch stock movements with clear staff controls. Plan Clinic Inventory Management with Dr RankUp.",
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
          "@id": "https://www.drrankup.com/clinics/inventory-management/#webpage"
        }
      }
    ]
  }
} as const;
