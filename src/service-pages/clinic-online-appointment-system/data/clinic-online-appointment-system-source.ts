// Destination-owned content from For Clinics/Clinic Website Development/Online Appointment System/01-Online-Appointment-System-CONTENT-ONLY.md
export const pageCopy = {
  "hero": {
    "heading": "Online Appointment System",
    "tagline": "Give clinic visitors a clear way to request an appointment without creating reception confusion.",
    "paragraphs": [
      "Dr RankUp designs an Online Appointment System for Bangladesh clinics that provides a booking interface linked to realistic doctor availability and staff confirmation. The system should make requests easier to handle, not pretend every form submission is an accepted booking."
    ],
    "primaryCta": "Review Your Appointment Journey",
    "secondaryCta": "Explore Clinic Website",
    "secondaryHref": "/clinics/website-development/"
  },
  "challenges": {
    "heading": "When Online Requests Create More Work for Reception",
    "html": "<p>Patients may see an outdated visiting time, choose the wrong branch or send the same request through several channels. Staff then need to reconcile calls, messages and web submissions manually.</p><p>A booking button by itself cannot prevent duplicate requests, booking conflicts or unavailable sessions. Without clear statuses, patients may arrive believing a request was confirmed when reception has not accepted it.</p>"
  },
  "outcomes": {
    "heading": "What an Online Appointment System Should Improve",
    "items": [
      {
        "label": "Clear choice:",
        "description": "Show appropriate doctors, branches and visiting options."
      },
      {
        "label": "Better expectations:",
        "description": "Distinguish a submitted request from a confirmed appointment."
      },
      {
        "label": "Less repeated entry:",
        "description": "Collect only details reception needs to act."
      },
      {
        "label": "Staff coordination:",
        "description": "Give authorised staff a request-status dashboard."
      },
      {
        "label": "Useful follow-up:",
        "description": "Provide consistent confirmation, changes or cancellation instructions."
      }
    ],
    "before": "",
    "after": "<p>Outcomes depend on real availability, staff response and integration scope. No reduction in missed visits is guaranteed.</p>"
  },
  "intent": {
    "heading": "The Bangladesh Patient Booking Journey",
    "html": "<p>A visitor may arrive from Google Maps, a doctor's profile, social media or a clinic notice. They may prefer a particular specialist or evening session, and many will use a mobile booking form.</p><p><strong>Typical journey:</strong> Find doctor → choose branch → check valid session → submit minimum details → receive pending status → get staff confirmation.</p><p>Where the clinic uses serial-based visits rather than fixed times, the interface should explain that choice. Bangla instructions can be included when translation and update ownership are agreed.</p>"
  },
  "trust": {
    "heading": "Privacy, Availability and Clinical Boundaries",
    "firstHtml": "<p>Data minimisation means patient contact details are collected for an explicit purpose and protected from unnecessary sharing. Avoid asking for symptoms, diagnoses or reports when those details are not needed to request an appointment.</p>",
    "restHtml": "<p>BM&amp;DC professional accuracy and appropriate confidentiality still matter. The booking screen must not imply that submitting a form creates medical advice, emergency triage or a guaranteed consultation.</p><p>Accessibility matters: use form validation with clear error messages, real reception contacts and a fallback process if the website or network fails. Emergencies need the clinic's own approved instructions, not an invented triage process.</p>"
  },
  "expertise": {
    "heading": "The Engineering Team Behind This Workflow",
    "html": "<p><strong>Sirajul Islam</strong>, Co-Founder, brings full-stack, database and integration expertise for secure forms and staff workflows. <strong>Hridoy Chowdhury</strong>, Founder, helps align the website journey with relevant search intent.</p><p>The clinic defines actual booking rules, staff responsibilities and accepted sessions. Software does not make clinical prioritisation decisions on its behalf.</p>",
    "founder": "Sirajul Islam"
  },
  "process": {
    "heading": "How Our Online Appointment System Service Works",
    "introductionHtml": "",
    "steps": [
      {
        "title": "1. Map the Current Booking Journey",
        "html": "<p>We review calls, reception registers, messages, branch choices and common mistakes. Staff explain whether patients book exact times, sessions or serials and what counts as confirmation.</p>"
      },
      {
        "title": "2. Define Availability and Booking Rules",
        "html": "<p>Agree on doctor-session availability, capacity, closed dates and notice periods. An availability sync and booking capacity check, where implemented, helps the website offer only eligible sessions rather than an outdated static list.</p>"
      },
      {
        "title": "3. Design a Short, Clear Patient Form",
        "html": "<p>Ask only for essential contact and visit details. Explain pending status and what happens next.</p>"
      },
      {
        "title": "4. Connect Reception and Request Statuses",
        "html": "<p>Show reception pending, confirmed, changed and cancelled requests. Limit edits and flag duplicates.</p>"
      },
      {
        "title": "5. Add Confirmations and Exception Handling",
        "html": "<p>Confirm through staff or reliable rules. Check consent and delivery when optional SMS is used.</p>"
      },
      {
        "title": "6. Test Real Cases and Train Staff",
        "html": "<p>Test full sessions, repeat submissions and changed hours. Train staff to monitor and contact patients.</p>"
      }
    ]
  },
  "mapping": {
    "heading": "Choose the Booking Model That Fits Your Clinic",
    "headers": [
      "Real clinic process",
      "Appropriate website treatment"
    ],
    "rows": [
      {
        "cells": [
          "Reception confirms every appointment",
          "Request first, explicit staff confirmation later"
        ]
      },
      {
        "cells": [
          "Fixed appointment times are genuinely maintained",
          "Select a valid available time slot"
        ]
      },
      {
        "cells": [
          "Serial or session-based practice",
          "Select a session and explain serial allocation"
        ]
      },
      {
        "cells": [
          "Several branches share visiting doctors",
          "Verify doctor and location before accepting"
        ]
      }
    ],
    "introductionHtml": "",
    "conclusionHtml": "<p>A booking integration may use an API or webhook, but the practical goal is simply to keep the booking record and reception status aligned. Do not advertise instant confirmation unless it really happens.</p>"
  },
  "related": {
    "heading": "Online Appointment System Versus Related Services",
    "headers": [
      "Service",
      "Main responsibility"
    ],
    "services": [
      {
        "key": "service-1",
        "name": "Doctor Schedule Management",
        "responsibility": "owns approved doctor rosters, recurring sessions and leave.",
        "href": "/clinics/doctor-schedule-management/"
      },
      {
        "key": "service-2",
        "name": "Patient Appointment Management",
        "responsibility": "may own deeper serial queues, walk-ins, reminders and reception operations where separately scoped.",
        "href": "/doctors/patient-appointment-management/"
      },
      {
        "key": "service-3",
        "name": "Clinic Website",
        "responsibility": "owns overall public navigation;",
        "href": "/clinics/website-development/"
      },
      {
        "key": "service-4",
        "name": "Doctor Directory",
        "responsibility": "helps patients choose the appropriate professional. Booking should connect these systems without claiming to replace them.",
        "href": "/clinics/doctor-directory/"
      }
    ],
    "introductionHtml": "",
    "noteHtml": ""
  },
  "starting": {
    "heading": "When Online Appointment System Is the Right Starting Point",
    "html": "<p>Choose this service if the website currently offers only a phone number, patients repeatedly submit incomplete requests or reception cannot distinguish pending from confirmed booking statuses.</p><p>If the real issue is inaccurate doctor visiting hours, correct Doctor Schedule Management first. If the entire clinic website is unclear or broken, start with Clinic Website before expanding booking features.</p>"
  },
  "example": {
    "heading": "Example: A Clinic With Evening Consultants",
    "html": "<p>Imagine a clinic with several part-time doctors. Its website shows general opening hours but does not reveal when each specialist is available.</p><p>A scoped Online Appointment System could let visitors choose the correct doctor and session, submit a request and receive a clear pending message. Reception would confirm it after checking capacity. This is hypothetical, not a measured reduction in workload.</p>"
  },
  "progress": {
    "heading": "Measure Booking Clarity, Not Invented Growth",
    "paragraphsHtml": [
      "Useful checks include incomplete requests, duplicate submissions, confirmation delay, cancelled sessions and complaints about misunderstood statuses. Track them over a documented period and review with reception staff.",
      "Do not send names, symptoms or identifiable appointment details to general marketing analytics. Claimed improvements require a real baseline, authorised access and comparable data."
    ]
  },
  "why": {
    "heading": "Why Dr RankUp for Booking Integration",
    "items": [
      {
        "label": "Reception reality first:",
        "description": "We map staff confirmation practices before designing a calendar."
      },
      {
        "label": "Honest statuses:",
        "description": "Patients should understand what has been requested and what has actually been accepted."
      },
      {
        "label": "Connected delivery:",
        "description": "The public form can work with roster and appointment operations while retaining clear responsibilities."
      },
      {
        "label": "Responsible implementation:",
        "description": "Sirajul handles technical planning; clinic managers approve rules, messages and staff access before launch."
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
        "question": "What is Online Appointment System?",
        "answer": "It is a website-based route for choosing an appropriate clinic visit, sending a booking request and receiving a clear status or confirmation.",
        "answerHtml": "<p>It is a website-based route for choosing an appropriate clinic visit, sending a booking request and receiving a clear status or confirmation.</p>"
      },
      {
        "question": "Does submitting a form confirm an appointment?",
        "answer": "Not always. Confirmation depends on the clinic's configured booking rules and actual staff or system approval.",
        "answerHtml": "<p>Not always. Confirmation depends on the clinic's configured booking rules and actual staff or system approval.</p>"
      },
      {
        "question": "Can patients choose a particular doctor and branch?",
        "answer": "Yes, where implemented and supported by current doctor and branch information.",
        "answerHtml": "<p>Yes, where implemented and supported by current doctor and branch information.</p>"
      },
      {
        "question": "Can the website support serial-based appointments?",
        "answer": "Yes. It can offer a valid session and explain how reception allocates serials rather than promise fixed times.",
        "answerHtml": "<p>Yes. It can offer a valid session and explain how reception allocates serials rather than promise fixed times.</p>"
      },
      {
        "question": "What if a doctor cancels a session?",
        "answer": "A connected workflow should identify affected requests and direct staff to review changes and notify patients appropriately.",
        "answerHtml": "<p>A connected workflow should identify affected requests and direct staff to review changes and notify patients appropriately.</p>"
      },
      {
        "question": "Are appointment reminders included?",
        "answer": "They can be added when messaging, consent, delivery and operational responsibilities are included in the agreed scope.",
        "answerHtml": "<p>They can be added when messaging, consent, delivery and operational responsibilities are included in the agreed scope.</p>"
      },
      {
        "question": "Does this replace reception's full appointment software?",
        "answer": "No. This service owns the public booking journey; detailed queue and staff operations may belong to separate software.",
        "answerHtml": "<p>No. This service owns the public booking journey; detailed queue and staff operations may belong to separate software.</p>"
      },
      {
        "question": "Does online booking guarantee more appointments?",
        "answer": "No. Clearer booking can reduce confusion, but real demand, eligibility, staffing and patient decisions determine outcomes.",
        "answerHtml": "<p>No. Clearer booking can reduce confusion, but real demand, eligibility, staffing and patient decisions determine outcomes.</p>"
      }
    ]
  },
  "consultation": {
    "heading": "Give Patients a Clearer Route to Request a Visit",
    "html": "<p>Review actual visiting rules, staff capacity and confusing booking steps. Dr RankUp can plan a patient-facing flow with honest confirmations and responsible handoffs.</p>",
    "primary": "Review Your Appointment Journey",
    "secondary": "Explore Doctor Schedule Management",
    "founder": "Hridoy Chowdhury",
    "role": "Founder & SEO Consultant",
    "organizations": [
      "Doctor",
      "Clinic",
      "Hospital",
      "Other Healthcare Organization"
    ],
    "secondaryHref": "/clinics/doctor-schedule-management/"
  }
} as const;
