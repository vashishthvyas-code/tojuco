"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    answer:
      "Aenean ante eros, imperdiet sit amet auctor vel, molestie auctor mi. Suspendisse potenti. Sed justo sapien, dictum a tortor et, tincidunt tincidunt nunc.",
  },
  {
    question: "Aenean ante eros, imperdiet sit amet auctor vel, molestie auctor mi",
    answer:
      "Suspendisse potenti. Sed justo sapien, dictum a tortor et, tincidunt tincidunt nunc. Quisque molestie cursus arcu facilisis feugiat.",
  },
  {
    question: "Suspendisse potenti. Sed justo sapien, dictum a tortor et,",
    answer:
      "Vestibulum eu ante faucibus ante dapibus facilisis at vel neque. Quisque molestie cursus arcu facilisis feugiat.",
  },
  {
    question: "Quisque molestie cursus arcu facilisis feugiat.",
    answer:
      "Aenean ante eros, imperdiet sit amet auctor vel, molestie auctor mi. Suspendisse potenti. Sed justo sapien, dictum a tortor et.",
  },
  {
    question: "Vestibulum eu ante faucibus ante dapibus facilisis at vel neque.",
    answer:
      "Suspendisse potenti. Sed justo sapien, dictum a tortor et, tincidunt tincidunt nunc. Quisque molestie cursus arcu facilisis feugiat.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full max-w-[740px] flex-col items-start gap-8">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question} className="w-full">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 text-left text-xl text-black"
            >
              <p>{faq.question}</p>
              <ChevronDown
                className={`mt-1 size-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && <p className="mt-4 text-base text-[#606060]">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
