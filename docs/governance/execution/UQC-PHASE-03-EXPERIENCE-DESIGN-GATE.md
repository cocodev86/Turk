# UQC-EXEC-0003 — Phase 3 Experience, Content, and Brand Design

**Version:** 1.0.0  
**Owner:** Metaphor Automation Consulting / Experience Design Governance  
**Status:** Executed — Conditional Pass  
**Execution date:** 2026-07-19  
**Review cadence:** Before Phase 4 and after any approved brand, business-fact, policy, or product-scope change  
**Related documents:** UQC-EXEC-0001, UQC-EXEC-0002, UQC-TPL-0001, UQC-PRD-0001, UQC-TDD-0001, UQC-ADR-PACKAGE-0001, UQC-GOV-0002, UQC-BRAND-0001  
**Organizational authority:** `cocodev86/Coco1`  
**Project authority:** `cocodev86/Turk`

> This execution defines the approved-in-principle experience architecture, content structure, brand application rules, accessibility direction, and client-review package for Phase 3. It does not authorize application code, infrastructure, vendor configuration, database creation, or deployment.

## 1. Executive status

- **Current phase:** Phase 3 — Experience, Content, and Brand Design
- **Current gate:** Experience Design gate
- **Gate decision:** CONDITIONAL PASS
- **Phase readiness:** 92%
- **Development authorization:** BLOCKED
- **Next permitted phase:** Phase 4 — Architecture and Technical Design

The Phase 3 design system is sufficiently defined to support architecture validation. The proposed experience is mobile-first, booking-led, accessible in principle, and aligned with the `Unbreakable Standard` brand direction. Critical public, booking, appointment-management, hair-system inquiry, and owner-dashboard journeys are documented.

The phase cannot receive a full pass until Robert “Turk” North approves the identity direction, core mockups, navigation, service hierarchy, photography direction, and required business facts. Accessibility approval also remains pending because final visual combinations and interactive prototypes do not yet exist.

## 2. Horizontal workstreams executed

The following workstreams were completed concurrently because they shared stable Phase 2 inputs and did not require implementation:

| Workstream | Principal owner | Direct assistants | Output |
|---|---|---|---|
| Brand-system audit | Brand and Visual Design Director | Brand Systems Designer; Digital Art Director | Logo, color, type, icon, imagery and misuse controls |
| Information architecture | UX Director | Interaction Designer; UX Content Designer | Sitemap, route inventory and hierarchy |
| Content modeling | Product Director | Requirements Analyst; UX Content Designer | Reusable content entities and approval states |
| Mobile navigation | UX Director | Interaction Designer; Accessibility Tester | Compact navigation and CTA behavior |
| Public-page experience | UX Director | Interaction Designer; Digital Art Director | Homepage, services, hair systems, gallery, about and contact structures |
| Booking and recovery | Product Director | Customer Journey Researcher; Interaction Designer | Guest booking, appointment management and failure-state flows |
| Owner dashboard | UX Director | Interaction Designer; Product Requirements Analyst | Lightweight operational information architecture |
| Accessibility review | Accessibility Lead | Assistive Technology Tester; Inclusive Design Engineer | WCAG 2.2 AA design requirements and risks |
| Client-review governance | Program Executive | Governance Analyst; Documentation Writer | Approval register, open decisions and gate conditions |

## 3. Phase 3 step results

| Step | Required action | Result | Status |
|---|---|---|---|
| 1 | Audit logo, icons, palette, typography and usage rules | `UQC-BRAND-0001` provides a coherent proposed identity: custom UQC monogram, Carbon/Forge/Bone system, Signal Amber accent, condensed display typography, accessible body typography, and restrained iconography. Final owner and accessibility approval remain pending. | Conditional |
| 2 | Create site information architecture | Public, booking, customer-management, owner-administration and legal/support areas are defined below. | Complete |
| 3 | Define page and route inventory | Proposed route map is documented below with MVP and deferred states. | Complete |
| 4 | Define reusable content model | Business facts, services, providers, policies, media, reviews, FAQs, hair-system content and navigation are modeled with approval status. | Complete |
| 5 | Create mobile-first navigation model | Compact primary navigation, persistent booking CTA and accessible menu behavior are defined. | Complete |
| 6 | Design homepage hierarchy | Booking-first homepage content order and trust sequence are defined. | Complete |
| 7 | Design services experience | Service discovery, detail, duration, price, provider, policy and booking behavior are defined. | Complete |
| 8 | Design Men’s Hair Systems experience | Respectful educational, consultation-led and privacy-conscious structure is defined. | Complete |
| 9 | Design gallery and media experience | Consent-based media organization, captions, alt text, filtering limits and authenticity rules are defined. | Complete |
| 10 | Design guest-booking flow | Mobile-first service-to-confirmation journey and required recovery states are defined. | Complete |
| 11 | Design appointment management and recovery | Secure link/account access, reschedule, cancel, payment ambiguity and notification failure flows are defined. | Complete |
| 12 | Design owner-dashboard information architecture | Today, upcoming, availability, services, policies, content, reviews, metrics and audit priorities are defined. | Complete |
| 13 | Review critical flows for WCAG 2.2 AA | Design-level requirements are defined; final conformance testing is blocked until interactive implementation/prototype exists. | Conditional |
| 14 | Prepare client-review mockups and approval register | Required views and approval decisions are specified. Existing visual concepts remain review artifacts, not approved implementation specifications. | Conditional |
| 15 | Issue Phase 3 gate decision | CONDITIONAL PASS for Phase 4 only. | Complete |

## 4. Experience principles

1. **Booking first:** The most important action is to book an eligible service with minimal friction.
2. **Proof before claims:** Authentic, approved work and transparent service details outrank decorative luxury language.
3. **Mobile first:** Core public and booking journeys must work from 320 px width upward and support one-handed use.
4. **Clarity over novelty:** Users should always understand price, duration, policy, next step, and system state.
5. **Privacy by design:** Hair-system consultation and customer details require minimal collection and discreet presentation.
6. **Accessible by default:** Native interaction patterns, semantic hierarchy, keyboard support and readable contrast guide all design decisions.
7. **Owner efficiency:** Administration must reduce coordination rather than recreate a full salon-management suite.
8. **No fabricated proof:** Generated visuals may demonstrate art direction but must not represent actual haircut or hair-system outcomes.

## 5. Proposed information architecture

### 5.1 Public experience

```text
Home
├── Services
│   ├── Service category
│   └── Service detail
├── Men’s Hair Systems
│   ├── Overview
│   ├── Consultation process
│   ├── Care and maintenance
│   └── Consultation request
├── Gallery
├── About Turk
├── Reviews
├── Contact / Location
├── Policies
├── Accessibility
├── Privacy
└── Book Appointment
```

### 5.2 Customer experience

```text
Book Appointment
├── Select service
├── Select provider, if applicable
├── Select date and time
├── Review price, duration, deposit and policy
├── Customer information and consent
├── Deposit, if required
└── Confirmation and secure management access

Manage Appointment
├── View appointment
├── Reschedule, if permitted
├── Cancel, if permitted
├── Communication status
└── Rebook eligible service

Customer Account — optional/deferred decision
├── Upcoming appointments
├── Appointment history
├── Rebook
└── Profile and communication preferences
```

### 5.3 Owner experience

```text
Owner Dashboard
├── Today
├── Upcoming appointments
├── Appointment detail and status
├── Availability
│   ├── Standard hours
│   ├── Exceptions
│   └── Blocked time
├── Services
├── Providers
├── Policies
├── Media and content
├── Reviews
├── Basic metrics
├── Audit history
└── Export / support
```

## 6. Proposed route inventory

Route names are conceptual and may be adjusted during architecture review without changing the approved experience model.

| Route | Purpose | MVP status | Required approval/data |
|---|---|---|---|
| `/` | Homepage and primary conversion | Required | Brand, headline, photography, core facts |
| `/services` | Service catalog | Required | Approved service matrix |
| `/services/[slug]` | Service detail and booking entry | Required | Name, description, duration, price, provider, deposit, policy |
| `/hair-systems` | Men’s Hair Systems education and trust | Required | Approved offering, claims, media and privacy language |
| `/hair-systems/consultation` | Private consultation request | Required if service approved | Intake fields, consent, response process |
| `/gallery` | Approved portfolio media | Required | Consented authentic assets and alt text |
| `/about` | Owner story and verified qualifications | Required | Approved biography and credentials |
| `/reviews` | Verified first-party reviews and/or approved external attribution | Required in principle | Publication policy and verified review source |
| `/contact` | Address, service area, phone, hours and directions | Required | Final business facts |
| `/policies` | Booking, deposit, cancellation, late and no-show policies | Required | Approved policy versions |
| `/privacy` | Privacy information | Required | Legal/privacy review |
| `/accessibility` | Accessibility statement and contact path | Required | Accessibility owner and process |
| `/book` | Booking entry | Required | Catalog and availability rules |
| `/book/confirm` | Review and commitment | Required | Policy, deposit and consent rules |
| `/book/success` | Explicit confirmation | Required | Notification and management behavior |
| `/appointments/manage` | Secure guest/account appointment management | Required | Token/session model |
| `/account` | Optional customer account | Conditional | MVP launch decision |
| `/owner` | Protected owner dashboard | Required | Authentication/authorization architecture |

## 7. Reusable content model

Every public content record must have an approval state and revision history where material.

| Content type | Required fields |
|---|---|
| Business profile | Approved name, address/service area, phone, email, hours, map/directions, social links, licensing/credential claims with evidence |
| Service | Name, slug, category, description, duration, fixed/starting price, provider eligibility, preparation, deposit rule, active state, policy references |
| Provider | Approved name, role, biography, verified credentials, portrait, service eligibility, active state |
| Policy | Type, version, effective date, plain-language summary, full terms, customer acknowledgement requirement |
| Media asset | Source, owner, consent status, subject consent, alt text, caption, category, publication state, crop/transformation references |
| Review | Appointment eligibility, display name choice, rating, text, moderation status, source, date, disclosure if applicable |
| Hair-system content | Approved terminology, service boundary, process, maintenance, realistic expectations, consultation CTA, privacy notice |
| FAQ | Question, approved answer, category, review date |
| Navigation item | Label, destination, priority, availability state |
| Announcement | Message, start/end time, severity, approved owner |

Unapproved records must not appear in public production output.

## 8. Navigation model

### Desktop

- Primary horizontal lockup at left.
- Primary navigation: Services, Men’s Hair Systems, Gallery, About, Reviews, Contact.
- High-emphasis `Book Appointment` action separated from navigation.
- Sticky behavior may be used only if it does not obscure content or harm keyboard/screen-reader use.

### Mobile

- Simplified monogram in compact header.
- Visible `Book` action without requiring menu expansion.
- Menu button with accessible name, expanded state and focus management.
- Full-height or anchored menu with clear close action and no focus escape.
- Phone/contact fallback remains available but secondary to booking.

### Navigation guardrails

- Do not overload the primary navigation with dashboard, legal and support links.
- Do not use icons without visible labels for essential destinations.
- Do not hide pricing or policy information behind account creation.
- Preserve browser navigation and deep-linking.

## 9. Homepage hierarchy

Recommended content order:

1. **Header:** Approved identity, primary navigation and booking CTA.
2. **Hero:** Authentic work environment or service moment, approved headline, concise value proposition, Book Appointment and View Services actions.
3. **Trust proof:** Verified ratings/reviews, approved experience facts, location/service area and booking convenience. Do not show invented statistics.
4. **Featured services:** A limited set of approved services with duration, price/starting price and direct booking action.
5. **Men’s Hair Systems:** Respectful, private consultation-led introduction.
6. **Portfolio proof:** Authentic, consented gallery highlights.
7. **About Turk:** Approved portrait, short story, verified credentials only.
8. **How booking works:** Select service → choose time → confirm.
9. **Reviews:** Verified first-party or approved attributed reviews.
10. **Location and hours:** Final approved business facts and directions.
11. **Final booking CTA:** Clear next action and contact fallback.
12. **Footer:** Policies, privacy, accessibility, contact, social and discreet Metaphor credit if contractually approved.

## 10. Services experience

### Catalog

- Group services into no more categories than necessary.
- Show service name, concise description, duration, fixed or starting price, provider availability and booking status.
- Provide accessible filtering only if the final catalog size justifies it.
- Avoid presenting placeholder pricing as final.

### Service detail

Each detail view must answer:

1. What is included?
2. Who is it for?
3. How long does it take?
4. What does it cost or start at?
5. Is a consultation or deposit required?
6. What preparation is required?
7. Which policies apply?
8. What is the next available booking action?

## 11. Men’s Hair Systems experience

### Content order

1. Respectful introduction using `Men’s Hair Systems` and `Non-Surgical Hair Replacement`.
2. Clear cosmetic-service boundary; no medical diagnosis or cure claims.
3. What a consultation covers.
4. General process: consultation, selection/fitting, service, maintenance and follow-up—only where factually approved.
5. Realistic expectations and maintenance responsibility.
6. Privacy and media-consent commitment.
7. Approved FAQs.
8. Private consultation CTA.

### Intake principles

- Collect only information necessary to arrange consultation.
- Do not request medical history by default.
- Do not request sensitive images unless justified, secured, consented and approved.
- Clearly identify who receives the inquiry and expected response process.
- Do not promise permanent, guaranteed or medically therapeutic outcomes.

## 12. Gallery and media experience

- Use authentic, consented UQC work as primary proof.
- Organize by limited approved categories such as Cuts, Beards, Hair Systems and Shop.
- Every image requires alt text or an explicitly documented decorative role.
- Do not use before/after presentation without consent, consistent framing and truthful context.
- Do not use generated images as evidence of actual results.
- Avoid infinite-scroll dependence; preserve keyboard navigation and predictable focus.
- Watermarks must not obscure haircut detail or customer identity choices.
- Private source media and public optimized variants must remain distinct in later architecture.

## 13. Guest-booking flow

### Step 1 — Service

Display service name, duration, price/starting price, provider rules, deposit requirement, preparation and relevant policy summary.

### Step 2 — Provider and time

Allow no-preference selection if supported. Show only valid slots. Calendar and time controls require native or independently validated accessible patterns.

### Step 3 — Customer details and consent

Collect minimum necessary contact information. Display communication consent, policy acknowledgement and privacy link in plain language.

### Step 4 — Review and deposit

Show service, provider, date/time, timezone, price, deposit, remaining balance rules and cancellation terms before commitment.

### Step 5 — Confirmation

Show explicit status, appointment reference, next steps, communication state and secure management path. Never rely only on email/SMS as proof of booking.

### Recovery states

- Slot lost: explain and offer refreshed alternatives.
- Validation failure: preserve valid entries and identify exact corrections.
- Deposit incomplete: distinguish cancelled, failed and pending states.
- Booking ambiguous: show reconciliation state; do not encourage duplicate payment.
- Notification failed: preserve valid appointment and show confirmation on screen.
- Service unavailable: offer contact fallback or other eligible services.

## 14. Appointment management experience

- Secure guest token or authenticated customer access.
- Show appointment status, service, provider, date/time, policy version and payment reference state without exposing sensitive processor data.
- Reschedule and cancel actions must state eligibility and consequences before confirmation.
- Expired or invalid access must not reveal whether arbitrary appointment records exist.
- Rebooking should preselect eligible prior service while requiring fresh availability and policy review.
- Owner correction/support path must be available for unresolved states.

## 15. Owner-dashboard information architecture

Priority sequence:

1. Today’s appointments and actionable exceptions.
2. Upcoming schedule by day/week.
3. Appointment detail, status, deposit and communication state.
4. Availability, blocked time and exceptions.
5. Services, durations, prices and deposit settings.
6. Policies and effective versions.
7. Approved media and content publication.
8. Review moderation.
9. Basic business and operational metrics.
10. Audit history, export and support access.

### Dashboard guardrails

- No payroll, POS, inventory, franchise or full-CRM patterns.
- Critical actions require confirmation and clear consequences.
- Destructive actions must not rely on color alone.
- Historical appointment and financial-reference records should be archived, not casually deleted.
- Mobile support is required for daily operational tasks, but dense schedule management may use enhanced tablet/desktop layouts.

## 16. Accessibility design requirements

The following are mandatory implementation acceptance inputs:

- Semantic page landmarks and heading hierarchy.
- Keyboard-complete navigation, booking and owner workflows.
- Visible focus indicators with sufficient contrast.
- Minimum routine body size of 16 px.
- Text resizing without loss of functionality.
- Touch targets appropriate for mobile use.
- Labels and instructions not dependent on placeholder text.
- Error summaries plus field-level errors.
- Live status announcements for booking, payment and notification state changes.
- Color not used as the sole indicator.
- Reduced-motion support.
- Accessible dialog, menu, date and time patterns.
- Alternative text for informative media.
- Contrast validation for Carbon, Forge, Bone, White, Signal Amber, Success and Danger combinations.

Automated checks alone are insufficient. Manual keyboard and screen-reader validation is required in Phase 8.

## 17. Brand application disposition

### Approved in principle

- `Unbreakable Standard` direction.
- UQC geometric monogram system.
- Carbon and Forge primary surfaces.
- Bone and white light/reverse use.
- Signal Amber reserved for actions and emphasis.
- Condensed display typography with accessible sans body/UI typography.
- Custom restrained icon system.
- Documentary Black grooming photography.

### Still requiring approval

- Final logo selection and trademark/name-conflict review.
- Final font choice and license/performance validation.
- Final color-pair accessibility results.
- Owner approval of homepage header and hero.
- Owner approval of service-card and booking presentation.
- Owner approval of social avatar and storefront/signage tests.
- Approved photography and consent register.

## 18. Required client-review package

The client review must include, at minimum:

1. Desktop homepage concept.
2. Mobile homepage concept.
3. Desktop and mobile service catalog.
4. Service-detail view.
5. Men’s Hair Systems overview.
6. Private consultation request.
7. Gallery view.
8. Guest booking: service selection.
9. Guest booking: time selection.
10. Guest booking: review/deposit.
11. Booking confirmation and failure states.
12. Appointment-management view.
13. Owner dashboard: Today.
14. Owner dashboard: availability and services.
15. Brand lockups, social avatar and small-size tests.

Mockups must label unapproved facts as placeholders and must not be mistaken for verified business content.

## 19. Approval register

| Decision ID | Approval required | Owner | Status | Blocking impact |
|---|---|---|---|---|
| XD-001 | Selected logo/identity direction | Robert “Turk” North | Pending | Blocks final visual implementation |
| XD-002 | Homepage structure and primary message | Robert “Turk” North + Metaphor Product | Pending | Blocks final content/UI |
| XD-003 | Mobile and desktop navigation | Robert “Turk” North + UX | Pending | Blocks final UX specification |
| XD-004 | Service catalog hierarchy | Robert “Turk” North | Pending | Blocks catalog/content implementation |
| XD-005 | Men’s Hair Systems experience and claims | Robert “Turk” North + legal/privacy reviewer where needed | Pending | Blocks hair-system content/intake |
| XD-006 | Booking flow and policy presentation | Robert “Turk” North + Product | Pending | Blocks booking UX implementation |
| XD-007 | Gallery/media direction and consent process | Robert “Turk” North | Pending | Blocks public media |
| XD-008 | Owner dashboard priorities | Robert “Turk” North | Pending | Blocks administration UX |
| XD-009 | Accessibility design review | Accessibility Lead | Pending | Blocks final Experience Design pass |
| XD-010 | Final business facts and copy approvals | Robert “Turk” North | Pending | Blocks production content |

## 20. Clarification register update

| ID | Required decision | Why it matters | Recommendation |
|---|---|---|---|
| C-001 | Final address and service area | Contact, local SEO, directions and structured data | Obtain written business-information approval |
| C-002 | Final hours and availability | Public content and booking design | Approve standard hours plus exception process |
| C-003 | Services, durations and prices | Catalog and booking | Complete controlled service matrix |
| C-004 | Deposit and cancellation rules | Booking review, payment and recovery | Approve before Phase 4 completion |
| C-005 | Customer account at MVP launch | Navigation and identity architecture | Guest booking remains mandatory; defer account if uncertain |
| C-006 | SMS launch status | Consent, cost and booking communication | Defer unless approved business case exists |
| C-011 | Brand and mockup approval | Final Experience Design gate | Conduct formal client review using required package |
| C-013 | Hair-system intake fields and privacy process | Sensitive inquiry design | Use minimal fields and obtain privacy review |
| C-014 | Education offering and credentials | Public navigation and claims | Omit or present inquiry-only until verified |
| C-015 | Review display source and moderation policy | Trust section and compliance | Prefer verified first-party completed-appointment reviews |

## 21. Risks

| Risk | Severity | Owner | Mitigation | Blocking |
|---|---|---|---|---|
| Mockups may be mistaken for approved facts | High | UX/Brand | Label placeholders and maintain approval register | Yes for production content |
| Generated imagery may be presented as real work | Critical | Brand/Product | Authentic consented media only for proof | Yes for launch |
| Brand may fail small-size or accessibility tests | High | Brand/Accessibility | Reproduction and contrast testing before approval | Yes for final design |
| Hair-system intake may collect unnecessary sensitive data | Critical | Product/Security | Data minimization and privacy review | Yes for intake implementation |
| Booking calendar may be inaccessible | High | UX/Accessibility | Native or independently validated pattern | Yes for release |
| Dashboard may expand into salon-suite scope | Medium | Product/Program | Enforce PRD non-goals and priority sequence | No if controlled |
| Unapproved policies may be embedded in UX | Critical | Product/Client | Versioned approved policies only | Yes for booking implementation |
| Unverified credentials or statistics may appear | High | Product/Compliance | Claims register and owner evidence | Yes for publication |

## 22. Quality evidence

| Check | Result | Evidence |
|---|---|---|
| Information architecture | Completed | Sections 5–6 |
| Content model | Completed | Section 7 |
| Mobile navigation design | Completed in principle | Section 8 |
| Public experience hierarchy | Completed in principle | Sections 9–12 |
| Booking and management design | Completed in principle | Sections 13–14 |
| Owner dashboard IA | Completed in principle | Section 15 |
| Accessibility design review | Conditional | Section 16; final prototype/testing pending |
| Brand application review | Conditional | Section 17; client approval pending |
| Client-review package | Specified | Section 18 |
| Unit/integration/E2E tests | Not applicable/not run | No implementation authorized |
| Performance/security tests | Not run | Architecture and implementation pending |

## 23. Gate decision

# CONDITIONAL PASS

Phase 3 passes only for entry into **Phase 4 — Architecture and Technical Design**.

### Conditions

1. Continue to treat brand, copy, mockups, routes and content as proposed until approved.
2. Do not write application code, create infrastructure, configure vendors or deploy.
3. Preserve guest booking as the required conversion baseline.
4. Do not publish generated imagery as evidence of client work.
5. Obtain formal client approval for XD-001 through XD-010.
6. Complete final visual accessibility testing before implementation approval.
7. Resolve business facts, policies, service matrix and sensitive intake decisions before Architecture Gate approval.

### Full-pass requirements

- Owner approval of identity and core mockups.
- Approved service hierarchy and business-information sheet.
- Approved Men’s Hair Systems copy/intake boundary.
- Approved booking and policy presentation.
- Approved gallery/media consent process.
- Approved owner-dashboard priorities.
- Accessibility review of final visual combinations and interactive prototype.

### Rejection conditions

Phase 4 must pause or reject the design input if material product scope changes, the client rejects the selected identity/experience direction, required business facts remain unavailable for architecture decisions, or inaccessible custom interaction patterns are selected without validated alternatives.

## 24. Next action

Proceed with Phase 4 using this experience architecture as proposed input. Validate system context, module boundaries, frontend/backend architecture, data model, identity, booking concurrency, payment, notifications, media, analytics, audit, observability and ADR disposition. Produce `UQC-PHASE-04-ARCHITECTURE-GATE.md` with a formal gate decision.

## 25. Revision history

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0.0 | 2026-07-19 | Metaphor Automation Consulting | Initial Phase 3 execution and Experience Design gate |