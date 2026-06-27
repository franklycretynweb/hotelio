import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const links = [
  { href: "#atuty", label: "realizacje" },
  { href: "#proces", label: "proces" },
  { href: "#cennik", label: "cennik" },
];

/**
 * Top navigation. Rendered over the light concierge hero, so type sits in ink
 * over the cream wall. Logo + primary links group left, the secondary "wycena"
 * link and the terracotta CTA sit together on the right.
 */
export function TopNav() {
  return (
    <div className="absolute inset-x-0 top-0 z-20">
      <Container size="wide" className="flex items-center gap-10 py-6">
        <Link href="/" className="block w-[88px] shrink-0">
          <Logo variant="ink" />
          <span className="sr-only">hotelio. — strona główna</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] uppercase tracking-[0.14em] text-heading/70 transition-colors hover:text-heading"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-6">
          <Link
            href="#cta"
            className="hidden text-[13px] uppercase tracking-[0.14em] text-heading/70 transition-colors hover:text-heading md:inline"
          >
            wycena
          </Link>
          <Link
            href="#cta"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-terracotta px-4 text-[13px] font-medium text-cream transition-colors hover:bg-terracotta-warm"
          >
            porozmawiajmy
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
