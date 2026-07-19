# UQC-EXEC-0002 — Phase 2 Product, Market, and Business Validation

**Version:** 1.0.0  
**Owner:** Metaphor Automation Consulting / Product Governance  
**Status:** Executed — Conditional Pass  
**Execution date:** 2026-07-19  
**Review cadence:** Before Phase 3 and after any approved business-fact or scope change  
**Related documents:** UQC-EXEC-0001, UQC-TPL-0001, UQC-PRD-0001, UQC-TDD-0001, UQC-ADR-PACKAGE-0001, UQC-GOV-0002  
**Organizational authority:** `cocodev86/Coco1`  
**Project authority:** `cocodev86/Turk`

> This execution validates the proposed product direction, market fit, terminology, user journeys, success measures, and operating assumptions. It does not approve final business facts, authorize implementation, configure vendors, or permit deployment.

## 1. Executive status

- **Current phase:** Phase 2 — Product, Market, and Business Validation
- **Current gate:** Product validation gate
- **Gate decision:** CONDITIONAL PASS
- **Phase readiness:** 90%
- **Development authorization:** BLOCKED
- **Next permitted phase:** Phase 3 — Experience, Content, and Brand Design

The proposed MVP is product-valid and consistent with current Decatur-area barber-market behavior. Local competitors commonly present discrete service catalogs, duration-based appointments, online booking, customer reviews, reminder options, and differentiated premium services. The direct-booking strategy is therefore supported by observable market behavior rather than speculation.

The terms **Men’s Hair Systems** and **Non-Surgical Hair Replacement** are appropriate customer-facing terminology. The product should avoid stigmatizing, misleading, medicalized, or unverified claims. Final services, prices, durations, hours, policies, credentials, address, photography, and provider information remain client-controlled facts and must not be inferred from competitor data.

## 2. Horizontal workstreams executed

The following Phase 2 workstreams were completed concurrently because they shared approved PRD inputs and did not modify implementation:

| Workstream | Principal owner | Direct assistants | Output |
|---|---|---|---|
| User and journey validation | Product Director | Product Requirements Analyst; Customer Journey Researcher | Validated personas and J1–J4 journeys |
| MVP and non-goal verification | Program Executive | Program Operations Manager; Governance Analyst | Confirmed bounded MVP and change-control triggers |
| Local-market evidence review | Compliance and Commercial Operations Lead | Regulatory Research Analyst; Vendor and Cost Analyst | Current Decatur-area service and booking evidence |
| Hair-system terminology validation | Product Director | Customer Journey Researcher; UX Content Designer | Approved terminology direction and content guardrails |
| Success metrics and baseline design | SEO and Growth Systems Lead | Technical SEO Engineer; Analytics Analyst | KPI definitions and baseline plan |
| Review-system validation | Product Director | Requirements Analyst; Compliance Analyst | Verified-customer and moderation rules |
| Owner workflow validation | UX Director | Interaction Designer; UX Content Designer | Owner workflow and failure-recovery needs |
| Risk and clarification update | Program Executive | Governance Analyst; Documentation Writer | Updated blockers, risks, and decisions |

## 3. Phase 2 step results

| Step | Required action | Result | Status |
|---|---|---|---|
| 1 | Validate intended user types | PRD user groups are coherent: recurring grooming customers, premium-service customers, parents, existing text-scheduling customers, private hair-system prospects, education prospects, and the owner/operator. | Complete |
| 2 | Validate principal customer journeys | Guest booking, returning-customer management, private hair-system inquiry, and owner schedule management are necessary and internally consistent. | Complete |
| 3 | Confirm MVP boundary and non-goals | Public site, booking, optional account, deposits, notifications, lightweight administration, analytics, audit, and operational documentation remain in scope. POS, payroll, inventory, native apps, franchise, multi-location, full CRM, memberships, retail, and autonomous AI remain excluded. | Complete |
| 4 | Research current local-market expectations | Decatur-area evidence supports online booking, explicit service pricing, durations, barber selection, reminders, reviews, and premium tiers. Competitor observations are directional only and do not authorize UQC prices. | Complete |
| 5 | Validate Men’s Hair Systems terminology | “Men’s Hair Systems” and “Non-Surgical Hair Replacement” are supported terms. Avoid “implants” unless describing a medically verified surgical procedure, which is outside the current scope. | Complete |
| 6 | Confirm service-information requirements | Every service needs an approved name, description, duration, price or starting-price rule, provider eligibility, preparation notes, deposit rule, and active state. No values may be fabricated. | Complete |
| 7 | Validate direct booking as primary conversion goal | Current local barber experiences prominently support direct appointment selection. UQC should make booking the primary CTA while retaining phone/contact fallback. | Complete |
| 8 | Define measurable business-success metrics | Metrics approved in principle: booking completion, self-service share, manual scheduling contacts, no-show rate, cancellation rate, rebooking, returning-customer share, owner schedule-management time, notification delivery, conflict prevention, and operating cost per booking. | Complete |
| 9 | Define pre-launch baseline requirements | Collect at least two to four weeks of available manual-scheduling volume, appointment count, no-shows, cancellations, rebooking, owner coordination time, and current platform costs. Mark unavailable data explicitly rather than inventing a baseline. | Complete |
| 10 | Validate account-optional guest booking | Guest booking remains the recommended baseline. Optional accounts may support history and rebooking but must not block conversion. | Complete |
| 11 | Validate review eligibility and moderation | Only customers linked to eligible completed appointments may submit first-party reviews. Positive and negative reviews must be treated consistently; no fabricated, selectively solicited, or misleading testimonials. | Complete |
| 12 | Validate owner-administration workflows | Owner must manage services, prices, availability, blocked time, policies, appointments, approved media, and review publication with audit history and minimal operational friction. | Complete |
| 13 | Identify customer-support and recovery needs | Required recovery paths include lost slot, payment ambiguity, notification failure, expired management token, cancellation-policy restriction, unavailable dependency, and owner correction path. | Complete |
| 14 | Update product risks and unresolved decisions | Business-fact, legal/commercial, brand approval, policy, consent, provider, retention, and operational decisions remain open. | Complete |
| 15 | Issue Phase 2 gate decision | CONDITIONAL PASS for Phase 3 only. Product direction is validated, but final product approval remains blocked by client-controlled facts and approvals. | Complete |

## 4. Market evidence and implications

### 4.1 Current Decatur-area service patterns

Current Decatur-area booking listings and official shop pages show observable service patterns including:

- Adult haircut offerings generally displayed as discrete bookable services.
- Common public price points for standard adult cuts in the observed sample ranging approximately from the mid-$20s to mid-$40s.
- Haircut-and-beard combinations commonly displayed around approximately $40–$65 in the observed sample.
- Premium, after-hours, VIP, or extended services displayed at higher prices.
- Kids, beard, lineup, shave, shampoo, and specialty services listed separately.
- Some hair-unit or installation services priced substantially above standard grooming and requiring consultation or deposits.
- Booking interfaces that expose duration, provider, availability, reminders, and confirmed-client reviews.

These figures are **market observations, not recommended UQC prices**. UQC pricing must be approved by Robert “Turk” North and recorded in a controlled service matrix.

### 4.2 Product implications

The evidence supports:

1. A clear service catalog with durations and transparent price presentation.
2. Strong, repeated booking CTAs.
3. Guest-first booking without mandatory account creation.
4. Optional reminder enrollment and simple rescheduling.
5. Separate premium positioning for consultation-led hair-system services.
6. Verified review eligibility based on completed appointments.
7. Mobile-first design because booking decisions are frequently made from local search and mobile marketplace contexts.
8. A direct branded channel that avoids permanent dependence on marketplace discovery.

### 4.3 Regulatory and trust implications

The Georgia State Board of Cosmetology and Barbers distinguishes barber-shop licensure from local business licensing. Public claims about licensing, credentials, shop status, or qualifications must be verified and approved before publication.

Federal Trade Commission guidance requires review and testimonial practices to avoid fake, false, manipulated, selectively suppressed, or misleading representations. Review collection and display must be transparent, and incentives cannot be conditioned on positive sentiment.

## 5. Terminology standard

### Approved customer-facing terms

- Men’s Hair Systems
- Non-Surgical Hair Replacement
- Hair System Consultation
- Hair System Installation, only if this is an approved actual service
- Hair System Maintenance, only if this is an approved actual service

### Terms requiring caution or avoidance

- “Implants” — avoid because it implies a surgical or medical procedure.
- “Guaranteed undetectable” — unverified performance claim.
- “Permanent” — potentially misleading unless precisely qualified.
- “Medical treatment,” “cure,” or diagnosis language — outside the barber-service scope unless supported by appropriately licensed professionals and legal review.
- Stigmatizing references such as “fake hair” or ridicule-based language.

### Content requirements

Hair-system content must emphasize privacy, consultation, realistic expectations, maintenance, consented photography, and clear boundaries between cosmetic service and medical advice.

## 6. Validated user model

| User | Primary need | Validated outcome | Blocking facts |
|---|---|---|---|
| New grooming customer | Understand quality, price, and availability quickly | Discover service and complete guest booking | Approved service matrix and photography |
| Returning customer | Rebook and manage appointment | Secure appointment access and optional account | Account launch decision and policy rules |
| Parent/guardian | Book eligible youth service | Clear age/service policy and appointment | Approved youth-service rules |
| Premium grooming customer | Compare elevated service options | Transparent service detail and duration | Approved premium catalog |
| Hair-system prospect | Private, respectful consultation | Minimal-data inquiry and next-step communication | Approved intake fields, consent, privacy handling |
| Education prospect | Verify education offering | Accurate inquiry pathway without false accreditation claims | Confirm education scope and credentials |
| Owner/operator | Reduce manual coordination | Manage services, availability, appointments, media, and policies | Final operating rules and dashboard priorities |

## 7. Validated journeys

### J1 — Guest booking

**Validated:** Discover → service detail → policy/price/duration → provider/date/time → contact and consent → deposit if required → explicit confirmation and secure management method.

**Required recovery:** slot lost, validation failure, incomplete deposit, provider failure, notification failure, and safe retry.

### J2 — Returning customer

**Validated:** Secure link or optional account → upcoming appointment → permitted reschedule/cancel → rebook previous eligible service.

**Open decision:** whether customer accounts launch in MVP or remain deferred.

### J3 — Hair-system inquiry

**Validated:** Educational content → private consultation request → minimum necessary information and consent → next-step communication.

**Guardrail:** do not collect medical history or sensitive images unless specifically justified, secured, and approved.

### J4 — Owner administration

**Validated:** Authenticate → daily/weekly schedule → appointment detail and allowed status updates → services → pricing display → availability → blocked time → policies → approved media/content → basic metrics.

**Guardrail:** every protected action requires server-side authorization and material changes require audit history in later implementation.

## 8. MVP scope disposition

### Confirmed MVP direction

- Responsive marketing site
- Approved business information
- Service catalog
- Provider profile
- Men’s Hair Systems information
- Gallery with consented media
- Contact, location, hours, policy, privacy, and accessibility information
- Guest booking
- Secure appointment management
- Optional customer account
- Selective deposits
- Transactional email
- Optional SMS only after approval
- Owner schedule, service, availability, policy, and content management
- Verified review eligibility
- Basic analytics and audit design
- Documentation and handoff

### Deferred unless approved through change control

- Waitlist
- Recurring appointments
- Group/family booking
- Rich CRM
- Education enrollment
- Memberships
- Additional staff roles
- Multi-location
- Retail commerce
- Native applications
- Full POS, payroll, accounting, or inventory

## 9. Success metrics and baseline plan

| Metric | Definition | Baseline needed | Initial measurement method |
|---|---|---|---|
| Booking completion rate | Completed bookings / booking starts | No | Product analytics |
| Self-service booking share | Bookings completed without staff intervention / total bookings | Yes | Manual log plus platform events |
| Manual scheduling contacts | Calls/texts/DMs used to coordinate appointments per week | Yes | Owner tally |
| No-show rate | No-shows / confirmed appointments | Yes | Appointment status records |
| Cancellation rate | Cancellations / confirmed appointments | Yes | Appointment status records |
| Rebooking rate | Eligible customers who book again within approved window | Yes | Customer/appointment linkage |
| Returning-customer share | Returning customers / total completed customers | Yes | Customer history |
| Owner management time | Weekly minutes spent scheduling and correcting appointments | Yes | Owner time log |
| Notification delivery rate | Successful messages / attempted messages | No | Provider and internal attempt records |
| Booking-conflict prevention | Rejected stale/conflicting confirmations | No | Domain metric |
| Operating cost per booking | Allocated platform cost / completed bookings | Yes | Cost register plus appointment count |

No target percentage is approved in this phase. Targets must be set after baseline collection or documented market evidence.

## 10. Review and testimonial policy direction

The product should:

- Permit review submission only after an eligible completed appointment.
- Preserve the reviewer’s original meaning.
- Apply the same moderation criteria regardless of rating.
- Prohibit fabricated reviews and testimonials.
- Avoid asking only customers expected to provide positive feedback.
- Disclose material incentives or relationships when applicable.
- Avoid presenting generated copy as a real customer testimonial.
- Record moderation and publication status.
- Explain how first-party reviews are collected and displayed.

The project may display externally sourced ratings only when the source, freshness, attribution, and provider terms are verified.

## 11. Owner workflow priorities

Priority order for Phase 3 experience design:

1. Today’s and upcoming appointments
2. Appointment status and customer communication state
3. Availability, blocked time, and exceptions
4. Service, duration, pricing, and deposit settings
5. Reschedule/cancellation resolution
6. Policy version management
7. Approved gallery/media publication
8. Review moderation
9. Basic business metrics
10. Data export and support access

The dashboard must remain lightweight. It should not become a full salon-management suite.

## 12. Failure-recovery requirements

| Failure | Customer experience | Owner experience | Product requirement |
|---|---|---|---|
| Slot becomes unavailable | Clear message and refreshed alternatives | Conflict metric | No false confirmation |
| Deposit outcome is unclear | Pending/reconciliation state; no duplicate charge | Alert and processor reference | Idempotent recovery |
| Booking succeeds but email fails | On-screen confirmation remains authoritative | Delivery failure and retry visibility | Appointment preserved |
| Secure link expires | Safe re-verification path | Audit event where applicable | No record enumeration |
| Cancellation disallowed | Explain applicable approved policy | Manual authorized resolution path | Policy version traceability |
| Vendor unavailable | Recoverable message and contact fallback | Health alert and manual fallback | Graceful degradation |
| Incorrect business content | No silent alteration | Controlled correction and approval record | Content governance |

## 13. Updated clarification register

| ID | Decision required | Phase 2 result | Blocking impact | Required owner |
|---|---|---|---|---|
| C-001 | Final address and service area | Unresolved | Blocks final IA content, local SEO, structured data, launch | Client |
| C-002 | Final hours and availability | Unresolved | Blocks final booking rules and public content | Client |
| C-003 | Services, prices, durations, preparation notes | Unresolved | Blocks final PRD approval, content design, booking implementation | Client |
| C-004 | Deposit and cancellation policy | Unresolved | Blocks payment and appointment-state design | Client + product/legal review |
| C-005 | Customer account at MVP launch | Recommended optional/defer-capable | Blocks final account UX scope only | Product owner |
| C-006 | SMS at MVP launch | Recommend defer unless justified | Blocks SMS scope only | Client + compliance/operations |
| C-008 | Data retention/deletion | Unresolved | Blocks security/privacy approval | Client + qualified review |
| C-009 | Support/stabilization terms | Unresolved | Blocks legal/commercial and operations gate | Metaphor + client |
| C-010 | Performance and recovery targets | Unresolved | Blocks architecture and launch gates | Architecture + operations |
| C-011 | Brand and mockup approval | Unresolved | Blocks Experience Design gate | Client |
| C-012 | Executed legal/commercial documents | Unresolved | Blocks development | Authorized parties |
| C-013 | Provider count and staff roles | New unresolved item | Blocks final owner workflow and authorization model | Client |
| C-014 | Education offering and credentials | New unresolved item | Blocks education content | Client |
| C-015 | Hair-system intake, services, pricing, and consent | New unresolved item | Blocks final inquiry design and content | Client + privacy review |
| C-016 | Review publication model | First-party verified reviews recommended | Blocks final review UX and moderation policy | Product owner |

## 14. Updated risks

| Risk | Severity | Owner | Mitigation | Blocking |
|---|---|---|---|---|
| Competitor prices are mistaken for UQC-approved prices | High | Product Director | Label all figures as market observations; require client service matrix | Yes for final pricing/content |
| Hair-system copy implies medical treatment or guaranteed results | High | Product/Compliance | Use approved terminology and claim register; qualified review where needed | Yes for final content |
| Fake or selectively presented testimonials undermine trust and create regulatory exposure | Critical | Product/Compliance | Verified eligibility, neutral moderation, no fabricated content | Yes for review launch |
| Mandatory account creation reduces booking conversion | Medium | Product/UX | Preserve guest booking as baseline | No |
| Dashboard scope expands into salon/POS software | High | Program Executive | Enforce MVP non-goals and change control | Yes if scope expands |
| SMS launches without consent, opt-out, cost, or operational readiness | High | Compliance/Operations | Defer by default; approve separately | Yes for SMS only |
| Business license or barber credentials are published without verification | High | Client/Product | Approved claims register and supporting evidence | Yes for claims |
| Baselines are invented or targets selected without evidence | Medium | Growth Analyst | Mark unavailable data and collect pre-launch baseline | No for Phase 3 |

## 15. Evidence register additions

| Evidence ID | Evidence | Source | Reviewed | Applicability | Limitation |
|---|---|---|---|---|---|
| E-008 | Decatur-area booking listings expose services, durations, prices, provider selection, and confirmed-client reviews | Booksy Decatur market pages | 2026-07-19 | Market behavior and service presentation | Marketplace listings are dynamic and do not determine UQC pricing |
| E-009 | Local official barbershop site uses service selection, barber selection, available time, optional profile, SMS reminders, and rescheduling | Chuck Simon’s Barber Shop | 2026-07-19 | Direct-booking journey evidence | One competitor; product design must remain UQC-specific |
| E-010 | Men’s hair systems and non-surgical hair replacement are established terms | American Hair Loss Association | 2026-07-19 | Terminology direction | Not legal or medical advice; service claims require verification |
| E-011 | Barber-shop licensing is distinct from local business licensing in Georgia | Georgia Secretary of State | 2026-07-19 | Claims and business-information verification | Client remains responsible for actual license status |
| E-012 | Review platforms should use genuine feedback, neutral moderation, and transparent collection/display | Federal Trade Commission | 2026-07-19 | Review eligibility and moderation | Legal guidance is contextual; qualified review may be needed |
| E-013 | Federal rule addresses fake and false reviews/testimonials and incentivized positive reviews | Federal Trade Commission | 2026-07-19 | Prohibited review practices | Does not replace legal advice |

## 16. Primary research sources

- Georgia Secretary of State, “How-to Guide: Salons & Barber Shop Application”: https://sos.ga.gov/how-to-guide/how-guide-salons-barber-shop-application
- Georgia State Board of Cosmetology and Barbers: https://sos.ga.gov/georgia-state-board-cosmetology-and-barbers
- Federal Trade Commission, “Featuring Online Customer Reviews”: https://www.ftc.gov/business-guidance/resources/featuring-online-customer-reviews-guide-platforms
- Federal Trade Commission, “Consumer Reviews and Testimonials Rule: Questions and Answers”: https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers
- American Hair Loss Association, “Non-Surgical Hair Replacement”: https://www.americanhairloss.org/non-surgical-hair-replacement/
- American Hair Loss Association, “Men’s Hair Pieces”: https://www.americanhairloss.org/non-surgical-hair-replacement/mens-hair-pieces/
- Chuck Simon’s Barber Shop official website: https://www.chucksimonsbarbershop.com/
- Booksy Decatur barber-market pages used for directional market observation: https://booksy.com/en-us/s/barber-shop/122822_decatur

## 17. Quality evidence

| Check | Result | Evidence |
|---|---|---|
| Product requirements review | Passed conditionally | PRD scope and journeys validated; approval still pending |
| Market validation | Passed | Current local booking and service evidence reviewed |
| Terminology validation | Passed | Established non-surgical hair-replacement terminology confirmed |
| Success-metric design | Passed | Metrics and baseline method defined without invented targets |
| Review-policy validation | Passed conditionally | FTC-aligned direction established; final policy approval pending |
| Build | Not run / not applicable | No implementation authorized |
| Lint | Not run / not applicable | No implementation authorized |
| Type check | Not run / not applicable | No implementation authorized |
| Unit tests | Not run / not applicable | No implementation authorized |
| Integration tests | Not run / not applicable | No implementation authorized |
| End-to-end tests | Not run / not applicable | No implementation authorized |
| Accessibility testing | Not run | Phase 3 design work required |
| Security testing | Not run | Architecture and implementation not authorized |
| Performance testing | Not run | Budgets and implementation unavailable |

## 18. Linear critical path

`Phase 1 conditional pass → Phase 2 product validation → client business-information approval → PRD approval → Phase 3 experience/content/brand design → client design approval → TDD/ADR/security/operations approval → legal/commercial execution → written development authorization`

Current position: **Phase 2 complete; client facts and formal product approval remain open while Phase 3 design documentation may proceed conditionally.**

## 19. Gate decision

# CONDITIONAL PASS

Phase 2 is approved only for entry into **Phase 3 — Experience, Content, and Brand Design**.

### Conditions

1. Do not treat competitor pricing as UQC pricing.
2. Do not publish or implement unapproved business facts.
3. Maintain guest booking as the baseline unless an approved change states otherwise.
4. Use “Men’s Hair Systems” and “Non-Surgical Hair Replacement”; avoid medical or guaranteed-result claims.
5. Build the Phase 3 content and experience around placeholders clearly marked for client approval where business facts remain unknown.
6. Do not implement application code, schemas, vendor accounts, payment flows, or infrastructure.
7. Obtain explicit client decisions for services, prices, durations, address, hours, policies, provider count, hair-system intake, education scope, accounts, SMS, and reviews.
8. Preserve legal/commercial, architecture, security, operations, and development gates.

### Rejection conditions

Phase 3 must pause or reject affected work if:

- Required business information is represented as verified when it is not.
- Competitor or generated content is presented as client fact.
- Hair-system claims imply unsupported medical treatment or guaranteed outcomes.
- Review content is fabricated, manipulated, or selectively suppressed.
- Experience design attempts to authorize implementation before controlling approvals.

## 20. Next action

Proceed with Phase 3 documentation and client-review artifacts:

1. Brand-system audit
2. Site information architecture
3. Route inventory
4. Content model
5. Mobile navigation
6. Homepage hierarchy
7. Services experience
8. Men’s Hair Systems experience
9. Gallery experience
10. Guest-booking flow
11. Appointment recovery states
12. Owner-dashboard IA
13. WCAG 2.2 AA design review
14. Client mockups and approval register
15. Phase 3 gate decision

## 21. Revision history

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0.0 | 2026-07-19 | Metaphor Automation Consulting | Executed Phase 2 product, market, and business validation |