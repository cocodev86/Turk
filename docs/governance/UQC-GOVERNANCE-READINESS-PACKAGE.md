# UQC-GOV-0002 — Governance and Readiness Package

**Version:** 1.0.0  
**Owner:** Metaphor Automation Consulting / Delivery Governance  
**Status:** Proposed  
**Approval date:** Pending  
**Review cadence:** At every phase gate  
**Related standards:** MOS-0001–0011, MPB-0004, MCO-0001  
**Related documents:** UQC-PRD-0001, UQC-TDD-0001, UQC-ADR-PACKAGE-0001

> Documentation, design, governance, and planning only. Development, infrastructure configuration, deployment, SQL, API implementation, and vendor activation remain prohibited until the Architecture Gate is approved.

## 1. Phase-gate register

| Gate | Required evidence | Decision owner | Exit criteria | Current status |
|---|---|---|---|---|
| Discovery | Discovery Summary, stakeholder list, business facts, constraints, desired outcomes | Product owner + Metaphor delivery | Problem, stakeholders, authority, and constraints confirmed | Conditional pass |
| Research | Market evidence, competitor review, terminology, legal/regulatory questions | Metaphor product | Evidence is cited; assumptions separated from facts | Pass |
| Product Definition | Approved UQC-PRD-0001, scope, non-goals, metrics, open-question disposition | Product owner + Metaphor product | PRD approved with no unresolved blocking scope questions | Pending |
| Experience Design | Journeys, sitemap, content model, wireframes, accessibility review, brand approvals | Product owner + design | Critical journeys and content approved; accessibility risks resolved | Pending |
| Architecture | Approved TDD, ADRs, threat model, traceability, test/observability/recovery plans | Chief Systems Architect/delegate | Architecture is feasible, secure, testable, operable, and cost-bounded | Pending/blocking |
| Legal/Commercial | Executed portfolio development/license agreement, SOW, cost authorization, privacy/security responsibilities | Authorized business parties + counsel | Rights, costs, scope, acceptance, change, support, and portfolio terms executed | Pending/blocking |
| Development | Approved prior gates, backlog, Definition of Done, branch/CI controls | Delivery lead | Explicit written authorization to implement | Blocked |
| QA | Test evidence, accessibility/security/performance results, defects and waivers | QA owner + product owner | Release criteria met; critical defects closed | Not started |
| Deployment | Launch plan, rollback, migration, monitoring, communication, training | Release owner | Production verification and acceptance complete | Not started |
| Operations | Runbooks, support ownership, incident process, cost/health dashboards | Operations owner | Stable service and handoff accepted | Not started |
| Continuous Improvement | KPI review, retrospective, client feedback, knowledge capture | Product + client success | Prioritized evidence-based next iteration | Not started |

Gate decisions: Pass, Conditional Pass, Reject. Conditional passes must name conditions, owner, deadline, and blocking impact.

## 2. Required client delivery package

Before implementation:

- Discovery Summary and approved business-information sheet
- Portfolio Development and Software License Agreement
- Statement of Work or scope exhibit
- Third-party cost authorization
- Privacy and security responsibility schedule
- Change-request and approval procedure
- Portfolio/case-study permission
- Acceptance criteria and launch authorization
- Support, maintenance, warranty, and out-of-scope boundaries

Before launch:

- Content and media approval register
- Training and handoff checklist
- Account/credential ownership register
- Data export and retention summary
- Launch report
- Support contacts and escalation path

Final contractual language requires qualified legal review.

## 3. Risk register

| ID | Category | Risk | Probability | Impact | Owner | Mitigation | Contingency | Status |
|---|---|---|---|---|---|---|---|---|
| R-001 | Scope | MVP expands into full salon/POS platform | Medium | High | Product | Enforce PRD non-goals and change control | Defer to later release/SOW | Open |
| R-002 | Client | Prices, hours, policies, credentials, address, or services remain unapproved | High | High | Product owner | Business-information approval checklist | Use placeholders only in private design; block launch | Open/blocking |
| R-003 | Legal | Portfolio/IP/license or customer terms are incomplete | Medium | High | Metaphor + client | Execute agreements before development/launch | Pause affected phase | Open/blocking |
| R-004 | Booking | Concurrent requests create double booking | Medium | Critical | Architecture | Persistence-level overlap control and transaction | Reject stale slot and offer alternatives | Open |
| R-005 | Payment | Payment and booking states diverge | Medium | High | Engineering/operations | Idempotency, signed events, reconciliation states | Manual reconciliation and customer communication | Open |
| R-006 | Notification | Confirmation/reminder failure causes confusion | Medium | High | Operations | Attempt logs, retries, owner alerts, visible confirmation | Manual outreach and replay | Open |
| R-007 | Privacy | Sensitive customer/media information is exposed | Low/Medium | Critical | Security | Minimization, RLS, consent, restricted originals, audit | Incident response, revoke access, notify as required | Open |
| R-008 | Security | Unauthorized dashboard or cross-record access | Medium | Critical | Security | Strong auth, MFA, RBAC/RLS, regression tests | Disable access, rotate credentials, investigate audit | Open |
| R-009 | Vendor | Supabase, Vercel, Stripe, email, or SMS outage/price change | Medium | Medium/High | Architecture | Exit paths, cost thresholds, graceful failure | Manual scheduling/communication; provider substitution | Open |
| R-010 | Accessibility | Booking flow excludes keyboard/screen-reader users | Medium | High | Design/QA | Native patterns, manual tests, AA acceptance | Block release until remediated | Open |
| R-011 | Adoption | Owner continues manual workflow and dashboard is underused | Medium | Medium | Client success | Workflow validation, training, simple dashboard | Hybrid fallback and iteration | Open |
| R-012 | Reputation | Generated or unverified content misrepresents actual work | Medium | High | Product/brand | Authentic media priority and claims register | Remove content and correct publicly | Open |
| R-013 | Recovery | Backups exist but restoration is untested | Medium | High | Operations | Scheduled restoration evidence | Manual reconstruction and vendor recovery | Open |
| R-014 | Cost | SMS, storage, or usage exceeds approved budget | Medium | Medium | Product owner | Alerts, channel controls, monthly cost review | Disable optional channel/features | Open |

## 4. Decision log template and initial decisions

| ID | Decision | Owner | Date | Reason | Status | Affected documents | ADR |
|---|---|---|---|---|---|---|---|
| D-001 | Keep project documentation-only until architecture and legal gates pass | Metaphor | 2026-07-19 | MOS lifecycle compliance | Accepted | All | — |
| D-002 | Treat Coco1 as governing authority | Metaphor | 2026-07-19 | Single source of governance truth | Accepted | All | — |
| D-003 | Permit guest booking in MVP | Product | 2026-07-19 | Reduce conversion friction | Proposed | PRD/TDD | ADR-0003 |
| D-004 | Exclude full POS/payroll/inventory/multi-location from MVP | Product | 2026-07-19 | Simplicity-first scope | Proposed | PRD | — |
| D-005 | Use “Men’s Hair Systems” / “Non-Surgical Hair Replacement” | Product/brand | 2026-07-19 | Accurate, respectful terminology | Proposed | PRD/content | — |

Future entries must link the affected controlled documents and superseding ADR when applicable.

## 5. Requirements traceability matrix

| Business goal | User need | Requirement IDs | Design capability | Acceptance evidence | Release |
|---|---|---|---|---|---|
| Increase direct bookings | Fast booking without app/account | FR-001, FR-010–017 | Public experience, Availability, Booking, Notifications | Guest end-to-end acceptance; conversion instrumentation | MVP |
| Reduce manual scheduling | Owner-controlled schedule and self-service changes | FR-016, FR-030–036 | Appointment, Availability, Dashboard | Reschedule/cancel/admin scenario tests; time baseline | MVP |
| Prevent schedule errors | Reliable slot integrity | FR-011–012, NFR-006 | Transactional booking and overlap protection | Concurrency/integration acceptance | MVP |
| Build trust | Clear services, policies, authentic proof | FR-001–007 | Catalog, Content, Media, Policy | Owner approvals; accessibility/content QA | MVP |
| Reduce no-shows | Clear policy, reminders, selective deposits | FR-014–016 | Payment, Notification, Policy | Deposit and reminder scenarios; no-show metric | MVP |
| Protect customers/business | Secure data and controlled access | NFR-004–005, privacy requirements | Identity, RBAC/RLS, Audit | Threat-model and security test evidence | MVP |
| Support repeat business | Account, rebook, verified review | FR-020–023 | Customer, Appointment, Review | Account/rebook/review acceptance | MVP |
| Compound Metaphor capabilities | Reusable interfaces without premature platform | NFR-008–010 | Shared service boundaries | Architecture review and reuse register | Design/MVP |

## 6. Acceptance-test matrix (design only)

| ID | Feature/scenario | Expected outcome | Priority | Owner |
|---|---|---|---|---|
| AT-001 | Guest books available standard service | One confirmed appointment, clear reference, correct policy and communication state | Critical | Product/QA |
| AT-002 | Two customers attempt same provider slot | At most one active appointment confirms; loser receives alternatives | Critical | Engineering/QA |
| AT-003 | Deposit-required booking | Payment status and appointment status remain reconciled and idempotent | Critical | Engineering/QA |
| AT-004 | Confirmation provider fails | Appointment remains accurate; failure is recorded, retried, and surfaced | High | Operations/QA |
| AT-005 | Customer cancels inside/outside policy | Correct allowed/blocked result and audit/notification events | High | Product/QA |
| AT-006 | Unauthorized user requests dashboard data | Request is denied without record leakage | Critical | Security |
| AT-007 | Customer attempts another customer’s appointment token/reference | Access denied; enumeration resistance verified | Critical | Security |
| AT-008 | Owner changes service or availability | Valid change persists, conflicts handled, audit event recorded | High | Product/QA |
| AT-009 | Completed customer submits review | Only eligible appointment may submit; moderation/publication rules apply | Medium | Product/QA |
| AT-010 | Keyboard/screen-reader booking | Critical flow completes with labels, focus, errors, and state announced | Critical | Accessibility reviewer |
| AT-011 | Mobile constrained network | Public/booking experience remains within approved performance and recovery budgets | High | Performance QA |
| AT-012 | Deployment regression | Known-good version restored and health verified under runbook | Critical | Release owner |
| AT-013 | Backup restoration exercise | Required data restored within approved objectives with evidence | Critical | Operations |

No automated tests are created in this phase.

## 7. Security review package

### Assets
Customer contact data, appointments, schedules, policy versions, payment references, private inquiries, media originals/consent, administrative sessions, secrets, audit records, and business analytics.

### Actors
Anonymous visitor, guest customer, authenticated customer, owner/admin, Metaphor support role if contractually authorized, external providers, and malicious actor.

### Trust boundaries
Browser↔application, application↔database/storage, application↔payment provider, application↔notification providers, public↔administrative experience, and client organization↔Metaphor support.

### Required controls
- Strong owner authentication and production MFA target
- Server-side RBAC and organization-scoped RLS
- Secure, scoped, expiring/revocable guest-management tokens
- Input validation, output encoding, rate limiting, and safe errors
- Signed webhook validation and idempotency
- Secrets outside source control with restricted environments
- Upload type/size/access controls and consent-gated publication
- Encryption in transit and managed encryption at rest
- Security/audit events with restricted access
- Dependency and configuration review
- Incident classification, containment, communication, evidence, recovery, and retrospective

### RBAC outline

| Capability | Anonymous | Guest token | Customer | Owner/Admin |
|---|---:|---:|---:|---:|
| View public approved content | Yes | Yes | Yes | Yes |
| Query public availability | Yes/rate-limited | Yes | Yes | Yes |
| Create own booking | Yes | Yes | Yes | Yes |
| View/manage one linked appointment | No | Scoped | Own only | All organization appointments |
| View customer history | No | No | Own only | Authorized business need |
| Manage services/schedule/content | No | No | No | Yes |
| View audit/security settings | No | No | No | Restricted owner/admin |

## 8. Observability and operational readiness

Minimum launch design must define:

- Structured logs and safe data policy
- Correlation IDs across booking, payment, and notifications
- Health checks and error monitoring
- Booking completion/conflict/error metrics
- Notification delivery and backlog metrics
- Payment event and reconciliation metrics
- Database query/connection health
- Authentication and authorization anomaly signals
- Performance/Core Web Vitals
- Cost and usage thresholds
- Severity levels, ownership, escalation, and communication templates

## 9. Recovery and continuity design

- Known-good application rollback procedure
- Backward-compatible or forward-repair migration policy
- Automated backup and point-in-time recovery expectations
- Restoration verification schedule and evidence
- Notification replay and duplicate-prevention policy
- Payment reconciliation procedure
- Manual booking/communication fallback
- Approved RPO/RTO and named recovery owner

## 10. Project-specific Definition of Done

A future implementation item is complete only when:

- Linked requirement and acceptance criteria are satisfied
- Review, formatting, linting, strict type checks, and required tests pass
- Accessibility and security acceptance pass
- Analytics and audit events are verified where applicable
- Error, dependency failure, and recovery behavior are tested
- Documentation, decision records, and operational procedures are current
- Deployment and rollback readiness are confirmed
- Product owner acceptance is recorded

## 11. Documentation repository design

Recommended controlled structure:

```text
docs/
  research/
  product/
  ux/
  brand/
  architecture/
  engineering/
  security/
  analytics/
  governance/
  legal/
  operations/
  runbooks/
  launch/
  approvals/
  meeting-notes/
  assets/
  templates/
```

Controlled documents require ID, title, semantic version, owner, status, approval date, review cadence, related standards/documents, and revision history.

## 12. Reusable Metaphor capability register

| Capability | UQC need | Reuse potential | Decision |
|---|---|---|---|
| Identity/RBAC/organization context | Owner/customer access | High | Design stable boundary now |
| Service catalog | Barber services | High | Reusable appointment-business model |
| Availability engine | Provider schedules and buffers | High | Core candidate capability |
| Booking orchestration | Atomic reservation and lifecycle | High | Core candidate capability |
| Notifications | Confirmations/reminders | High | Provider-neutral contract |
| Payment boundary | Selective deposits | High | Reusable Stripe adapter pattern |
| Media/consent | Portfolio and hair systems | High | Reusable controlled-publication model |
| Verified reviews | Completed-appointment reviews | Medium/High | Reusable eligibility model |
| Audit events | Admin accountability | High | Shared standard/schema candidate |
| Analytics | Conversion and operations | High | Shared event taxonomy candidate |
| Dashboard shell | Owner operations | Medium/High | Reuse after workflow validation |

Rule: do not build a generalized platform before UQC evidence and a second use case justify extraction.

## 13. Readiness score after documentation sprint

| Domain | Design readiness | Remaining blocker |
|---|---:|---|
| Governance | 96% | Formal approvals/signatures |
| Documentation | 97% | Final metadata/approval links and document-by-document owner confirmation |
| Product | 95% | Open business facts and PRD approval |
| UX/Brand | 90% | Final wireframes, content, photography, and client approval |
| Architecture | 94% | ADR/TDD approval and vendor decisions |
| Security/Privacy | 92% | Named reviewer, completed threat review, retention/incident decisions |
| Accessibility | 92% | Detailed design review and future test evidence |
| Operations | 90% | Final providers, RPO/RTO, runbooks, support owner |
| Client/Legal | 70% | Executed agreements and cost authorization |
| Engineering readiness | 91% | Approved backlog, CI/branch policy verification, implementation authorization |
| Overall pre-development readiness | 91% | Client facts, legal package, UX approval, architecture/security sign-off |

The documentation gap is substantially closed. The project is **not yet authorized for development** because readiness cannot truthfully reach 100% through drafting alone; signatures, named approvals, verified business facts, design acceptance, and final vendor/operational decisions remain external gate evidence.

## 14. Prioritized action plan

### Critical
1. Robert North approves business facts, services, prices, hours, policies, address, claims, credentials, and launch scope.
2. Execute portfolio/software license agreement, SOW, cost authorization, privacy/security responsibilities, change control, and acceptance terms.
3. Approve PRD and resolve blocking open questions.
4. Complete/approve UX flows, content, accessibility review, and media consent plan.
5. Approve TDD, ADRs, threat model, RPO/RTO, and operational ownership.

### High
6. Convert traceability and acceptance matrices into the future delivery backlog.
7. Approve provider selections and exit/cost thresholds.
8. Draft detailed launch, incident, backup-restore, reconciliation, and support runbooks before deployment work.
9. Establish evidence locations for gate approvals and review cadence.

### Medium
10. Define extraction criteria for reusable Metaphor modules after MVP evidence.
11. Establish post-launch KPI baseline and review schedule.

## 15. Approval record

| Role | Decision | Date | Conditions |
|---|---|---|---|
| Robert “Turk” North — Product owner | Pending | — | Business facts, scope, UX, operating rules |
| Metaphor Product | Pending | — | PRD and metrics |
| Metaphor Architecture | Pending | — | TDD, ADRs, recovery, cost |
| Security/Privacy Reviewer | Pending | — | Threat model and controls |
| Accessibility Reviewer | Pending | — | Critical-flow design |
| Legal Counsel | Pending | — | Agreements and customer-facing terms |
| Delivery Lead | Blocked | — | All prior gate evidence |

## 16. Revision history

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0.0 | 2026-07-19 | Metaphor Automation Consulting | Initial governance and readiness package |
