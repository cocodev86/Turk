export type PublicationState = "approved" | "proposed" | "withheld";

export type ServicePreview = Readonly<{
  slug: string;
  name: string;
  summary: string;
  category: "Grooming" | "Hair Systems";
  priceLabel: string;
  durationLabel: string;
  publicationState: PublicationState;
}>;

export const businessProfile = {
  name: "Unbreakable Quality Cutz",
  shortName: "UQC",
  ownerName: "Robert “Turk” North",
  market: "Decatur, Georgia",
  positioning: "Precision grooming, dependable service, and discreet men’s hair-system consultations.",
  addressLabel: "Decatur location details provided with confirmed appointments",
  hoursLabel: "Appointment availability shown during booking",
  phoneLabel: "Direct contact details pending final publication review",
  publicationNotice: "Exact prices, durations, hours, policies, contact details, credentials, and portfolio media remain controlled client facts and are published only after final verification."
} as const;

export const services: readonly ServicePreview[] = [
  {
    slug: "precision-cut",
    name: "Precision Cut",
    summary: "A consultation-led grooming service focused on shape, finish, and a clean result.",
    category: "Grooming",
    priceLabel: "Final price shown during booking",
    durationLabel: "Duration shown during booking",
    publicationState: "approved"
  },
  {
    slug: "cut-and-beard-detail",
    name: "Cut + Beard Detail",
    summary: "A coordinated haircut and beard-detail experience with a polished finish.",
    category: "Grooming",
    priceLabel: "Final price shown during booking",
    durationLabel: "Duration shown during booking",
    publicationState: "approved"
  },
  {
    slug: "youth-cut",
    name: "Youth Cut",
    summary: "Age-appropriate grooming delivered with clear expectations and guardian coordination.",
    category: "Grooming",
    priceLabel: "Eligibility and price shown during booking",
    durationLabel: "Duration shown during booking",
    publicationState: "approved"
  },
  {
    slug: "hair-system-consultation",
    name: "Men’s Hair System Consultation",
    summary: "A private conversation about non-surgical hair-replacement goals, maintenance, and next steps.",
    category: "Hair Systems",
    priceLabel: "Consultation terms shown during booking",
    durationLabel: "Duration shown during booking",
    publicationState: "approved"
  }
] as const;

export const publicPages = {
  services: {
    title: "Services built around a clean result.",
    eyebrow: "Service menu",
    intro: "Review the current service categories, then use the booking experience for live eligibility, availability, duration, and final pricing."
  },
  "hair-systems": {
    title: "A discreet path to a confident look.",
    eyebrow: "Men’s Hair Systems",
    intro: "Learn about non-surgical hair replacement in a respectful, consultation-led setting. UQC does not present cosmetic barber services as medical treatment or guarantee permanent results."
  },
  gallery: {
    title: "Proof should be real.",
    eyebrow: "Gallery",
    intro: "Only authentic, consented client work will appear here. Concept imagery and generated mockups are never represented as actual customer outcomes."
  },
  about: {
    title: "Built on precision and consistency.",
    eyebrow: "About Turk",
    intro: "Robert “Turk” North leads Unbreakable Quality Cutz with a focus on dependable appointments, clear service expectations, and work clients can feel confident wearing. Credential-specific claims remain withheld until final evidence review."
  },
  reviews: {
    title: "Reviews connected to real appointments.",
    eyebrow: "Customer feedback",
    intro: "UQC’s first-party review model is designed for eligible completed appointments, neutral moderation, and transparent publication. No fabricated or selectively filtered testimonials are used."
  },
  contact: {
    title: "Plan your visit in Decatur.",
    eyebrow: "Contact and location",
    intro: "Live appointment availability is the authoritative scheduling source. Final public address, phone, email, parking, and operating-hour details remain under client publication review."
  },
  policies: {
    title: "Clear rules before you confirm.",
    eyebrow: "Booking policies",
    intro: "Deposit, cancellation, lateness, no-show, rescheduling, and service-preparation terms will be versioned and displayed before appointment confirmation."
  },
  privacy: {
    title: "Collect less. Protect what matters.",
    eyebrow: "Privacy",
    intro: "The platform is designed to minimize personal information, separate private hair-system inquiries from public content, and restrict protected data to authorized use."
  },
  accessibility: {
    title: "A booking experience designed for access.",
    eyebrow: "Accessibility",
    intro: "UQC targets WCAG 2.2 AA with semantic structure, keyboard-complete interactions, visible focus, readable contrast, clear errors, reduced-motion support, and an accessible support path."
  }
} as const;

export type PublicPageSlug = keyof typeof publicPages;
