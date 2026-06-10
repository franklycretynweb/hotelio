import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { Section } from "@/components/ui/section";

const columns: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Strona",
    links: [
      { href: "#atuty", label: "Atuty" },
      { href: "#mini-showcase", label: "Realizacje" },
      { href: "#proces", label: "Proces" },
      { href: "#kalkulator", label: "Kalkulator" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { href: "mailto:kontakt@hotelio.biz", label: "kontakt@hotelio.biz" },
      { href: "tel:+48000000000", label: "+48 000 000 000" },
      { href: "#", label: "Szczecin · Polska" },
    ],
  },
  {
    title: "Marka",
    links: [
      { href: "https://ssi.com.pl", label: "ssi.com.pl" },
      { href: "#", label: "Polityka prywatności" },
      { href: "#", label: "Regulamin" },
    ],
  },
];

export function Footer() {
  return (
    <Section tone="cream" id="logo" className="border-t border-ink/10 pt-20 pb-10 lg:pt-24">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
          <div>
            <Link href="/" className="block w-[200px]">
              <Logo variant="ink" />
            </Link>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-ink/60">
              Strony internetowe Hoteli, Pensjonatów, Apartamentów. Robimy je w
              SSI Szczecin — od 20 lat zajmujemy się tym, czego nie da się
              zlecić templatce.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="text-[11px] uppercase tracking-[0.18em] text-terracotta">
                  {col.title}
                </div>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-ink/75 transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 text-[12px] text-ink/45 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} SSI Sp. z o.o. — wszystkie prawa zastrzeżone.</span>
          <span>hotelio. jest sub-marką SSI Szczecin.</span>
        </div>
      </Container>
    </Section>
  );
}
