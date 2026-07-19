const foundationItems = [
  "Mobile-first public experience",
  "Guest-first appointment booking",
  "Men’s Hair Systems consultation pathway",
  "Secure owner operations"
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">Unbreakable Quality Cutz</p>
        <h1 id="page-title">The engineering foundation is active.</h1>
        <p className="lede">
          This controlled scaffold establishes the production application shell while client-specific
          business facts remain configurable and subject to final publication review.
        </p>
        <a className="primaryAction" href="#foundation">Review foundation</a>
      </section>

      <section id="foundation" className="section" aria-labelledby="foundation-title">
        <h2 id="foundation-title">Approved product boundaries</h2>
        <ul className="featureGrid">
          {foundationItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </main>
  );
}
