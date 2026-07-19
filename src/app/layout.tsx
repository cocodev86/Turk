import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: {
    default: "Unbreakable Quality Cutz | Decatur Barbering",
    template: "%s | Unbreakable Quality Cutz"
  },
  description: "Precision grooming and discreet men’s hair-system consultations in Decatur, Georgia.",
  openGraph: {
    title: "Unbreakable Quality Cutz",
    description: "Precision grooming, dependable appointments, and discreet men’s hair-system consultations.",
    type: "website"
  },
  robots: {
    index: false,
    follow: false
  }
};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
