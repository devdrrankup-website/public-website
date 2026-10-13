// Destination-owned content from For Doctors/Doctor Chamber Management Software/Patient Fee Management/01-Patient-Fee-Management-CONTENT-ONLY.md
export const pageCopy = {
  "hero": {
    "heading": "Patient Fee Management Software for Doctors in Bangladesh",
    "tagline": "Track consultation fees, confirm payments and close each chamber session with clearer records.",
    "paragraphs": [
      "Dr RankUp helps doctors in Bangladesh design patient fee-management workflows for new consultations, follow-ups, report reviews, receipts, discounts and daily collections. The goal is clearer charges, collections and dues—not promised earnings.",
      "Consultation Fees · Follow-Up Rules · Payment Records · Chamber-Wise Reporting"
    ],
    "primaryCta": "Review Your Patient Fee Workflow",
    "secondaryCta": "Explore Patient Appointment Management",
    "secondaryHref": "/doctors/patient-appointment-management/"
  },
  "challenges": {
    "heading": "When Consultation Fees Become Difficult to Trace",
    "html": "<p>An assistant may track cash, bKash, Nagad and follow-ups in one notebook. Fees can differ across chambers.</p><p>Unrecorded discounts, missing receipts, reused transaction references and mismatched daily totals create confusion. Every visit needs a reviewable payment record.</p>"
  },
  "outcomes": {
    "heading": "What Better Patient Fee Management Helps You Achieve",
    "items": [
      {
        "label": "Fewer fee disputes:",
        "description": "Visit-type fee rules distinguish new, follow-up and report-review visits before collection."
      },
      {
        "label": "Clearer payment records:",
        "description": "Payment-status tracking separates collected, partly paid, due and refunded amounts."
      },
      {
        "label": "Faster counter work:",
        "description": "Authorized assistants can confirm charges and issue receipts without searching multiple notebooks."
      },
      {
        "label": "Chamber-level visibility:",
        "description": "Chamber-wise collection reports keep different locations and sessions separate."
      },
      {
        "label": "Accountable adjustments:",
        "description": "Discount approval and an audit trail explain who changed an amount and why."
      }
    ],
    "before": "",
    "after": "<p>Results depend on implementation.</p>"
  },
  "intent": {
    "heading": "How Patient Fees Move Through a Bangladesh Doctor's Chamber",
    "html": "<p>New consultations, follow-ups and report reviews may carry different fees. Chambers may differ; the doctor sets the policy, not the software.</p><p>A practical journey is: <strong>Patient visit → fee rule → amount confirmed → payment recorded → receipt → session closing</strong>. Cash and digital payments require different verification. For a personal bKash or Nagad wallet, an assistant may manually verify a reference; a merchant gateway may supply a confirmed transaction status. Those records are not equivalent.</p>"
  },
  "trust": {
    "heading": "Protect Payment Accuracy and Patient Information",
    "firstHtml": "<p>Fee records may expose private patient details. Collect only what the transaction needs, restrict visibility and avoid placing private information in public links or analytics events.</p>",
    "restHtml": "<p>Role-based access controls allow assistants to collect approved amounts while reserving fee-policy changes, refunds or larger waivers for authorized staff. An audit trail should preserve the original amount, adjustment, actor and time. Never mark unverified transfers paid or promise untested offline capability.</p>"
  },
  "expertise": {
    "heading": "Software Engineering Expertise Behind Dr RankUp",
    "html": "<p><strong>Sirajul Islam, Co-Founder</strong>, brings full-stack development and workflow-engineering expertise to module planning. Relevant work includes database design, transaction states, role-based permissions, application integration and secure account access.</p><p>This does not establish a launched product or a live gateway. The owner sets the fee policy.</p>",
    "founder": "Sirajul Islam"
  },
  "process": {
    "heading": "How We Design a Patient Fee Management Workflow",
    "introductionHtml": "",
    "steps": [
      {
        "title": "1. Audit the Existing Collection Journey",
        "html": "<p>Review visit fees, chambers, receipts, staff roles and daily closing to find mistakes.</p>"
      },
      {
        "title": "2. Configure Visit-Type Fee Rules",
        "html": "<p>Set new and follow-up charges for each chamber with an agreed validity period.</p>"
      },
      {
        "title": "3. Set Payment States and Verification",
        "html": "<p>Show paid, part-paid, due, waived and refunded amounts; distinguish checked wallet payments from confirmed transfers.</p>"
      },
      {
        "title": "4. Control Discounts and Receipts",
        "html": "<p>Limit discounts and reversals to approved staff. Keep numbered receipts and scoped printer requirements.</p>"
      },
      {
        "title": "5. Design the Fast Front-Desk Screen",
        "html": "<p>Show visit, amount due, payment method and next step; flag reused payment references.</p>"
      },
      {
        "title": "6. Build Session Reconciliation",
        "html": "<p>Compare expected charges with cash, confirmed digital payments, dues, waivers and refunds. A mismatch remains visible for investigation rather than disappearing through a silent edit.</p>"
      },
      {
        "title": "7. Test, Train and Refine",
        "html": "<p>Test partial payments, outages and multi-chamber closing. Agree on recovery and recorded corrections.</p>"
      }
    ]
  },
  "mapping": {
    "heading": "Choose the Right Fee Rule for Each Visit",
    "headers": [
      "Visit situation",
      "Suitable rule and practical purpose"
    ],
    "rows": [
      {
        "cells": [
          "New consultation",
          "Apply the agreed first-visit fee consistently"
        ]
      },
      {
        "cells": [
          "Follow-up within a defined window",
          "Use configured validity and reduced/free-fee rules"
        ]
      },
      {
        "cells": [
          "Report review",
          "Display the doctor's chosen report-showing charge"
        ]
      },
      {
        "cells": [
          "Different chamber",
          "Load the location-specific consultation fee"
        ]
      },
      {
        "cells": [
          "Discount or compassionate waiver",
          "Require an authorized reason and record"
        ]
      },
      {
        "cells": [
          "Part payment",
          "Preserve the outstanding balance and status"
        ]
      }
    ],
    "introductionHtml": "",
    "conclusionHtml": "<p>Rules reduce counter guesswork.</p>"
  },
  "related": {
    "heading": "Patient Fee Management Versus Other Chamber Modules",
    "headers": [
      "Service",
      "Main responsibility"
    ],
    "services": [
      {
        "key": "service-1",
        "name": "Patient Appointment Management",
        "responsibility": "owns booking, serials, walk-ins and queues; it may pass a visit reference to the fee module.",
        "href": "/doctors/patient-appointment-management/"
      },
      {
        "key": "service-2",
        "name": "Doctor Scheduling Software",
        "responsibility": "defines availability.",
        "href": "/doctors/scheduling-software/"
      },
      {
        "key": "service-3",
        "name": "Patient Medical Record Software",
        "responsibility": "The patient clinical history, separate from fee records",
        "href": "/doctors/patient-medical-record-software/"
      },
      {
        "key": "service-4",
        "name": "E-Prescription Software",
        "responsibility": "Prescriptions and medicine instructions",
        "href": "/doctors/e-prescription-software/"
      },
      {
        "key": "service-5",
        "name": "Clinic Billing Software",
        "responsibility": "handles broader invoicing for diagnostics, departments, multiple providers and organization-wide accounts. Modules may connect without merging their roles.",
        "href": "/clinics/billing-management/"
      }
    ],
    "introductionHtml": "",
    "noteHtml": ""
  },
  "starting": {
    "heading": "When This Module Is the Right Starting Point",
    "html": "<p>Start here if assistants debate new versus follow-up fees, use separate cash and mobile-payment notebooks, cannot explain discounts, or struggle to close a chamber session.</p><p>If patients mainly need serials, begin with <strong>Patient Appointment Management</strong>. If the problem is diagnostic invoices or clinic-wide accounts, assess <strong>Clinic Billing Software</strong> instead. This module addresses visit-level payment gaps.</p>"
  },
  "example": {
    "heading": "Example: One Doctor, Two Chambers, Different Fee Rules",
    "html": "<p><em>Hypothetical process—not a client case study.</em></p><p>Imagine a doctor seeing new patients at Chamber A and follow-ups at Chamber B. A patient pays part of the charge through a personal mobile wallet, but the assistant cannot initially confirm the transfer.</p><p>A configured system could retain the amount as pending, flag a duplicate reference, record manual verification and produce a chamber-wise closing summary. If a facility takes an agreed share, settlement rules could show the doctor and chamber portions separately without changing what the patient was charged.</p>"
  },
  "progress": {
    "heading": "Measure Financial Clarity Without Invented Results",
    "paragraphsHtml": [
      "Review payment differences, corrections, discounts, receipts and closing time. Use a stated reporting period and chamber scope; compare real records, not estimated success percentages.",
      "A useful implementation handoff can document fee policies, staff permissions, test scenarios and sample closing reports. Dr RankUp does not invent savings figures, successful payment rates or client case studies."
    ]
  },
  "why": {
    "heading": "Why Dr RankUp for Patient Fee Workflows?",
    "items": [
      {
        "label": "Visit-first design:",
        "description": "Each charge belongs to a real consultation context, rather than an unrelated accounting entry."
      },
      {
        "label": "Bangladesh-aware processes:",
        "description": "Cash, bKash, Nagad, follow-up windows and multi-chamber practice are considered without assuming one payment setup fits everyone."
      },
      {
        "label": "Engineering clarity:",
        "description": "Sirajul Islam's software expertise supports controlled transaction records, integrations, reconciliation and access rules. Scope and testing are agreed before delivery."
      }
    ],
    "before": "",
    "after": ""
  },
  "faq": {
    "heading": "Frequently Asked Questions",
    "preface": "",
    "items": [
      {
        "question": "What is patient fee management software?",
        "answer": "It helps a doctor or chamber organize consultation-fee rules, payment status, receipts, adjustments and daily collections.",
        "answerHtml": "<p>It helps a doctor or chamber organize consultation-fee rules, payment status, receipts, adjustments and daily collections.</p>"
      },
      {
        "question": "Can new and follow-up patients have different fees?",
        "answer": "Yes, where configured. The doctor sets visit types, fee amounts and any follow-up validity window.",
        "answerHtml": "<p>Yes, where configured. The doctor sets visit types, fee amounts and any follow-up validity window.</p>"
      },
      {
        "question": "Can different chambers use different fee rules?",
        "answer": "Yes. Chamber-specific fee schedules can keep location and session charges separate.",
        "answerHtml": "<p>Yes. Chamber-specific fee schedules can keep location and session charges separate.</p>"
      },
      {
        "question": "Does it verify bKash or Nagad payments automatically?",
        "answer": "Not necessarily. Personal-wallet payments may need manual verification; automatic confirmation requires an appropriate integration.",
        "answerHtml": "<p>Not necessarily. Personal-wallet payments may need manual verification; automatic confirmation requires an appropriate integration.</p>"
      },
      {
        "question": "Can assistants approve discounts or refunds?",
        "answer": "Only within assigned permissions. Larger changes can require doctor or administrator approval and an audit trail.",
        "answerHtml": "<p>Only within assigned permissions. Larger changes can require doctor or administrator approval and an audit trail.</p>"
      },
      {
        "question": "Can it track partial payments and print receipts?",
        "answer": "Those workflows can be designed into the agreed scope. Receipts must reflect collected amounts and remaining dues accurately.",
        "answerHtml": "<p>Those workflows can be designed into the agreed scope. Receipts must reflect collected amounts and remaining dues accurately.</p>"
      },
      {
        "question": "Is this the same as clinic billing software?",
        "answer": "No. This module tracks visit-level consultation fees; clinic billing covers wider organizational invoicing and accounts.",
        "answerHtml": "<p>No. This module tracks visit-level consultation fees; clinic billing covers wider organizational invoicing and accounts.</p>"
      },
      {
        "question": "What if the internet fails during collection?",
        "answer": "The fallback depends on the tested implementation. Unverified digital transfers must not silently become paid records.",
        "answerHtml": "<p>The fallback depends on the tested implementation. Unverified digital transfers must not silently become paid records.</p>"
      }
    ]
  },
  "consultation": {
    "heading": "Make Every Consultation Fee Easier to Reconcile",
    "html": "<p>Give patients clearer receipts and staff a traceable collection process. Dr RankUp can review your chamber's fee rules, payment verification and closing workflow, then define an appropriate implementation scope.</p>",
    "primary": "Review Your Patient Fee Workflow",
    "secondary": "Explore Patient Appointment Management",
    "founder": "Hridoy Chowdhury",
    "role": "Founder & SEO Consultant",
    "organizations": [
      "Doctor",
      "Clinic",
      "Hospital",
      "Other Healthcare Organization"
    ],
    "secondaryHref": "/doctors/patient-appointment-management/"
  }
} as const;
