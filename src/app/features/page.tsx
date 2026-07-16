import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import FooterCta from "@/components/layout/FooterCta";
import FooterEnd from "@/components/layout/FooterEnd";
import FeaturesHero from "@/components/features/FeaturesHero";
import FeaturesGrid from "@/components/features/FeaturesGrid";

export const metadata: Metadata = {
  title: "Features — Tojuco",
  description:
    "One connected platform for orders, media, money, and branded portals. Explore Tojuco's platform capabilities.",
};

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header active="Features" primaryCta={{ label: "Book a Demo", href: "#book-demo" }} />
      <FeaturesHero />
      <FeaturesGrid />
      <FooterCta primaryCta={{ label: "Book Demo", href: "#book-demo" }} />
      <FooterEnd />
    </div>
  );
}
