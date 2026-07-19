import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Unbreakable Quality Cutz",
    template: "%s | Unbreakable Quality Cutz"
  },
  description: "Precision barbering and men’s hair-system services in Decatur, Georgia."
};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
