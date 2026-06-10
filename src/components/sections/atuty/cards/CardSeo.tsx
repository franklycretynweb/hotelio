import { Search } from "lucide-react";
import { CardShell } from "./CardShell";

const SCORES = [
  { value: "98", label: "SEO" },
  { value: "96", label: "Perf" },
  { value: "100", label: "A11y" },
];

export function CardSeo({ active = false }: { active?: boolean }) {
  return (
    <CardShell
      width={706}
      height={845}
      padding={44}
      radius={33}
      border={2}
      iconBoxSize={66}
      icon={
        <Search
          className="text-white/80"
          style={{ width: 30, height: 30 }}
          strokeWidth={1.6}
        />
      }
      number="03"
      rightSlot={
        <span
          className="flex items-center rounded-full font-[family-name:var(--font-body)]"
          style={{
            background: "rgba(0,212,146,0.15)",
            color: "rgba(94,233,181,0.95)",
            padding: "8px 18px",
            fontSize: 19,
          }}
        >
          #1 ranked
        </span>
      }
      active={active}
    >
      <h3
        className="mt-[26px] font-[family-name:var(--font-display)] font-medium text-white"
        style={{ fontSize: 30, lineHeight: "38px", letterSpacing: "-0.014em" }}
      >
        SEO — Twoja strona widoczna w internecie
      </h3>
      <p
        className="mt-[8px] font-[family-name:var(--font-body)] text-white/60"
        style={{ fontSize: 22, lineHeight: "32px" }}
      >
        Techniczne SEO, szybkie ładowanie i czysta struktura — wyższe pozycje w
        Google na zapytania o Twój hotel.
      </p>

      <div
        className="mt-[24px] flex items-center gap-4 rounded-[26px] border border-white/[0.05] bg-[#262626]"
        style={{ padding: "18px 24px" }}
      >
        <Search style={{ width: 26, height: 26 }} className="text-white/55" strokeWidth={1.6} />
        <span
          className="font-[family-name:var(--font-body)] text-white/80"
          style={{ fontSize: 22 }}
        >
          najlepszy hotel Kraków
        </span>
      </div>

      <div className="mt-[24px]">
        <div
          className="font-[family-name:var(--font-body)]"
          style={{ fontSize: 20, color: "rgba(94,233,181,0.9)" }}
        >
          aurelia-hotel.pl
        </div>
        <div
          className="mt-[2px] font-[family-name:var(--font-display)] text-white/95"
          style={{ fontSize: 24, lineHeight: "32px" }}
        >
          Aurelia Hotel — Butikowe pokoje w Krakowie
        </div>
        <div
          className="mt-[4px] font-[family-name:var(--font-body)] text-white/45"
          style={{ fontSize: 20, lineHeight: "28px" }}
        >
          Najwyżej oceniany Hotel na starym mieście…
        </div>

        <div className="mt-[18px] opacity-60">
          <div
            className="font-[family-name:var(--font-body)]"
            style={{ fontSize: 20, color: "rgba(94,233,181,0.55)" }}
          >
            konkurencja.pl
          </div>
          <div
            className="mt-[2px] font-[family-name:var(--font-display)] text-white/60"
            style={{ fontSize: 22, lineHeight: "30px" }}
          >
            Hotel konkurencji
          </div>
        </div>
      </div>

      <div className="mt-[24px] border-t border-white/[0.06]" />
      <div className="mt-[18px] grid grid-cols-3 gap-2">
        {SCORES.map((s) => (
          <div key={s.label} className="text-center">
            <div
              className="font-[family-name:var(--font-display)] font-medium text-white"
              style={{ fontSize: 34, letterSpacing: "-0.014em" }}
            >
              {s.value}
            </div>
            <div
              className="mt-[2px] font-[family-name:var(--font-body)] text-white/45"
              style={{ fontSize: 20 }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </CardShell>
  );
}
