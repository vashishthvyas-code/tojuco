import Image from "next/image";
import { Camera, ClipboardList, CreditCard, Truck, UploadCloud, Users } from "lucide-react";
import Container from "@/components/layout/Container";

const stepIcons = [ClipboardList, Camera, Users, UploadCloud, CreditCard, Truck];

const lines = ["/images/solutions/line-4.svg", "/images/solutions/line-5.svg", "/images/solutions/line-4.svg", "/images/solutions/line-7.svg", "/images/solutions/line-7.svg"];

const steps = [
  { title: "Order", lines: ["Agent places a", "branded order."] },
  { title: "Schedule", lines: ["Checks services", "and availability."] },
  { title: "Assign", lines: ["Media company", "assigns vendor."] },
  { title: "Upload", lines: ["Vendor uploads", "media and files."] },
  { title: "Pay", lines: ["Agent pays", "invoice online."] },
  { title: "Deliver", lines: ["Files and tour", "pages go live."] },
];

export default function ServiceWorkflow() {
  return (
    <section className="w-full bg-white py-20 md:py-36">
      <Container className="flex flex-col items-center gap-20">
        <div className="flex w-full flex-col items-center gap-8 text-center text-black">
          <h2 className="text-4xl font-bold md:text-[64px]">Built for every service category</h2>
          <p className="max-w-[560px] text-lg md:text-xl">
            Services are what media companies sell to agents. Platform features support those services.
          </p>
        </div>

        <div className="flex w-full flex-col gap-11">
          <div className="hidden w-full items-center gap-3 lg:flex">
            {stepIcons.map((Icon, index) => (
              <div key={index} className="flex flex-1 items-center gap-3 last:flex-none">
                <div className="flex w-[87px] shrink-0 items-center justify-center rounded-lg bg-[#d5e4ff] p-4">
                  <Icon className="size-10 text-[#337dff]" strokeWidth={1.5} />
                </div>
                {index < lines.length && (
                  <div className="relative flex-1">
                    <Image
                      src={lines[index]}
                      alt=""
                      width={100}
                      height={2}
                      className="h-auto w-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid w-full grid-cols-2 gap-6 text-black sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col gap-6">
                <p className="text-2xl font-semibold">{step.title}</p>
                <p className="text-base">
                  {step.lines[0]}
                  <br />
                  {step.lines[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
