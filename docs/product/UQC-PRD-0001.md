# UQC-PRD-0001 — Unbreakable Quality Cutz Product Requirements Document

**Version:** 1.0.0  
**Owner:** Metaphor Automation Consulting / Product  
**Status:** Proposed  
**Approval date:** Pending  
**Review cadence:** At each release boundary  
**Related standards:** MOS-0004, MOS-0007, MCO-0001  
**Sources:** `UNBREAKABLE_QUALITY_CUTZ_PRODUCT_BLUEPRINT.md`, `METAPHOR_OS_ALIGNMENT_AUDIT.md`

## 1. Executive summary

Unbreakable Quality Cutz requires a direct, mobile-first digital experience that converts local discovery into completed appointments, reduces manual scheduling, supports repeat customers, and presents Robert “Turk” North’s barbering and hair-system services with professional clarity. The MVP must remain intentionally smaller than a salon-management suite.

## 2. Problem statement

Scheduling currently risks dependence on calls, texts, social platforms, and third-party marketplaces. Customers may encounter unclear services, policies, prices, availability, and preparation requirements. The owner lacks one dependable operational view of appointments and customer activity.

## 3. Opportunity and evidence

A direct branded booking channel can reduce friction, preserve customer ownership, strengthen local search visibility, improve reminders and policy enforcement, and create a reusable Metaphor appointment-business foundation. Local-market research supports standard barber appointments, premium grooming, and consultation-led hair-system services.

## 4. Goals

1. Enable a customer to discover, understand, and book an eligible service from a phone without installing an app.
2. Reduce owner time spent manually coordinating appointments.
3. Improve booking completion, reminder delivery, rebooking, and schedule visibility.
4. Build trust through verified services, authentic photography, clear policies, accessibility, and transparent communication.
5. Preserve a credible path for reusable Metaphor booking, notification, media, review, and administration capabilities.

## 5. Non-goals for MVP

- Payroll, inventory, accounting, franchise management, or a full POS
- Multi-location administration
- Marketplace discovery of competing barbers
- Native mobile applications
- Autonomous AI decision-making
- Complex loyalty, memberships, courses, or retail commerce
- Unverified credential, performance, sanitation, or testimonial claims

## 6. Primary users

- Working adults seeking reliable recurring grooming
- Fade, lineup, beard, and premium-service customers
- Fathers arranging appointments for children
- Existing customers transitioning from text-based scheduling
- Hair-system prospects requiring privacy and consultation
- Aspiring barbers seeking verified education information
- Robert “Turk” North as owner and initial primary operator

## 7. Core journeys

### J1 — Guest booking
Discover service → review details and policies → select provider/date/time → provide contact information → satisfy deposit requirement when applicable → receive confirmation and management link.

### J2 — Returning customer
Open account or secure booking link → review upcoming appointment → reschedule or cancel within policy → rebook a prior service.

### J3 — Hair-system inquiry
Review respectful service information → request private consultation → provide minimal necessary information and consent → receive next-step communication.

### J4 — Owner schedule management
Authenticate → review daily/weekly schedule → inspect appointment details → update allowed status → manage services, availability, blocked time, policies, media, and approved content.

## 8. Functional requirements

### Public experience
- FR-001: Display approved business identity, service area, contact methods, hours, policies, and booking CTA.
- FR-002: Present approved services with description, duration, starting or fixed price, preparation notes, provider eligibility, deposit rule, and availability state.
- FR-003: Present authentic, consented portfolio media with accessible text alternatives.
- FR-004: Provide barber profile and verified credentials only after owner approval.
- FR-005: Provide dedicated hair-system information using “Men’s Hair Systems” or “Non-Surgical Hair Replacement.”
- FR-006: Provide education inquiry information without implying unverified accreditation.
- FR-007: Provide local contact, map/directions, policies, privacy, and accessibility information.

### Booking
- FR-010: Permit guest booking without mandatory account creation.
- FR-011: Show only valid available slots based on service duration, provider schedule, blocked time, lead time, buffers, and existing appointments.
- FR-012: Prevent confirmed overlapping appointments.
- FR-013: Collect only necessary customer and appointment information.
- FR-014: Apply configurable deposits only to designated services or conditions.
- FR-015: Send confirmation and reminder communications through approved channels and consent rules.
- FR-016: Support secure cancellation and rescheduling according to published policy.
- FR-017: Provide an explicit confirmation outcome and recovery path after payment or notification failure.

### Customer account
- FR-020: Account creation remains optional for booking.
- FR-021: Authenticated customers may review their appointments and approved profile information.
- FR-022: Customers may rebook eligible previous services.
- FR-023: Customers may submit reviews only for eligible completed appointments.

### Owner administration
- FR-030: Restrict dashboard access to authorized users.
- FR-031: Display appointment views by day, week, status, and customer.
- FR-032: Support controlled appointment status transitions with audit history.
- FR-033: Manage services, duration, pricing display, deposits, preparation notes, active state, and provider assignment.
- FR-034: Manage provider hours, exceptions, blocked time, buffers, and booking horizon.
- FR-035: Manage approved public content and media without deleting historical operational records.
- FR-036: Display basic business and operational metrics.
- FR-037: Export or retrieve business-owned operational data in a documented format.

## 9. Nonfunctional requirements

- NFR-001: Mobile-first, one-handed usability from 320px width upward.
- NFR-002: WCAG 2.2 AA target, including keyboard operation, visible focus, accessible errors, text resizing, and reduced motion support.
- NFR-003: High-priority public pages should meet agreed Core Web Vitals targets under representative mobile conditions.
- NFR-004: Authorization must be enforced server-side; interface hiding is insufficient.
- NFR-005: Sensitive and operational data must follow least privilege, encryption, auditability, retention, and deletion policies.
- NFR-006: Appointment creation must be concurrency-safe.
- NFR-007: The system must expose actionable health, error, delivery, booking-conflict, audit, and cost signals.
- NFR-008: Vendor dependencies must have documented substitution or exit considerations.
- NFR-009: Critical workflows require automated verification before release.
- NFR-010: Important documentation and decisions remain version controlled and current.

## 10. Privacy and security requirements

- Collect minimum necessary personal data.
- Keep payment-card data within the approved payment processor.
- Use role-based access and row-level data controls.
- Protect appointment references from enumeration.
- Validate input and uploads; restrict file type, size, and access.
- Rate-limit abuse-prone public and authentication paths.
- Record material administrative, appointment, policy, and payment-reference actions.
- Document retention, customer requests, backups, incidents, and vendor responsibilities.

## 11. Accessibility requirements

Every critical journey must be operable without a mouse; communicate state without color alone; expose labels, errors, status, price, duration, and availability to assistive technology; use adequate targets and contrast; and avoid inaccessible custom calendar controls unless independently validated.

## 12. SEO requirements

- Unique, accurate metadata and indexable service/location content
- Consistent business name, address, phone, hours, and service terminology after approval
- LocalBusiness/BarberShop and applicable service structured data where valid
- Fast, crawlable pages with canonical URLs and sitemap controls
- No fabricated reviews, locations, awards, credentials, or service claims

## 13. Analytics and success metrics

Establish pre-launch baselines where available, then measure:

- Booking-start and booking-completion rate
- Appointment conversion by service and source
- Percentage booked without staff intervention
- Manual scheduling contacts per week
- No-show and cancellation rate
- Rebooking and returning-customer share
- Owner schedule-management time
- Notification delivery/failure rate
- Booking-conflict prevention events
- Operating cost per completed booking
- Accessibility, performance, and error-health indicators

## 14. Dependencies

Approved business facts, prices, services, hours, address, provider credentials, photography consent, policies, notification consent language, legal agreements, third-party accounts, and architecture approval.

## 15. Risks and mitigations

- Unapproved claims: require an evidence and approval register.
- Double booking: require transactional integrity and database enforcement.
- No-shows: use clear policy, reminders, and selective deposits.
- Vendor outage: define graceful failure, reconciliation, and replay procedures.
- Privacy breach: minimize data, enforce least privilege, audit access, and document response.
- Scope expansion: enforce release boundaries and change control.
- Owner adoption: validate dashboard workflows and provide training/handoff.

## 16. Release scope

### MVP
Public site, services, provider profile, portfolio, contact/local SEO, guest booking, optional customer account, secure appointment management, selective deposits, email notifications, optional compliant SMS, owner schedule/service/availability management, basic analytics, audit events, and operational documentation.

### Later consideration
Waitlist, recurring appointments, group/family booking, richer CRM, education enrollment, memberships, additional staff, multi-location support, retail, and broader Metaphor platform extraction.

## 17. Acceptance criteria

- A guest can complete an eligible booking without an account.
- Invalid or overlapping slots cannot become confirmed appointments.
- Applicable deposit and policy terms are shown before commitment.
- Customer and owner receive the correct approved communications or a visible recovery state.
- Authorized users can manage schedules and services; unauthorized users cannot access protected data or actions.
- Critical journeys meet approved accessibility, security, performance, and test thresholds.
- Business claims, media, policies, and prices have recorded owner approval.
- Operational logs, metrics, backups, rollback, support, and handoff procedures are approved before launch.

## 18. Open questions

Address, operating hours, final service catalog and prices, provider count, precise cancellation/deposit rules, approved credentials, education scope, notification vendors, SMS launch status, hair-system intake requirements, photo availability/consent, data-retention expectations, and support arrangement.

## 19. Approval record

| Role | Name | Decision | Date | Conditions |
|---|---|---|---|---|
| Product owner | Robert “Turk” North | Pending | — | Business facts and scope |
| Metaphor product | Founder/Delegate | Pending | — | MOS-0007 compliance |
| Architecture | Chief Systems Architect/Delegate | Pending | — | TDD and ADR approval |
| Security/privacy | Assigned reviewer | Pending | — | Threat model and controls |
| Legal | Qualified counsel | Pending | — | Contracts and customer-facing terms |

## 20. Revision history

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0.0 | 2026-07-19 | Metaphor Automation Consulting | Initial controlled PRD |
