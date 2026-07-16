import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import ServicesTicker from "@/components/home/ServicesTicker";
import FeaturesSection from "@/components/home/FeaturesSection";
import ToolsSection from "@/components/home/ToolsSection";
import UsersSection from "@/components/home/UsersSection";
import OperationLayer from "@/components/home/OperationLayer";
import PlansSection from "@/components/home/PlansSection";
import FooterCta from "@/components/layout/FooterCta";
import FooterEnd from "@/components/layout/FooterEnd";

export default function Home() {
  return (
    <div className="flex flex-col items-start bg-white">
      <Header />
      <HeroSection />
      <ServicesTicker />
      <FeaturesSection />
      <ToolsSection />
      <UsersSection />
      <OperationLayer />
      <PlansSection />
      <FooterCta />
      <FooterEnd />
    </div>
  );
}
