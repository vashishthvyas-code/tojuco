import Container from "./Container";

type FooterCtaProps = {
  headline?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string } | null;
};

export default function FooterCta({
  headline = "Ready to launch your branded media platform?",
  description = "Bring your orders, scheduling, media delivery, payments, and client experience into one connected system.",
  primaryCta = { label: "Book a Demo", href: "#book-demo" },
  secondaryCta = { label: "Explore Solutions", href: "/solutions" },
}: FooterCtaProps) {
  return (
    <section className="w-full py-20 md:py-36">
      <Container>
        <div
          className="flex w-full flex-col items-center gap-10 rounded-[40px] px-6 py-16 md:p-20"
          style={{
            backgroundImage: "linear-gradient(rgb(57, 97, 255) 0%, rgb(64, 97, 254) 100%)",
          }}
        >
          <div className="flex w-full flex-col items-center gap-8 text-center text-white">
            <h2 className="text-4xl font-bold md:text-[64px]">{headline}</h2>
            <p className="max-w-[560px] text-lg md:text-xl">{description}</p>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-6">
            <a
              href={primaryCta.href}
              className="w-[191px] rounded-lg bg-white px-6 py-4 text-center text-lg font-bold text-black hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="rounded-lg border border-[#98bdfd] px-6 py-4 text-lg font-bold text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10 active:translate-y-0"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
