import Link from "next/link";
import Container from "@/components/layout/Container";
import type { LegalPageContent } from "./legalContent";

export default function LegalPage({ content }: { content: LegalPageContent }) {
  return (
    <main className="flex-1 bg-white">
      <section className="w-full bg-gradient-to-b from-white to-[#eff5ff] py-20 text-center md:py-28">
        <Container className="flex flex-col items-center gap-6">
          <Link
            href="/"
            className="rounded-lg border border-[#98bdfd] bg-white px-5 py-3 text-base font-bold text-black hover:-translate-y-0.5 hover:border-[#337dff] hover:shadow-lg active:translate-y-0"
          >
            Back to Home
          </Link>
          <h1 className="max-w-[960px] text-4xl font-bold text-black text-balance md:text-[64px] md:leading-[1.25]">
            {content.title}
          </h1>
          <p className="max-w-[860px] text-lg leading-8 text-black md:text-xl">{content.intro}</p>
          <p className="text-lg font-bold text-[#337dff]">Effective Date: {content.effectiveDate}</p>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
          <aside className="h-fit rounded-lg border border-[#d9d9d9] bg-white p-5 lg:sticky lg:top-8">
            <p className="text-2xl font-bold leading-tight text-black">{content.title}</p>
            <p className="mt-3 text-base leading-6 text-[#606060]">Tojuco Solutions Inc.</p>
            <a className="mt-3 block text-base font-medium text-[#337dff]" href="mailto:support@tojuco.com">
              support@tojuco.com
            </a>
          </aside>

          <article className="max-w-[860px] space-y-14">
            {content.sections.map((section) => (
              <section key={section.title} className="space-y-5">
                <h2 className="text-2xl font-bold leading-tight text-black text-balance md:text-[32px]">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-[#252b36] md:text-lg">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="list-disc space-y-3 pl-6 text-base leading-8 text-[#252b36] md:text-lg">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>
        </Container>
      </section>
    </main>
  );
}
