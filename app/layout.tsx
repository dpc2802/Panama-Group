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
  title: "Panama Group GC | General Contracting & Maintenance",
  description: "One Company for All Your Property Needs. Specializing in residential remodeling, commercial build-outs, and property maintenance in Columbus, OH.",
  keywords: ["General Contractor", "Remodeling", "Construction", "Property Maintenance", "Columbus OH", "Decks", "Roofing"],
  openGraph: {
    title: "Panama Group GC",
    description: "One Company for All Your Property Needs. Professional construction and maintenance.",
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
  return (
    <html
      lang="en"
      translate="no"
      className={`${inter.variable} ${oswald.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <CookieBanner />
        <WhatsAppButton />
        <ScrollProgress />
      </body>
    </html>
  );
}
