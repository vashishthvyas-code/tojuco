export default function SolutionsHero() {
  return (
    <section className="flex w-full flex-col items-center gap-8 bg-gradient-to-b from-white/90 to-[#eff5ff]/90 px-6 py-20 md:px-[120px] md:py-36">
      <h1 className="text-center text-4xl leading-tight font-bold text-black md:text-[64px]">
        Solutions for every real estate media workflow.
      </h1>
      <p className="max-w-[820px] text-center text-lg font-normal text-black md:text-xl">
        Tojuco helps media companies manage orders, scheduling, vendors, media delivery, payments,
        tour pages, feature sheets, and client portals through one white-label platform.
      </p>
      <div className="flex flex-wrap items-start justify-center gap-6">
        <a
          href="#book-demo"
          className="w-[191px] rounded-lg bg-[#337dff] px-6 py-4 text-center text-lg font-bold text-white"
        >
          Book Demo
        </a>
        <a
          href="#how-it-works"
          className="rounded-lg border border-[#98bdfd] px-6 py-4 text-lg font-bold text-black"
        >
          See How It Works
        </a>
      </div>
    </section>
  );
}
