import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CapCivic | Capital Strategy for Community Impact",
  description:
    "CapCivic makes cross-sector partnerships possible through creative capital solutions. We find, secure, and coordinate capital from federal, state, & local sources.",
  keywords: [
    "public-private partnerships",
    "economic development",
    "capital strategy",
    "tax credits",
    "community impact",
    "municipal advisory",
  ],
  openGraph: {
    title: "CapCivic | Capital Strategy for Community Impact",
    description:
      "CapCivic makes cross-sector partnerships possible through creative capital solutions.",
    images: [
      {
        url: "/images/capcivic-logo.png",
        width: 1200,
        height: 630,
        alt: "CapCivic",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CapCivic | Capital Strategy for Community Impact",
    description:
      "CapCivic makes cross-sector partnerships possible through creative capital solutions.",
    images: ["/images/capcivic-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
