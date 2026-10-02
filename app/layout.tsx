import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Panama Group GC | General Contractor in New York, NY",
  description: "New York's premier general contractor for residential remodeling, commercial build-outs, and property maintenance. Expert craftsmanship in NY.",
  keywords: ["General Contractor New York", "Remodeling NY", "Construction NYC", "Property Maintenance New York", "Roofing NY"],
  openGraph: {
    title: "Panama Group GC | New York, NY",
    description: "One Company for All Your Property Needs in New York.",
    url: "https://panamagroupgc.com",
    siteName: "Panama Group GC",
    locale: "en_US",
    type: "website",
  },
};

import { CookieBanner } from "@/components/layout/CookieBanner";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Panama Group GC",
    "image": "https://panamagroupgc.com/images/logo-white.png",
    "url": "https://panamagroupgc.com",
    "telephone": "+1234567890",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "serviceArea": {
      "@type": "City",
      "name": "New York"
    }
  };

  return (
    <html
      lang="en"
      translate="no"
      className={`${inter.variable} ${oswald.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <CookieBanner />
        <WhatsAppButton />
        <ScrollProgress />
      </body>
    </html>
  );
}
