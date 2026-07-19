# UQC-EXEC-0005 — Phase 5 Engineering Foundation

**Version:** 1.0.0  
**Owner:** Metaphor Automation Consulting / Engineering Governance  
**Status:** Executed — Conditional Pass  
**Execution date:** 2026-07-19  
**Authorization basis:** CEO/client authorization provided in project conversation; PRD, brand, TDD, security, retention, vendor, and SOW approvals represented as approved by the user  
**Related documents:** UQC-EXEC-0001 through UQC-EXEC-0004, UQC-PRD-0001, UQC-TDD-0001, UQC-ADR-PACKAGE-0001, UQC-GOV-0002

> Phase 5 establishes the application and quality-control foundation. It does not claim that booking, payments, authentication, database migrations, notifications, owner administration, or production deployment are complete.

## 1. Executive status

- **Current phase:** Phase 5 — Engineering Foundation
- **Gate decision:** CONDITIONAL PASS
- **Engineering foundation:** ESTABLISHED
- **Feature implementation:** NOT STARTED beyond the controlled application shell
- **Production readiness:** NOT READY
- **Next permitted phase:** Phase 6 — Public Website implementation

The repository now contains an actual Next.js application manifest and source tree, strict TypeScript configuration, linting, unit-test infrastructure, a production build command, environment-variable contract, baseline security headers, brand design tokens, a smoke test, and a GitHub Actions quality workflow.

## 2. Approval record

The user, acting as CEO/project authority, explicitly represented the following as approved before requesting Phase 5:

- PRD
- Brand identity
- TDD
- Security direction
- Data retention direction
- Vendor direction
- Signed SOW
- CEO authorization to begin Phase 5

Unknown business facts remain configuration/content inputs and must not be represented as verified public facts until supplied. This includes exact address, phone, public email, business hours, service names, service prices, service durations, provider schedule, deposit rules, cancellation windows, verified credentials, and approved portfolio media.

## 3. Foundation delivered

| Area | Implementation |
|---|---|
| Package manifest | `package.json` with Next.js, React, TypeScript, ESLint, Vitest, Testing Library and Zod |
| Runtime baseline | Node.js 22 or later |
| Application framework | Next.js App Router shell in `src/app/` |
| Type safety | Strict TypeScript, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, no emit |
| Linting | ESLint flat configuration using Next.js Core Web Vitals and TypeScript rules |
| Unit testing | Vitest, jsdom and Testing Library setup with initial page smoke test |
| Build verification | `npm run build` and aggregate `npm run check` scripts |
| Security baseline | Removed powered-by header; nosniff, referrer, frame and permissions headers |
| Environment contract | `.env.example` for site, Supabase, Stripe, email, optional SMS and monitoring |
| Secret hygiene | `.gitignore` excludes local environment files and generated output |
| CI | `.github/workflows/quality.yml` runs install, lint, type check, tests and build |
| Brand foundation | Carbon, Forge, Bone and Signal Amber CSS tokens with accessible semantic shell |
| Accessibility baseline | Semantic headings, visible labels, focus treatment, reduced-motion handling and responsive layout |

## 4. Package/version disposition

The initial manifest records a current managed-web baseline for implementation review:

- Next.js 16.2.10
- React and React DOM 19.2.7
- TypeScript 7.0.2
- Vitest 4.1.10

These versions must be validated by the package manager and CI before this gate can become a full pass. No lockfile was fabricated because dependencies were not installed through the GitHub connector. A maintainer or CI run must generate and commit the authoritative lockfile after successful resolution.

## 5. Repository structure

```text
.github/workflows/quality.yml
.env.example
.gitignore
eslint.config.mjs
next.config.ts
package.json
tsconfig.json
vitest.config.ts
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    page.test.tsx
  test/
    setup.ts
docs/governance/execution/UQC-PHASE-05-ENGINEERING-FOUNDATION-GATE.md
```

Future feature implementation should introduce bounded modules under `src/features/`, reusable UI under `src/components/`, provider adapters under `src/integrations/`, validated configuration under `src/config/`, and domain contracts under `src/domain/` rather than placing business logic directly in route components.

## 6. Engineering rules activated

1. Protected mutations must execute server-side with validation and authorization.
2. Database-specific and vendor-specific calls must remain behind adapters.
3. Public content must distinguish approved facts from placeholders.
4. Guest booking must remain available without mandatory account creation.
5. Booking confirmation must eventually use persistence-level conflict protection.
6. Payment logic must remain outside the card-data boundary.
7. SMS remains disabled until its separate operational and consent conditions are satisfied.
8. Every pull request must pass lint, type checking, tests and production build.
9. Secrets must never be committed.
10. Generated visuals must not be represented as actual client work.

## 7. Verification status

| Check | Status | Evidence/limitation |
|---|---|---|
| Manifest created | Pass | `package.json` committed |
| TypeScript configuration | Pass by inspection | Strict options committed; compiler not yet executed in this connector session |
| ESLint configuration | Pass by inspection | Configuration committed; lint not yet executed |
| Unit-test setup | Pass by inspection | Vitest setup and smoke test committed; tests not yet executed |
| Production build setup | Pass by inspection | Build command and App Router shell committed; build not yet executed |
| CI workflow | Pass by inspection | Workflow committed and expected to run on branch/PR activity |
| Dependency resolution | Pending | No package-manager execution or lockfile yet |
| CI result | Pending | Workflow result must be reviewed after GitHub schedules the run |
| Security testing | Pending | Phase 8 activity |
| Accessibility conformance | Pending | Requires implemented critical journeys and manual testing |

No unexecuted test is represented as passed.

## 8. Risks and controls

| Risk | Severity | Control |
|---|---|---|
| Package incompatibility or unavailable exact version | High | Resolve through CI/package manager; adjust manifest through reviewed commit |
| No lockfile | High | Generate only from successful deterministic installation and commit it |
| Placeholder business content accidentally published | High | Central approved-content registry and publication-state controls in Phase 6 |
| Secrets committed during integration | Critical | Environment contract, ignore rules, managed secret stores and secret scanning |
| Feature logic placed in route components | Medium | Enforce domain/feature/integration boundaries during review |
| CI workflow uses non-deterministic install before lockfile | Medium | Switch to `npm ci` immediately after lockfile generation |
| Security headers incomplete for production | Medium | Add CSP and provider-specific directives after resource inventory exists |

## 9. Gate conditions for full pass

Phase 5 becomes a full pass only after:

1. Dependency installation succeeds.
2. An authoritative lockfile is generated and committed.
3. CI uses deterministic installation.
4. Lint passes with zero warnings.
5. Type checking passes.
6. Unit tests pass.
7. Production build passes.
8. Any incompatibilities are resolved through reviewed changes.
9. Branch protections or required checks are enabled where repository permissions permit.

## 10. Gate decision

# CONDITIONAL PASS

The engineering foundation is materially established and Phase 6 public-site implementation may begin in bounded increments. Booking, database, payment, notification and owner-dashboard implementation must follow their approved architecture and remain subject to later quality and security gates.

## 11. Next action

Execute Phase 6 by implementing the public website shell, approved-content registry, responsive navigation, homepage, services presentation, Men’s Hair Systems education, gallery framework, about/contact/policy pages, metadata, structured data, and accessibility-first components without inventing unresolved client facts.
