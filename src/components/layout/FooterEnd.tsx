import Image from "next/image";
import Link from "next/link";

const solutionLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/#resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/#about-us" },
];

export default function FooterEnd() {
  return (
    <footer className="flex w-full flex-col items-start gap-12 border-t border-[#d9d9d9] px-6 py-20 md:flex-row md:justify-between md:px-[120px] md:py-36">
      <div className="flex w-full max-w-[443px] flex-col items-start gap-12">
        <Link href="/" className="relative h-[50px] w-[227px] shrink-0">
          <Image
            src="/images/home/logo-mark.svg"
            alt="Tojuco"
            fill
            sizes="227px"
            className="object-contain object-left"
          />
        </Link>
        <p className="text-lg text-[#606060]">
          The white-label operating system for real estate media companies. Manage orders, scheduling,
          media delivery, payments, and client portals under your own brand.
        </p>
      </div>

      <div className="flex flex-col items-start gap-7 text-lg font-medium text-black">
        {solutionLinks.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-start gap-3 text-lg text-black">
        <p className="font-medium">Email</p>
        <p>support@tojuco.com</p>
      </div>

      <div className="flex flex-col items-start gap-3 text-lg text-black">
        <p className="font-medium">Support Hours</p>
        <p>
          Monday to Friday
          <br />
          8am - 8pm
        </p>
      </div>
    </footer>
  );
}
