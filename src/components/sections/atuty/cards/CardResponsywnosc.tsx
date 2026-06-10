import { Monitor, Smartphone, Tablet } from "lucide-react";
import { CardShell } from "./CardShell";

function DesktopMockup() {
  return (
    <div
      className="rounded-[34px] border border-white/[0.05] bg-[#262626]"
      style={{ width: 446, height: 296, padding: 22 }}
    >
      <div
        className="rounded-full"
        style={{ width: 200, height: 18, background: "rgba(255,255,255,0.15)" }}
      />
      <div className="mt-[14px] grid grid-cols-2 gap-[14px]">
        <div
          className="rounded-[10px]"
          style={{ height: 118, background: "rgba(255,255,255,0.1)" }}
        />
        <div
          className="rounded-[10px]"
          style={{ height: 118, background: "rgba(255,255,255,0.1)" }}
        />
      </div>
      <div
        className="mt-[14px] rounded-full"
        style={{ height: 14, background: "rgba(255,255,255,0.08)" }}
      />
    </div>
  );
}

function TabletMockup() {
  return (
    <div
      className="rounded-[34px] border border-white/[0.05] bg-[#262626]"
      style={{ width: 174, height: 234, padding: 17 }}
    >
      <div
        className="rounded-full"
        style={{ width: 92, height: 14, background: "rgba(255,255,255,0.15)" }}
      />
      <div
        className="mt-[10px] rounded-[10px]"
        style={{ height: 98, background: "rgba(255,255,255,0.1)" }}
      />
      <div
        className="mt-[10px] rounded-full"
        style={{ height: 10, background: "rgba(255,255,255,0.08)" }}
      />
    </div>
  );
}

function PhoneMockup() {
  return (
    <div
      className="rounded-[34px] border border-white/[0.05] bg-[#262626]"
      style={{ width: 100, height: 186, padding: 12 }}
    >
      <div
        className="rounded-full"
        style={{ width: 60, height: 10, background: "rgba(255,255,255,0.15)" }}
      />
      <div
        className="mt-[10px] rounded-[10px]"
        style={{ height: 80, background: "rgba(255,255,255,0.1)" }}
      />
      <div
        className="mt-[10px] rounded-full"
        style={{ height: 6, background: "rgba(255,255,255,0.08)" }}
      />
    </div>
  );
}

export function CardResponsywnosc({ active = false }: { active?: boolean }) {
  return (
    <CardShell
      width={948}
      height={907}
      padding={54}
      radius={42}
      border={3}
      iconBoxSize={84}
      icon={
        <Monitor
          className="text-white/80"
          style={{ width: 38, height: 38 }}
          strokeWidth={1.6}
        />
      }
      number="02"
      rightSlot={
        <div className="flex items-start gap-3">
          <Monitor className="text-white/70" style={{ width: 32, height: 32 }} strokeWidth={1.6} />
          <Tablet className="text-white/70" style={{ width: 32, height: 32 }} strokeWidth={1.6} />
          <Smartphone className="text-white/70" style={{ width: 32, height: 32 }} strokeWidth={1.6} />
        </div>
      }
      active={active}
    >
      <h3
        className="mt-[34px] font-[family-name:var(--font-display)] font-medium text-white"
        style={{ fontSize: 36, lineHeight: "44px", letterSpacing: "-0.018em" }}
      >
        Pełna zgodność z urządzeniami Twoich klientów
      </h3>
      <p
        className="mt-[8px] font-[family-name:var(--font-body)] text-white/60"
        style={{ fontSize: 25, lineHeight: "36px" }}
      >
        Responsywne layouty dopracowane do desktopu, tabletu i telefonu — Twój
        gość rezerwuje wygodnie, gdziekolwiek jest.
      </p>

      <div className="mt-[32px] flex items-end justify-center gap-[28px]">
        <DesktopMockup />
        <TabletMockup />
        <PhoneMockup />
      </div>
    </CardShell>
  );
}
