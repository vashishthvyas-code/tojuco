import Image from "next/image";
import Container from "@/components/layout/Container";

const services = [
  {
    title: "Photography",
    description: "Photo galleries, file delivery, MLS-ready downloads, and image workflows.",
    image: "/images/solutions/photography.png",
  },
  {
    title: "Videography",
    description: "Upload, host, preview, and deliver property videos through the portal.",
    image: "/images/solutions/videography.png",
  },
  {
    title: "3D Tours / Matterport",
    description: "Manage tour links, hosted tours, embeds, and usage limits.",
    image: "/images/solutions/tours.png",
  },
  {
    title: "Virtual Staging",
    description: "Photo galleries, file delivery, MLS-ready downloads, and image workflows.",
    image: "/images/solutions/staging.png",
  },
  {
    title: "Feature Sheets & Brochures",
    description: "Create digital and print-ready materials from delivered media.",
    image: "/images/solutions/feature-sheets.png",
  },
  {
    title: "Custom Services",
    description: "Add floor plans, inspections, signs, copywriting, ads, or social media packages.",
    image: "/images/solutions/custom.png",
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full bg-white py-20 md:py-36">
      <Container className="flex flex-col items-center gap-20">
        <div className="flex w-full flex-col items-center gap-8 text-center text-black">
          <h2 className="text-4xl font-bold md:text-[64px]">Built for every service category</h2>
          <p className="max-w-[560px] text-lg md:text-xl">
            Services are what media companies sell to agents. Platform features support those services.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-start">
              <div className="flex w-full flex-col items-start gap-5 rounded-t-lg border border-[#d9d9d9] p-5 text-black">
                <p className="text-2xl font-medium">{service.title}</p>
                <p className="text-lg">{service.description}</p>
              </div>
              <div className="relative h-[194px] w-full overflow-hidden rounded-b-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 387px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
