# UQC-EXEC-0004 — Phase 4 Architecture and Technical Design

**Version:** 1.0.0  
**Owner:** Metaphor Automation Consulting / Architecture Governance  
**Status:** Executed — Conditional Pass  
**Execution date:** 2026-07-19  
**Review cadence:** Before Phase 5 and after any material requirement, vendor, security, data, payment, or operations change  
**Related documents:** UQC-EXEC-0001, UQC-EXEC-0002, UQC-EXEC-0003, UQC-PRD-0001, UQC-TDD-0001, UQC-ADR-PACKAGE-0001, UQC-GOV-0002, UQC-BRAND-0001  
**Organizational authority:** `cocodev86/Coco1`  
**Project authority:** `cocodev86/Turk`

> This execution validates architecture and technical design in principle. It does not authorize scaffolding, SQL, application code, vendor configuration, infrastructure changes, account purchases, or deployment.

## 1. Executive status

- **Current phase:** Phase 4 — Architecture and Technical Design
- **Current gate:** Architecture gate
- **Gate decision:** CONDITIONAL PASS
- **Phase readiness:** 93%
- **Development authorization:** BLOCKED
- **Next permitted phase:** Phase 5 — Engineering Foundation, only after written authorization and gate conditions are satisfied

The proposed architecture is coherent, appropriately bounded for a single-business MVP, and aligned with the Metaphor Operating System. The design uses a managed web architecture, relational booking model, server-enforced authorization, persistence-level booking integrity, tokenized payment boundaries, event-driven notifications, consent-governed media, separate analytics and audit concerns, and documented rollback/recovery requirements.

The architecture cannot receive a full pass because the PRD, TDD, ADRs, security/privacy package, operations ownership, client business rules, legal/commercial documents, and experience-design approvals remain pending. Exact framework and package versions also cannot be approved because no root dependency manifest or implementation branch exists.

## 2. Horizontal workstreams executed

| Workstream | Principal owner | Direct assistants | Output |
|---|---|---|---|
| Stack and support validation | Principal Solutions Architect | Application Architecture Engineer; Integration Architecture Engineer | Managed stack approved in principle; exact versions deferred |
| System context and trust boundaries | Security Architect | Application Security Engineer; Privacy and Identity Engineer | Actors, systems, data flows, and trust boundaries |
| Module architecture | Principal Solutions Architect | Application Architecture Engineer; Staff Backend Engineer | Service ownership and dependency rules |
| Frontend architecture | Staff Frontend Engineer | UI Component Engineer; Frontend Performance Engineer | Rendering, route, component, state, accessibility boundaries |
| Backend and domain architecture | Staff Backend Engineer | API and Domain Engineer; Webhooks Engineer | Server actions, commands, events, idempotency, failure behavior |
| Data and booking integrity | Principal Data Engineer | PostgreSQL Schema Engineer; Migration Engineer | Conceptual schema and transactional integrity requirements |
| Identity and authorization | Security Architect | Privacy and Identity Engineer; Data Integrity Engineer | Guest tokens, optional accounts, RBAC, RLS, MFA target |
| Payments and notifications | Staff Backend Engineer | Integration Architect; Webhooks Engineer | Stripe boundary, email baseline, optional SMS, reconciliation |
| Media, analytics, audit and observability | DevOps and Reliability Architect | SRE; Analytics Analyst | Publication controls, telemetry, alerting, audit separation |
| ADR disposition and gate governance | Program Executive | Governance Analyst; Documentation Writer | ADR readiness, blockers, risks, and formal gate decision |

## 3. Phase 4 step results

| Step | Required action | Result | Status |
|---|---|---|---|
| 1 | Validate approved stack against current support and constraints | Next.js/React with TypeScript, managed PostgreSQL/Supabase, Stripe, Vercel, and managed notification/media services remain viable in principle. Exact versions and compatibility cannot be approved without a package manifest and implementation branch. | Conditional |
| 2 | Define system context and trust boundaries | Browser, public application, protected owner experience, database/storage, payment provider, notification providers, analytics, and operations boundaries are defined. | Complete |
| 3 | Define modules and ownership | Catalog, Availability, Booking, Appointment, Identity/Authorization, Payment, Notification, Media, Review, Policy, Analytics, Audit, and Administration boundaries are defined. | Complete |
| 4 | Define frontend architecture | App-router-style route segmentation, server-first rendering, client components only for interactive state, accessible primitives, design tokens, and feature-boundary rules are defined in principle. | Complete |
| 5 | Define backend/server architecture | Server-side commands, validation, authorization, idempotency, domain events, provider adapters, and explicit result/error contracts are defined. | Complete |
| 6 | Define database entities, relationships and lifecycle | Conceptual entities, organization scope, archival states, policy versioning, auditability, retention hooks, and migration discipline are defined. No SQL is authorized. | Complete |
| 7 | Define authentication, guest identity, RBAC and RLS | Guest booking, scoped management tokens, optional customer accounts, owner/admin authentication, MFA target, server-side RBAC and RLS are defined. | Complete |
| 8 | Define availability and booking concurrency | Candidate availability is advisory; final confirmation must revalidate and commit in a transaction with persistence-level overlap protection. | Complete |
| 9 | Define appointment state transitions | Proposed explicit state machine and transition ownership are defined below. | Complete |
| 10 | Define payment and deposit boundaries | Stripe-hosted/tokenized processing, signed webhooks, idempotency, reconciliation, and no card-data storage are required. | Complete |
| 11 | Define transactional email and optional SMS | Event-driven notification boundary, versioned templates, consent/channel rules, attempt tracking, retries, and terminal-failure alerts are required. SMS remains optional and blocked pending approval. | Complete |
| 12 | Define media storage and consent controls | Restricted originals, consent records, publication state, approved transformations, alt text, and revocation handling are defined. | Complete |
| 13 | Define analytics, audit, logs and operational metrics | Product analytics, immutable/append-oriented audit records, structured logs, correlation IDs, health metrics, and cost thresholds are separated and defined. | Complete |
| 14 | Update/create ADRs | ADR-0001 through ADR-0010 remain architecturally sound in principle. They require formal owner review and acceptance before implementation. | Conditional |
| 15 | Issue Phase 4 gate decision | CONDITIONAL PASS. Architecture is ready for approval, not implementation. | Complete |

## 4. Stack disposition

### Approved in principle

- Next.js and React for the web application
- TypeScript in strict mode
- Tailwind CSS plus approved accessible component primitives
- Supabase/PostgreSQL for relational data, authentication/storage capabilities where approved, and Row-Level Security
- Stripe for selective deposits and payment references
- Vercel for managed web deployment
- A managed transactional-email provider
- Optional managed SMS provider only after consent, cost and operations approval
- Managed media storage/transformation where required

### Required implementation-time validation

Before Phase 5 begins, the implementation owner must document:

1. Exact package versions and runtime requirements
2. Supported Node.js version
3. Framework/router choice and compatibility
4. TypeScript, ESLint, test-runner and browser-test compatibility
5. Supabase client, CLI and migration compatibility
6. Stripe SDK and API-version policy
7. Vercel build/runtime constraints
8. Email/SMS SDK and webhook behavior
9. Media provider limits and data-location considerations
10. Dependency maintenance, license and security status

No dependency may be selected solely because it appeared in an earlier example.

## 5. System context and trust boundaries

### Primary actors

- Anonymous visitor
- Guest customer using a scoped appointment-management token
- Authenticated customer, if customer accounts launch
- Owner/Admin
- Authorized Metaphor support operator, only if contractually approved
- External payment, email, SMS, analytics and media providers
- Malicious or unauthorized actor

### Trust boundaries

1. User browser ↔ public web application
2. User browser ↔ protected owner/customer routes
3. Application ↔ database and object storage
4. Application ↔ payment provider
5. Application ↔ email/SMS providers
6. Application ↔ analytics/error-monitoring providers
7. Client organization ↔ Metaphor support access
8. Preview/staging environments ↔ production

Every boundary requires authentication or request validation appropriate to its risk, least privilege, safe logging, and explicit failure behavior.

## 6. Module ownership and dependency rules

### Catalog

Owns services, categories, durations, prices, starting-price rules, preparation notes, deposit policy references, active state and provider eligibility.

### Availability

Calculates candidate slots from provider schedule, service duration, buffers, exceptions, blocked time, lead time, booking horizon and existing active commitments. It never confirms an appointment.

### Booking

Owns final validation, transactional reservation/confirmation, idempotency, deposit coordination, policy acknowledgement and lifecycle-event emission.

### Appointment

Owns retrieval, customer/admin views, permitted state transitions, rescheduling, cancellation, completion, no-show and archival behavior.

### Identity and Authorization

Owns session context, roles, organization scope, customer identity linkage, guest-management tokens, authentication assurance and authorization policy.

### Payment

Owns provider integration, payment-reference state, signed event validation, idempotency and reconciliation. It never stores card details.

### Notification

Consumes approved domain events, renders versioned templates, enforces consent/channel rules, records attempts, retries safe failures and escalates terminal failures.

### Media

Owns source metadata, consent, publication status, alt text, transformations, restricted originals and archival/revocation behavior.

### Review

Owns eligibility based on completed appointments, moderation, publication and audit history.

### Policy

Owns versioned deposit, cancellation, lateness, no-show, privacy and communication policies plus customer acknowledgement references.

### Analytics and Audit

Analytics measures product and business behavior. Audit records material administrative, security and operational actions. They must not be conflated.

### Administration

Orchestrates owner workflows through service contracts. It must not bypass authorization or write directly around domain invariants.

## 7. Frontend architecture

- Prefer server-rendered or statically generated public content where freshness requirements permit.
- Keep availability, booking, appointment management and owner operations dynamic.
- Use client components only where browser state or interaction requires them.
- Separate public, customer and owner route groups.
- Keep design tokens and approved brand assets centralized.
- Use semantic HTML and native controls before custom widgets.
- Ensure forms expose labels, instructions, errors, status and recovery paths.
- Preserve deep links, browser navigation and progressive enhancement where practical.
- Do not embed database-specific calls throughout presentation components.
- Route all protected actions through server-authorized application contracts.

## 8. Backend and interface contracts

Every command/query must define:

- Input schema
- Actor and authorization requirement
- Organization context
- Idempotency behavior where mutation risk exists
- Domain validation
- Persistence transaction boundary
- Success result
- Recoverable and terminal failure classes
- Audit and analytics events
- Logging and correlation behavior

External providers must be isolated behind adapters so substitution does not require rewriting domain logic.

## 9. Conceptual data architecture

Proposed entities:

- Organization
- User
- RoleAssignment
- Customer
- Provider
- Service
- ProviderService
- AvailabilityRule
- AvailabilityException
- BlockedTime
- Appointment
- AppointmentStatusEvent
- BookingHold, only if approved
- PaymentReference
- Notification
- NotificationAttempt
- ConsentRecord
- Review
- MediaAsset
- PolicyVersion
- AnalyticsEvent
- AuditEvent
- Configuration

### Integrity rules

- Stable identifiers and explicit archival states
- Organization scope on business-owned records where practical
- Explicit business timezone behavior
- Persistence-level prevention of overlapping active appointments
- Versioned policies and content approvals
- Idempotent payment, booking and notification operations
- Enumeration-resistant customer-visible references
- No hard deletion of records required for financial, appointment or audit history without approved retention behavior

## 10. Booking concurrency design

1. Availability queries return candidate slots and context, not guarantees.
2. Booking submission includes the selected slot, service/provider context, policy version and idempotency key.
3. The server revalidates all rules inside the final transaction.
4. Persistence-level protection prevents overlapping active appointments for the same provider.
5. Only one concurrent request may obtain the final confirmed state.
6. Losing requests receive a safe conflict result and refreshed alternatives.
7. Holds, if introduced for payment, must expire and be reclaimable.
8. Abandoned or failed payment must not create permanent schedule blockers.
9. Duplicate retries must return or reconcile to the original operation rather than create another appointment.

## 11. Appointment state model

Proposed states, subject to product approval:

- `pending_payment`
- `confirmed`
- `rescheduled`
- `cancelled_by_customer`
- `cancelled_by_owner`
- `completed`
- `no_show`
- `expired`
- `reconciliation_required`

Rules:

- State changes occur only through approved transitions.
- Every material transition records actor, time, reason, prior state, new state and policy context.
- Rescheduling preserves historical traceability.
- Payment and appointment state are related but not collapsed into one field.
- Notification status must not determine appointment truth.

## 12. Identity, RBAC and RLS

### Guest customers

- No account required for booking.
- Appointment management uses a high-entropy, scoped, expiring or revocable mechanism.
- Tokens must not expose raw sequential identifiers.
- Sensitive actions may require contact re-verification.

### Customer accounts

- Optional at MVP launch.
- May claim eligible bookings only after verified contact ownership.
- Access is limited to the customer’s own records.

### Owner/Admin

- Strong authentication required.
- MFA is a production target.
- Server-side authorization is mandatory.
- RLS or equivalent persistence controls must prevent cross-record access.

### Support access

- Disabled by default.
- Allowed only through contractually approved, time-bounded, auditable access.

## 13. Payment boundary

- Stripe or an approved equivalent remains the payment system of record for payment events.
- The application stores only references, amount, currency, status, timestamps and reconciliation metadata.
- Card data must not enter application logs, database or analytics.
- Payment-creation requests require idempotency keys.
- Webhook signatures must be verified.
- Duplicate and out-of-order events must be handled safely.
- Ambiguous outcomes enter an explicit reconciliation state.
- A successful charge must not be repeated because the booking response failed.
- Deposit rules remain configurable and client-approved.

## 14. Notification architecture

- Email is the baseline transactional channel.
- SMS is optional and disabled until consent, provider, cost and operational ownership are approved.
- Appointment truth is stored independently of delivery success.
- Notification templates are versioned.
- Consent and channel eligibility are checked before dispatch.
- Each attempt records provider reference, outcome, failure class and retry state.
- Safe transient failures may retry with bounded backoff.
- Terminal failures generate owner-visible operational alerts.
- Customer confirmation pages must remain authoritative even when notifications fail.

## 15. Media and consent architecture

- Store restricted source assets separately from public delivery variants.
- Require source/ownership and subject-consent metadata.
- Public media requires approved publication state and alt text.
- Transformation/crop records must be reproducible.
- Revoked consent must remove public delivery while preserving necessary audit history.
- Generated mockups must never be represented as actual client work or customer outcomes.
- Hair-system media requires heightened privacy review.

## 16. Analytics, audit and observability

### Analytics

Measure booking starts/completions, self-service share, service conversion, rebooking, cancellations, no-shows, notification delivery and operating cost per completed booking.

### Audit

Record administrative changes to services, availability, policies, appointments, roles, reviews, media publication, data exports/deletions and security-sensitive configuration.

### Structured logs

Include correlation ID, domain action, actor type, organization, outcome, latency, dependency and safe error classification. Exclude secrets, card data and unnecessary personal information.

### Operational metrics

- Availability latency
- Booking attempts and completions
- Slot-conflict rate
- Payment reconciliation backlog
- Notification success/failure and latency
- Authentication failures and authorization denials
- Database query/connection health
- Upload failures
- Error rate
- Core Web Vitals
- Vendor usage and cost thresholds

## 17. Security requirements

Before implementation approval, the security package must confirm:

- Threat model and abuse cases
- Authentication assurance and MFA approach
- RBAC/RLS policy design
- Guest-token lifecycle
- CSRF/session protections appropriate to the framework
- Rate limits for booking, authentication, tokens, reviews and uploads
- Input validation and safe output handling
- Upload allowlists and size/access restrictions
- Webhook signature and replay protection
- Secret isolation and environment separation
- Dependency and configuration scanning
- Incident ownership, severity and escalation
- Data minimization, retention, export and deletion handling

## 18. Recovery and reversibility

- Application releases require a known-good rollback target.
- Database changes must be backward compatible or have an explicit forward-repair plan.
- Backups require restoration evidence, not merely enabled status.
- Payment reconciliation uses provider records as authoritative payment evidence.
- Notification replay requires duplicate prevention.
- Manual booking and communication fallback must be documented.
- Vendor substitution paths must be documented for hosting, database, email, SMS, media and analytics.
- RPO/RTO remain proposed until the client and operations owner approve them.

## 19. ADR disposition

| ADR | Decision | Phase 4 disposition | Remaining approval |
|---|---|---|---|
| ADR-0001 | Managed Next.js web baseline | Supported in principle | Architecture, engineering and operations |
| ADR-0002 | Supabase/PostgreSQL with RLS | Supported in principle | Architecture, data and security |
| ADR-0003 | Guest booking with optional identity | Supported | Product and security |
| ADR-0004 | Database-enforced booking integrity | Required | Architecture, data and QA |
| ADR-0005 | Payments outside card-data boundary | Required | Product, security and commercial |
| ADR-0006 | Event-driven notification boundary | Supported | Architecture and operations |
| ADR-0007 | Separate public media and consent records | Required | Product, privacy and brand |
| ADR-0008 | Separate analytics and audit | Required | Architecture, security and analytics |
| ADR-0009 | Reusable contracts without premature platform | Supported | Architecture and product |
| ADR-0010 | Controlled release, rollback and recovery | Required | Engineering, QA and operations |

No ADR is marked Accepted by this execution. Formal human disposition remains required.

## 20. Quality and testability design

The architecture supports the required future test layers:

- Unit tests for duration, buffers, policies, state transitions, permissions, deposits and validation
- Integration tests for constraints, transactions, RLS, authentication, webhooks, notifications, media and audit records
- End-to-end tests for booking, payments, failures, rescheduling, cancellation, reviews and owner workflows
- Security tests for enumeration, privilege escalation, replay, upload abuse, rate limiting and forged webhooks
- Accessibility tests for keyboard, screen reader, errors, focus, contrast, zoom and reduced motion
- Performance tests for public pages, availability and booking under representative mobile conditions
- Recovery tests for provider outage, duplicate events, partial transactions, rollback and restoration

No test was executed because no implementation or test harness exists.

## 21. Clarification and decision register

| ID | Decision required | Blocking impact | Required owner |
|---|---|---|---|
| A-001 | Approve PRD and final MVP scope | Blocks final TDD and development | Product owner + Metaphor product |
| A-002 | Approve service/provider count and service matrix | Blocks schema and booking rules | Robert “Turk” North |
| A-003 | Approve deposit and cancellation behavior | Blocks payment and state transitions | Robert “Turk” North + product |
| A-004 | Decide whether customer accounts launch in MVP | Blocks final identity scope | Product owner |
| A-005 | Decide whether SMS launches in MVP | Blocks provider/compliance design | Product owner + operations |
| A-006 | Approve hair-system intake fields and privacy handling | Blocks inquiry implementation | Client + privacy reviewer |
| A-007 | Approve data retention and deletion schedule | Blocks security/operations approval | Client + privacy/legal reviewer |
| A-008 | Approve performance budgets, RPO and RTO | Blocks QA and launch thresholds | Architecture + operations + client |
| A-009 | Approve owner/support roles and support-access model | Blocks RBAC finalization | Client + security + operations |
| A-010 | Select and approve exact providers and account ownership | Blocks integration implementation | Client + architecture + commercial |
| A-011 | Approve TDD and ADR package | Blocks Phase 5 | Architecture, product and security |
| A-012 | Execute legal/commercial documents | Blocks development authorization | Authorized parties + counsel |

## 22. Risks

| Risk | Severity | Owner | Mitigation | Blocking |
|---|---|---|---|---|
| Proposed architecture mistaken for implementation authorization | Critical | Program Executive | Preserve gate metadata and written authorization requirement | Yes |
| Exact package compatibility unknown | High | Engineering lead | Validate manifest and official support before scaffolding | Yes for Phase 5 |
| Unapproved service and policy rules distort data model | High | Product Director | Obtain controlled service/policy matrix | Yes |
| Booking integrity implemented only in UI | Critical | Data/Architecture | Require persistence-level overlap protection and concurrency tests | Yes |
| Guest tokens expose appointments | Critical | Security Architect | High-entropy scoped tokens, expiry/revocation and enumeration tests | Yes |
| Payment and booking states diverge | Critical | Backend/Operations | Idempotency, signed events, reconciliation and audit | Yes |
| SMS enabled without consent/operations plan | High | Compliance/Operations | Keep disabled until approved | Yes for SMS only |
| Media published without consent | Critical | Product/Privacy | Consent-gated publication workflow | Yes |
| Observability leaks sensitive data | High | SRE/Security | Safe logging schema and restricted access | Yes for launch |
| Recovery targets are undefined | High | Operations | Approve RPO/RTO and test restoration | Yes for launch |

## 23. Quality evidence

| Check | Result | Evidence |
|---|---|---|
| Architecture consistency | Passed in principle | TDD, ADR package and Phase 1–3 traceability |
| Current official stack viability | Supported in principle | Official framework/vendor documentation reviewed; exact versions absent |
| Build | Not run | No implementation manifest |
| Formatting/lint/type check | Not run | No implementation toolchain |
| Unit tests | Not run | No test harness |
| Integration tests | Not run | No test harness |
| End-to-end tests | Not run | No test harness |
| Accessibility tests | Not run | No interactive implementation |
| Security tests | Not run | Design controls only |
| Performance tests | Not run | No implementation and budgets pending |
| Recovery tests | Not run | No infrastructure or data environment |

## 24. Critical path

`Client facts and PRD approval → Phase 3 client/brand approval → TDD and ADR acceptance → threat model/security approval → operations and recovery approval → legal/commercial execution → written development authorization → Phase 5 engineering foundation`

No engineering foundation may be created before the predecessor gates are satisfied.

## 25. Gate decision

# CONDITIONAL PASS

Phase 4 architecture and technical design are sufficient for formal review and approval.

### Conditions before Phase 5

1. PRD receives product-owner and Metaphor product approval.
2. Client business facts, service matrix, provider count, pricing, duration, policies and deposit rules are approved.
3. Phase 3 brand, navigation, mockups and content direction are approved.
4. TDD and ADR-0001 through ADR-0010 receive formal disposition.
5. Threat model, RBAC/RLS, token, privacy and retention decisions are approved.
6. Exact providers, account ownership and cost authorization are approved.
7. Performance budgets, RPO/RTO, support ownership and recovery responsibilities are approved.
8. Portfolio development/license agreement, SOW and required commercial documents are executed.
9. Written authorization explicitly permits Phase 5 engineering work.
10. A dedicated implementation branch is created only after the above conditions are recorded.

### Prohibited actions until authorization

- No application scaffolding
- No package installation
- No SQL or migrations
- No Supabase, Stripe, Vercel, email, SMS or media configuration
- No secrets or credentials
- No production or preview deployment
- No claim that build or tests pass

## 26. Next action

Obtain formal architecture-gate approvals and resolve the blocking decisions. After written development authorization, execute Phase 5 — Engineering Foundation and produce `UQC-PHASE-05-ENGINEERING-FOUNDATION-GATE.md` with actual build, lint, type-check and test-harness evidence.

## 27. Revision history

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0.0 | 2026-07-19 | Metaphor Automation Consulting | Initial Phase 4 architecture and technical-design execution |