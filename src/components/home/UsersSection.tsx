import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";

const roles = [
  {
    label: "Media Company Admin",
    labelColor: "text-[#337dff]",
    iconColor: "text-[#337dff]",
    title: "Your operational command center",
    image: "/images/home/admin-role.png",
    aspect: "aspect-[890/744]",
    features: ["Services & pricing control", "Vendor & payout management", "Reports & white-label settings"],
  },
  {
    label: "Real Estate Agent",
    labelColor: "text-[#9204ff]",
    iconColor: "text-[#9204ff]",
    title: "Order and access media in one place",
    image: "/images/home/agent-role.png",
    aspect: "aspect-[890/1035]",
    features: ["Online ordering & scheduling", "Media downloads & feature sheets", "Tour pages, stats & payments"],
  },
  {
    label: "Vendor",
    labelColor: "text-[#ff8604]",
    iconColor: "text-[#ff8604]",
    title: "Manage jobs from appointment to upload",
    image: "/images/home/vendor-role.png",
    aspect: "aspect-[886/639]",
    features: ["Assigned jobs & availability", "Job details & media uploads", "Completed jobs & payouts"],
  },
];

export default function UsersSection() {
  return (
    <section className="w-full py-20 md:py-36">
      <Container className="flex flex-col items-center gap-20">
        <div className="flex w-full flex-col items-center gap-8 text-center text-black">
          <h2 className="text-4xl font-bold md:text-[64px]">A better experience for every user</h2>
          <p className="max-w-[560px] text-lg md:text-xl">
            The same platform adapts to each role — see what admins, agents, and vendors actually work with.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-5 lg:flex-row">
        {roles.map((role) => (
          <div key={role.label} className="flex flex-1 flex-col items-start gap-5 rounded-lg border border-[#d9d9d9] bg-white p-5">
            <p className={`text-lg ${role.labelColor}`}>{role.label}</p>
            <p className="text-2xl font-medium text-black">{role.title}</p>
            <div className={`relative w-full ${role.aspect}`}>
              <Image
                src={role.image}
                alt={role.title}
                fill
                sizes="(min-width: 1024px) 387px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex w-full flex-col gap-3 text-base">
              {role.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className={`size-4 shrink-0 ${role.iconColor}`} />
                  <p className="font-medium text-black">{feature}</p>
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
