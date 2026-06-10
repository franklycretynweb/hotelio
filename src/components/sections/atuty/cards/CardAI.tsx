import { Bot, FileJson, Globe, Map, Sparkles } from "lucide-react";
import { CardShell } from "./CardShell";

const CHIPS = [
  { icon: <FileJson style={{ width: 20, height: 20 }} className="text-white/70" strokeWidth={1.7} />, label: "Strukturalne dane" },
  { icon: <Globe style={{ width: 20, height: 20 }} className="text-white/70" strokeWidth={1.7} />, label: "Open Graph" },
  { icon: <Bot style={{ width: 20, height: 20 }} className="text-white/70" strokeWidth={1.7} />, label: "Schema.org" },
  { icon: <Map style={{ width: 20, height: 20 }} className="text-white/70" strokeWidth={1.7} />, label: "Sitemap" },
];

export function CardAI({ active = false }: { active?: boolean }) {
  return (
    <CardShell
      width={887}
      height={949}
      padding={54}
      radius={42}
      border={3}
      iconBoxSize={82}
      icon={
        <Sparkles
          className="text-white/80"
          style={{ width: 38, height: 38 }}
          strokeWidth={1.6}
        />
      }
      number="06"
      rightSlot={
        <span
          className="flex items-center rounded-full font-[family-name:var(--font-body)] text-white/75"
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "10px 22px",
            fontSize: 22,
          }}
        >
          AI-gotowość
        </span>
      }
      active={active}
    >
      <h3
        className="mt-[34px] font-[family-name:var(--font-display)] font-medium text-white"
        style={{ fontSize: 36, lineHeight: "44px", letterSpacing: "-0.018em" }}
      >
        Strona zaprojektowana tak, aby AI polecało Twój hotel
      </h3>
      <p
        className="mt-[8px] font-[family-name:var(--font-body)] text-white/60"
        style={{ fontSize: 24, lineHeight: "34px" }}
      >
        Dane strukturalne, Open Graph i Schema.org — asystenci AI rozumieją
        Twoją ofertę i polecają ją gościom.
      </p>

      <div
        className="mt-[32px] rounded-[34px] border border-white/[0.05] bg-[#262626]"
        style={{ padding: 28 }}
      >
        <div className="flex items-center gap-4">
          <div
            className="flex items-center justify-center rounded-full"
            style={{ width: 44, height: 44, background: "rgba(255,255,255,0.15)" }}
          >
            <Sparkles style={{ width: 22, height: 22 }} className="text-white" strokeWidth={1.7} />
          </div>
          <span
            className="font-[family-name:var(--font-body)] text-white/45"
            style={{ fontSize: 22 }}
          >
            AI assistant
          </span>
        </div>
        <p
          className="mt-[16px] font-[family-name:var(--font-body)] text-white/85"
          style={{ fontSize: 24, lineHeight: "36px" }}
        >
          „Dla spokojnego butikowego Hotelu w Krakowie, polecam Ci{" "}
          <span
            className="inline-block rounded-[8px] px-[10px] py-[2px] text-white"
            style={{ background: "rgba(255,255,255,0.12)" }}
          >
            Aurelia Hotel
          </span>{" "}
          — mocne opinie, widok na rzekę, łatwy booking."
        </p>
      </div>

      <div className="mt-[28px] grid grid-cols-2 gap-x-[24px] gap-y-[18px]">
        {CHIPS.map((c) => (
          <div key={c.label} className="flex items-center gap-[14px]">
            <div
              className="flex items-center justify-center rounded-full"
              style={{ width: 36, height: 36, background: "rgba(255,255,255,0.1)" }}
            >
              {c.icon}
            </div>
            <span
              className="font-[family-name:var(--font-body)] text-white/65"
              style={{ fontSize: 22 }}
            >
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </CardShell>
  );
}
