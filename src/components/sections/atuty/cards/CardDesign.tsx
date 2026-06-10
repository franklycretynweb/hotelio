import { MoreHorizontal, Sparkles } from "lucide-react";
import { CardShell } from "./CardShell";

const SWATCHES = ["#1b1b1b", "#3b2a1d", "#a07f5a", "#d8c8a8", "#f5efe3"];

export function CardDesign({ active = false }: { active?: boolean }) {
  return (
    <CardShell
      width={641}
      height={674}
      padding={40}
      radius={30}
      border={2}
      iconBoxSize={60}
      icon={
        <Sparkles
          className="text-white/80"
          style={{ width: 28, height: 28 }}
          strokeWidth={1.6}
        />
      }
      number="01"
      rightSlot={
        <MoreHorizontal
          className="text-white/40"
          style={{ width: 28, height: 28 }}
          strokeWidth={1.6}
        />
      }
      active={active}
    >
      <h3
        className="mt-[24px] font-[family-name:var(--font-display)] font-medium text-white"
        style={{ fontSize: 28, lineHeight: "34px", letterSpacing: "-0.012em" }}
      >
        Wyróżniający i przejrzysty design strony
      </h3>
      <p
        className="mt-[8px] font-[family-name:var(--font-body)] text-white/60"
        style={{ fontSize: 21, lineHeight: "30px" }}
      >
        Spójna paleta, typografia i system komponentów — strona, która buduje
        markę Twojego hotelu od pierwszej sekundy.
      </p>
      <div className="mt-[24px]">
        <div
          className="font-[family-name:var(--font-body)] font-medium uppercase text-white/40"
          style={{ fontSize: 18, letterSpacing: "0.08em" }}
        >
          Paleta
        </div>
        <div className="mt-[12px] flex gap-[14px]">
          {SWATCHES.map((c) => (
            <div
              key={c}
              className="rounded-[14px] border border-white/[0.1]"
              style={{ width: 92, height: 92, background: c }}
            />
          ))}
        </div>
      </div>
      <div className="mt-[24px] border-t border-white/[0.06]" />
      <div className="mt-[18px]">
        <div
          className="font-[family-name:var(--font-body)] font-medium uppercase text-white/40"
          style={{ fontSize: 18, letterSpacing: "0.08em" }}
        >
          Typografia
        </div>
        <div
          className="mt-[8px] font-[family-name:var(--font-display)] font-bold text-white"
          style={{ fontSize: 44, lineHeight: "50px", letterSpacing: "-0.02em" }}
        >
          Aurelia Hotel
        </div>
        <p
          className="mt-[4px] font-[family-name:var(--font-body)] text-white/60"
          style={{ fontSize: 21, lineHeight: "30px" }}
        >
          Piękne butikowe pokoje, zaprojektowane z sercem.
        </p>
      </div>
    </CardShell>
  );
}
