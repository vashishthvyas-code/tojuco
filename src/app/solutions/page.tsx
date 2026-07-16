import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import FooterCta from "@/components/layout/FooterCta";
import FooterEnd from "@/components/layout/FooterEnd";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import WorkflowFeatures from "@/components/solutions/WorkflowFeatures";
import ServiceWorkflow from "@/components/solutions/ServiceWorkflow";
import BrandingSection from "@/components/solutions/BrandingSection";
import ServicesGrid from "@/components/solutions/ServicesGrid";

export const metadata: Metadata = {
  title: "Solutions — Tojuco",
  description:
    "Tojuco helps media companies manage orders, scheduling, vendors, media delivery, payments, tour pages, feature sheets, and client portals through one white-label platform.",
};

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header active="Solutions" primaryCta={{ label: "Book a Demo", href: "#book-demo" }} />
      <SolutionsHero />
      <WorkflowFeatures />
      <ServiceWorkflow />
      <BrandingSection />
      <ServicesGrid />
      <FooterCta primaryCta={{ label: "Book Demo", href: "#book-demo" }} />
      <FooterEnd />
    </div>
  );
}
