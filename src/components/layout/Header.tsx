import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

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
    <header className="w-full bg-white shadow-[0px_4px_5px_rgba(0,0,0,0.05)]">
      <Container className="flex items-center justify-between gap-6 py-5 lg:py-7">
        <Logo className="h-8 lg:h-[42px]" />

        <nav className="hidden items-center gap-8 lg:flex">
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

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={secondaryCta.href}
            className="whitespace-nowrap rounded-lg border border-[#98bdfd] px-6 py-4 text-lg font-bold text-black"
          >
            {secondaryCta.label}
          </a>
          <a
            href={primaryCta.href}
            className="whitespace-nowrap rounded-lg bg-[#337dff] px-6 py-4 text-lg font-bold text-white"
          >
            {primaryCta.label}
          </a>
        </div>
      </Container>
    </header>
  );
}
