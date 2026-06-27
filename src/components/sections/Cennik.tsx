import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type Tier = {
  n: string;
  label: string;
  price: string;
  body: string;
};

const TIERS: Tier[] = [
  {
    n: "01",
    label: "Hotel",
    price: "7 500",
    body: "Pełne wdrożenie dla obiektu 30+ pokoi — z modułem rezerwacji bezpośrednich i channel managerem.",
  },
  {
    n: "02",
    label: "Pensjonat",
    price: "5 000",
    body: "Kameralna strona z jasnym lejkiem rezerwacji. Bez nadmiaru funkcji, z mocną sekcją zdjęć.",
  },
  {
    n: "03",
    label: "Apartament",
    price: "2 500",
    body: "Strona dla 1–10 apartamentów. Galeria, dostępność i szybka ścieżka do kontaktu.",
  },
  {
    n: "04",
    label: "One-page",
    price: "1 500",
    body: "Pojedyncza karta — wizytówka obiektu z CTA. Łatwa rozbudowa do pełnej strony później.",
  },
];

export function Cennik() {
  return (
    <Section
      tone="cream"
      id="cennik"
      className="relative overflow-hidden border-t border-ink/10 pt-2 pb-20 lg:pt-3 lg:pb-24"
    >
      <Container size="wide">
        {/* Header — carries the canonical product naming once, so the 4
            cards underneath stay clean (no repeated "Strony internetowe
            dla X" titles competing with the price). */}
        <div className="max-w-3xl">
          <div className="text-[12px] uppercase tracking-[0.22em] text-terracotta">
            Cennik
          </div>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(2.25rem,4.2vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-heading">
            Cztery progi wejścia.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.6] text-heading/55">
            Strony internetowe dla hoteli, pensjonatów i apartamentów. Cena
            startowa zależy od skali obiektu — wszystkie kwoty netto, bez
            prowizji od rezerwacji.
          </p>
        </div>

        {/* Tier grid — subgrid on lg so meta/price/body share row tracks
            across all 4 columns. Strong 3-step hierarchy per card:
              1. meta line (01 · HOTEL)        — quiet eyebrow
              2. price                          — the visual anchor
              3. body                           — supporting copy */}
        <div className="mt-12 grid grid-cols-1 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-8">
          {TIERS.map((tier, i) => (
            <article
              key={tier.n}
              className={[
                "relative flex flex-col gap-7 py-8",
                // mobile/sm horizontal hairlines
                "border-t border-ink/10",
                i === 0 ? "border-t-0" : "",
                i === 1 ? "sm:border-t-0" : "",
                // lg: vertical hairlines + subgrid alignment
                "lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:border-t-0 lg:py-2",
                "lg:border-l lg:border-ink/10 lg:pl-7 lg:pr-6",
                i === 0 ? "lg:border-l-0 lg:pl-0" : "",
                i === TIERS.length - 1 ? "lg:pr-0" : "",
              ].join(" ")}
            >
              {/* 1 — Meta eyebrow: micro scan target */}
              <div className="flex items-baseline gap-3">
                <span className="font-[family-name:var(--font-display)] text-[12px] font-medium tabular-nums tracking-[0.14em] text-terracotta">
                  {tier.n}
                </span>
                <span className="h-px w-5 self-center bg-terracotta/40" />
                <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-heading/80">
                  {tier.label}
                </span>
              </div>

              {/* 2 — PRICE: the single anchor each card has */}
              <div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-heading/40">
                    od
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,4.6vw,4rem)] font-bold leading-none tracking-[-0.03em] tabular-nums text-terracotta">
                    {tier.price}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-[clamp(1.125rem,1.6vw,1.5rem)] font-bold leading-none tracking-[-0.02em] text-terracotta">
                    zł
                  </span>
                </div>
                <div className="mt-2.5 text-[10px] font-medium uppercase tracking-[0.24em] text-heading/40">
                  netto
                </div>
              </div>

              {/* 3 — Body: supporting copy, deliberately quiet */}
              <p className="text-[13px] leading-[1.55] text-heading/55">
                {tier.body}
              </p>
            </article>
          ))}
        </div>

        {/* Footer row — helper line + 2 CTAs */}
        <div className="mt-14 flex flex-col items-start gap-6 border-t border-ink/10 pt-10 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <p className="max-w-md text-[13px] leading-[1.55] text-heading/55">
            Nie wiesz, który próg pasuje do Twojego obiektu?{" "}
            <span className="text-heading">Bezpłatna konsultacja</span> — w
            60 minut podpowiemy zakres.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#mini-showcase"
              className="inline-flex h-12 items-center rounded-md border border-ink/20 px-5 text-[12px] font-medium uppercase tracking-[0.16em] text-heading/85 transition-colors hover:border-ink/55 hover:text-heading"
            >
              Zobacz realizacje
            </Link>
            <Link
              href="#cta"
              className="group inline-flex h-12 items-center gap-3 rounded-md bg-terracotta pl-5 pr-2.5 text-[12px] font-medium uppercase tracking-[0.16em] text-cream transition-colors hover:bg-terracotta-warm"
            >
              Zamów stronę
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cream/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRight strokeWidth={2.25} className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
