import { Star, Zap } from "lucide-react";
import { CardShell } from "./CardShell";

const METRICS = [
  { value: "0.3s", label: "FCP" },
  { value: "20ms", label: "TBT" },
  { value: "0.01", label: "CLS" },
];

function Gauge() {
  const size = 200;
  const stroke = 18;
  const r = (size - stroke) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const arcLen = Math.PI * r;
  const filled = arcLen * 0.85;
  return (
    <svg width={size} height={size / 2 + 20} viewBox={`0 0 ${size} ${size / 2 + 20}`}>
      <path
        d={`M ${stroke / 2},${cy} A ${r},${r} 0 0 1 ${size - stroke / 2},${cy}`}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <path
        d={`M ${stroke / 2},${cy} A ${r},${r} 0 0 1 ${size - stroke / 2},${cy}`}
        fill="none"
        stroke="rgba(94,233,181,0.9)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${filled} ${arcLen}`}
      />
    </svg>
  );
}

export function CardWebVitals({ active = false }: { active?: boolean }) {
  return (
    <CardShell
      width={695}
      height={776}
      padding={43}
      radius={33}
      border={2}
      iconBoxSize={66}
      icon={
        <Zap
          className="text-white/80"
          style={{ width: 30, height: 30 }}
          strokeWidth={1.6}
        />
      }
      number="05"
      rightSlot={
        <div className="flex items-center gap-2">
          <Star
            className="text-white"
            style={{ width: 26, height: 26, fill: "currentColor" }}
            strokeWidth={1.6}
          />
          <span
            className="font-[family-name:var(--font-body)] text-white"
            style={{ fontSize: 24 }}
          >
            4.9
          </span>
        </div>
      }
      active={active}
    >
      <h3
        className="mt-[26px] font-[family-name:var(--font-display)] font-medium text-white"
        style={{ fontSize: 30, lineHeight: "38px", letterSpacing: "-0.014em" }}
      >
        Strona szybka, responsywna i dopasowana do Twojego Hotelu
      </h3>
      <p
        className="mt-[8px] font-[family-name:var(--font-body)] text-white/60"
        style={{ fontSize: 22, lineHeight: "32px" }}
      >
        Performance strony w zielonym zakresie, lekki kod i optymalizowane
        obrazy — strona ładuje się błyskawicznie na każdym łączu.
      </p>

      <div className="mt-[20px] flex flex-col items-center">
        <Gauge />
        <div
          className="font-[family-name:var(--font-display)] font-bold text-white"
          style={{ fontSize: 42, lineHeight: "48px", letterSpacing: "-0.02em", marginTop: -32 }}
        >
          0.4s
        </div>
        <div
          className="mt-[2px] font-[family-name:var(--font-body)] text-white/45"
          style={{ fontSize: 20 }}
        >
          LCP
        </div>
      </div>

      <div className="mt-[20px] border-t border-white/[0.06]" />
      <div className="mt-[18px] grid grid-cols-3 gap-2">
        {METRICS.map((m) => (
          <div key={m.label} className="text-center">
            <div
              className="font-[family-name:var(--font-display)] font-medium text-white"
              style={{ fontSize: 30, letterSpacing: "-0.01em" }}
            >
              {m.value}
            </div>
            <div
              className="mt-[2px] font-[family-name:var(--font-body)] text-white/45"
              style={{ fontSize: 20 }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </CardShell>
  );
}
