import { CalendarDays, ClipboardList, CreditCard, Images, Palette, Users } from "lucide-react";
import Container from "@/components/layout/Container";

const items = [
  {
    icon: ClipboardList,
    title: "Orders",
    description: "Branded order forms with services, packages, and property details.",
  },
  {
    icon: CalendarDays,
    title: "Scheduling",
    description: "Availability, service areas, and rules route jobs automatically.",
  },
  {
    icon: Users,
    title: "Vendors",
    description: "Profiles, assigned services, upload permissions, and payouts.",
  },
  {
    icon: Images,
    title: "Media Library",
    description: "Photos, video, tours, and staging files connected to every listing.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Invoices, deposits, split billing, online payments, and payouts.",
  },
  {
    icon: Palette,
    title: "White Label",
    description: "Your brand on every portal, email, domain, and order form.",
  },
];

export default function OperationLayer() {
  return (
    <section
      className="w-full py-20 md:py-36"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgb(7, 26, 55) 0%, rgb(4, 20, 42) 100%)",
      }}
    >
      <Container className="flex flex-col items-center gap-20">
        <h2 className="text-center text-4xl font-bold text-white md:text-[64px]">
          The operating layer behind your media business
        </h2>
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-start gap-5 rounded-xl border border-[#d9d9d9] bg-white/40 p-5 text-white"
            >
              <Icon className="size-8" strokeWidth={1.5} />
              <p className="text-2xl font-medium">{title}</p>
              <p className="text-lg font-normal">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
