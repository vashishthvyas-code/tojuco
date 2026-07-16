import {
  CalendarDays,
  ClipboardList,
  FolderOpen,
  Globe,
  LineChart,
  Monitor,
  Receipt,
  Settings,
  UserCircle,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: ClipboardList,
    title: "Order Forms",
    description: "Launch your own branded ordering, delivery, and portal experience without building custom software.",
  },
  {
    icon: CalendarDays,
    title: "Calendar",
    description: "Control services, availability, service areas, travel logic, and vendor assignment.",
  },
  {
    icon: FolderOpen,
    title: "File Manager",
    description: "Deliver photos, videos, 3D tours, floor plans, and feature sheets in one organized place.",
  },
  {
    icon: Globe,
    title: "Property Websites",
    description: "Keep invoices, deposits, online payments, and vendor payouts connected to each order.",
  },
  {
    icon: Receipt,
    title: "Invoicing",
    description: "Manage providers with role-based permissions, service settings, and availability.",
  },
  {
    icon: Monitor,
    title: "Vendor Portal",
    description: "Turn delivered listing media into branded marketing assets and tour pages.",
  },
  {
    icon: UserCircle,
    title: "Client Portal",
    description: "Keep invoices, deposits, online payments, and vendor payouts connected to each order.",
  },
  {
    icon: Settings,
    title: "White Label Settings",
    description: "Manage providers with role-based permissions, service settings, and availability.",
  },
  {
    icon: LineChart,
    title: "Reporting",
    description: "Turn delivered listing media into branded marketing assets and tour pages.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="flex w-full flex-col items-center bg-white px-6 py-20 md:px-[120px] md:py-36">
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col items-start gap-5 rounded-lg border border-[#d9d9d9] p-5">
            <Icon className="size-8 text-[#337dff]" strokeWidth={1.5} />
            <p className="text-2xl font-medium text-black">{title}</p>
            <p className="text-lg text-black">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
