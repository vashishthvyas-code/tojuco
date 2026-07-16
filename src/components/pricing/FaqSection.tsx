import Container from "@/components/layout/Container";
import FaqAccordion from "./FaqAccordion";

export default function FaqSection() {
  return (
    <section className="w-full bg-white pb-20 md:pb-36">
      <Container className="flex flex-col items-center gap-20">
        <h2 className="text-center text-4xl font-bold text-black md:text-[64px]">FAQs</h2>
        <FaqAccordion />
      </Container>
    </section>
  );
}
