import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

const solutionLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/#about-us" },
];

export default function FooterEnd() {
  return (
    <footer className="w-full border-t border-[#d9d9d9] py-20 md:py-36">
      <Container className="flex flex-col items-start gap-12 md:flex-row md:justify-between">
        <div className="flex w-full max-w-[443px] flex-col items-start gap-12">
          <Logo className="h-10" />
          <p className="text-lg text-[#606060]">
            The white-label operating system for real estate media companies. Manage orders, scheduling,
            media delivery, payments, and client portals under your own brand.
          </p>
        </div>

        <div className="flex flex-col items-start gap-7 text-lg font-medium text-black">
          {solutionLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-[#337dff]">
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
      </Container>
    </footer>
  );
}
