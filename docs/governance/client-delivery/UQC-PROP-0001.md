# UQC-PROP-0001 — Executive Portfolio Development Proposal

**Prepared for:** Robert “Turk” North / Unbreakable Quality Cutz  
**Prepared by:** Metaphor Automation Consulting  
**Version:** 1.0.0  
**Status:** Proposed — Client Review  
**Proposal date:** July 19, 2026  
**Valid through:** August 18, 2026  
**Related documents:** UQC-PRD-0001, UQC-TDD-0001, UQC-ADR-PACKAGE-0001, UQC-GOV-0002, UQC-BRAND-0001  
**Governing source:** Metaphor Operating System documentation in `cocodev86/Coco1`

> This proposal is a commercial estimate and project summary, not legal, accounting, or tax advice. Final contractual terms must be contained in an executed agreement and Statement of Work. Vendor rates, taxes, carrier fees, and usage charges can change.

---

## 1. Executive summary

Metaphor Automation Consulting proposes to design, build, test, deploy, document, and launch a premium mobile-first website and direct appointment experience for Unbreakable Quality Cutz in Decatur, Georgia.

The system is intended to help customers understand services, view approved prices and policies, review authentic work, learn about Men’s Hair Systems, contact the business, and complete eligible appointments without installing an app. It will also provide the owner with a controlled operational view of services, availability, blocked time, appointments, approved content, and basic performance indicators.

This engagement is being offered as a **portfolio development project**. Metaphor will disclose the normal professional value of the work and apply a portfolio credit against its professional labor. The client will remain responsible for approved third-party services, transaction fees, domain charges, taxes, content, and other direct operating expenses.

## 2. Business goals

1. Increase direct appointment bookings and reduce dependence on calls, texts, and third-party marketplaces.
2. Present Unbreakable Quality Cutz as a premium, trustworthy, modern barber brand.
3. Make services, prices, duration, preparation requirements, deposits, and policies clear before booking.
4. Create a respectful consultation path for Men’s Hair Systems / Non-Surgical Hair Replacement.
5. Improve schedule control, confirmations, reminders, rebooking, and customer experience.
6. Establish a documented and maintainable platform rather than a disposable brochure site.

## 3. Recommended MVP solution

### Public website

- Premium responsive homepage
- Approved service catalog with pricing, duration, preparation notes, and booking calls to action
- Dedicated Men’s Hair Systems information and consultation path
- Barber profile and approved credentials
- Authentic gallery with client consent
- About, contact, hours, location, policies, privacy, and accessibility information
- Local SEO foundations, structured data, sitemap, metadata, and search-console readiness
- Google Business Profile integration guidance

### Appointment experience

- Guest booking without mandatory account creation
- Service, date, time, and availability selection
- Schedule rules, buffers, lead times, and blocked time
- Prevention of confirmed overlapping appointments
- Secure rescheduling and cancellation according to approved policy
- Selective deposits for designated services or conditions
- Email confirmations and reminders
- Optional compliant SMS reminders after consent, registration, and vendor approval

### Owner operations

- Protected owner/admin access
- Daily and weekly appointment views
- Service, price, duration, deposit, and availability management
- Business-hours, exceptions, blocked-time, and booking-horizon controls
- Approved content and media management
- Basic booking and operational indicators
- Audit history for material administrative and appointment actions
- Documented data export and handoff process

## 4. Scope boundaries

The MVP does **not** include payroll, inventory, accounting, franchise administration, full point-of-sale functions, native mobile applications, multi-location management, marketplace listings for competing barbers, complex memberships, advanced loyalty, autonomous AI decision-making, or unverified claims and testimonials.

Gift cards, retail commerce, waitlists, recurring appointments, education enrollment, additional staff, advanced CRM, and multi-location features are future enhancements unless separately approved by written change order.

## 5. Professional services and normal commercial value

| Professional service | Included work | Normal value |
|---|---|---:|
| Discovery and product strategy | Stakeholder discovery, requirements validation, scope control, business-information checklist, success metrics | $750 |
| Market, regulatory, and platform research | Competitive review, service terminology, vendor review, compliance considerations, free-first cost strategy | $650 |
| Brand identity refinement | Logo family, icon system, color, typography, usage rules, landing-page brand direction | $1,200 |
| UX architecture and content design | Sitemap, user journeys, booking flow, content hierarchy, responsive behavior, accessibility planning | $1,250 |
| High-fidelity UI design | Premium desktop/mobile visual system, primary screens, states, client-review revisions | $1,650 |
| Responsive website implementation | Public pages, reusable components, responsive behavior, content integration | $3,000 |
| Booking and owner operations | Availability, guest booking, secure appointment management, owner schedule/service controls | $2,400 |
| Payment/deposit integration | Stripe Checkout/payment flow, status handling, reconciliation design, no card-data storage | $750 |
| Email notification integration | Confirmation, reminder, reschedule, cancellation, failure states, approved templates | $550 |
| SEO, analytics, and local discovery | Technical SEO, structured data, analytics, Search Console, Clarity, Google Business guidance | $600 |
| Accessibility, security, performance, and QA | WCAG-focused review, security checks, mobile/performance validation, critical workflow testing | $1,100 |
| Deployment, documentation, and training | Production release, rollback plan, operating documentation, launch checklist, owner training | $850 |
| **Total professional-services value** |  | **$14,750** |
| **Portfolio development credit** | Metaphor professional labor waived for approved portfolio/case-study participation | **−$14,750** |
| **Client payment for Metaphor labor** |  | **$0** |

### Portfolio credit conditions

The portfolio credit is contingent on:

- execution of the Portfolio Development and Software License Agreement and SOW;
- permission for Metaphor to identify the project and display approved screenshots, outcomes, and non-confidential project details in its portfolio;
- timely client review, content delivery, account setup, and approvals;
- scope remaining within the approved MVP;
- client payment of all approved third-party and direct project expenses;
- client acknowledgment that reusable Metaphor frameworks, methods, components, templates, and background technology remain Metaphor property, subject to the license granted in the final agreement.

Work outside the approved scope is not automatically covered by the portfolio credit.

## 6. Client investment at approval

| Item | Estimated amount | Timing |
|---|---:|---|
| Metaphor professional labor | $0 after portfolio credit | No labor invoice for approved MVP |
| Domain registration or renewal | $12–$30 annually, depending on registrar and domain | Before production launch |
| Vercel Pro commercial hosting | $20 monthly plus unusual overages | At production account setup |
| Optional SMS number and usage reserve | $15–$50 initial reserve | Only if SMS is approved for MVP |
| Stripe processing | Per successful transaction | Deducted by Stripe from payments |
| Client-provided photography/content | Client-arranged, or separately quoted | Before content lock |
| Legal/accounting review | Direct client expense | As needed before execution/launch |

**Recommended minimum first-year external operating budget:** approximately **$252–$390**, excluding payment-processing fees, SMS, domain premiums, professional photography, legal/accounting fees, and usage overages.

This estimate assumes Vercel Pro at $240 per year and a standard domain in the estimated range. Most other launch services begin on free tiers.

## 7. Third-party services and operating-cost estimate

| Service | Purpose | Launch recommendation | Free tier? | Estimated monthly | Estimated annual | Required? |
|---|---|---|---|---:|---:|---|
| GitHub | Source control and project history | Free plan | Yes | $0 | $0 | Required |
| Vercel Pro | Commercial Next.js hosting, CDN, SSL, deployment | Pro | Hobby is personal/non-commercial | $20 | $240 | Required for proposed stack |
| Supabase | PostgreSQL, authentication, storage, server capabilities | Begin Free; upgrade when reliability/usage requires | Yes | $0 initially | $0 initially | Required |
| Domain registrar | Public domain name | Standard annual registration | No universal free tier | $1–$3 equivalent | $12–$30 | Required |
| Cloudflare DNS/SSL | DNS, caching/security support | Free | Yes | $0 | $0 | Recommended |
| Resend | Transactional booking email | Begin Free; upgrade by volume/needs | Yes | $0 initially | $0 initially | Required for email |
| Cloudinary | Optimized gallery media | Begin Free, or use approved platform storage | Yes | $0 initially | $0 initially | Optional/recommended |
| Google Analytics | Traffic and conversion measurement | Free | Yes | $0 | $0 | Recommended |
| Google Search Console | Search indexing and health | Free | Yes | $0 | $0 | Recommended |
| Microsoft Clarity | Session and usability diagnostics | Free | Yes | $0 | $0 | Optional/recommended |
| Google Business Profile | Local business discovery | Free | Yes | $0 | $0 | Recommended |
| Stripe | Deposits and payments | Standard pay-as-you-go | No monthly fee for standard payments | Usage based | Usage based | Optional unless deposits launch |
| Twilio SMS | Appointment reminders | Defer until consent and A2P compliance are approved | Trial/startup credit may apply | Usage based | Usage based | Optional |
| Maps | Directions/location display | Prefer link/embed or free allowance | Often | $0 initially | $0 initially | Optional |

### Free-first operating rule

A free tier may be used only when it permits the intended commercial use, meets security and availability requirements, and provides adequate capacity. Free tiers are not guaranteed service levels. The architecture owner may require a paid upgrade before launch or after usage, reliability, backup, branding, or support requirements exceed free-plan limits.

## 8. Payment-processing estimate

Stripe’s published U.S. standard rate for successful domestic online card transactions is currently **2.9% + $0.30 per transaction**, with no standard setup or monthly fee. Other payment methods, international cards, currency conversion, disputes, instant payouts, invoices, or optional products can add fees.

Examples at the standard domestic-card rate:

| Deposit charged | Estimated Stripe fee | Approximate net deposit |
|---|---:|---:|
| $25 | $1.03 | $23.97 |
| $50 | $1.75 | $48.25 |
| $100 | $3.20 | $96.80 |
| $150 | $4.65 | $145.35 |

These are processor fees paid to Stripe, not revenue paid to Metaphor. Actual fees are determined by the client’s Stripe account, payment method, card origin, disputes, refunds, and selected Stripe products.

## 9. Optional SMS estimate and compliance condition

Twilio’s published U.S. long-code rate is approximately **$0.0083 per inbound or outbound SMS segment**, before carrier fees. A leased long-code number is currently approximately **$1.15 per month**. Carrier surcharges, message segmentation, failed-message fees, and U.S. A2P 10DLC registration/onboarding charges may apply.

A practical small-business planning allowance is **$5–$25 per month** after registration for modest reminder volume, but actual cost depends on message count, length, carrier mix, replies, registration, and number type.

SMS will not launch until the client approves:

- express consent language and collection method;
- message purpose and frequency;
- STOP/HELP handling and opt-out records;
- privacy disclosures and retention;
- A2P registration and brand/campaign information;
- operational ownership for failed delivery and customer support.

The absence of SMS does not prevent MVP launch; email confirmations and reminders remain the free-first default.

## 10. Georgia and federal tax considerations

### Georgia sales and use tax

Georgia generally taxes retail sales of tangible personal property and specifically enumerated services; most services are exempt. A service provider that also sells taxable physical goods must collect and remit applicable sales tax on those goods and may be liable for sales/use tax on property consumed in providing services.

This proposal therefore does **not** automatically add Georgia sales tax to Metaphor’s waived professional service value. However:

- physical retail products, hair products, merchandise, gift items, equipment, or other taxable property sold by Unbreakable Quality Cutz may create sales-tax obligations;
- bundled transactions involving taxable property require review;
- the client must confirm registration, local rate, sourcing, exemptions, and filing responsibilities with the Georgia Department of Revenue or a qualified tax professional;
- vendor invoices may include applicable sales or use tax based on account and billing location.

### Federal and business-tax administration

The portfolio credit does not remove either party’s obligation to maintain accurate books and records. Metaphor and the client must separately determine the correct accounting and tax treatment of waived services, licenses, reimbursements, direct vendor payments, and any later paid work.

If payments are later made to an independent contractor, federal information-reporting requirements may apply. Worker classification depends on the actual relationship and degree of behavioral control, financial control, and independence—not merely the contract label.

Neither this proposal nor Metaphor provides a tax deduction, valuation, or reporting guarantee. Both parties should retain invoices, receipts, agreements, approvals, and evidence of direct expenses and consult their tax professionals.

## 11. Communications and privacy requirements

Transactional appointment emails should primarily confirm or update an agreed transaction. Promotional emails are subject to CAN-SPAM requirements, including accurate header and subject information, identification of commercial purpose where applicable, a valid physical postal address, a functioning opt-out mechanism, and timely honoring of opt-out requests.

Customer data must be minimized and used only for disclosed business purposes. Marketing cannot be silently mixed into appointment communications in a manner that changes their primary purpose. The client remains responsible for approving its customer-facing privacy notice, terms, cancellation policy, deposit policy, communications consent, and marketing practices.

## 12. Project schedule

The estimated delivery period is **six to eight weeks after all blocking prerequisites are satisfied**. Calendar time may change based on client approvals, content, photography, vendor verification, legal review, and change requests.

| Phase | Estimated duration | Exit requirement |
|---|---:|---|
| Discovery and business-information approval | 3–5 business days | Services, prices, hours, address, policies, credentials, stakeholders confirmed |
| Brand and experience-design approval | 5–8 business days | Logo/brand direction, content hierarchy, critical journeys approved |
| Architecture and account readiness | 3–5 business days | TDD, ADRs, security, vendor ownership, budget approved |
| Implementation and content integration | 10–15 business days | Approved MVP implemented in controlled environment |
| QA, accessibility, security, and performance | 5–8 business days | Release criteria satisfied; blocking defects closed |
| Client acceptance and training | 2–3 business days | Acceptance recorded; owner trained |
| Production launch and verification | 1–2 business days | Production health, analytics, booking, rollback verified |
| Limited launch warranty | 14 calendar days | Covered defects triaged under warranty terms |

No implementation begins until the Product Definition, Experience Design, Architecture, and Legal/Commercial gates are approved in writing.

## 13. Client responsibilities

The client must:

- approve legal business name, public brand name, address, service area, phone, email, hours, holidays, and contact methods;
- approve service names, descriptions, prices, durations, deposits, preparation, cancellation, late, no-show, refund, and rescheduling policies;
- provide verified credentials and prevent unsubstantiated claims;
- supply or approve authentic photography, releases, testimonials, and portfolio permissions;
- create and own production vendor accounts, payment accounts, domains, and billing methods unless otherwise documented;
- complete identity, business, payment, email-domain, and SMS-registration verification;
- provide timely consolidated feedback and approvals;
- maintain lawful barber licensing and business operations;
- obtain accounting, tax, insurance, and legal advice where needed;
- designate who will operate appointments, content, customer service, privacy requests, and incident communication after launch.

## 14. Assumptions

- One business, one initial location, and one primary barber/provider at MVP launch.
- English-language launch.
- Client supplies final approved service and business facts.
- Existing brand assets remain proposed until approved.
- Deposits are selective rather than required for every appointment.
- Email is the default notification channel; SMS is optional.
- Standard content volume and reasonable revision cycles.
- No migration from a complex legacy scheduling database unless separately scoped.
- Production services are owned and paid directly by the client wherever practical.

## 15. Acceptance criteria

The project is eligible for acceptance when:

1. A guest can complete an eligible appointment without creating an account.
2. Invalid or overlapping slots cannot become confirmed appointments.
3. Applicable price, deposit, preparation, and policy information is shown before commitment.
4. Correct approved confirmation or recovery outcomes are displayed and recorded.
5. Authorized users can manage approved services and schedules; unauthorized users cannot access protected data.
6. Approved content, prices, claims, media, privacy information, and policies are live.
7. Critical mobile, accessibility, security, performance, analytics, backup, rollback, and operational checks pass.
8. Documentation, training, account ownership, and launch records are delivered.

## 16. Warranty and ongoing support

The portfolio scope includes a **14-calendar-day limited launch warranty** covering reproducible defects in the delivered approved scope. It does not cover new features, third-party outages or rate changes, client edits, compromised credentials, unsupported content, policy changes, vendor-account suspension, or behavior outside documented operating conditions.

Ongoing maintenance, content management, analytics reporting, SEO campaigns, SMS operations, vendor administration, support retainers, and future enhancements require a separate agreement or change order.

## 17. Optional future enhancements

| Enhancement | Preliminary value range | Recurring external cost | Notes |
|---|---:|---:|---|
| SMS reminders and two-way messaging | $500–$900 | Usage + registration | Consent and A2P approval required |
| Gift cards / limited commerce | $600–$1,200 | Payment fees | Tax and fulfillment review required |
| Waitlist and automated slot recovery | $700–$1,300 | Usually minimal | Requires notification rules |
| Additional barber/provider | $800–$1,500 | Potential platform usage | Permissions and schedule model expansion |
| Membership/loyalty | $1,200–$2,500 | Payment/communication fees | Outside MVP |
| Advanced CRM and campaigns | $1,500–$3,500 | Email/SMS/CRM fees | Consent and CAN-SPAM controls |
| Professional photography production | Vendor quote | None/one-time | Direct external cost unless separately managed |
| Monthly care plan | $250–$750/month | Vendor costs separate | Scope and service levels defined separately |

Ranges are planning estimates, not accepted change-order prices.

## 18. Commercial summary

| Category | Amount |
|---|---:|
| Normal professional-services value | $14,750 |
| Portfolio development credit | −$14,750 |
| Client payment for approved Metaphor MVP labor | **$0** |
| Estimated required first-year external platform/domain cost | **$252–$390** |
| Optional SMS | Usage and registration dependent |
| Payment processing | 2.9% + $0.30 per successful domestic online card transaction at current standard Stripe pricing |
| Client photography, legal, accounting, tax, licenses, insurance | Direct client responsibility / vendor quote |

## 19. Approval

Approval of this proposal authorizes preparation and execution of the controlling agreement and SOW. It does not by itself authorize development, launch, vendor spending, or production processing.

| Role | Name | Decision | Date | Signature/reference |
|---|---|---|---|---|
| Client / Product Owner | Robert “Turk” North | Pending | — | — |
| Metaphor Delivery | Authorized representative | Pending | — | — |
| Architecture | Authorized reviewer | Pending | — | — |
| Legal/Commercial | Authorized parties/counsel | Pending | — | — |

---

## 20. Pricing and regulatory source register

Verified July 19, 2026:

- Vercel Pricing — Hobby $0 for personal/non-commercial use; Pro $20/month for professional/business use.
- Supabase Pricing and Billing Documentation — Free plan available; paid usage and plan limits apply.
- Resend Pricing and Documentation — Free transactional-email tier available; paid and overage plans apply.
- Cloudinary Pricing and Billing Documentation — fully featured free plan available with usage limits.
- Stripe U.S. Pricing — standard domestic online card pricing 2.9% + $0.30 per successful transaction; additional products and conditions may add fees.
- Twilio U.S. SMS Pricing — published per-segment, number, carrier, failure, and A2P-related charges apply.
- Georgia Department of Revenue, “What is Subject to Sales and Use Tax?” — tangible personal property and certain enumerated services are taxable; most services are exempt.
- Internal Revenue Service independent-contractor guidance — classification follows the facts and degree of control; self-employed income and information-reporting rules may apply.
- Federal Trade Commission CAN-SPAM compliance guidance — commercial email requirements and transactional/relationship-message distinctions.

Vendor and government sources must be rechecked immediately before account purchase, contract signature, or launch.

## 21. Revision history

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0.0 | 2026-07-19 | Metaphor Automation Consulting | Initial client-ready portfolio proposal with verified external pricing and compliance notes |
