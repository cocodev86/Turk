import Link from "next/link";

export default function BookPage() {
  return (
    <section className="pageHero" aria-labelledby="page-title">
      <p className="eyebrow">Booking</p>
      <h1 id="page-title">The live booking workflow is next.</h1>
      <p className="lede">Phase 6 establishes the public entry point. Service selection, live availability, customer details, deposits, confirmation, and appointment management are implemented in Phase 7.</p>
      <div className="actionRow">
        <Link className="button buttonPrimary" href="/services">Review services</Link>
        <Link className="button buttonSecondary" href="/contact">Contact UQC</Link>
      </div>
    </section>
  );
}
