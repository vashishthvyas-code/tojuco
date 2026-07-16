import {
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  FileText,
  Images,
  Palette,
  Users,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/layout/Container";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  checklist: string[];
};

const features: Feature[] = [
  {
    icon: Palette,
    title: "White Label Platform",
    description: "Launch your own branded ordering, delivery, and portal experience without building custom software.",
    checklist: ["Custom domain", "Branded portal", "Branded emails"],
  },
  {
    icon: CalendarCheck,
    title: "Booking & Scheduling",
    description: "Control services, availability, service areas, travel logic, and vendor assignment.",
    checklist: ["Online order forms", "Calendar rules", "Vendor assignment"],
  },
  {
    icon: Images,
    title: "Media Delivery",
    description: "Deliver photos, videos, 3D tours, floor plans, and feature sheets in one organized place.",
    checklist: ["File manager", "Galleries", "Download center"],
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description: "Keep invoices, deposits, online payments, and vendor payouts connected to each order.",
    checklist: ["Invoices", "Deposits", "Payout tracking"],
  },
  {
    icon: Users,
    title: "Vendor Management",
    description: "Manage providers with role-based permissions, service settings, and availability.",
    checklist: ["Vendor profiles", "Services per vendor", "Pay visibility"],
  },
  {
    icon: FileText,
    title: "Feature Sheets & Marketing",
    description: "Turn delivered listing media into branded marketing assets and tour pages.",
    checklist: ["Feature sheets", "Brochures", "Tour pages"],
  },
];

export default function WorkflowFeatures() {
  return (
    <section id="features" className="w-full bg-white py-20 md:py-36">
      <Container className="flex flex-col items-center gap-20">
        <h2 className="text-center text-4xl font-bold text-black md:text-[64px]">Every part of your workflow</h2>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description, checklist }) => (
            <div key={title} className="flex flex-col items-start gap-5 rounded-lg border border-[#d9d9d9] p-5">
              <Icon className="size-8 text-[#337dff]" strokeWidth={1.5} />
              <p className="text-2xl font-medium text-black">{title}</p>
              <p className="text-lg text-black">{description}</p>
              <div className="flex flex-col gap-3 text-base">
                {checklist.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-[#337dff]" />
                    <p className="font-medium text-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
