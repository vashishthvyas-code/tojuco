import Container from "@/components/layout/Container";

export default function FeaturesHero() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#eff5ff] py-20 md:py-36">
      <Container className="flex flex-col items-center gap-8">
        <h1 className="text-center text-4xl leading-tight font-bold text-black md:text-[64px]">
          One connected platform for orders, media, money, and branded portals.
        </h1>
        <p className="max-w-[820px] text-center text-lg font-normal text-black md:text-xl">
          Features are platform capabilities, not services sold to agents. Services like photography
          and videography activate the right workflows inside Tojuco.
        </p>
        <a
          href="#book-demo"
          className="w-[191px] rounded-lg bg-[#337dff] px-6 py-4 text-center text-lg font-bold text-white"
        >
          Book Demo
        </a>
      </Container>
    </section>
  );
}
