# Unbreakable Quality Cutz
## Product, UX, Booking System, and Technical Blueprint

**Status:** Research and design specification only — no production code  
**Prepared for:** Unbreakable Quality Cutz  
**Owner:** Robert “Turk” North  
**Market:** Decatur, Georgia and nearby east-metro Atlanta communities  
**Development partner:** Metaphor Automation Consulting  
**Research access date:** July 19, 2026  

> This document is a product and implementation blueprint, not legal advice. Georgia counsel should review customer-facing policies, liability language, SMS consent, education terms, hair-system disclaimers, and the Portfolio Development and Software License Agreement before launch.

---

# 1. Executive Summary

Unbreakable Quality Cutz should launch as a mobile-first neighborhood barber platform built around one promise: **precision cuts, dependable scheduling, and a booking experience that respects the customer’s time.**

The MVP should combine:

1. A visually strong public landing page.
2. Service, barber, gallery, hair-system, education, and contact content.
3. A guest-friendly booking flow requiring no app download.
4. Optional customer accounts for repeat booking and appointment management.
5. A lightweight owner dashboard for appointments, services, staff, reviews, settings, and basic analytics.
6. A low-cost managed architecture using Next.js, TypeScript, PostgreSQL/Supabase, Stripe, transactional email, optional SMS, and Vercel.

The product should not attempt to recreate a full point-of-sale, payroll, inventory, franchise, or enterprise salon-management suite.

## Primary recommendation

Position the business as **the trusted neighborhood standard for clean, consistent grooming—upgraded with modern convenience.** The visual system should combine dark charcoal, warm concrete, brushed-steel details, crisp typography, authentic Black grooming photography, and restrained accent color.

## Critical MVP decisions

- Permit guest booking.
- Require authentication only for the dashboard and optional customer-account features.
- Use deposits selectively rather than for every service.
- Treat hair-system installation as a consultation-led, high-duration service.
- Make appointments transactional and concurrency-safe to prevent double booking.
- Archive operational records instead of hard-deleting records tied to appointments.
- Keep analytics useful and limited.

---

# 2. Research Classification

## Verified business facts supplied by the client

- Business: Unbreakable Quality Cutz
- Owner: Robert “Turk” North
- Location market: Decatur, Georgia
- Phone: (678) 754-5413
- Known services: men’s cuts, lineups, beard trims/shaves, male hair-replacement work, and barber education
- Metaphor Automation Consulting is providing the approved initial labor without its normal development fee, subject to separate written terms.

## Research-supported findings

- Current Decatur booking listings commonly show adult cuts around $40–$50, combinations around $50–$65, and many standard appointments between 30 and 60 minutes.
- Specialized hair-unit listings in Decatur are materially higher-priced, longer-duration services and may require substantial deposits.
- Booking platforms emphasize real-time availability, automated reminders, self-service rescheduling, deposits/no-show protection, waitlists, and customer profiles.
- Georgia requires licensed barber shops and practitioners to display licensing and inspection information and operate within applicable sanitation and scope-of-practice rules.

## Assumptions requiring confirmation

- Robert is the sole owner and initial primary barber.
- The business initially operates from one fixed location.
- Prices, operating hours, address, licensing identifiers, policies, and education credentials are not yet approved for publication.
- Stripe, Resend/Postmark, Twilio, Supabase, and Vercel are proposed vendors, not selected accounts.

---

# 3. Market Research Summary

## Local price observations

Observed Decatur-area listings support the following research ranges. These are market observations, not proposed final prices.

| Service category | Observed market pattern | Typical duration pattern |
|---|---:|---:|
| Adult haircut | Approximately $40–$50 | 30–60 minutes |
| Haircut plus beard | Approximately $50–$65 | 30–60 minutes |
| Lineup / beard maintenance | Approximately $25–$35 | 15–30 minutes |
| Kids cut | Approximately $25–$30 | 20–30 minutes |
| Premium/VIP grooming | Approximately $65–$100+ | 45–90 minutes |
| Hair-system installation | Specialized, often several hundred dollars | Approximately 3 hours or consultation-led |

Atlanta-wide Square data reports a broad men’s-cut range of $25–$95 and an average near $50, reinforcing that final pricing should reflect service depth, location, experience, enhancements, shampooing, after-hours availability, and appointment length.

## Common local service categories

- Standard adult cut
- Fade or taper
- Haircut with beard
- Lineup or shape-up
- Kids and teen cuts
- Razor shave or head shave
- Shampoo and cut
- Enhancements and designs
- Premium/VIP service
- Early, late, Sunday, or holiday appointments
- House calls
- Hair-system installation and maintenance

## Common market weaknesses

1. Marketplace dependence that places competitors next to the business.
2. Inconsistent service names and descriptions.
3. Excessive emojis or unclear pricing qualifiers.
4. Weak brand ownership outside Instagram or a marketplace profile.
5. Unclear cancellation and deposit policies.
6. Poor photography consistency.
7. Booking flows that require app installation or marketplace accounts.
8. Little explanation of specialized services such as hair systems.

## Opportunity

Unbreakable can differentiate through a direct, branded experience with:

- Clear service definitions.
- Strong original photography.
- Transparent duration, starting price, and preparation notes.
- Direct booking without competitor distractions.
- A visible punctuality and sanitation promise.
- Verified reviews tied to completed appointments.
- A premium consultation path for hair systems.
- A distinct education inquiry funnel.

---

# 4. Competitive Opportunity Analysis

| Competitor pattern | Useful for UQC | Avoid for MVP |
|---|---|---|
| Booksy deposits, cancellation fees, reminders, waitlist | Deposits, reminders, configurable policies | Marketplace dependence and promotional complexity |
| Square staff calendars, customer profiles, no-show protection | Staff availability, profiles, appointment management | Full POS, inventory, payroll, loyalty, and classes |
| SQUIRE direct booking without app/account requirement | Branded direct guest booking | Enterprise shop-management breadth |
| Fresha shifts, service settings, reports | Staff schedules and service controls | Multi-location and retail complexity |
| Calendly simplicity | Clear step-by-step selection | Generic meeting language and weak service commerce |

## Recommended competitive position

**“Neighborhood trust with professional scheduling.”**

Unbreakable should not compete by being the cheapest. It should compete on clarity, consistency, direct access, craftsmanship, presentation, and reduced booking friction.

---

# 5. Target Customer Segments

| Segment | Primary need | Objection | Trust signal | Preferred CTA | Retention opportunity |
|---|---|---|---|---|---|
| Working men | Reliable recurring cut | Fear of waiting or lateness | Clear availability, duration, reminders | Book Your Next Cut | One-tap rebook |
| Fade/lineup clients | Sharp detail and visual proof | Quality uncertainty | Close-up portfolio images | See the Work / Book Now | Preferred barber |
| Fathers and sons | Coordinated convenience | Repeating multiple bookings | Family-friendly service detail | Book Back-to-Back | Group booking phase two |
| Professionals | Punctual, polished result | Schedule disruption | Policy and on-time promise | Reserve a Time | Recurring cadence |
| Hair-system clients | Privacy, expertise, natural result | Stigma, uncertainty, cost | Consultation, private messaging, transformations | Request a Private Consultation | Maintenance schedule |
| Aspiring barbers | Practical education | Credential/value uncertainty | Curriculum, instructor qualifications | Ask About Training | Cohort/news updates |
| Existing loyal clients | Easier replacement for texting | Resistance to new process | Familiar barber, phone fallback | Book With Turk | Saved profile and rebook |

Mobile design must assume one-handed use, intermittent connections, and customers arriving from Instagram, Google, text messages, or QR codes.

---

# 6. Recommended Positioning

## Positioning statement

For men and families in Decatur who want a clean cut without unnecessary uncertainty, Unbreakable Quality Cutz delivers skilled neighborhood barbering with straightforward online booking, clear service expectations, and consistent attention to detail.

## Brand pillars

1. **Precision:** Every edge and detail matters.
2. **Reliability:** Clear times, policies, and communication.
3. **Respect:** Respect for the customer, craft, privacy, and community.
4. **Confidence:** Grooming that supports how clients present themselves.
5. **Growth:** Barber education and professional development.

---

# 7. Three Visual Directions

## Direction A — Unbreakable Standard — recommended

- **Concept:** Modern neighborhood institution.
- **Mood:** Strong, composed, clean, trustworthy.
- **Palette:** Carbon, warm off-white, concrete gray, brushed steel, restrained copper or electric amber accent.
- **Typography:** Condensed display sans for headlines; highly legible neo-grotesk sans for interface and body copy.
- **Photography:** Documentary-style original photography with controlled directional lighting and close detail.
- **Icons:** Consistent medium-stroke outline icons with squared details.
- **Cards:** Dark and light alternating surfaces, fine borders, clipped or subtly angled image details.
- **Buttons:** Solid accent primary; high-contrast outline secondary.
- **Texture:** Very restrained concrete grain or brushed-metal linework.
- **Strength:** Distinct but durable.
- **Risk:** Can feel severe if photography lacks warmth.
- **Customer perception:** Professional, local, dependable, premium without being pretentious.

## Direction B — Legacy Chair

- **Concept:** Barbering tradition and community continuity.
- **Mood:** Warm, established, conversational.
- **Palette:** Espresso, cream, deep green, muted brass.
- **Typography:** Strong serif display paired with modern sans.
- **Photography:** Warm natural-light portraits and shop moments.
- **Icons:** Simple line icons with rounded geometry.
- **Cards:** Soft corners, warm surfaces, editorial spacing.
- **Buttons:** Dark solid button with cream type.
- **Texture:** Leather, wood grain, paper grain used sparingly.
- **Strength:** Human and inviting.
- **Risk:** May look vintage or generic if overused.
- **Customer perception:** Trusted, mature, community-centered.

## Direction C — Edge Lab

- **Concept:** Precision grooming as technical craft.
- **Mood:** Fast, graphic, youthful, highly visual.
- **Palette:** Black, white, cool gray, one vivid safety-orange or lime accent.
- **Typography:** Bold geometric sans and mono-style data labels.
- **Photography:** High-contrast macro details and transformation sequences.
- **Icons:** Sharp monoline technical icons.
- **Cards:** Grid-based modules with explicit service metadata.
- **Buttons:** High-energy accent blocks.
- **Texture:** Measurement marks and subtle grid lines.
- **Strength:** Memorable and social-friendly.
- **Risk:** May feel less welcoming to older customers.
- **Customer perception:** Contemporary, skilled, trend-aware.

---

# 8. Recommended Visual System

Adopt **Direction A: Unbreakable Standard**, softened by authentic portraits and community imagery.

## Proposed palette

| Token | Proposed value | Use |
|---|---|---|
| Carbon | `#121212` | Primary dark background and text |
| Forge | `#222426` | Secondary dark surface |
| Concrete | `#6F7477` | Supporting text and borders |
| Bone | `#F3EFE7` | Warm light background |
| White | `#FFFFFF` | High-contrast text/surfaces |
| Signal Amber | `#D98A24` | Primary CTA and selected state |
| Success | `#2F7D4A` | Confirmed/completed state |
| Danger | `#B63A32` | Cancellation/destructive state |

All combinations must pass WCAG 2.2 AA.

## Typography

- Display: licensed or open-source condensed sans with strong uppercase performance.
- UI/body: Inter, Geist, or equivalent variable sans.
- Minimum routine body size: 16 px.
- Avoid all-uppercase paragraphs.
- Use tabular numerals in time, price, and analytics displays.

---

# 9. Logo and Favicon Brief

Create a modular identity rather than one oversized logo.

- Primary wordmark: “UNBREAKABLE QUALITY CUTZ.”
- Supporting owner line: “Robert ‘Turk’ North — Master Barber,” only after credential verification.
- Compact mark: interlocking `UQC` or a strong `U` built from two clipper-edge lines.
- Avoid tiny barber-pole stripes, intricate clippers, crowns, and unreadable scripts.
- The favicon must remain identifiable at 16×16 pixels using one bold silhouette.

## Required package

- `favicon.ico`
- 16, 32, and 48 px PNG
- 180 px Apple touch icon
- 192 and 512 px PWA icons
- 512 px maskable icon with safe-area padding
- SVG favicon
- 1200×630 Open Graph image
- Square social avatar at 1080×1080
- One-color, reversed, grayscale, and small-scale variants

---

# 10. Photography and Image Production Brief

Original photography is strongly preferred. Licensed stock may support environmental filler but must accurately represent Black hair textures and services. Generated images may be used only as clearly controlled concept assets, not as false evidence of actual work.

| Category | Composition and purpose | Minimum master | Crops | Format/delivery |
|---|---|---:|---|---|
| Hero | Turk working on a client, eye-level, negative space for copy | 6000×4000 | 16:9, 4:5, 1:1 | AVIF/WebP plus JPEG source |
| Barber portraits | Chest-up and environmental portrait | 4000×5000 | 4:5, 1:1 | AVIF/WebP |
| Cut closeups | Hairline, taper, crown, beard detail | 4000×4000 | 1:1, 4:5 | AVIF/WebP |
| Hair systems | Consent-based before/process/after sequence | 4000×5000 | 4:5, 1:1 | AVIF/WebP; private originals |
| Interior | Wide establishing shot and workstation details | 6000×4000 | 16:9, 3:2 | AVIF/WebP |
| Education | Instruction, tools, hands-on demonstration | 6000×4000 | 16:9, 4:5 | AVIF/WebP |
| Reviews/social proof | Customer portraits only with written consent | 4000×5000 | 1:1 | AVIF/WebP |

## Image rules

- Use soft directional lighting; retain natural skin tone.
- Clean mirrors, counters, cords, capes, and backgrounds before shooting.
- Capture each final cut from front, profile, rear, and three-quarter angles.
- Avoid oversharpening, artificial hairlines, misleading enhancement, or smoothing that changes the quality of the work.
- Generate widths at approximately 480, 768, 1200, 1600, and 2400 px.
- Lazy-load below-fold media; preload only the primary hero image.
- Alt text should identify the service and visible result without racial labeling unless contextually necessary.

---

# 11. Sitemap and Information Architecture

## MVP routes

- `/` — focused landing page
- `/services`
- `/services/[slug]`
- `/barbers`
- `/barbers/[slug]`
- `/book`
- `/book/confirmation`
- `/appointments/manage/[secure-token]`
- `/hair-systems`
- `/education`
- `/gallery`
- `/reviews`
- `/about`
- `/contact`
- `/login`
- `/account`
- `/account/appointments`
- `/admin`
- `/admin/appointments`
- `/admin/services`
- `/admin/staff`
- `/admin/reviews`
- `/admin/analytics`
- `/admin/settings`
- `/privacy`
- `/booking-terms`
- `/cancellation-policy`
- `/accessibility`
- custom `404`

## Recommendation

Use a focused homepage with separate indexable supporting pages. Do not force every topic into one extremely long page, and do not fragment the MVP into dozens of shallow pages.

---

# 12. Homepage Text Wireframe

| Section | Purpose and content | Primary CTA | Mobile behavior |
|---|---|---|---|
| Availability bar | Announce booking status, verified hours, or special closure | View Availability | Single concise line |
| Header | Logo, Services, Work, About, Contact, Login | Book Now | Collapsed menu + persistent CTA |
| Hero | Brand promise, original image, location, direct booking | Book Your Cut | Image-first or split stack |
| Trust strip | Decatur location, verified credentials, clear scheduling, reviews when available | — | Horizontal wrap |
| Featured services | 4–6 top service cards with price/duration after approval | View Services | One-column cards |
| Why UQC | Precision, dependable scheduling, clean environment, community | Book Now | Icon list |
| Turk introduction | Portrait, approved biography, credentials | Meet Turk | Image above copy |
| Work gallery | Curated cuts and transformations | View Gallery | Swipeable but keyboard accessible |
| Hair systems | Private consultation-led service explanation | Request Consultation | High-trust single card |
| Education | Education offering and qualification context | Ask About Education | Compact editorial block |
| Booking steps | Choose service, choose time, confirm | Start Booking | Three stacked steps |
| Reviews | Verified completed-appointment reviews only | Read Reviews | One review per view |
| Location/hours | Address, map link, phone, parking/access notes | Get Directions | Clickable phone/map |
| FAQ | Deposits, arrival, cancellations, hair-system consultation | — | Native accessible disclosure elements |
| Final CTA | Clear close with booking reassurance | Reserve Your Time | Full-width button |
| Footer | NAP, policies, social links, Metaphor credit if approved | — | Stacked |
| Sticky mobile CTA | Persistent booking access | Book Now | Bottom-safe-area aware |

## Homepage headline options

1. **Precision You Can Count On.**
2. **A Clean Cut. A Clear Time. No Guesswork.**
3. **Decatur’s Neighborhood Standard for Quality Cutz.**

## Subheadline options

1. Book men’s cuts, lineups, beard services, and consultations directly with Unbreakable Quality Cutz.
2. Professional grooming, straightforward scheduling, and attention to every detail.
3. Built on craft, consistency, and respect for your time.

Primary CTA: **Book Your Cut**  
Secondary CTA: **See the Work**

---

# 13. Supporting Page Wireframes

## Services

Intro → category filters → service cards → policy note → booking CTA. Each card shows approved name, short description, duration, exact or starting price, deposit badge, eligible barber, and preparation note.

## Barber profile

Portrait → biography → verified credentials → specialties → service list → portfolio → availability CTA → reviews specific to completed appointments.

## Hair systems

Private, respectful introduction → terminology → suitability and limitations → consultation steps → transformation gallery with consent → maintenance expectations → pricing approach after approval → disclaimer → consultation form.

Public term: **Men’s Hair Systems** or **Non-Surgical Hair Replacement**. Avoid “male implants,” which can imply a surgical procedure. Use “cranial prosthesis” only when factually and clinically appropriate; do not imply medical insurance eligibility without verification.

## Education

Audience → learning outcomes → delivery format → instructor qualifications → schedule/inquiry → terms. Clearly distinguish informal coaching, continuing education, apprenticeship, and Board-approved school instruction.

## Contact

Address → verified hours → click-to-call → directions → parking/accessibility notes → concise contact form → policy links.

---

# 14. Booking Flow Diagram

```text
Book Now
  ↓
Select service
  ↓
Select barber or First Available
  ↓
Choose date and available time
  ↓
Enter customer details
  ↓
Guest booking OR sign in/create account
  ↓
Review service, price, duration, policies, consent
  ↓
Deposit/payment when required
  ↓
Atomic appointment confirmation
  ↓
Confirmation screen + email + optional SMS + calendar link
```

## Booking rules

- Display a five-step progress indicator: Service, Barber, Time, Details, Confirm.
- Preserve selections in signed server-side session state for at least 30 minutes.
- Calculate slots from business hours, staff hours, breaks, exceptions, service duration, and buffers.
- Store all times in UTC; display in `America/New_York`.
- Prevent overlap using a database transaction and exclusion/locking strategy.
- Hold a selected slot for approximately 5–10 minutes only during required payment.
- Release holds on expiry or failed payment.
- Support “First Available” by querying all eligible active staff.
- Do not expose sequential appointment IDs in public URLs.
- Allow guest management through a time-limited signed link plus identity verification.
- Minimum notice and future booking window must be configurable.
- Same-day booking and after-hours pricing must be explicit service/business settings.

## MVP inclusion

- Guest booking
- Account booking
- Email confirmation
- Optional SMS confirmation/reminder
- Deposit support
- Self-service cancellation/rescheduling within policy
- Add to Google/Apple/Outlook calendar via ICS

## Phase two

- Waitlist
- Recurring appointments
- Family/group booking
- Walk-in digital queue

---

# 15. Customer Account Blueprint

## MVP

- Passwordless email magic link or email/password login
- View upcoming and past appointments
- Reschedule/cancel eligible appointments
- Rebook a completed service
- Update name, phone, and communication preferences
- Request account deletion
- Leave one verified review after completion

## Phase two

- Social login
- Saved preferred barber
- Family profiles
- Favorite services
- Recurring appointment templates
- Loyalty or package data

Authentication must remain optional for first-time booking.

---

# 16. Admin Dashboard Blueprint

## Navigation

- Overview
- Appointments
- Services
- Barbers
- Reviews
- Analytics
- Settings
- Sign out

## Overview

Top metric cards:

- Today’s appointments
- Remaining today
- Estimated booked revenue
- New customers this period

Operational lists:

- Next five appointments
- Appointments needing action
- Recent cancellations
- Recent reviews

## Appointment management

- Day, week, and list views; month view optional.
- Search customer name, phone, or appointment reference.
- Filter by date, service, barber, and status.
- Owner can create phone/walk-in appointments manually.
- Appointment drawer shows customer, service, time, price, deposit, policies acknowledged, history, and internal notes.
- Every administrative change writes an audit log and status-history record.

## Mobile dashboard

Prioritize today’s list, tap-to-call, status actions, and quick appointment creation. Avoid dense desktop tables on narrow screens.

---

# 17. Dashboard Navigation Rules

- Desktop: fixed left navigation plus top context bar.
- Mobile: compact header and bottom navigation for Overview, Appointments, Services, and More.
- Destructive actions require confirmation.
- Frequently used state changes should be one or two taps.
- Never rely on color alone for status.

---

# 18. Roles and Permission Matrix

| Capability | Owner | Manager | Barber | Analyst |
|---|---:|---:|---:|---:|
| View all appointments | Yes | Yes | Assigned only by default | Aggregated only |
| Create/modify appointments | Yes | Yes | Assigned appointments | No |
| Cancel/refund | Yes | Configurable | Request or assigned cancellation | No |
| Manage services | Yes | Yes | No | No |
| Manage all staff | Yes | Limited | Own profile/schedule | No |
| Manage reviews | Yes | Yes | View relevant | No |
| View customer contact data | Yes | Yes | Assigned customers only | No |
| View analytics | Yes | Yes | Own metrics | Aggregated |
| Change payment/policy settings | Yes | No by default | No | No |
| Export data | Yes | Configurable | No | Aggregated only |
| Manage roles | Yes | No | No | No |

The Analyst role is optional and should not be enabled until needed.

---

# 19. Service Management Workflow

1. Create draft service.
2. Select category.
3. Enter approved title and plain-language description.
4. Set price model: exact, starting at, consultation required, or hidden.
5. Set duration and buffer.
6. Assign eligible barbers and barber-specific overrides.
7. Configure deposit/no-show treatment.
8. Add preparation and aftercare notes.
9. Upload optimized media.
10. Preview booking card.
11. Publish.

Services with historical appointments must be archived rather than hard-deleted.

---

# 20. Staff Management Workflow

1. Invite or create staff account.
2. Assign role.
3. Add public profile and verified credentials.
4. Assign services and price overrides.
5. Configure weekly shifts.
6. Add recurring breaks.
7. Add schedule exceptions, holidays, and vacation.
8. Preview public availability.
9. Activate profile and online booking.

Deactivation preserves historical appointments and analytics.

---

# 21. Appointment Status Model

## Canonical statuses

- `pending`
- `awaiting_deposit`
- `confirmed`
- `checked_in`
- `in_progress`
- `completed`
- `cancelled_customer`
- `cancelled_shop`
- `no_show`
- `refunded`

`rescheduled` should be represented as a relationship/event, not the active terminal status. The old appointment is cancelled or superseded and linked to the new appointment using `rescheduled_from_id` / `rescheduled_to_id`.

## Allowed transitions

```text
pending → awaiting_deposit → confirmed
pending → confirmed
confirmed → checked_in → in_progress → completed
confirmed → cancelled_customer
confirmed → cancelled_shop
confirmed → no_show
completed/cancelled → refunded (only when a payment exists)
confirmed → new confirmed appointment + reschedule linkage
```

## Slot release

Slots are released by cancellation, expired payment hold, or authorized reschedule. No-show and completed appointments remain occupied historically.

## Analytics

- Completed drives completed-service and realized-service metrics.
- Confirmed drives booked-revenue estimates.
- Cancellation and no-show statuses drive rates.
- Refunded modifies payment reporting but does not erase appointment history.

---

# 22. Review Management Workflow

- Review invitation is issued only after `completed` status.
- Review record references the appointment, customer, barber, and service.
- One review per appointment.
- Customer rating/text is immutable to staff.
- Staff may approve, hide, flag, feature, or respond.
- Moderation actions are audited.
- Never create placeholder testimonials that appear real.
- Public structured review markup must represent reviews displayed on the site and comply with search-engine policies.

---

# 23. Analytics Specification

## Dashboard metrics

- Total bookings
- Completed appointments
- Cancellation rate
- No-show rate
- Estimated booked revenue
- Collected deposits where payment data exists
- Average booked value
- New versus returning customers
- Rebooking rate
- Most-booked services
- Staff utilization
- Review count and average

## External analytics only

- Page views
- Traffic sources
- Device category
- Funnel step conversion
- Booking abandonment
- CTA performance
- Search landing pages

## Definitions

- **Booked revenue:** sum of current confirmed appointment values.
- **Collected revenue:** payment-provider settled/paid amount only.
- **Utilization:** booked service minutes divided by available bookable minutes.
- **Returning customer:** customer with a prior completed appointment before the selected period.

---

# 24. Notification Matrix

| Notification | Trigger | Recipient | Channel | Timing |
|---|---|---|---|---|
| Booking confirmation | Appointment confirmed | Customer and owner | Email; optional SMS | Immediate |
| Deposit receipt | Successful deposit | Customer | Email | Immediate |
| Appointment reminder | Confirmed upcoming appointment | Customer | Email/SMS | Configurable, recommended 24 hours |
| Same-day reminder | Appointment remains confirmed | Customer | Optional SMS | 2–4 hours before |
| Reschedule confirmation | Successful reschedule | Customer/owner | Email/SMS | Immediate |
| Cancellation confirmation | Cancellation committed | Customer/owner | Email/SMS | Immediate |
| No-show follow-up | Marked no-show | Customer | Email/SMS subject to policy | Same day |
| Review request | Completed appointment | Customer | Email; optional SMS | 2–24 hours later |
| Daily digest | Upcoming business day | Owner | Email | Configurable morning |

Transactional messages cannot be conditioned on marketing consent when needed to deliver the requested service. Marketing messages require separate, clear consent and opt-out handling.

Failures should be logged, retried with capped exponential backoff, and surfaced to the owner when operationally important.

---

# 25. Conceptual Database Schema

| Entity | Important fields and relationships | Deletion/retention |
|---|---|---|
| `users` | id, auth identity, role, status, last_login | Disable; do not erase audit identity |
| `customers` | id, name, normalized email/phone, consent flags | Soft delete/anonymize subject to obligations |
| `customer_profiles` | customer_id, preferences, preferred_staff_id | Delete/anonymize with customer |
| `staff_profiles` | user_id, slug, bio, credentials, active | Deactivate/archive |
| `roles` / `permissions` | role definitions and grants | Version carefully |
| `service_categories` | name, slug, sort_order | Archive if used |
| `services` | title, slug, price, duration, buffer, deposit rule, active | Archive if referenced |
| `staff_services` | staff_id, service_id, price/duration overrides | Preserve history via appointment snapshot |
| `staff_schedules` | staff_id, weekday, start/end, timezone | Version or update |
| `schedule_exceptions` | staff_id, date/range, available/unavailable reason | Retain operational history as needed |
| `appointments` | opaque public id, customer, staff, service snapshot, start/end UTC, status, totals | Never hard-delete routine records |
| `appointment_status_history` | appointment, old/new status, actor, timestamp | Immutable |
| `appointment_notes` | appointment, author, note, internal flag | Restrict and retain appropriately |
| `appointment_holds` | slot, expiry, session/payment reference | Auto-expire/delete |
| `reviews` | appointment, customer, rating, text, moderation state | Soft delete/moderate |
| `payments` | provider IDs, amount, status, currency | Retain; no raw card data |
| `refunds` | payment, provider refund ID, amount, reason | Retain |
| `notifications` | template, destination, status, provider ID | Retain limited operational log |
| `business_settings` | NAP, hours, policies, booking controls | Version sensitive changes |
| `media_assets` | storage key, alt text, dimensions, consent metadata | Delete when unreferenced and permitted |
| `analytics_events` | anonymous/session/customer ID where justified, event, metadata | Short controlled retention |
| `audit_logs` | actor, action, entity, before/after references, time | Immutable, restricted |

## Recommended indexes

- Unique normalized customer email when present.
- Unique normalized phone when policy allows.
- Appointments on `(staff_id, starts_at)` and `(status, starts_at)`.
- Customers on normalized email/phone.
- Reviews on `(moderation_status, created_at)`.
- Services and staff on `(active, sort_order)`.
- Notification jobs on `(status, scheduled_at)`.

Store appointment snapshots of service name, duration, and price so later edits do not rewrite history.

---

# 26. Technical Architecture

## Essential MVP

- **Framework:** Next.js App Router with TypeScript.
- **UI:** Tailwind CSS plus accessible primitives such as Radix/shadcn selectively; custom brand components.
- **Database/Auth/Storage:** Supabase PostgreSQL, Supabase Auth, and object storage, with Row Level Security.
- **Server layer:** Next.js server actions for trusted mutations and route handlers for webhooks/public integrations.
- **Payments:** Stripe Checkout or Payment Element for deposits; no card storage by UQC.
- **Email:** Resend or Postmark.
- **SMS:** Twilio only after consent, cost, and delivery requirements are approved.
- **Hosting:** Vercel.
- **Analytics:** privacy-conscious first-party events plus Vercel Analytics or PostHog with configured retention.
- **Error tracking:** Sentry.
- **Validation:** Zod at all mutation boundaries.
- **Rate limiting:** Upstash Redis or managed equivalent for booking, login, review, and contact endpoints.

## Optional enhancements

- PWA installability
- Waitlist worker
- Calendar synchronization
- QR-code campaigns
- Automated review follow-up
- Media transformation service

## Future enterprise features

- POS
- Inventory
- Payroll/commissions
- Multi-location tenancy
- Memberships and packages
- Advanced BI warehouse

## Environments

- Development
- Preview/staging
- Production

Secrets must remain in environment management, never in the repository.

---

# 27. Security Checklist

- Enforce HTTPS and secure cookies.
- Use provider-managed password hashing or passwordless authentication.
- Require MFA for owner/admin accounts when supported.
- Apply least-privilege RBAC and Supabase RLS.
- Validate all inputs server-side.
- Encode untrusted output and sanitize review content.
- Use CSRF-safe framework patterns for authenticated mutations.
- Rate-limit authentication, booking, management-link verification, reviews, and contact submissions.
- Use bot protection only where abuse occurs; avoid unnecessary friction.
- Validate file MIME type, extension, dimensions, and size; generate safe filenames.
- Use opaque public appointment identifiers and signed expiring management tokens.
- Recheck slot availability inside the final database transaction.
- Verify Stripe webhook signatures and make handlers idempotent.
- Never store raw card details.
- Log privileged mutations.
- Set short, secure admin sessions and revoke disabled users.
- Provide data access/deletion workflow.
- Enable database backups and document restoration tests.
- Maintain a simple incident-contact and credential-rotation procedure.

---

# 28. Accessibility Checklist

Target WCAG 2.2 AA.

- Contrast: 4.5:1 for normal text and 3:1 for large text/interface boundaries.
- Fully keyboard-operable navigation, dialogs, calendar, and dashboard actions.
- Visible focus indicators.
- Semantic page landmarks and heading hierarchy.
- Persistent labels; placeholders are not labels.
- Error summary plus field-level errors.
- Booking calendar must expose selected date, unavailable dates, times, and month changes to screen readers.
- Dynamic confirmation/errors use appropriate live regions.
- Dialogs trap focus, label themselves, close with Escape, and restore focus.
- Respect `prefers-reduced-motion`.
- Minimum 44×44 CSS-pixel touch targets where feasible.
- Support 200% zoom without content loss.
- Policies and deposit amounts must appear before final confirmation.

---

# 29. Performance Targets

- Lighthouse performance target: 90+ on representative mobile hardware.
- LCP: ≤2.5 seconds at the 75th percentile.
- INP: ≤200 ms at the 75th percentile.
- CLS: ≤0.1.
- Initial route JavaScript target: approximately 150 KB compressed or less where practical.
- Preload one hero image and critical font subset only.
- Use variable self-hosted fonts with `font-display: swap`.
- Statically generate marketing pages where possible.
- Server-render live availability and authenticated data.
- Cache public services/staff/settings with safe revalidation.
- Lazy-load galleries and dashboard-heavy modules.
- Use responsive AVIF/WebP images.
- Paginate appointment history and analytics queries.
- Provide low-bandwidth image behavior and functional text fallback.
- Avoid autoplay video and decorative motion dependencies.

---

# 30. Local SEO Plan

## Search-intent clusters

- barber in Decatur GA
- Decatur barber shop
- Black barber Decatur GA
- men’s haircut Decatur
- fade / taper / lineup Decatur
- beard trim and shave Decatur
- men’s hair systems Atlanta / Decatur
- non-surgical hair replacement for men Atlanta
- barber education Decatur / Atlanta

Use these naturally. Do not state “best” or make unsupported superiority claims.

## Technical SEO

- Accurate title and description per route.
- Stable canonical URLs.
- XML sitemap and intentional robots policy.
- `LocalBusiness` with the most accurate supported subtype; verify whether `BarberShop` is accepted by the chosen schema tooling/search guidance at implementation.
- Service structured data for approved service pages.
- FAQ markup only for visible FAQs and only where currently supported.
- Review markup only for eligible first-party reviews displayed on the site.
- Consistent name, address, and phone across the site, Google Business Profile, social profiles, and citations.
- Descriptive image filenames and alt text.
- Open Graph and social-card metadata.

## Local authority

- Complete and maintain Google Business Profile.
- Use direct booking link.
- Publish original shop/work imagery regularly.
- Request reviews after completed appointments without gating by sentiment.
- Seek accurate citations from local directories, chamber/community listings, and relevant barber associations.

Do not create thin doorway pages for every nearby city in the MVP.

---

# 31. Content Requirements

## Service-card style

Use direct labels and complete facts:

> **Adult Precision Cut**  
> Approved description. Duration and price shown clearly. Add deposit and preparation notes only when applicable.

## Owner biography direction

Cover Robert’s verified experience, approach to detail, relationship with Decatur clients, specialties, and educational work. Do not publish “master barber,” years of experience, awards, training, or certifications until documented.

## Hair-system messaging

Use private, confidence-centered, non-medical language:

> Explore a customized, non-surgical hair-system consultation designed around your look, maintenance expectations, and comfort.

Avoid guarantees, medical claims, insurance claims, permanence claims, or deceptive before/after editing.

## Booking reassurance

> You’ll see the service, time, price, deposit requirement, and cancellation terms before confirming.

## Policy microcopy

> By confirming, you acknowledge the displayed cancellation and no-show terms. Any required deposit and refund treatment will be shown before payment.

## Confirmation copy

> You’re booked. We sent your appointment details and management link to the contact information provided.

## Empty states

- “No appointments match these filters.”
- “No times are available on this date. Choose another date or join the waitlist when enabled.”
- “No reviews have been published yet.”

## Error style

State what failed, what was preserved, and the next safe action. Never blame the customer.

---

# 32. MVP Scope

## Public experience

- Branded responsive website
- Services and service detail
- Barber profiles
- Gallery
- Hair-system page and consultation inquiry
- Education page and inquiry
- Contact, policies, accessibility
- Direct booking

## Customer experience

- Guest booking
- Optional account
- Email confirmation
- Optional SMS
- Manage/reschedule/cancel within policy
- Verified review request

## Owner experience

- Appointment list/day/week management
- Manual appointment creation
- Service CRUD with archival
- Staff profile/schedule management
- Review moderation
- Basic analytics
- Business and booking settings
- Audit trail for sensitive changes

---

# 33. Phase-Two Features

- Waitlist with expiring booking offers
- Recurring booking
- Family/group booking
- Digital walk-in queue
- Google/Instagram booking integrations
- Calendar synchronization
- PWA installation
- Saved preferred barber
- Review responses
- Promotional campaigns with valid consent
- Packages, memberships, gift cards, and loyalty only after demand validation

---

# 34. Explicitly Excluded From MVP

- Full POS
- Payroll and commission calculation
- Inventory and product sales
- Accounting and tax filing
- Multi-location/franchise tenancy
- Native iOS/Android apps
- Social network/community feed
- AI phone receptionist
- Advanced marketing automation
- School administration or state-accredited education management
- Insurance billing for cranial prostheses

---

# 35. Risks, Assumptions, and Unresolved Questions

| Risk | Mitigation |
|---|---|
| Missing final service/pricing data | Block publication until owner approval |
| Double booking | Transactional slot validation and idempotent mutations |
| SMS costs/consent | Email-first MVP; explicit SMS opt-in |
| Hair-system claims | Consultation-led copy and legal/credential review |
| Education regulatory ambiguity | Verify instructor/school/apprenticeship status before claims |
| Inconsistent photography | Controlled shoot brief and consent records |
| Owner dashboard complexity | Prioritize today’s operations and hide advanced options |
| Free-project scope creep | Signed scope, license, third-party cost, and change-order terms |
| Customer data exposure | RBAC, RLS, opaque IDs, audit logs, restricted exports |

---

# 36. Build-Phase Roadmap

## Phase 0 — Agreements and discovery

- Execute Portfolio Development and Software License Agreement.
- Collect owner information, credentials, policies, services, prices, hours, and media permissions.

## Phase 1 — Content and brand system

- Approve positioning, visual direction, logo brief, copy, and photography plan.

## Phase 2 — UX specification

- Finalize wireframes, booking rules, dashboard states, and acceptance tests.

## Phase 3 — Foundation

- Initialize application, database, authentication, environments, CI, and component system.

## Phase 4 — Public website

- Implement marketing routes, content, responsive images, SEO, and accessibility.

## Phase 5 — Booking engine

- Implement services, staff, availability, holds, appointments, deposits, and notifications.

## Phase 6 — Customer account

- Implement authentication, appointment history, management, and reviews.

## Phase 7 — Admin dashboard

- Implement appointments, services, staff, reviews, analytics, and settings.

## Phase 8 — Quality and launch

- Security testing, accessibility audit, performance testing, data seeding, policy review, owner training, backup test, and controlled launch.

---

# 37. Acceptance Criteria

The blueprint is ready for development when:

1. Every public service has an approved name, description, duration, price model, eligible barber, deposit rule, and preparation note.
2. Business address, hours, contact channels, licensing claims, and credentials are verified.
3. Booking notice, future window, buffers, cancellation cutoff, no-show treatment, rescheduling rules, and refund treatment are approved.
4. The owner approves the recommended visual direction, logo brief, sitemap, homepage wireframe, and image plan.
5. The owner-dashboard permission matrix is approved.
6. The appointment status model and slot-allocation rules are accepted.
7. Third-party providers and who pays each cost are documented.
8. Legal counsel has reviewed high-risk customer-facing provisions or the owner has explicitly accepted responsibility for obtaining review.
9. The Portfolio Development and Software License Agreement is signed.
10. Metaphor receives written approval to begin the build phase.

---

# Ownership and Project Boundaries

These terms must be placed in a separate signed **Portfolio Development and Software License Agreement**:

- Metaphor waives normal labor charges only for the specifically approved initial scope.
- Unbreakable Quality Cutz pays third-party operating expenses, including domain, paid hosting or overages, metered database/storage, email, SMS, payment processing, premium APIs, and external subscriptions.
- Work outside the approved scope or normal portfolio upkeep requires written approval and may be billable.
- Metaphor retains its background technology, source code, reusable components, frameworks, templates, libraries, workflows, internal tools, methods, and automation systems.
- Unbreakable receives the contractually defined right to use the deployed solution for its business.
- Robert North and Unbreakable do not receive ownership or control of Metaphor’s reusable source code merely because it is used in the project.
- Metaphor may use approved screenshots, public branding, outcomes, and non-confidential metrics as portfolio material, social proof, and case-study evidence.
- Hosting access, domain ownership, data export, termination assistance, uptime, support, and post-launch maintenance must be stated explicitly.

---

# Legal and Operational Review Items

Georgia rules indicate that barber facilities and practitioners must satisfy licensing, posting, inspection, sanitation, and truthful-qualification requirements. Before launch, confirm:

- Current shop and practitioner licensing.
- Correct public business name and facility status.
- Whether “master barber” is the exact active credential.
- Whether barber education is private coaching, apprenticeship supervision, continuing education, or regulated school instruction.
- Whether any hair-system service crosses into services requiring additional credentials or medical claims.
- Cancellation, deposit, refund, no-show, photo consent, privacy, and communications terms.
- TCPA-compliant SMS consent and opt-out process.
- Privacy retention and account-deletion procedures.

---

# Research Sources

Accessed July 19, 2026.

1. Square, “Salon and Barber Shop Prices in Atlanta” — https://squareup.com/us/en/menu-pricing/salon-and-barber-shop-prices-in-atlanta
2. Booksy, Decatur barber listings — https://booksy.com/en-us/s/barber-shop/122822_decatur
3. Booksy, Atlanta barber listings — https://booksy.com/en-us/s/barber-shop/134770_atlanta
4. Square Appointments overview and features — https://squareup.com/us/en/appointments
5. Square appointment reminders — https://squareup.com/us/en/appointments/features/reminders
6. Square waitlist guidance — https://squareup.com/help/us/en/article/7923-waitlist-with-square-appointments
7. Booksy Biz calendar and scheduling — https://biz.booksy.com/features/calendar-scheduling
8. Booksy deposit guidance — https://support.booksy.com/hc/en-us/articles/16487324704658-How-can-I-accept-deposits-for-appointments-booked-by-my-clients
9. Booksy service settings and no-show protection — https://support.booksy.com/hc/en-us/articles/21028092250258-How-do-I-customize-my-service-settings
10. SQUIRE direct landing-page booking — https://getsquire.com/features/landing-page
11. SQUIRE waitlist — https://getsquire.com/features/wait-list
12. Fresha team shifts and double-booking controls — https://www.fresha.com/help-center/knowledge-base/calendar/17-schedule-and-update-team-shifts
13. Georgia State Board of Cosmetology and Barbers rules — https://rules.sos.georgia.gov/gac/240
14. Georgia facility requirements — https://rules.sos.georgia.gov/gac/240-4
15. Georgia shop application requirements — https://rules.sos.georgia.gov/GAC/240-12
16. Georgia instructor licensing — https://rules.sos.georgia.gov/GAC/240-10

---

# Information Required From Robert North Before Development

1. Exact street address, suite, parking instructions, accessibility details, and approved map pin.
2. Current public hours, appointment hours, breaks, holidays, vacation rules, same-day rules, and after-hours availability.
3. Full approved service menu, categories, descriptions, exact or starting prices, durations, buffers, eligible barbers, and add-ons.
4. Deposit amount/percentage by service; cancellation cutoff; late policy; no-show fee; rescheduling limit; refund rules; walk-in rules.
5. Correct terminology and exact process for men’s hair systems, consultation price, installation price model, maintenance schedule, exclusions, aftercare, and client-consent requirements.
6. Exact education offering, curriculum, audience, format, schedule, price, credentials, licensing status, and disclaimers.
7. Verified legal business name, ownership entity, business email, domain preference, tax treatment, and payment destination.
8. Current shop license, Robert’s license type/number and expiration, approved biography, years of experience, specialties, education, awards, and affiliations.
9. Names, roles, contact emails, biographies, prices, schedules, credentials, portraits, and permissions for every additional barber.
10. Original logo files or written approval to create a new identity system.
11. Brand preferences, disliked colors/styles, social links, and existing printed materials.
12. High-resolution original photographs, portfolio selections, before/after written releases, model releases, and shop-interior images—or approval and schedule for a new shoot.
13. Approved testimonials or authorization to launch without testimonials until verified reviews are collected.
14. Preferred notification channels and reminder timing; SMS opt-in wording; owner notification recipients.
15. Whether guest booking, customer accounts, deposits, waitlist, recurring booking, and family booking are approved for MVP or later phases.
16. Preferred payment processor, email provider, SMS provider, analytics provider, hosting account, domain registrar, and responsible payer for each service.
17. Data-retention, export, deletion, backup, and emergency-access preferences.
18. Owner/manager/barber role assignments and final permission approvals.
19. Approved privacy notice, booking terms, cancellation/no-show policy, refund policy, photo/media consent, accessibility statement, hair-system disclaimer, education terms, and cookie/analytics disclosure.
20. Signed Portfolio Development and Software License Agreement defining scope, license, ownership, portfolio rights, third-party expenses, maintenance, termination, and change requests.
21. Final written approval of the brand direction, sitemap, wireframes, booking workflow, dashboard scope, architecture, and development start.
