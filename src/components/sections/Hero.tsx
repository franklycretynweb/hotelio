"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TopNav } from "@/components/sections/TopNav";

const trust = [
  { label: "23 obiekty zrealizowane" },
  { label: "20 lat doświadczenia" },
  { label: "0 szablonów", accent: true },
];

function Stars() {
  return (
    <span aria-label="4.9 z 5 gwiazdek" className="inline-flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-terracotta"
          aria-hidden
        >
          <path d="M12 2.5l2.92 5.92 6.54.95-4.73 4.61 1.12 6.51L12 17.77l-5.85 3.07 1.12-6.51L2.54 9.72l6.54-.95L12 2.5z" />
        </svg>
      ))}
    </span>
  );
}

export function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);
  // Drive a gentle zoom from scroll progress through the hero: 0 when the
  // hero top sits at the viewport top, 1 once the hero has scrolled fully
  // past. The image scales up slightly as the user descends toward the
  // steps — a subtle "walking in" feel, not a hard parallax.
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <Section tone="cream" id="hero" className="relative w-full overflow-hidden">
      {/* The concierge shot is authored at 3584:3153 — marble columns frame the
          edges, a tall cream wall fills the top (where the copy sits) and the
          terracotta steps + palms anchor the bottom. We honor that exact ratio
          so the whole image shows, uncropped; the copy overlays the upper wall. */}
      <div
        ref={frameRef}
        className="relative w-full aspect-[3584/3153] overflow-hidden"
      >
        <motion.div
          aria-hidden
          style={{ scale }}
          className="absolute inset-0 z-0 origin-center will-change-transform"
        >
          <Image
            src="/img/concierge-2.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <TopNav />

        <Container
          size="wide"
          className="relative z-10 flex flex-col items-center pt-[clamp(7rem,13vw,12rem)] text-center"
        >
        <h1 className="font-[family-name:var(--font-display)] font-normal leading-[1.04] tracking-[-0.02em] text-heading text-[clamp(2.5rem,6vw,5.25rem)]">
          Strony internetowe dla
          <br />
          Hoteli, Pensjonatów,
          <br />
          Apartamentów
        </h1>

        <p className="mt-7 max-w-xl text-[15px] font-semibold leading-[1.55] text-heading/75 sm:text-base">
          Projektujemy strony hotelowe które zwiększają udział rezerwacji
          bezpośrednich. Bez prowizji OTA, bez szablonów, bez kompromisów
          technicznych.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <Link
            href="#cta"
            className="group inline-flex h-14 items-center gap-3 rounded-md bg-terracotta pl-6 pr-3 text-[15px] font-medium text-cream transition-colors hover:bg-terracotta-warm"
          >
            Bezpłatna konsultacja
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>

          <span className="text-heading/40">lub</span>

          <Link
            href="#atuty"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-heading/80 underline underline-offset-[6px] decoration-heading/30 hover:decoration-heading"
          >
            zobacz realizacje
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] text-heading/60">
          <span className="inline-flex items-center gap-2">
            <Stars />
            <span className="font-semibold text-heading">4.9</span>
          </span>
          {trust.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-3">
              <span aria-hidden className="h-1 w-1 rounded-full bg-heading/30" />
              <span className={item.accent ? "text-terracotta" : undefined}>
                {item.label}
              </span>
            </span>
          ))}
        </div>
        </Container>
      </div>
    </Section>
  );
}
