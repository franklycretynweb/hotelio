import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TopNav } from "@/components/sections/TopNav";

const trustBadges = [
  "23 obiekty zrealizowane",
  "20 lat doświadczenia",
  "0 szablonów",
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
  return (
    <Section
      tone="dark"
      id="hero"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      <TopNav />

      <Container
        size="wide"
        className="grid flex-1 grid-cols-1 items-center gap-12 pt-28 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:pt-24 lg:pb-20"
      >
        {/* Left column: copy + CTAs + trust badges */}
        <div className="flex flex-col">
          <h1 className="whitespace-nowrap font-[family-name:var(--font-display)] font-extrabold leading-[0.95] tracking-[-0.025em] text-cream text-[clamp(2.25rem,5.4vw,5.5rem)]">
            Strony internetowe
            <br />
            Hoteli,
            <br />
            Pensjonatów,
            <br />
            Apartamentów.
          </h1>

          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-cream/65 sm:text-base">
            Projektujemy strony hotelowe które zwiększają udział rezerwacji
            bezpośrednich. Bez prowizji OTA, bez szablonów, bez kompromisów
            technicznych.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="#cta"
              className="group inline-flex h-14 items-center gap-3 rounded-md bg-terracotta pl-6 pr-3 text-[15px] font-medium text-cream transition-colors hover:bg-terracotta-warm"
            >
              Bezpłatna konsultacja
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cream/15 text-cream transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            <span className="text-cream/40">lub</span>

            <Link
              href="#atuty"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-cream/80 underline underline-offset-[6px] decoration-cream/30 hover:decoration-cream"
            >
              zobacz realizacje
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-cream/55">
            <span className="inline-flex items-center gap-2">
              <Stars />
              <span className="font-medium text-cream">4.9</span>
            </span>
            {trustBadges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-3">
                <span aria-hidden className="h-1 w-1 rounded-full bg-cream/30" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right column: device mockups. Absolute on lg so the iPhone overlaps the iMac like in Figma. */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[908/767] w-full">
            <Image
              src="/img/hero-imac.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-contain"
            />
            <div className="absolute right-[-4%] bottom-[-8%] aspect-[274/570] w-[26%]">
              <Image
                src="/img/hero-iphone.png"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 13vw, 23vw"
                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
