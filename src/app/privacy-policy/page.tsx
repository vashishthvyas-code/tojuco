import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import FooterEnd from "@/components/layout/FooterEnd";
import LegalPage from "@/components/legal/LegalPage";
import { privacyPolicy } from "@/components/legal/legalContent";

export const metadata: Metadata = {
  title: "Privacy Policy - Tojuco",
  description:
    "Privacy Policy for Tojuco Solutions Inc. and the Tojuco real-estate media management platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header primaryCta={{ label: "Book a Demo", href: "/#book-demo" }} />
      <LegalPage content={privacyPolicy} />
      <FooterEnd />
    </div>
  );
}
