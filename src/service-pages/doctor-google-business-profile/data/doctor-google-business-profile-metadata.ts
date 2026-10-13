// Destination-owned metadata from For Doctors/Doctor Digital Marketing/Doctor Google Business Profile/03-Doctor-GBP-META-CANONICAL-SCHEMA.md
export const metadata = {
  "title": "Doctor Google Business Profile Services in Bangladesh | Dr RankUp",
  "description": "Doctor Google Business Profile setup, verification support and responsible listing management in Bangladesh. Review your practice details with Dr RankUp.",
  "canonical": "https://www.drrankup.com/doctors/google-business-profile/",
  "twitterCard": "summary_large_image",
  "schema": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.drrankup.com/#organization",
        "name": "Dr RankUp",
        "url": "https://www.drrankup.com/",
        "description": "Healthcare-focused SEO, marketing, website and software services for doctors, clinics and hospitals in Bangladesh.",
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
        }
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
        "@id": "https://www.drrankup.com/doctors/google-business-profile/#webpage",
        "url": "https://www.drrankup.com/doctors/google-business-profile/",
        "name": "Doctor Google Business Profile Optimization in Bangladesh",
        "headline": "Doctor Google Business Profile Optimization in Bangladesh",
        "description": "Doctor Google Business Profile setup, verification support and responsible listing management in Bangladesh. Review your practice details with Dr RankUp.",
        "inLanguage": "en-BD",
        "isPartOf": {
          "@id": "https://www.drrankup.com/#website"
        },
        "publisher": {
          "@id": "https://www.drrankup.com/#organization"
        },
        "about": {
          "@id": "https://www.drrankup.com/doctors/google-business-profile/#service"
        },
        "breadcrumb": {
          "@id": "https://www.drrankup.com/doctors/google-business-profile/#breadcrumb"
        },
        "mentions": [
          {
            "@id": "https://www.drrankup.com/#person-hridoy-chowdhury"
          }
        ],
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can a doctor have an individual Business Profile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, when Google's public-facing practitioner and location requirements are met."
            }
          },
          {
            "@type": "Question",
            "name": "Does every chamber need a separate listing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not automatically. Eligibility and the real arrangement must be evaluated for each location."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help verify an existing profile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, within the agreed scope. Google selects the verification methods available."
            }
          },
          {
            "@type": "Question",
            "name": "Who controls the profile after setup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The doctor or authorised business retains ownership or co-ownership, with agreed manager access."
            }
          },
          {
            "@type": "Question",
            "name": "Can I add my hospital name to the listing title?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not by default. At a multi-practitioner location, the individual practitioner's listing name should not include the organisation name. Solo branded arrangements follow different rules."
            }
          },
          {
            "@type": "Question",
            "name": "Can you manage reviews and profile changes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With authorised access, we can establish privacy-aware replies and monitor changes. We do not create, purchase or incentivise reviews."
            }
          },
          {
            "@type": "Question",
            "name": "Is a Business Profile enough for Doctor Local SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No; wider local search involves website and chamber information."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.drrankup.com/doctors/google-business-profile/#breadcrumb",
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
            "name": "Doctor Google Business Profile",
            "item": "https://www.drrankup.com/doctors/google-business-profile/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.drrankup.com/doctors/google-business-profile/#service",
        "name": "Doctor Google Business Profile Optimization and Management",
        "serviceType": "Doctor Google Business Profile Management",
        "description": "Practitioner eligibility assessment, legitimate ownership and verification support, profile field accuracy, genuine media, responsible review replies and listing maintenance for doctors in Bangladesh.",
        "provider": {
          "@id": "https://www.drrankup.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Bangladesh"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Doctors and practice decision-makers in Bangladesh"
        },
        "mainEntityOfPage": {
          "@id": "https://www.drrankup.com/doctors/google-business-profile/#webpage"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.drrankup.com/#person-hridoy-chowdhury",
        "name": "Hridoy Chowdhury",
        "jobTitle": "SEO Consultant",
        "description": "SEO consultant with 7+ years of general SEO experience including local search and Google Business Profile optimization.",
        "knowsAbout": [
          "Local SEO",
          "Google Business Profile optimization",
          "Entity SEO",
          "Technical SEO"
        ],
        "url": "https://hridoychowdhury.com/"
      }
    ]
  }
} as const;
