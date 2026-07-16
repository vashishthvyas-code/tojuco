import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
];

type HeaderProps = {
  active?: string;
  secondaryCta?: { label: string; href: string };
  primaryCta?: { label: string; href: string };
};

export default function Header({
  active,
  secondaryCta = { label: "See How It Works", href: "#how-it-works" },
  primaryCta = { label: "Free Trial", href: "#free-trial" },
}: HeaderProps) {
  return (
    <header className="bg-white flex items-center justify-between px-6 py-6 md:px-[120px] md:py-10 shadow-[0px_4px_5px_rgba(0,0,0,0.05)]">
      <Link href="/" className="relative h-[50px] w-[227px] shrink-0">
        <Image
          src="/images/home/logo-mark.svg"
          alt="Tojuco"
          fill
          priority
          sizes="227px"
          className="object-contain object-left"
        />
      </Link>

      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`text-lg font-medium ${
              active === link.label ? "text-[#337dff]" : "text-black"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-5">
        <a
          href={secondaryCta.href}
          className="rounded-lg border border-[#98bdfd] px-6 py-4 text-lg font-bold text-black"
        >
          {secondaryCta.label}
        </a>
        <a
          href={primaryCta.href}
          className="rounded-lg bg-[#337dff] px-6 py-4 text-lg font-bold text-white"
        >
          {primaryCta.label}
        </a>
      </div>
    </header>
  );
}
