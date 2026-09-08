import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import FooterEnd from "@/components/layout/FooterEnd";
import LegalPage from "@/components/legal/LegalPage";
import { termsAndConditions } from "@/components/legal/legalContent";

export const metadata: Metadata = {
  title: "Terms and Conditions - Tojuco",
  description:
    "Terms and Conditions for Tojuco Solutions Inc. and the Tojuco real-estate media management platform.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header primaryCta={{ label: "Book a Demo", href: "/#book-demo" }} />
      <LegalPage content={termsAndConditions} />
      <FooterEnd />
    </div>
  );
}
