// Page-owned display copy adapted from this service's supplied content.

export const challengeEditorial = {
  "introduction": "Patients may read a doctor's profile and still need to call repeatedly to learn which chamber is available. A generic contact form may collect requests without showing whether the slot exists or who will confirm it.",
  "listIntro": "Common booking problems include:",
  "points": [
    "Patients cannot tell which chamber has an available visit.",
    "A contact form accepts requests without checking real slots.",
    "Several assistants keep separate lists of the same requests.",
    "Patients may mistake a submitted request for a confirmed appointment.",
    "Wrong chambers, duplicate requests and unclear cancellations cause confusion."
  ],
  "conclusion": "Website booking should follow the chamber’s real confirmation process, with a clear next step for patients and staff."
} as const;

export const whyEditorial = [
  {
    "label": "Real chamber availability:",
    "description": "We plan around the schedule your staff actually uses, so website requests reflect practical visiting arrangements."
  },
  {
    "label": "Clear patient messages:",
    "description": "People can see when they have requested a visit and when staff have truly confirmed it."
  },
  {
    "label": "Agreed technical scope:",
    "description": "We explain which task belongs to the website and which needs separate booking software, with careful data handling."
  }
] as const;
