import { CheckCircle2 } from "lucide-react";

const basicFeatures = ["Lorem ipsum dolor sit amet,", "consectetur adipiscing elit.", "In id sollicitudin massa."];

const standardFeaturesCol1 = [
  "Lorem ipsum dolor sit amet,",
  "consectetur adipiscing elit.",
  "In id sollicitudin massa.",
  "Curabitur ac nibh congue",
  "eleifend dolor quis, tristique",
  "Suspendisse dapibus ultrices",
];

const standardFeaturesCol2 = [
  "Lorem ipsum dolor sit amet,",
  "consectetur adipiscing elit.",
  "In id sollicitudin massa.",
  "Curabitur ac nibh congue",
  "eleifend dolor quis, tristique",
  "Suspendisse dapibus ultrices",
];

export default function PlansSection() {
  return (
    <section id="pricing" className="flex w-full flex-col items-center gap-20 px-6 py-20 md:px-[120px] md:py-36">
      <div className="flex w-full flex-col items-center gap-8 text-center text-black">
        <h2 className="text-4xl font-bold md:text-[64px]">Plans that scale with your media business</h2>
        <p className="max-w-[560px] text-lg md:text-xl">
          No free tier, no surprises. Start solo and grow into a full white-label operation.
        </p>
      </div>

      <div className="flex w-full max-w-[1208px] flex-col items-center gap-10">
        <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row">
          {/* Basic plan */}
          <div className="flex w-full flex-col items-start gap-5 rounded-lg border border-[#d9d9d9] bg-white p-5 lg:w-[520px]">
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
            <div className="flex w-full flex-col gap-5 sm:flex-row">
              <div className="flex flex-1 flex-col gap-3 text-base">
                {standardFeaturesCol1.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-[#337dff]" />
                    <p className="font-medium text-black">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-1 flex-col gap-3 text-base">
                {standardFeaturesCol2.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-[#337dff]" />
                    <p className="font-medium text-black">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-lg text-[#337dff]">Get in touch for enterprise pricing</p>
      </div>
    </section>
  );
}
