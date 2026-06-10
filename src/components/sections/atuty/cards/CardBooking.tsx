import { ArrowRight, CalendarCheck } from "lucide-react";
import { CardShell } from "./CardShell";

const FUNNEL = [
  { label: "Odwiedzający", value: "4820", fill: 1.0 },
  { label: "Pokoi obejrzanych", value: "2410", fill: 0.62 },
  { label: "Wybranych dat", value: "1280", fill: 0.38 },
  { label: "Zabookowanych", value: "612", fill: 0.18 },
];

export function CardBooking({ active = false }: { active?: boolean }) {
  return (
    <CardShell
      width={867}
      height={980}
      padding={52}
      radius={40}
      border={2}
      iconBoxSize={80}
      icon={
        <CalendarCheck
          className="text-white/80"
          style={{ width: 36, height: 36 }}
          strokeWidth={1.6}
        />
      }
      number="07"
      rightSlot={
        <span
          className="font-[family-name:var(--font-body)]"
          style={{ fontSize: 24, color: "rgba(94,233,181,0.95)" }}
        >
          ↑ +24% konw.
        </span>
      }
      active={active}
    >
      <h3
        className="mt-[32px] font-[family-name:var(--font-display)] font-medium text-white"
        style={{ fontSize: 34, lineHeight: "42px", letterSpacing: "-0.018em" }}
      >
        Strona, która prowadzi użytkownika do rezerwacji
      </h3>
      <p
        className="mt-[8px] font-[family-name:var(--font-body)] text-white/60"
        style={{ fontSize: 23, lineHeight: "34px" }}
      >
        Przemyślany lejek konwersji: jasne CTA, szybki wybór terminu i krótka
        ścieżka do potwierdzenia rezerwacji.
      </p>

      <div className="mt-[28px] flex flex-col gap-[20px]">
        {FUNNEL.map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between">
              <span
                className="font-[family-name:var(--font-body)] text-white/60"
                style={{ fontSize: 22 }}
              >
                {row.label}
              </span>
              <span
                className="font-[family-name:var(--font-display)] text-white"
                style={{ fontSize: 26 }}
              >
                {row.value}
              </span>
            </div>
            <div
              className="mt-[8px] overflow-hidden rounded-full"
              style={{ height: 12, background: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${row.fill * 100}%`,
                  background: "rgba(255,255,255,0.85)",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-[32px] flex w-full items-center justify-center gap-3 rounded-[22px] bg-white font-[family-name:var(--font-body)] font-medium text-black"
        style={{ height: 70, fontSize: 24 }}
      >
        Zabookuj
        <ArrowRight style={{ width: 24, height: 24 }} strokeWidth={2} />
      </button>
    </CardShell>
  );
}
