import HeroMockup from "./HeroMockup";

export default function HeroSection() {
  return (
    <section className="flex w-full flex-col items-center gap-20 bg-gradient-to-b from-white to-[#eff5ff] px-6 py-20 md:px-[120px] md:py-36">
      <div className="flex w-full flex-col items-center gap-8">
        <h1 className="text-center text-4xl leading-tight font-bold text-black md:text-[64px]">
          <span className="block">The All-In-One Platform</span>
          <span className="block">
            for{" "}
            <span className="bg-gradient-to-r from-[#98bdfd] to-[#337dff] bg-clip-text text-transparent">
              Media Companies
            </span>
          </span>
        </h1>
        <p className="max-w-[820px] text-center text-lg font-normal text-black md:text-xl">
          Tojuco brings ordering, scheduling, vendors, media delivery, billing, tour pages, feature
          sheets, and client portals into one white-label platform built for real estate media
          companies.
        </p>
        <div className="flex flex-wrap items-start justify-center gap-6">
          <a
            href="#free-trial"
            className="w-[191px] rounded-lg bg-[#337dff] px-6 py-4 text-center text-lg font-bold text-white"
          >
            Free Trial
          </a>
          <a
            href="#how-it-works"
            className="rounded-lg border border-[#98bdfd] px-6 py-4 text-lg font-bold text-black"
          >
            See How It Works
          </a>
        </div>
      </div>
      <HeroMockup />
    </section>
  );
}
