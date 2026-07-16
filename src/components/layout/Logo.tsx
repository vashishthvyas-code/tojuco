import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Tojuco" className={`flex shrink-0 items-center gap-3 ${className}`}>
      <span className="relative h-full aspect-[49.4349/50]">
        <Image src="/images/home/logo-icon.svg" alt="" fill priority sizes="50px" className="object-contain" />
      </span>
      <span className="relative h-full aspect-[152.96/48.9998]">
        <Image
          src="/images/home/logo-wordmark.svg"
          alt=""
          fill
          priority
          sizes="160px"
          className="object-contain"
        />
      </span>
    </Link>
  );
}
