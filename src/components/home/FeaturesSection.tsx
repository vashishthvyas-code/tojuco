import Image from "next/image";
import Container from "@/components/layout/Container";

const features = [
  {
    image: "/images/home/feature-1.png",
    title: "Book services faster",
    description: "Agents can place orders, choose services, and schedule appointments through a branded portal.",
  },
  {
    image: "/images/home/feature-2.png",
    title: "Deliver media in one place",
    description:
      "Photos, videos, floor plans, tours, staging files, and feature sheets stay connected to every listing.",
  },
  {
    image: "/images/home/feature-3.png",
    title: "Get paid without friction",
    description: "Keep invoices, deposits, payments, and vendor payouts tied to every project automatically.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-20 md:py-36">
      <Container className="flex flex-col items-center gap-20">
        <div className="flex w-full flex-col items-center gap-8 text-center text-black">
          <h2 className="text-4xl font-bold md:text-[64px]">
            <span className="block">One platform for every</span>
            <span className="block">part of your workflow</span>
          </h2>
          <p className="max-w-[560px] text-lg md:text-xl">
            Powerful operations for media companies. Simple experiences for agents and vendors.
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-5 md:flex-row md:items-start">
          {features.map((feature) => (
            <div key={feature.title} className="flex w-full max-w-[387px] flex-col items-start">
              <div className="relative h-[275px] w-full overflow-hidden rounded-t-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(min-width: 768px) 387px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col gap-5 rounded-b-lg border border-[#d9d9d9] p-5 text-black">
                <p className="text-2xl font-medium">{feature.title}</p>
                <p className="text-lg font-normal">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
