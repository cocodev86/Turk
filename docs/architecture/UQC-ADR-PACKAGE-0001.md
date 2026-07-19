# UQC-ADR-PACKAGE-0001 — Proposed Architecture Decision Records

**Version:** 1.0.0  
**Owner:** Metaphor Automation Consulting / Architecture  
**Status:** Proposed  
**Approval date:** Pending  
**Review cadence:** At architecture gate and upon superseding evidence  
**Related standards:** MOS-0002, MOS-0006, MOS-0008, MOS-0009  
**Related documents:** UQC-PRD-0001, UQC-TDD-0001

> Accepted ADRs become immutable except for clarification. A later ADR must supersede a changed decision. This package contains proposals only and authorizes no implementation.

## ADR-0001 — Use the approved managed web baseline

**Status:** Proposed  
**Context:** UQC needs a mobile-first public site, dynamic booking, account features, and administration without unnecessary infrastructure burden.  
**Decision drivers:** speed, maintainability, Metaphor reuse, accessibility, managed deployment, hiring familiarity, cost.  
**Options considered:** Next.js baseline; static site plus embedded scheduler; custom SPA/API; full salon platform.  
**Decision:** Use Next.js/React, strict TypeScript, Tailwind and approved accessible primitives on Vercel, subject to final technical validation.  
**Consequences:** strong alignment and reuse; vendor/platform conventions must be documented.  
**Security/privacy impact:** server-side authorization and secret isolation are mandatory.  
**Rollback/exit:** preserve standard web contracts, exportable content/data, and avoid proprietary logic where unnecessary.

## ADR-0002 — Use managed PostgreSQL with Supabase capabilities

**Status:** Proposed  
**Context:** Booking and appointment integrity require relational constraints, transactions, authorization controls, and operational reporting.  
**Decision:** Use PostgreSQL through Supabase for relational data, managed authentication/storage where approved, and Row-Level Security.  
**Alternatives:** document database; serverless key-value store; external scheduler as system of record.  
**Consequences:** strong transactional model and Metaphor alignment; schema, RLS, migrations, backup, and cost require discipline.  
**Security/privacy impact:** least-privilege service roles, RLS regression tests, storage policies, and secret separation required.  
**Rollback/exit:** maintain documented schema and exports; avoid coupling all application logic to provider-specific client calls.

## ADR-0003 — Support guest booking with optional customer identity

**Status:** Proposed  
**Context:** Mandatory account creation increases booking friction, while repeat customers benefit from self-service history and rebooking.  
**Decision:** Allow guest booking; provide secure appointment-management links/tokens; offer optional account creation and verified claim of eligible bookings.  
**Alternatives:** mandatory account; guest-only; social login requirement.  
**Consequences:** better conversion with added token and identity-linking complexity.  
**Security/privacy impact:** tokens must be high entropy, scoped, expiring/revocable, and enumeration resistant.  
**Rollback/exit:** customer accounts may be deferred without blocking guest booking.

## ADR-0004 — Enforce booking integrity at the database boundary

**Status:** Proposed  
**Context:** Displayed availability can become stale under concurrent booking attempts.  
**Decision:** Revalidate and commit inside a transaction using persistence-level overlap protection for active provider appointments. Temporary holds may be used only if payment flow requires them.  
**Alternatives:** client-side checks; optimistic insert without constraint; serialized external queue.  
**Consequences:** prevents double booking; requires careful time-range and status modeling.  
**Security/privacy impact:** reduces abuse and race-condition risk.  
**Rollback/exit:** slot-hold strategy can be removed while retaining transactional confirmation.

## ADR-0005 — Keep payments outside the application’s card-data boundary

**Status:** Proposed  
**Context:** Selective deposits may reduce no-shows, but the application should not handle card data.  
**Decision:** Use Stripe-hosted/tokenized payment capabilities; store processor references, amount, currency, status, and reconciliation metadata only.  
**Alternatives:** no deposits; manual transfers; another compliant processor.  
**Consequences:** transaction fees and webhook/reconciliation requirements.  
**Security/privacy impact:** signed webhook validation, idempotency, restricted dashboard access, and no card logging.  
**Rollback/exit:** deposits can be disabled by policy; payment references remain exportable.

## ADR-0006 — Use an event-driven notification boundary

**Status:** Proposed  
**Context:** Confirmation and reminder delivery must not be tightly coupled to appointment transaction completion.  
**Decision:** Emit approved appointment events to a notification service with versioned templates, consent/channel rules, attempt records, retries, and terminal-failure alerts. Email is baseline; SMS is optional.  
**Alternatives:** synchronous provider calls in booking request; manual communication; provider-specific logic throughout product.  
**Consequences:** reliable recovery and vendor substitution; additional operational state.  
**Security/privacy impact:** minimize message content, protect provider credentials, record consent and delivery status.  
**Rollback/exit:** switch providers behind the notification contract; disable SMS without changing booking.

## ADR-0007 — Separate public media from source and consent records

**Status:** Proposed  
**Context:** Barber and hair-system photography requires performance optimization, privacy, consent, and controlled publication.  
**Decision:** Store media metadata and consent status separately from public delivery variants. Publish only approved assets with alt text and transformation records.  
**Alternatives:** direct social embeds; public bucket for all uploads; generated images as portfolio proof.  
**Consequences:** stronger quality and privacy with moderation overhead.  
**Security/privacy impact:** restricted originals, upload validation, consent revocation workflow, no false representation.  
**Rollback/exit:** export originals and metadata; regenerate public variants with another provider.

## ADR-0008 — Keep product analytics separate from audit logging

**Status:** Proposed  
**Context:** Conversion analysis and accountability records have different purposes, retention, and access needs.  
**Decision:** Use distinct analytics events and immutable/append-oriented audit events, with documented schemas and access controls.  
**Alternatives:** one combined event table; third-party analytics only; application logs as audit trail.  
**Consequences:** clearer governance and reporting; dual instrumentation must be maintained.  
**Security/privacy impact:** analytics minimization and consent rules; audit access restricted and retention defined.  
**Rollback/exit:** analytics vendor can change without losing the authoritative audit model.

## ADR-0009 — Design reusable contracts without prematurely building a platform

**Status:** Proposed  
**Context:** UQC can seed Metaphor capabilities, but premature abstraction could delay a small-business MVP.  
**Decision:** Define reusable service boundaries and organization scope now; extract packages only after implementation evidence and at least one additional use case justify them.  
**Alternatives:** one-off tightly coupled application; build a full multi-tenant platform first.  
**Consequences:** balances delivery and compounding leverage; requires disciplined boundaries.  
**Security/privacy impact:** organization scoping reduces future cross-client exposure risk.  
**Rollback/exit:** product-specific internals may remain local while contracts guide future refactoring.

## ADR-0010 — Use controlled releases with documented rollback and recovery

**Status:** Proposed  
**Context:** Booking is operationally important and must not be released without recovery planning.  
**Decision:** Require reviewed changes, quality gates, preview validation, release owner, health verification, known-good rollback, backward-compatible or forward-repair database plans, and backup restoration evidence.  
**Alternatives:** direct default-branch deployment; manual untracked releases.  
**Consequences:** safer releases with additional discipline.  
**Security/privacy impact:** reduces unauthorized and unreviewed production change risk.  
**Rollback/exit:** vendor-specific release process must be documented with a portable operational checklist.

## Approval register

| ADR | Architecture | Product | Security | Status |
|---|---|---|---|---|
| ADR-0001–0010 | Pending | Pending | Pending where applicable | Proposed |

## Revision history

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0.0 | 2026-07-19 | Metaphor Automation Consulting | Initial proposed ADR package |
