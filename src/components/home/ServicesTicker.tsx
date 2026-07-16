const services = [
  "Photography",
  "Videography",
  "Matterport",
  "Virtual Staging",
  "Feature Sheets",
  "Custom Services",
];

function TickerItem({ service }: { service: string }) {
  return (
    <div className="flex items-center gap-8">
      <p className="text-2xl font-medium whitespace-nowrap text-white md:text-4xl">{service}</p>
      <span className="size-[10px] shrink-0 rounded-full bg-white/60 md:size-[26px]" />
    </div>
  );
}

export default function ServicesTicker() {
  return (
    <div className="w-full overflow-hidden bg-[#337dff] py-6">
      <div className="animate-marquee flex w-max items-center gap-8">
        <div className="flex shrink-0 items-center gap-8">
          {services.map((service) => (
            <TickerItem key={service} service={service} />
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-8" aria-hidden="true">
          {services.map((service) => (
            <TickerItem key={service} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
