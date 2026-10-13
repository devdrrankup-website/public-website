// Destination-owned content from For Clinics/Clinic Website Development/Online Report Portal/01-Online-Report-Portal-CONTENT-ONLY.md
export const pageCopy = {
  "hero": {
    "heading": "Online Report Portal",
    "tagline": "Let authorised patients access approved diagnostic reports without exposing confidential results.",
    "paragraphs": [
      "Dr RankUp helps Bangladesh clinics plan an Online Report Portal connected to existing laboratory processes. It makes released documents easier to obtain while leaving clinical decisions with authorised clinic staff."
    ],
    "primaryCta": "Review Your Report Access Journey",
    "secondaryCta": "Explore Pathology Reporting Software",
    "secondaryHref": "/clinics/pathology-reporting/"
  },
  "challenges": {
    "heading": "When Report Collection Is Confusing or Unsafe",
    "html": "<p>Patients may travel to a branch only to learn a report is not ready, call repeatedly for updates or receive documents through informal messages. Staff may face requests from the wrong person or send a file before permission.</p><p>A public download link is unsafe without controlled release, verified identity and the correct document.</p>"
  },
  "outcomes": {
    "heading": "What Better Online Report Access Should Achieve",
    "items": [
      {
        "label": "Clear status:",
        "description": "Explain when a report is ready rather than reveal unfinished work."
      },
      {
        "label": "Safer access:",
        "description": "Show the right released report to the authorised person."
      },
      {
        "label": "Less friction:",
        "description": "Support retrieval without another avoidable branch visit."
      },
      {
        "label": "Staff clarity:",
        "description": "Separate report availability from laboratory processing steps."
      },
      {
        "label": "Traceable changes:",
        "description": "Handle replacements and revoked access deliberately."
      }
    ],
    "before": "",
    "after": "<p>These are process aims, not proof of faster lab turnaround or clinical safety improvements.</p>"
  },
  "intent": {
    "heading": "Report Collection in the Bangladesh Clinic Journey",
    "html": "<p>A patient may undergo pathology tests at one branch, receive a receipt with a collection reference and later look for a report using a phone. Some need printed copies.</p><p><strong>Typical journey:</strong> Test completed → authorised laboratory release → patient identity check → secure portal access → view or download → suitable follow-up instruction.</p><p>For multiple branches, the portal should identify which organisation owns the report. Weak connectivity and forgotten references need a practical, privacy-preserving support process.</p>"
  },
  "trust": {
    "heading": "Medical Confidentiality and Report Approval Are Essential",
    "firstHtml": "<p>Medical results are sensitive. Access control must check entitlement to each individual report; knowing or guessing a report number is not document-level permission. Secure links need session expiry and careful sharing rules where appropriate.</p>",
    "restHtml": "<p>The laboratory remains responsible for result accuracy, professional review and approved release. WHO laboratory quality guidance recommends an authorised check before reports are issued. A portal must not publish draft findings or interpret results as medical advice.</p><p>The clinic should establish identity verification, retention, correction, urgent-result escalation and breach-response policies with qualified reviewers. Public analytics must not record test results or identifiable patient information.</p>"
  },
  "expertise": {
    "heading": "The Engineering and Search Team Behind Dr RankUp",
    "html": "<p><strong>Sirajul Islam</strong>, Co-Founder, brings engineering experience in authentication, controlled document storage and system integration. <strong>Hridoy Chowdhury</strong>, Founder, helps ensure the public information explains the report access path without exposing private content.</p><p>Qualified laboratory staff and clinic management own release decisions, identity policy and medical wording; Dr RankUp does not certify reports or diagnose patients.</p>",
    "founder": "Sirajul Islam"
  },
  "process": {
    "heading": "How Our Online Report Portal Service Works",
    "introductionHtml": "",
    "steps": [
      {
        "title": "1. Map the Existing Report Release Process",
        "html": "<p>Follow a report from completed test to approved release. Identify staff checkpoints and failure cases.</p>"
      },
      {
        "title": "2. Define Who May View Each Report",
        "html": "<p>Agree on patient or representative identity checks, consent where applicable and allowed access periods. An authorisation matrix distinguishes patient access, reception support and laboratory approval.</p>"
      },
      {
        "title": "3. Design the Patient Access Journey",
        "html": "<p>Create a mobile-friendly page that explains verification steps, report-ready status and safe support options. Avoid presenting a report as downloadable while it remains a draft or awaits approval.</p>"
      },
      {
        "title": "4. Connect Approved Reports to Secure Delivery",
        "html": "<p>Connect only released files through an authenticated portal. Check access for every document.</p>"
      },
      {
        "title": "5. Handle Revisions, Errors and Failed Access",
        "html": "<p>Record replacements and failed access. Decide when an old report is withdrawn and who is informed.</p>"
      },
      {
        "title": "6. Test Misuse Cases and Train Staff",
        "html": "<p>Test wrong identity, expired sessions, guessed references and poor connections. Train staff on recovery.</p>"
      }
    ]
  },
  "mapping": {
    "heading": "Choose a Safe Report Delivery Model",
    "headers": [
      "Clinic's real need",
      "Appropriate portal choice"
    ],
    "rows": [
      {
        "cells": [
          "Existing reporting system produces approved PDFs",
          "Controlled integration after release"
        ]
      },
      {
        "cells": [
          "Several branches issue reports",
          "Branch-aware identity and report ownership checks"
        ]
      },
      {
        "cells": [
          "Some patients need paper copies",
          "Retain an authorised in-person alternative"
        ]
      },
      {
        "cells": [
          "Staff handle incorrect or replaced reports",
          "Review, revoke and reissue process"
        ]
      }
    ],
    "introductionHtml": "",
    "conclusionHtml": "<p>Authentication alone is insufficient without checking permission on every file. A short-lived access link, role-based permissions and audit logs can help, but the clinic must test the actual system against unauthorised access.</p>"
  },
  "related": {
    "heading": "Online Report Portal Versus Related Services",
    "headers": [
      "Service",
      "Main responsibility"
    ],
    "services": [
      {
        "key": "service-1",
        "name": "Pathology Reporting Software",
        "responsibility": "owns clinical result entry, authorised review, sign-off and released versions.",
        "href": "/clinics/pathology-reporting/"
      },
      {
        "key": "service-2",
        "name": "Diagnostic Management",
        "responsibility": "owns test orders, sample movement and department status.",
        "href": "/clinics/diagnostic-management/"
      },
      {
        "key": "service-3",
        "name": "Clinic Website",
        "responsibility": "owns the general public website and navigation.",
        "href": "/clinics/website-development/"
      },
      {
        "key": "service-4",
        "name": "Clinic Billing Software",
        "responsibility": "owns charges and payment records; paying a bill should never override report-release approval.",
        "href": "/clinics/billing-management/"
      }
    ],
    "introductionHtml": "",
    "noteHtml": "<p>Clear separation helps prevent the website from accidentally becoming a clinical reporting workstation.</p>"
  },
  "starting": {
    "heading": "When a Report Portal Is the Right Starting Point",
    "html": "<p>Consider this service when patients repeatedly ask whether reports are ready, several branches issue documents or informal PDF sharing causes confidentiality concerns. It works only when the laboratory already has a dependable approved-report process.</p><p>If results lack clear sign-off or corrections are uncontrolled, begin with Pathology Reporting Software. If test samples are regularly misplaced, review Diagnostic Management first.</p>"
  },
  "example": {
    "heading": "Example: Reports From Two Collection Branches",
    "html": "<p>Imagine a diagnostic clinic receiving samples from two branches while one laboratory authorises results. Patients currently call whichever branch collected their sample.</p><p>A portal could show a safe access route after laboratory release, with identity checks tied to the correct document. It would not approve findings or automatically send critical results. This is a hypothetical design, not a completed client case.</p>"
  },
  "progress": {
    "heading": "Prove Safe Access With Actual Checks",
    "paragraphsHtml": [
      "Review access logs, failed identity checks and whether unreleased or withdrawn reports stay inaccessible. Record test cases and the approved reviewer of each control.",
      "Do not claim 'fully secure', compliant or zero leakage without production evidence. A privacy impact review, vulnerability testing and recovery drills remain release conditions."
    ]
  },
  "why": {
    "heading": "Why Dr RankUp for Report Portals",
    "items": [
      {
        "label": "Release first, access second:",
        "description": "Laboratory approval is treated as a prerequisite, not a website shortcut."
      },
      {
        "label": "Patient-friendly flow:",
        "description": "Explain identity checks and status in practical language for mobile visitors."
      },
      {
        "label": "Clear ownership:",
        "description": "Sirajul scopes technical delivery; authorised clinic and laboratory staff approve records, permissions and corrections."
      },
      {
        "label": "Verifiable promises:",
        "description": "Offline access, instant downloads or specific security certification are never promised without tests and proof."
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
        "question": "What is Online Report Portal?",
        "answer": "It is a restricted website pathway for authorised people to view or download diagnostic reports after the laboratory has approved their release.",
        "answerHtml": "<p>It is a restricted website pathway for authorised people to view or download diagnostic reports after the laboratory has approved their release.</p>"
      },
      {
        "question": "Can patients download reports from a phone?",
        "answer": "Yes, where a mobile-accessible portal and the required identity, permission and file handling are implemented and tested.",
        "answerHtml": "<p>Yes, where a mobile-accessible portal and the required identity, permission and file handling are implemented and tested.</p>"
      },
      {
        "question": "Can a report be downloaded before approval?",
        "answer": "No. Draft or unapproved results should not be available through a patient-facing portal.",
        "answerHtml": "<p>No. Draft or unapproved results should not be available through a patient-facing portal.</p>"
      },
      {
        "question": "Is entering a report number enough to view a file?",
        "answer": "Not by itself. The portal needs appropriate identity and document-level access checks.",
        "answerHtml": "<p>Not by itself. The portal needs appropriate identity and document-level access checks.</p>"
      },
      {
        "question": "Who approves the medical report?",
        "answer": "The clinic's designated qualified laboratory personnel follow its authorised review and release process; the portal does not make that decision.",
        "answerHtml": "<p>The clinic's designated qualified laboratory personnel follow its authorised review and release process; the portal does not make that decision.</p>"
      },
      {
        "question": "What if a report is corrected after release?",
        "answer": "The clinic needs an approved amendment process that governs the old copy, the replacement and appropriate notification.",
        "answerHtml": "<p>The clinic needs an approved amendment process that governs the old copy, the replacement and appropriate notification.</p>"
      },
      {
        "question": "Can several branches use one portal?",
        "answer": "Yes, if report ownership, branch context and patient permissions are implemented correctly.",
        "answerHtml": "<p>Yes, if report ownership, branch context and patient permissions are implemented correctly.</p>"
      },
      {
        "question": "Does this replace Pathology Reporting Software?",
        "answer": "No. Pathology Reporting Software prepares and authorises reports; this service provides controlled patient access to released copies.",
        "answerHtml": "<p>No. Pathology Reporting Software prepares and authorises reports; this service provides controlled patient access to released copies.</p>"
      }
    ]
  },
  "consultation": {
    "heading": "Make Report Access Easier Without Sacrificing Privacy",
    "html": "<p>Start with your laboratory's real sign-off process and patient identity requirements. Dr RankUp can scope a practical portal that respects clinical authority and confidential records.</p>",
    "primary": "Review Your Report Access Journey",
    "secondary": "Explore Pathology Reporting Software",
    "founder": "Hridoy Chowdhury",
    "role": "Founder & SEO Consultant",
    "organizations": [
      "Doctor",
      "Clinic",
      "Hospital",
      "Other Healthcare Organization"
    ],
    "secondaryHref": "/clinics/pathology-reporting/"
  }
} as const;
