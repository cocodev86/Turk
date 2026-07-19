# UQC-TDD-0001 — Unbreakable Quality Cutz Technical Design Document

**Version:** 1.0.0  
**Owner:** Metaphor Automation Consulting / Architecture  
**Status:** Proposed — design only  
**Approval date:** Pending PRD approval  
**Review cadence:** Before architecture gate and each material architecture change  
**Related standards:** MOS-0002, MOS-0003, MOS-0006, MOS-0008, MOS-0009  
**Related requirements:** UQC-PRD-0001

> This document defines an architecture in principle. It authorizes no coding, scaffolding, vendor configuration, database creation, or deployment.

## 1. Scope

Design a mobile-first public site, direct booking experience, optional customer account, and lightweight owner dashboard for one barber business while preserving reusable boundaries for future Metaphor appointment-business solutions.

## 2. Architectural principles

- Simplicity first; no enterprise salon-suite scope.
- Product-specific presentation remains separate from shared identity, scheduling, notification, media, analytics, and audit capabilities.
- Stable service contracts isolate interfaces from storage details.
- Security, privacy, accessibility, observability, and recovery are designed before implementation.
- Prefer reversible managed-service decisions with documented exit paths.
- Single-business MVP; organization scoping is retained where inexpensive but no unnecessary multi-tenant UI.

## 3. Proposed logical architecture

1. **Experience layer:** public website, booking flow, customer appointment view, owner dashboard.
2. **Application layer:** catalog, availability, booking, appointment lifecycle, customer, review, media, notification, policy, analytics, and administration services.
3. **Identity layer:** owner authentication, optional customer identity, guest booking tokens, role and organization context.
4. **Data layer:** relational operational data, object media storage, audit records, and analytics events.
5. **Integration layer:** payment processor, transactional email, optional SMS, error monitoring, and web analytics.
6. **Infrastructure layer:** managed web hosting, managed PostgreSQL, managed object storage, secrets, deployment controls, health checks, backups, and monitoring.

## 4. Proposed technology baseline

Subject to ADR approval:

- Next.js/React
- TypeScript strict mode
- Tailwind CSS and approved accessible component primitives
- Supabase/PostgreSQL with Row-Level Security
- Stripe for deposits and payment references
- Vercel for web deployment
- Approved transactional email provider
- Optional approved SMS provider

No vendor account is authorized by this document.

## 5. Component boundaries

### Catalog Service
Owns services, duration, display price, preparation notes, deposit rule, active state, and eligible providers.

### Availability Service
Calculates candidate slots from provider hours, exceptions, blocked time, buffers, service duration, booking horizon, lead time, and existing commitments. It does not create appointments.

### Booking Service
Validates final availability, creates temporary reservation/hold where approved, coordinates deposit status, commits appointment state atomically, and emits lifecycle events.

### Appointment Service
Owns appointment retrieval, allowed status transitions, rescheduling, cancellation, archival, and customer/admin views.

### Identity and Authorization Service
Owns session context, roles, customer identity linkage, secure guest-management tokens, and policy enforcement.

### Notification Service
Consumes approved domain events, renders versioned templates, applies consent/channel rules, records attempts and provider references, retries safe failures, and escalates terminal failures.

### Payment Boundary
Creates and verifies approved deposit intents, stores only processor references and business state, validates signed callbacks, reconciles ambiguous outcomes, and never stores card data.

### Media Service
Owns consent metadata, upload policy, object references, approved transformations, alt text, publication state, and archival.

### Review Service
Allows a review only from an eligible completed appointment, supports moderation/publication status, and preserves audit history.

### Analytics and Audit
Analytics measures product/business behavior. Audit records material administrative and security-sensitive actions. They remain logically separate.

## 6. Conceptual data model

Entities include Organization, User, RoleAssignment, Customer, Provider, Service, ProviderService, AvailabilityRule, AvailabilityException, BlockedTime, Appointment, AppointmentStatusEvent, BookingHold, PaymentReference, Notification, NotificationAttempt, ConsentRecord, Review, MediaAsset, PolicyVersion, AnalyticsEvent, AuditEvent, and Configuration.

Key integrity rules:

- Operational records use stable identifiers and archival states.
- Appointment times are stored consistently with explicit business timezone handling.
- Confirmed/active appointment overlap is prevented at the persistence boundary, not only in the interface.
- Status transitions follow an explicit state machine.
- Payment and notification operations are idempotent.
- Customer-visible identifiers are non-sequential or otherwise enumeration-resistant.
- Every business-owned record is organization scoped where practical.

No SQL schema or migration is produced during this phase.

## 7. Interface contracts in principle

Contracts must be versioned and documented before implementation.

### Availability query
Inputs: organization, service, provider preference, date range, customer timezone context.  
Output: eligible slots with start/end, provider, pricing/deposit summary, and expiry/context token.  
Failure behavior: validation error, no availability, service unavailable, temporary dependency failure.

### Create booking
Inputs: selected slot/context token, customer contact, required consent, policy version, idempotency key, payment intent/reference when required.  
Output: confirmed/pending appointment reference and next action.  
Failure behavior: slot lost, payment incomplete, invalid consent, duplicate request, temporary failure with reconciliation state.

### Manage appointment
Inputs: secure customer session or signed management token, appointment reference, requested action.  
Output: updated appointment state and communication status.  
Failure behavior: policy restriction, expired token, unauthorized action, stale state.

### Administrative actions
Inputs: authenticated role context, target, requested change, expected version.  
Output: updated resource plus audit reference.  
Failure behavior: authorization denial, conflicting update, validation failure.

## 8. Booking concurrency strategy

The final implementation must use a database-enforced mechanism that prevents two active appointments from owning the same provider time range. Candidate-slot display is advisory; final confirmation revalidates inside a transaction. Holds, if used, must expire, be idempotent, and not become permanent schedule blockers after abandoned payment.

## 9. Authentication and authorization

- Guest booking requires no account.
- Guest appointment management uses a short-lived or revocable secure mechanism that does not expose raw sequential identifiers.
- Customer accounts are optional and may claim eligible bookings through verified contact ownership.
- Owner/admin access requires strong authentication; MFA is recommended before production administration.
- Server-side RBAC and row-level controls enforce every protected read/write.
- Roles proposed for MVP: Owner/Admin and Customer. Additional staff roles remain deferred unless confirmed.

## 10. Security and privacy design

Trust boundaries exist between browser, application, database/storage, payment provider, notification providers, and administrative users.

Controls include validation, output encoding, CSRF/session protections appropriate to the framework, least privilege, RLS, signed callback verification, idempotency, rate limiting, upload allowlists, malware-risk controls appropriate to managed storage, secrets isolation, secure headers, dependency scanning, audit events, and incident procedures.

Sensitive hair-system inquiry data must be minimized and separated from public media/content workflows. Media publication requires recorded consent.

## 11. Failure modes and recovery

- **Slot conflict:** reject confirmation and return refreshed alternatives.
- **Payment succeeds but booking response fails:** reconcile by idempotency key and provider event before retrying charge.
- **Booking succeeds but email/SMS fails:** preserve appointment, record failure, retry safe channels, expose owner alert and customer confirmation page.
- **Provider webhook delayed or duplicated:** verify signature, process idempotently, retain reconciliation state.
- **Database unavailable:** do not present false confirmation; return recoverable error and retain correlation details.
- **Media transformation failure:** preserve source in restricted state; do not publish broken or unapproved asset.
- **Deployment regression:** use documented rollback to last known good release; migrations require backward-compatible or forward-repair planning.

## 12. Observability blueprint

### Structured logs
Request/correlation ID, domain action, actor type, organization, outcome, latency, dependency, and safe error classification. Do not log secrets, card data, or unnecessary personal details.

### Metrics
Availability latency, booking attempts/completions, slot conflicts, appointment transitions, payment reconciliation, notification success/failure/latency, authentication failures, authorization denials, upload failures, error rate, database latency, web performance, and vendor cost/usage.

### Audit events
Service/policy/availability changes, role changes, appointment administrative changes, payment-reference changes, review moderation, media publication, data export/deletion actions, and security-relevant configuration changes.

### Alerts
Sustained booking failure, elevated conflict rate, failed payment callbacks, notification backlog, administrative authentication anomalies, database/storage health, error-rate threshold, performance regression, and cost threshold.

## 13. Performance and scalability

Design for local-business traffic with managed horizontal web scaling and indexed relational queries. Avoid premature distributed systems. Public content should use caching/static generation where appropriate; availability and booking remain dynamic and consistency-sensitive. Images require responsive sizing and modern delivery formats. Performance budgets must be defined before implementation and measured on representative mobile hardware and networks.

## 14. Accessibility design

Use semantic HTML, native controls where possible, accessible dialogs/forms/calendar patterns, robust labels and errors, keyboard-complete workflows, focus management, reduced motion, sufficient contrast, text resizing, and assistive-technology validation. Accessibility acceptance tests are required for booking and administration.

## 15. Testing strategy

- Unit: durations, buffers, policy cutoffs, status transitions, permissions, deposits, template selection.
- Integration: persistence constraints, RLS, transactions, webhooks, notification recording, media authorization.
- End-to-end: guest booking, optional account, reschedule, cancel, deposit, failed payment recovery, review submission, owner management.
- Security: enumeration, privilege escalation, rate-limit abuse, replay/idempotency, upload abuse, webhook forgery, session controls.
- Accessibility: automated checks plus manual keyboard and screen-reader review for critical flows.
- Performance: public-page budgets, availability latency, booking transaction latency, constrained mobile testing.
- Recovery: provider outage, notification retry, partial transaction, rollback, backup restoration evidence.

No test code is authorized in this phase.

## 16. Deployment and rollback design

Future deployment must use protected default branch, short-lived reviewed branches, automated quality gates, environment separation, secret management, preview validation, production approval, health verification, and release communication. Rollback requires a known-good application release plus a database change strategy that is backward compatible or explicitly forward repaired. Every production release requires a launch/rollback owner.

## 17. Backup and recovery objectives

Proposed MVP objectives, subject to vendor capability and business approval:

- Documented automated database backup and point-in-time recovery capability
- Regular restoration verification rather than backup existence alone
- Media durability and export expectations
- RPO target: no more than 24 hours for non-financial content; tighter objectives for appointments subject to selected platform capability
- RTO target: same business day for major service restoration, with manual appointment fallback documented
- Payment reconciliation against Stripe as authoritative for payment events

## 18. Cost design

Track fixed subscriptions and metered web, database, storage, email, SMS, analytics, and payment costs. Define warning thresholds and owner authorization before enabling optional paid channels. Report operating cost per completed booking.

## 19. Reusable Metaphor extraction boundaries

Candidate reusable capabilities: identity/RBAC, organization context, service catalog, availability, booking orchestration, appointment state machine, payments boundary, notifications, media consent/publication, verified reviews, audit logging, analytics schema, dashboard shell, policy versioning, and client data export.

Extraction must not delay the UQC MVP. Shared interfaces should be designed first; internal packaging decisions follow evidence from implementation and another use case.

## 20. Alternatives considered

- External marketplace only: faster but weak brand/customer ownership and competitor adjacency.
- Generic scheduling embed: simple but insufficient service commerce, policy, dashboard, and platform reuse.
- Full salon platform: excessive cost and complexity for MVP.
- Custom distributed services: unjustified operational burden.

## 21. Open questions

Final provider count, booking-hold need, deposit services, cancellation windows, customer-account launch scope, SMS launch status, preferred email/SMS vendors, data retention, support hours, performance budgets, RPO/RTO acceptance, and exact reusable-framework boundary.

## 22. Architecture gate conditions

This TDD may be approved only after PRD approval, proposed ADR review, threat model approval, requirements traceability completion, client/legal prerequisites, open-question disposition, and named deployment/operations ownership.

## 23. Revision history

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0.0 | 2026-07-19 | Metaphor Automation Consulting | Initial proposed technical design |
