import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import FooterCta from "@/components/layout/FooterCta";
import FooterEnd from "@/components/layout/FooterEnd";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import FaqSection from "@/components/pricing/FaqSection";

export const metadata: Metadata = {
  title: "Pricing — Tojuco",
  description:
    "Hybrid flat-rate pricing for real estate media companies. No free tier. Start with a clear base plan, included users, add-ons, white-label options, and usage limits.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col items-start bg-white">
      <Header active="Pricing" primaryCta={{ label: "Book a Demo", href: "#book-demo" }} />
      <PricingHero />
      <PricingPlans />
      <FooterCta
        headline="Looking for custom solutions?"
        description="Custom pricing for larger media companies, national providers, custom limits, advanced support, and deeper white-label requirements."
        primaryCta={{ label: "Book Demo", href: "#book-demo" }}
        secondaryCta={null}
      />
      <FaqSection />
      <FooterEnd />
    </div>
  );
}
