"use client";

import { useMemo, useState, useId } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronsRight, Info } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/cn";

const COMMISSION_RATE = 0.17;
const SHIFT_TO_DIRECT = 0.25;
const OTA_OPTIONS = [35, 50, 65, 80, 95];
const GAUGE_MAX_PLN = 250_000;

function formatPln(n: number) {
  return new Intl.NumberFormat("pl-PL", { maximumFractionDigits: 0 }).format(
    Math.round(n),
  );
}

function InfoDot({ label }: { label: string }) {
  return (
    <span
      className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-ink-2/30 text-ink-2/55"
      aria-label={label}
    >
      <Info aria-hidden className="h-2 w-2" strokeWidth={2.25} />
    </span>
  );
}

function PillSlider({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  display,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  display: string;
}) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <label
          htmlFor={id}
          className="text-[14px] font-medium text-ink-2/85"
        >
          {label}
        </label>
        <InfoDot label={`Więcej o: ${label}`} />
      </div>
      <div className="group relative h-[56px] w-full overflow-hidden rounded-[15px] bg-cream-3 shadow-[inset_0_1px_0_0_rgba(26,22,20,0.04),inset_0_-1px_0_0_rgba(255,255,255,0.5)]">
        <motion.div
          className="pointer-events-none absolute inset-y-0 left-0 rounded-[15px] bg-terracotta"
          initial={false}
          animate={{ width: `${Math.max(pct, 3)}%` }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
        />
        <motion.div
          className="pointer-events-none absolute top-3 h-8 w-[2px] rounded-[1px] bg-cream/95 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"
          initial={false}
          animate={{ left: `calc(${Math.max(pct, 3)}% - 2px)` }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
        />
        <span className="pointer-events-none absolute right-[22px] top-1/2 -translate-y-1/2 text-[15px] font-semibold tabular-nums text-ink-2/75">
          {display}
        </span>
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-grab appearance-none bg-transparent active:cursor-grabbing [&::-moz-range-thumb]:h-14 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-transparent [&::-webkit-slider-thumb]:h-14 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-transparent"
          aria-label={label}
          aria-valuetext={display}
        />
      </div>
    </div>
  );
}

function Segmented({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  options: number[];
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <span className="text-[14px] font-medium text-ink-2/85">{label}</span>
        <InfoDot label={`Więcej o: ${label}`} />
      </div>
      <div
        role="radiogroup"
        aria-label={label}
        className="relative grid h-[56px] w-full grid-cols-5 gap-0 rounded-[28px] bg-cream-3 p-[6px] shadow-[inset_0_1px_0_0_rgba(26,22,20,0.04),inset_0_-1px_0_0_rgba(255,255,255,0.5)]"
      >
        {options.map((opt) => {
          const active = opt === value;
          return (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(opt)}
              className={cn(
                "relative flex h-full items-center justify-center text-[15px] font-semibold tabular-nums transition-colors duration-200",
                active ? "text-cream" : "text-ink-2/55 hover:text-ink-2/80",
              )}
            >
              {active && (
                <motion.span
                  layoutId="ota-segmented-pill"
                  aria-hidden
                  className="absolute inset-0 -z-0 rounded-[15px] bg-terracotta"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{opt}%</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Gauge({ progress }: { progress: number }) {
  const ticks = Array.from({ length: 71 });
  const cx = 250;
  const cy = 240;
  const innerR = 188;
  const outerR = 226;
  const arcR = outerR + 4;
  const clamped = Math.max(0, Math.min(1, progress));
  return (
    <svg
      viewBox="0 0 500 250"
      className="block h-auto w-full"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden
    >
      <defs>
        <linearGradient id="gauge-arc-bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c96443" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#c96443" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#c96443" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="gauge-arc-fill" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#9b5233" />
          <stop offset="60%" stopColor="#d06125" />
          <stop offset="100%" stopColor="#c96443" />
        </linearGradient>
      </defs>

      {ticks.map((_, i) => {
        const angle = -180 + i * (180 / 70);
        const rad = (angle * Math.PI) / 180;
        const x1 = cx + innerR * Math.cos(rad);
        const y1 = cy + innerR * Math.sin(rad);
        const x2 = cx + outerR * Math.cos(rad);
        const y2 = cy + outerR * Math.sin(rad);
        const dist = Math.abs(i - 35) / 35;
        const opacity = 0.16 + dist * 0.5;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#c96443"
            strokeWidth={1.4}
            strokeLinecap="round"
            opacity={opacity}
          />
        );
      })}

      {/* base arc — full semicircle, dim */}
      <path
        d={`M ${cx - arcR} ${cy} A ${arcR} ${arcR} 0 0 1 ${cx + arcR} ${cy}`}
        stroke="url(#gauge-arc-bg)"
        strokeWidth={4}
        fill="none"
        strokeLinecap="round"
      />

      {/* progress arc — animated */}
      <motion.path
        d={`M ${cx - arcR} ${cy} A ${arcR} ${arcR} 0 0 1 ${cx + arcR} ${cy}`}
        stroke="url(#gauge-arc-fill)"
        strokeWidth={5}
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: clamped }}
        transition={{ duration: 1.2, ease: [0.32, 0.72, 0.24, 1] }}
        style={{ filter: "drop-shadow(0 0 10px rgba(208, 97, 37, 0.55))" }}
      />
    </svg>
  );
}

function ResultRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-cream-2/70">
        {label}
      </span>
      <span
        aria-hidden
        className="mt-1 flex-1 border-t border-dotted border-cream-2/20"
      />
      <span
        className={cn(
          "text-[14px] font-semibold tabular-nums",
          highlight ? "text-terracotta" : "text-cream-2/90",
        )}
      >
        {value}
      </span>
    </div>
  );
}

export function Kalkulator() {
  const [rooms, setRooms] = useState(30);
  const [avgRate, setAvgRate] = useState(350);
  const [otaPct, setOtaPct] = useState(65);
  const [occupancy, setOccupancy] = useState(60);

  const result = useMemo(() => {
    const totalNights = rooms * 365 * (occupancy / 100);
    const otaRevenue = totalNights * (otaPct / 100) * avgRate;
    const bookingCommission = otaRevenue * COMMISSION_RATE;
    const directRecovered = totalNights * SHIFT_TO_DIRECT;
    const savedCommission = directRecovered * avgRate * COMMISSION_RATE;
    return {
      bookingCommission,
      directRecovered,
      savedCommission,
    };
  }, [rooms, avgRate, otaPct, occupancy]);

  const gaugeProgress = Math.min(result.savedCommission / GAUGE_MAX_PLN, 1);

  return (
    <Section tone="cream" id="kalkulator" className="py-24 lg:py-32">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_minmax(0,556px)] lg:items-start lg:gap-20">
          {/* LEFT — header + inputs */}
          <div className="flex flex-col">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6.5vw,5rem)] font-bold leading-[0.89] tracking-[-0.03em] text-ink-muted">
              Ile możesz
              <br />
              zarobić więcej?
            </h2>

            <p className="mt-8 max-w-[520px] text-[18px] font-semibold leading-[1.45] text-ink-2/65">
              Wpisz parametry swojego hotelu. Policzymy ile rocznie zostawiasz
              na stole Bookingowi.
            </p>

            <div className="mt-10 flex flex-col gap-7">
              <PillSlider
                label="Liczba pokoi"
                value={rooms}
                onChange={setRooms}
                min={5}
                max={150}
                display={String(rooms)}
              />
              <PillSlider
                label="Średnia cena za noc"
                value={avgRate}
                onChange={setAvgRate}
                min={100}
                max={1500}
                step={10}
                display={`${formatPln(avgRate)} zł`}
              />
              <Segmented
                label="Procent rezerwacji przez OTA"
                value={otaPct}
                onChange={setOtaPct}
                options={OTA_OPTIONS}
              />
              <PillSlider
                label="Obłożenie roczne"
                value={occupancy}
                onChange={setOccupancy}
                min={20}
                max={95}
                display={`${occupancy}%`}
              />
            </div>

            <div className="mt-8 flex h-[46px] items-center gap-3 rounded-[12px] border border-terracotta/50 bg-[#f0e8de] px-5">
              <span
                aria-hidden
                className="h-[6px] w-[6px] flex-none rounded-full bg-terracotta"
              />
              <span className="text-[13px] font-medium text-ink-2/75">
                Cel: 25% rezerwacji OTA → kanał bezpośredni
              </span>
            </div>

            <p className="mt-4 text-[11px] tracking-[0.025em] text-ink-2/40">
              Zakładamy przesunięcie 25% rez. OTA na bezpośrednie. Prowizja
              OTA: 15–17%.
            </p>
          </div>

          {/* RIGHT — output */}
          <div className="flex flex-col gap-5">
            {/* Output card */}
            <div className="relative overflow-hidden rounded-[24px] bg-[#141110] pb-9 pt-0 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.5),0_24px_60px_-20px_rgba(201,100,67,0.22)]">
              <div className="absolute inset-x-6 top-0 h-px bg-terracotta/50" />

              {/* radial glow under gauge — full-width, no hard edge */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 left-1/2 h-[460px] w-[760px] -translate-x-1/2"
                style={{
                  background:
                    "radial-gradient(ellipse 56% 60% at 50% 62%, rgba(201,100,67,0.42), rgba(201,100,67,0.12) 45%, rgba(20,17,16,0) 72%)",
                }}
              />

              {/* Gauge */}
              <div className="relative px-6 pt-1">
                <Gauge progress={gaugeProgress} />
              </div>

              {/* Headline */}
              <div className="relative -mt-2 px-10 text-center">
                <div className="text-[12px] font-medium uppercase tracking-[0.22em] text-terracotta/90">
                  Roczny zysk
                </div>
                <div className="mt-3 font-[family-name:var(--font-display)] text-[clamp(3rem,7vw,5.25rem)] font-bold leading-none tracking-[-0.03em] text-terracotta tabular-nums">
                  {formatPln(result.savedCommission)} zł
                </div>
                <div className="mt-3 text-[14px] text-cream-2/55">
                  zarobisz więcej rocznie
                </div>
              </div>

              {/* Rows */}
              <div className="relative mt-7 flex flex-col gap-4 px-10">
                <ResultRow
                  label="Płacisz Bookingowi"
                  value={`${formatPln(result.bookingCommission)} zł`}
                />
                <ResultRow
                  label="Nocy bezpośrednich"
                  value={formatPln(result.directRecovered)}
                />
                <ResultRow
                  label="Zaoszczędzona prowizja"
                  value={`${formatPln(result.savedCommission)} zł`}
                  highlight
                />
              </div>
            </div>

            {/* Two stat tiles + arrow */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <div className="flex h-[110px] flex-col justify-between rounded-[20px] border border-white/[0.06] bg-[#211c1a] p-5 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.35)]">
                <span className="font-[family-name:var(--font-display)] text-[36px] font-bold leading-none tracking-[-0.03em] tabular-nums text-cream-2">
                  {formatPln(result.directRecovered)}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-cream-2/55">
                  Nocy odzyskanych
                </span>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-[12px] border-[1.5px] border-terracotta/60 text-terracotta">
                <ChevronsRight strokeWidth={2.5} className="h-6 w-6" />
              </div>

              <div className="flex h-[110px] flex-col justify-between rounded-[20px] border border-white/[0.06] bg-[#211c1a] p-5 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.35)]">
                <span className="font-[family-name:var(--font-display)] text-[36px] font-bold leading-none tracking-[-0.03em] tabular-nums text-terracotta">
                  ×{Math.round(COMMISSION_RATE * 100)}%
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-cream-2/55">
                  Prowizja OTA
                </span>
              </div>
            </div>

            <p className="text-center text-[13px] text-ink-2/50">
              Booking nadal działa. Po prostu Twoja strona też.
            </p>

            {/* CTA */}
            <a
              href="#cta"
              className="group flex h-[72px] items-center justify-center gap-3 rounded-[20px] bg-terracotta text-[17px] font-semibold text-cream shadow-[0_16px_32px_-8px_rgba(201,100,67,0.35)] transition-colors hover:bg-terracotta-warm"
            >
              Chcę odzyskać te pieniądze
              <ArrowRight
                aria-hidden
                className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2.25}
              />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
