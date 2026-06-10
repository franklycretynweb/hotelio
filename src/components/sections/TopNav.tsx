import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const links = [
  { href: "#atuty", label: "realizacje" },
  { href: "#proces", label: "proces" },
  { href: "#kalkulator", label: "cennik" },
  { href: "#cta", label: "wycena" },
];

/**
 * Top navigation. Always rendered on the dark hero band — the rest of the page
 * scrolls underneath; we don't pin it (yet) because Mateusz's design has a
 * static nav docked to the hero only.
 */
export function TopNav() {
  return (
    <div className="absolute inset-x-0 top-0 z-20">
      <Container size="wide" className="flex items-center justify-between py-6">
        <Link href="/" className="block w-[88px]">
          <Logo variant="cream" />
          <span className="sr-only">hotelio. — strona główna</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] uppercase tracking-[0.14em] text-cream/65 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#cta"
          className="inline-flex h-10 items-center gap-2 rounded-md bg-terracotta px-4 text-[13px] font-medium text-cream transition-colors hover:bg-terracotta-warm"
        >
          porozmawiajmy
          <span aria-hidden>→</span>
        </Link>
      </Container>
    </div>
  );
}
