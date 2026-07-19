import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/content/site";

type ServicePageProps = Readonly<{ params: Promise<{ slug: string }> }>;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? { title: service.name, description: service.summary } : {};
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="pageHero" aria-labelledby="page-title">
        <p className="eyebrow">{service.category}</p>
        <h1 id="page-title">{service.name}</h1>
        <p className="lede">{service.summary}</p>
      </section>
      <section className="section detailLayout">
        <div>
          <p className="eyebrow">What to expect</p>
          <h2>Clear details before confirmation.</h2>
          <p>Live booking will present the approved duration, final price or starting-price rule, preparation guidance, provider eligibility, deposit requirement, and applicable policy version.</p>
        </div>
        <aside className="detailPanel">
          <dl>
            <div><dt>Duration</dt><dd>{service.durationLabel}</dd></div>
            <div><dt>Price</dt><dd>{service.priceLabel}</dd></div>
            <div><dt>Availability</dt><dd>Displayed live during booking</dd></div>
            <div><dt>Confirmation</dt><dd>Explicit booking reference required</dd></div>
          </dl>
          <Link className="button buttonPrimary" href="/book">Book this service</Link>
        </aside>
      </section>
    </>
  );
}
