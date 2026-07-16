import { CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";

const basicFeatures = ["Lorem ipsum dolor sit amet,", "consectetur adipiscing elit.", "In id sollicitudin massa."];

const standardFeatures = [
  "Lorem ipsum dolor sit amet,",
  "consectetur adipiscing elit.",
  "In id sollicitudin massa.",
  "Curabitur ac nibh congue",
  "eleifend dolor quis, tristique",
  "Suspendisse dapibus ultrices",
];

export default function PricingPlans() {
  return (
    <section className="w-full bg-white py-20 md:py-36">
      <Container className="flex flex-col items-stretch gap-6 lg:flex-row">
        {/* Basic plan */}
        <div className="flex w-full flex-col items-start gap-5 rounded-lg border border-[#d9d9d9] bg-white p-5 lg:w-[387px]">
          <div className="flex items-center rounded-full border border-[#337dff] px-8 py-1">
            <p className="text-lg text-[#337dff]">Basic</p>
          </div>
          <p className="text-black">
            <span className="text-[64px] font-medium">$XX</span>{" "}
            <span className="text-2xl font-medium text-[#9c9c9c]">/mo</span>
          </p>
          <p className="text-lg text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id sollicitudin massa.
          </p>
          <a
            href="#get-started"
            className="w-full rounded-lg border border-[#98bdfd] bg-white px-6 py-4 text-center text-lg font-bold text-black"
          >
            Get Started
          </a>
          <div className="flex flex-col gap-3 text-base">
            {basicFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 shrink-0 text-[#337dff]" />
                <p className="font-medium text-black">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Standard plan */}
        <div className="flex flex-1 flex-col items-start gap-5 rounded-lg border border-[#d9d9d9] bg-white p-5">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center rounded-full border border-[#9204ff] px-8 py-1">
              <p className="text-lg text-[#9204ff]">Standard</p>
            </div>
            <div className="flex items-center rounded-full bg-gradient-to-r from-[#98bdfd] to-[#337dff] px-8 py-1">
              <p className="text-sm text-white">Recommended</p>
            </div>
          </div>
          <p className="text-black">
            <span className="text-[64px] font-medium">$XX</span>{" "}
            <span className="text-2xl font-medium text-[#9c9c9c]">/mo</span>
          </p>
          <p className="text-lg text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id sollicitudin massa.
          </p>
          <a
            href="#get-started"
            className="w-full rounded-lg border border-[#98bdfd] bg-[#337dff] px-6 py-4 text-center text-lg font-bold text-white"
          >
            Get Started
          </a>
          <div className="flex flex-col gap-3 text-base">
            {standardFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 shrink-0 text-[#337dff]" />
                <p className="font-medium text-black">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
