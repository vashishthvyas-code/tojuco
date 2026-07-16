import Container from "@/components/layout/Container";

const services = [
  "Photography",
  "Videography",
  "Matterport",
  "Virtual Staging",
  "Feature Sheets",
  "Custom Services",
];

export default function ServicesTicker() {
  return (
    <div className="w-full bg-[#337dff] py-6">
      <Container className="flex flex-wrap items-center justify-center gap-8">
        {services.map((service, index) => (
          <div key={service} className="flex items-center gap-8">
            <p className="text-2xl font-medium whitespace-nowrap text-white md:text-4xl">{service}</p>
            {index < services.length - 1 && <span className="size-[10px] rounded-full bg-white/60 md:size-[26px]" />}
          </div>
        ))}
      </Container>
    </div>
  );
}
