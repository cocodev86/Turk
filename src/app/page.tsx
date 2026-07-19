import Link from "next/link";
import { businessProfile, services } from "@/content/site";

const trustPoints = [
  "Guest-first booking",
  "Clear service expectations",
  "Private hair-system consultations",
  "Verified review eligibility"
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero heroDark" aria-labelledby="page-title">
        <div className="heroCopy">
          <p className="eyebrow">Decatur, Georgia</p>
          <h1 id="page-title">Precision that holds up after you leave the chair.</h1>
          <p className="lede">{businessProfile.positioning}</p>
          <div className="actionRow">
            <Link className="button buttonPrimary" href="/book">Book an appointment</Link>
            <Link className="button buttonSecondary" href="/services">View services</Link>
          </div>
        </div>
        <aside className="heroPanel" aria-label="Booking promise">
          <span className="panelNumber">01</span>
          <h2>Simple booking. Clear next steps.</h2>
          <p>Choose a service, review live appointment details, select a time, and receive an explicit confirmation.</p>
        </aside>
      </section>

      <section className="section" aria-labelledby="trust-title">
        <p className="eyebrow">The Unbreakable Standard</p>
        <h2 id="trust-title">Built around clarity, proof, and consistency.</h2>
        <ul className="featureGrid compactGrid">
          {trustPoints.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
        </ul>
      </section>

      <section className="section splitSection" aria-labelledby="services-title">
        <div>
          <p className="eyebrow">Featured services</p>
          <h2 id="services-title">Start with what you need.</h2>
          <p className="lede">Final pricing, timing, eligibility, and live availability are shown in the controlled booking experience.</p>
        </div>
        <div className="cardGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.slug}>
              <p className="cardMeta">{service.category}</p>
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
              <p className="serviceFacts"><span>{service.durationLabel}</span><span>{service.priceLabel}</span></p>
              <Link href={`/services/${service.slug}`}>Explore service <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section featureBand" aria-labelledby="hair-title">
        <div>
          <p className="eyebrow">Men’s Hair Systems</p>
          <h2 id="hair-title">Private, respectful, consultation-led.</h2>
        </div>
        <div>
          <p className="lede">Explore non-surgical hair replacement without exaggerated, medicalized, or guaranteed-result claims.</p>
          <Link className="textLink" href="/hair-systems">Learn about the consultation process <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section proofSection" aria-labelledby="proof-title">
        <p className="eyebrow">Authentic proof only</p>
        <h2 id="proof-title">The gallery will show real, consented client work.</h2>
        <p className="lede">Generated concepts may guide art direction, but they will never be presented as actual customer outcomes.</p>
        <Link className="button buttonSecondary" href="/gallery">View gallery standards</Link>
      </section>

      <section className="section finalCta" aria-labelledby="cta-title">
        <p className="eyebrow">Ready when you are</p>
        <h2 id="cta-title">Book with fewer texts, calls, and unanswered questions.</h2>
        <div className="actionRow">
          <Link className="button buttonPrimary" href="/book">Start booking</Link>
          <Link className="button buttonSecondary" href="/contact">Contact UQC</Link>
        </div>
      </section>
    </>
  );
}
