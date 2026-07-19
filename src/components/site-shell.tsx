import Link from "next/link";
import type { ReactNode } from "react";

const primaryNavigation = [
  ["Services", "/services"],
  ["Men’s Hair Systems", "/hair-systems"],
  ["Gallery", "/gallery"],
  ["About", "/about"],
  ["Reviews", "/reviews"],
  ["Contact", "/contact"]
] as const;

type SiteShellProps = Readonly<{ children: ReactNode }>;

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <a className="skipLink" href="#main-content">Skip to main content</a>
      <header className="siteHeader">
        <div className="headerInner">
          <Link className="brand" href="/" aria-label="Unbreakable Quality Cutz home">
            <span className="brandMark" aria-hidden="true">UQC</span>
            <span className="brandName">Unbreakable Quality Cutz</span>
          </Link>
          <nav className="primaryNav" aria-label="Primary navigation">
            {primaryNavigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <Link className="button buttonPrimary headerCta" href="/book">Book</Link>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="siteFooter">
        <div className="footerGrid">
          <div>
            <p className="eyebrow">Unbreakable Quality Cutz</p>
            <p>Precision grooming and discreet men’s hair-system consultations in Decatur, Georgia.</p>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/policies">Policies</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
