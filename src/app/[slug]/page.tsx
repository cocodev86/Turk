import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { businessProfile, publicPages, services, type PublicPageSlug } from "@/content/site";

const validSlugs = Object.keys(publicPages) as PublicPageSlug[];

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

type PublicPageProps = Readonly<{ params: Promise<{ slug: string }> }>;

export async function generateMetadata({ params }: PublicPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!validSlugs.includes(slug as PublicPageSlug)) return {};
  return { title: publicPages[slug as PublicPageSlug].eyebrow };
}

export default async function PublicPage({ params }: PublicPageProps) {
  const { slug } = await params;
  if (!validSlugs.includes(slug as PublicPageSlug)) notFound();
  const page = publicPages[slug as PublicPageSlug];

  return (
    <>
      <section className="pageHero" aria-labelledby="page-title">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1 id="page-title">{page.title}</h1>
        <p className="lede">{page.intro}</p>
      </section>

      {slug === "services" ? (
        <section className="section cardGrid" aria-label="Current service categories">
          {services.map((service) => (
            <article className="serviceCard" key={service.slug}>
              <p className="cardMeta">{service.category}</p>
              <h2>{service.name}</h2>
              <p>{service.summary}</p>
              <p className="serviceFacts"><span>{service.durationLabel}</span><span>{service.priceLabel}</span></p>
              <Link href={`/services/${service.slug}`}>View service details <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </section>
      ) : (
        <section className="section infoGrid" aria-label={`${page.eyebrow} details`}>
          <article className="infoCard">
            <p className="cardMeta">What is confirmed</p>
            <h2>{businessProfile.name}</h2>
            <p>{businessProfile.positioning}</p>
          </article>
          <article className="infoCard">
            <p className="cardMeta">Publication control</p>
            <h2>Verified facts only</h2>
            <p>{businessProfile.publicationNotice}</p>
          </article>
          <article className="infoCard">
            <p className="cardMeta">Next step</p>
            <h2>Use the booking pathway</h2>
            <p>Live availability and final appointment terms are presented before confirmation.</p>
            <Link className="textLink" href="/book">Start booking <span aria-hidden="true">→</span></Link>
          </article>
        </section>
      )}
    </>
  );
}
