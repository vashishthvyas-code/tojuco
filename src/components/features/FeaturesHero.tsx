export default function FeaturesHero() {
  return (
    <section className="flex w-full flex-col items-center gap-8 bg-gradient-to-b from-white to-[#eff5ff] px-6 py-20 md:px-[120px] md:py-36">
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
    </section>
  );
}
