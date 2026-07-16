import FaqAccordion from "./FaqAccordion";

export default function FaqSection() {
  return (
    <section className="flex w-full flex-col items-center gap-20 bg-white px-6 pb-20 md:px-[120px] md:pb-36">
      <h2 className="text-center text-4xl font-bold text-black md:text-[64px]">FAQs</h2>
      <FaqAccordion />
    </section>
  );
}
