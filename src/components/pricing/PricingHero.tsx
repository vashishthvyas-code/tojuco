import Container from "@/components/layout/Container";

export default function PricingHero() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#eff5ff] py-20 text-center md:py-36">
      <Container className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-black md:text-[64px]">
          Hybrid flat-rate pricing for real estate media companies.
        </h1>
        <p className="max-w-[820px] text-lg text-black md:text-xl">
          No free tier. Start with a clear base plan, included users, add-ons, white-label options, and
          usage limits for media-heavy workflows.
        </p>
      </Container>
    </section>
  );
}
