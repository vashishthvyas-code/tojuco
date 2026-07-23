import Image from "next/image";
import Container from "@/components/layout/Container";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#eff5ff] py-20 md:py-36">
      <Container className="flex flex-col items-center gap-20">
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
              href="#book-demo"
              className="w-[191px] rounded-lg bg-[#337dff] px-6 py-4 text-center text-lg font-bold text-white hover:-translate-y-0.5 hover:bg-[#2563eb] hover:shadow-lg active:translate-y-0"
            >
              Book a Demo
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg border border-[#98bdfd] px-6 py-4 text-lg font-bold text-black hover:-translate-y-0.5 hover:border-[#337dff] hover:shadow-lg active:translate-y-0"
            >
              See How It Works
            </a>
          </div>
        </div>
        <div className="relative aspect-[2470/1667] w-full max-w-[1200px]">
          <Image
            src="/images/home/hero-image.png"
            alt="Tojuco platform dashboard"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
