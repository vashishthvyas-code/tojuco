import { ImageIcon } from "lucide-react";
import Container from "@/components/layout/Container";

export default function BrandingSection() {
  return (
    <section className="w-full bg-white py-20 md:py-36">
      <Container className="flex flex-col items-start gap-16 md:flex-row">
        <div className="flex flex-1 flex-col items-start gap-8">
          <h2 className="text-4xl font-bold text-black md:text-[64px]">
            Your brand on every client touchpoint.
          </h2>
          <p className="max-w-[560px] text-lg text-black md:text-xl">
            Every tenant can configure its own services, pricing, colours, users, portals, emails, and
            workflows.
          </p>
          <a
            href="#white-label"
            className="rounded-lg bg-[#337dff] px-6 py-4 text-lg font-bold text-white hover:-translate-y-0.5 hover:bg-[#2563eb] hover:shadow-lg active:translate-y-0"
          >
            Explore White Label Features
          </a>
        </div>
        <div className="flex flex-1 flex-col items-start">
          <div className="flex h-[329px] w-full flex-col items-start gap-5 rounded-lg border border-[#d9d9d9] p-5">
            <p className="text-2xl font-medium text-black">Your Logo</p>
            <div className="flex flex-1 w-full items-center justify-center rounded-lg bg-[#d5e4ff]">
              <ImageIcon className="size-8 text-[#337dff]" strokeWidth={1.5} />
            </div>
            <a
              href="#book-demo"
              className="w-full rounded-lg border border-[#337dff] bg-white px-6 py-4 text-center text-lg font-bold text-[#337dff] hover:-translate-y-0.5 hover:bg-[#eff5ff] hover:shadow-lg active:translate-y-0"
            >
              Book Demo
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
