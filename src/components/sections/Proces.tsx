"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type Krok = {
  n: string;
  phase: string;
  title: string;
  body: string;
  twojWklad: string;
};

const KROKI: Krok[] = [
  {
    n: "01",
    phase: "Początek",
    title: "Poznajemy Twój obiekt",
    body: "Rozmawiamy o obiekcie, gościach i celach. Analizujemy konkurencję w Twojej lokalizacji i proporcje kanałów rezerwacji. Diagnoza w raporcie — twarde punkty, nie „możliwości do poprawy”.",
    twojWklad: "60 minut online. Nic więcej.",
  },
  {
    n: "02",
    phase: "Pierwsze dni",
    title: "Projektujemy pod rezerwację",
    body: "Projektujemy od zera — bez szablonów. Każdy element prowadzi do „Rezerwuj”. Piszemy treści, które sprzedają — nie tylko opisują hotel.",
    twojWklad: "akceptujesz makiety w dwóch turach.",
  },
  {
    n: "03",
    phase: "Pierwszy tydzień",
    title: "Budujemy i łączymy",
    body: "Programujemy zgodnie z projektem. Integrujemy bezpośredni engine rezerwacyjny i Channel Manager. Testy na wszystkich urządzeniach i przeglądarkach.",
    twojWklad: "dostęp do Channel Managera. Finalne testy razem z nami.",
  },
  {
    n: "04",
    phase: "Finał · ciągły",
    title: "Sprawdzamy czy zarabia",
    body: "Po 30 dniach analiza danych. Po 60 — pierwsza optymalizacja. Po 90 — raport z wynikami i rekomendacjami co dalej.",
    twojWklad: "czytasz raporty i decydujesz co dalej.",
  },
];

function StepDot({
  scrollYProgress,
  threshold,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  threshold: number;
}) {
  const scale = useTransform(
    scrollYProgress,
    [threshold - 0.04, threshold, threshold + 0.04],
    [0.55, 1.15, 1],
  );
  const opacity = useTransform(
    scrollYProgress,
    [threshold - 0.05, threshold],
    [0.35, 1],
  );
  const glow = useTransform(
    scrollYProgress,
    [threshold - 0.04, threshold],
    [0, 1],
  );
  return (
    <span className="pointer-events-none absolute left-0 top-[26px] flex h-4 w-4 -translate-x-1/2 items-center justify-center">
      <motion.span
        aria-hidden
        style={{ opacity: glow }}
        className="absolute h-6 w-6 rounded-full bg-terracotta/35 blur-md"
      />
      <motion.span
        aria-hidden
        style={{ scale, opacity }}
        className="h-3 w-3 rounded-full bg-terracotta shadow-[0_0_0_3px_rgba(245,240,232,1)]"
      />
    </span>
  );
}

export function Proces() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 35%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section tone="cream" id="proces" className="py-24 lg:py-32">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:gap-24">
          {/* LEFT — sticky pitch */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,4.2vw,3.625rem)] font-bold leading-[1.0] tracking-[-0.03em] text-heading">
              Cztery kroki
              <br />
              współpracy.
            </h2>

            <p className="mt-9 max-w-[460px] text-[18px] leading-[1.6] tracking-[-0.005em] text-heading/65">
              Od pierwszego spotkania do działającej strony. Od działającej
              strony do pierwszej rezerwacji bezpośredniej. Reszta to
              optymalizacja na podstawie danych — nie wiary.
            </p>

            <div className="relative mt-10 max-w-[460px] overflow-hidden rounded-r-[6px] bg-terracotta/[0.06] py-7 pl-7 pr-6">
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-[2px] bg-terracotta"
              />
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-terracotta">
                Twój wkład w procesie
              </div>
              <div className="mt-3 font-[family-name:var(--font-display)] text-[28px] font-bold leading-[1.1] tracking-[-0.03em] text-heading">
                ~3 godziny w 3 tygodniach.
              </div>
              <p className="mt-3 text-[13px] leading-[1.5] text-heading/55">
                Reszta spoczywa na nas. Bez tygodni czekania na feedback.
              </p>
            </div>

            <Link
              href="#cta"
              className="group mt-10 inline-flex h-[72px] w-[296px] items-center justify-between rounded-[14px] border border-white/[0.18] bg-gradient-to-b from-[#d9734d] to-[#bd5738] pl-[26px] pr-[15px] text-[16px] font-medium tracking-[-0.01em] text-cream shadow-[0_18px_36px_-8px_rgba(201,100,67,0.5),0_6px_14px_-4px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5"
            >
              Bezpłatna konsultacja
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1b1816] transition-transform group-hover:translate-x-0.5">
                <ArrowRight strokeWidth={2.25} className="h-[18px] w-[18px]" />
              </span>
            </Link>

            <p className="mt-5 text-[13px] text-heading/45">
              ↳ pierwsze 60 minut bez zobowiązań — diagnoza GRATIS
            </p>
          </div>

          {/* RIGHT — timeline */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -top-6 left-0 right-0 h-px bg-ink/10"
            />

            <div
              ref={timelineRef}
              className="relative pl-[88px] sm:pl-[110px] lg:pl-[124px]"
            >
              {/* Vertical baseline */}
              <span
                aria-hidden
                className="absolute left-[60px] top-2 bottom-2 w-px bg-ink/10 sm:left-[78px] lg:left-[88px]"
              />
              {/* Animated scroll progress line */}
              <motion.span
                aria-hidden
                style={{ scaleY: lineScaleY }}
                className="absolute left-[60px] top-2 bottom-2 w-px origin-top bg-terracotta shadow-[0_0_8px_rgba(201,100,67,0.55)] sm:left-[78px] lg:left-[88px]"
              />

              <ol className="flex flex-col gap-24 lg:gap-28">
                {KROKI.map((k, i) => {
                  // Threshold center for each step's dot — evenly spaced
                  const threshold = (i + 0.5) / KROKI.length;
                  return (
                    <li key={k.n} className="relative">
                      {/* Step number — sits left of the line */}
                      <span className="absolute -left-[88px] top-0 font-[family-name:var(--font-display)] text-[44px] font-light leading-none tracking-[-0.02em] text-heading/30 tabular-nums sm:-left-[110px] sm:text-[48px] lg:-left-[124px]">
                        {k.n}
                      </span>

                      {/* Dot anchored on the timeline (line is 60/78/88 px from li edge) */}
                      <span className="absolute -left-[28px] top-0 sm:-left-[32px] lg:-left-[36px]">
                        <StepDot
                          scrollYProgress={scrollYProgress}
                          threshold={threshold}
                        />
                      </span>

                      <div className="max-w-[560px]">
                        <div className="text-[13px] font-medium uppercase tracking-[0.16em] text-terracotta">
                          {k.phase}
                        </div>
                        <h3 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.625rem,2.6vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-heading">
                          {k.title}
                        </h3>
                        <span
                          aria-hidden
                          className="mt-5 block h-px w-9 bg-terracotta"
                        />
                        <p className="mt-5 text-[17px] leading-[1.55] text-heading/70">
                          {k.body}
                        </p>
                        <p className="mt-5 text-[15px] text-heading/80">
                          <span className="font-medium text-terracotta">
                            Twój wkład
                          </span>{" "}
                          — {k.twojWklad}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div
              aria-hidden
              className="absolute bottom-[-32px] left-0 right-0 h-px bg-ink/10"
            />
            <p className="mt-12 pl-[88px] text-[11px] font-medium uppercase tracking-[0.18em] text-heading/45 sm:pl-[110px] lg:pl-[124px]">
              ↳ Kolejny etap · Cennik
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
