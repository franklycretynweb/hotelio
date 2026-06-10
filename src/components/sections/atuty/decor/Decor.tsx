import {
  BarChart3,
  Calendar,
  FileText,
  Image as ImageIcon,
  LineChart,
  Lock,
  Mail,
  Star,
  TrendingUp,
  User,
} from "lucide-react";
import type { ReactNode } from "react";

/**
 * Decor cards — atmospheric placeholders surrounding the 7 named main cards.
 * They never react to clicks; the canvas dims them via the parent wrapper.
 * Sizes / positions come from Figma metadata under frame 205:8566.
 */

function Frame({
  width,
  height,
  padding = 24,
  radius = 24,
  children,
}: {
  width: number;
  height: number;
  padding?: number;
  radius?: number;
  children: ReactNode;
}) {
  return (
    <div
      style={{ width, height, padding, borderRadius: radius }}
      className="relative flex flex-col border-2 border-white/[0.06] bg-[#1c1c1c] shadow-[0_24px_70px_0_rgba(0,0,0,0.45)]"
    >
      {children}
    </div>
  );
}

export function DecorRating() {
  return (
    <Frame width={703} height={164} padding={36} radius={26}>
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center gap-3">
          {[0, 1, 2, 3].map((i) => (
            <Star
              key={i}
              style={{ width: 44, height: 44, fill: "#f5cb5c", color: "#f5cb5c" }}
              strokeWidth={1.4}
            />
          ))}
          <Star
            style={{ width: 44, height: 44, fill: "rgba(245,203,92,0.4)", color: "#f5cb5c" }}
            strokeWidth={1.4}
          />
        </div>
        <div
          className="font-[family-name:var(--font-display)] font-bold text-white"
          style={{ fontSize: 48, letterSpacing: "-0.02em" }}
        >
          4.9
        </div>
      </div>
    </Frame>
  );
}

export function DecorLogin() {
  return (
    <Frame width={695} height={454} padding={40} radius={30}>
      <div
        className="font-[family-name:var(--font-display)] font-bold text-white"
        style={{ fontSize: 36, letterSpacing: "-0.018em" }}
      >
        Dzień dobry
      </div>
      <div
        className="mt-[6px] font-[family-name:var(--font-body)] text-white/55"
        style={{ fontSize: 18 }}
      >
        Zaloguj się do panelu hotelu.
      </div>
      <div className="mt-[28px] flex flex-col gap-[14px]">
        <div className="flex items-center gap-3 rounded-[18px] border border-white/[0.05] bg-[#262626]" style={{ padding: "16px 20px" }}>
          <Mail style={{ width: 22, height: 22 }} className="text-white/45" strokeWidth={1.6} />
          <span className="font-[family-name:var(--font-body)] text-white/85" style={{ fontSize: 19 }}>
            jan@aurelia-hotel.pl
          </span>
        </div>
        <div className="flex items-center gap-3 rounded-[18px] border border-white/[0.05] bg-[#262626]" style={{ padding: "16px 20px" }}>
          <Lock style={{ width: 22, height: 22 }} className="text-white/45" strokeWidth={1.6} />
          <span className="font-[family-name:var(--font-body)] tracking-[0.3em] text-white/85" style={{ fontSize: 19 }}>
            ••••••••
          </span>
        </div>
      </div>
      <button
        type="button"
        className="mt-[24px] w-full rounded-[18px] bg-white font-[family-name:var(--font-body)] font-medium text-black"
        style={{ height: 58, fontSize: 20 }}
      >
        Zaloguj się
      </button>
    </Frame>
  );
}

export function DecorFiles() {
  const files = [
    { name: "Zasoby brandu", size: "12 plików" },
    { name: "Spec_v2.pdf", size: "2.4 MB" },
    { name: "Hero-img.png", size: "8.1 MB" },
    { name: "Tokeny.md", size: "12 KB" },
    { name: "Foto-galeria/", size: "48 plików" },
    { name: "Logo-pakiet.zip", size: "3.2 MB" },
  ];
  return (
    <Frame width={751} height={751} padding={42} radius={32}>
      <div
        className="font-[family-name:var(--font-display)] font-bold text-white"
        style={{ fontSize: 30, letterSpacing: "-0.014em" }}
      >
        Ostatnie pliki
      </div>
      <div className="mt-[26px] flex flex-1 flex-col gap-[14px]">
        {files.map((f) => (
          <div key={f.name} className="flex items-center justify-between rounded-[18px] border border-white/[0.05] bg-[#262626]" style={{ padding: "16px 22px" }}>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-[12px] bg-white/[0.08]" style={{ width: 44, height: 44 }}>
                <FileText style={{ width: 22, height: 22 }} className="text-white/70" strokeWidth={1.6} />
              </div>
              <span className="font-[family-name:var(--font-body)] text-white/85" style={{ fontSize: 20 }}>
                {f.name}
              </span>
            </div>
            <span className="font-[family-name:var(--font-body)] text-white/40" style={{ fontSize: 16 }}>
              {f.size}
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function DecorCalendar() {
  const days = ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"];
  const dates = Array.from({ length: 35 }, (_, i) => i - 0); // Jun 2026 starts Mon (Pn) on day 1
  const today = 9;
  return (
    <Frame width={710} height={682} padding={38} radius={32}>
      <div className="flex items-baseline justify-between">
        <div
          className="font-[family-name:var(--font-display)] font-bold text-white"
          style={{ fontSize: 30, letterSpacing: "-0.014em" }}
        >
          Czerwiec 2026
        </div>
        <div className="font-[family-name:var(--font-body)] text-white/40" style={{ fontSize: 18 }}>
          ‹ ›
        </div>
      </div>
      <div className="mt-[22px] grid grid-cols-7 gap-y-[10px]">
        {days.map((d) => (
          <div
            key={d}
            className="text-center font-[family-name:var(--font-body)] text-white/40"
            style={{ fontSize: 16, letterSpacing: "0.08em" }}
          >
            {d}
          </div>
        ))}
        {dates.map((n) => {
          const day = n + 1;
          const visible = day > 0 && day <= 30;
          const isToday = day === today;
          return (
            <div
              key={n}
              className="flex h-[42px] items-center justify-center font-[family-name:var(--font-body)]"
              style={{
                fontSize: 17,
                color: visible ? (isToday ? "#1c1c1c" : "rgba(255,255,255,0.78)") : "rgba(255,255,255,0.15)",
                background: isToday ? "#fff" : "transparent",
                borderRadius: 12,
              }}
            >
              {visible ? day : ""}
            </div>
          );
        })}
      </div>
    </Frame>
  );
}

export function DecorDashboard() {
  const bars = [22, 38, 28, 56, 44, 70, 62];
  return (
    <Frame width={639} height={386} padding={32} radius={28}>
      <div className="flex items-baseline justify-between">
        <div>
          <div
            className="font-[family-name:var(--font-display)] font-bold text-white"
            style={{ fontSize: 24, letterSpacing: "-0.012em" }}
          >
            Tygodniowa aktywność
          </div>
          <div className="mt-[2px] font-[family-name:var(--font-body)] text-white/45" style={{ fontSize: 16 }}>
            Ostatnie 7 dni
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp style={{ width: 20, height: 20 }} className="text-emerald-400" strokeWidth={2} />
          <span className="font-[family-name:var(--font-body)] text-emerald-400" style={{ fontSize: 18 }}>
            +18.2%
          </span>
        </div>
      </div>
      <div className="mt-[12px] flex items-baseline gap-3">
        <div
          className="font-[family-name:var(--font-display)] font-bold text-white"
          style={{ fontSize: 40, letterSpacing: "-0.02em" }}
        >
          12 480
        </div>
        <span className="font-[family-name:var(--font-body)] text-white/45" style={{ fontSize: 17 }}>
          wszystkich wejść
        </span>
      </div>
      <div className="mt-[20px] flex flex-1 items-end gap-[14px]">
        {bars.map((b, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-[8px]"
            style={{
              height: `${b}%`,
              background: i === 6 ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.18)",
            }}
          />
        ))}
      </div>
    </Frame>
  );
}

export function DecorProfile() {
  return (
    <Frame width={703} height={196} padding={28} radius={26}>
      <div className="flex h-full items-center gap-5">
        <div
          className="flex items-center justify-center rounded-full bg-[#3b2a1d]"
          style={{ width: 88, height: 88 }}
        >
          <User style={{ width: 40, height: 40 }} className="text-[#d8c8a8]" strokeWidth={1.6} />
        </div>
        <div className="flex-1">
          <div
            className="font-[family-name:var(--font-display)] font-bold text-white"
            style={{ fontSize: 26, letterSpacing: "-0.012em" }}
          >
            Jan Kowalski
          </div>
          <div className="mt-[2px] font-[family-name:var(--font-body)] text-white/50" style={{ fontSize: 16 }}>
            Menedżer hotelu · Warszawa
          </div>
        </div>
        <div className="flex gap-7">
          {[
            { v: "248", l: "obiektów" },
            { v: "12.4k", l: "wejść" },
            { v: "892", l: "rezerw." },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: 22 }}>
                {s.v}
              </div>
              <div className="font-[family-name:var(--font-body)] text-white/40" style={{ fontSize: 13 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function DecorProfileDetail() {
  return (
    <Frame width={666} height={508} padding={36} radius={30}>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center rounded-full bg-[#3b2a1d]" style={{ width: 76, height: 76 }}>
          <User style={{ width: 36, height: 36 }} className="text-[#d8c8a8]" strokeWidth={1.6} />
        </div>
        <div className="flex-1">
          <div
            className="font-[family-name:var(--font-display)] font-bold text-white"
            style={{ fontSize: 26, letterSpacing: "-0.012em" }}
          >
            Anna Nowak
          </div>
          <div className="mt-[2px] font-[family-name:var(--font-body)] text-white/50" style={{ fontSize: 17 }}>
            Aurelia Hotel · Kraków
          </div>
        </div>
      </div>
      <div className="mt-[24px] flex flex-col gap-[14px]">
        {[
          { l: "Pobyt", v: "12–15 czerwca 2026" },
          { l: "Pokój", v: "Deluxe z widokiem na rzekę" },
          { l: "Goście", v: "2 dorośli, 1 dziecko" },
          { l: "Cena", v: "1 840 zł / 3 noce" },
        ].map((row) => (
          <div key={row.l} className="flex items-baseline justify-between border-b border-white/[0.05] pb-[10px]">
            <span className="font-[family-name:var(--font-body)] text-white/45" style={{ fontSize: 16 }}>
              {row.l}
            </span>
            <span className="font-[family-name:var(--font-body)] text-white/85" style={{ fontSize: 19 }}>
              {row.v}
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function DecorAnalytics() {
  const points = [12, 18, 16, 26, 22, 32, 38, 42, 48, 56, 62, 70];
  return (
    <Frame width={707} height={711} padding={36} radius={32}>
      <div className="flex items-baseline justify-between">
        <div>
          <div
            className="font-[family-name:var(--font-display)] font-bold text-white"
            style={{ fontSize: 28, letterSpacing: "-0.012em" }}
          >
            Konwersje · 30 dni
          </div>
          <div className="mt-[4px] font-[family-name:var(--font-body)] text-white/45" style={{ fontSize: 17 }}>
            Rezerwacje przez stronę vs OTA
          </div>
        </div>
        <LineChart style={{ width: 28, height: 28 }} className="text-white/60" strokeWidth={1.6} />
      </div>
      <div className="mt-[20px] flex items-baseline gap-3">
        <div
          className="font-[family-name:var(--font-display)] font-bold text-white"
          style={{ fontSize: 42, letterSpacing: "-0.02em" }}
        >
          612
        </div>
        <span className="font-[family-name:var(--font-body)] text-emerald-400" style={{ fontSize: 18 }}>
          ↑ +24%
        </span>
      </div>
      <div className="relative mt-[28px] h-[260px]">
        <svg viewBox="0 0 600 260" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="fillGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <polyline
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points
              .map((p, i) => `${(i / (points.length - 1)) * 600},${260 - (p / 80) * 240}`)
              .join(" ")}
          />
          <polygon
            fill="url(#fillGrad)"
            points={[
              ...points.map((p, i) => `${(i / (points.length - 1)) * 600},${260 - (p / 80) * 240}`),
              "600,260",
              "0,260",
            ].join(" ")}
          />
        </svg>
      </div>
      <div className="mt-[18px] flex items-center justify-between">
        <span className="font-[family-name:var(--font-body)] text-white/40" style={{ fontSize: 15 }}>
          12 maj
        </span>
        <span className="font-[family-name:var(--font-body)] text-white/40" style={{ fontSize: 15 }}>
          dziś
        </span>
      </div>
    </Frame>
  );
}

export function DecorGauge() {
  const size = 180;
  const stroke = 16;
  const r = (size - stroke) / 2;
  const cy = size / 2;
  const arcLen = Math.PI * r;
  const filled = arcLen * 0.7;
  return (
    <Frame width={424} height={356} padding={32} radius={28}>
      <div className="flex flex-1 flex-col items-center justify-center">
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
            stroke="rgba(94,233,181,0.85)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${filled} ${arcLen}`}
          />
        </svg>
        <div
          className="font-[family-name:var(--font-display)] font-bold text-white"
          style={{ fontSize: 32, letterSpacing: "-0.018em", marginTop: -28 }}
        >
          0.5s
        </div>
        <div className="mt-[6px] font-[family-name:var(--font-body)] text-white/40" style={{ fontSize: 16 }}>
          Czas ładowania
        </div>
      </div>
    </Frame>
  );
}

export function DecorMedia() {
  return (
    <Frame width={391} height={356} padding={24} radius={28}>
      <div
        className="flex flex-1 items-center justify-center rounded-[18px]"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <ImageIcon style={{ width: 48, height: 48 }} className="text-white/35" strokeWidth={1.4} />
      </div>
      <div
        className="mt-[14px] rounded-full"
        style={{ height: 14, background: "rgba(255,255,255,0.08)" }}
      />
      <div
        className="mt-[8px] rounded-full"
        style={{ height: 10, width: "60%", background: "rgba(255,255,255,0.06)" }}
      />
    </Frame>
  );
}

export function DecorTwoTile() {
  return (
    <Frame width={698} height={418} padding={32} radius={32}>
      <div className="flex flex-1 gap-[20px]">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="flex flex-1 items-center justify-center rounded-[18px]"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <ImageIcon style={{ width: 56, height: 56 }} className="text-white/35" strokeWidth={1.4} />
          </div>
        ))}
      </div>
      <div className="mt-[18px] rounded-full" style={{ height: 14, background: "rgba(255,255,255,0.08)" }} />
      <div className="mt-[8px] rounded-full" style={{ height: 10, width: "55%", background: "rgba(255,255,255,0.06)" }} />
    </Frame>
  );
}

export function DecorUrl() {
  return (
    <Frame width={724} height={136} padding={28} radius={26}>
      <div className="flex h-full items-center gap-5">
        <div
          className="flex items-center justify-center rounded-full bg-white/[0.08]"
          style={{ width: 58, height: 58 }}
        >
          <BarChart3 style={{ width: 26, height: 26 }} className="text-white/70" strokeWidth={1.6} />
        </div>
        <span
          className="font-[family-name:var(--font-display)] font-medium text-white/90"
          style={{ fontSize: 32, letterSpacing: "-0.014em" }}
        >
          https://www.aurelia-hotel.pl/
        </span>
      </div>
    </Frame>
  );
}

export function DecorTextCard() {
  return (
    <Frame width={660} height={338} padding={36} radius={30}>
      <div className="flex items-center gap-3">
        <Calendar style={{ width: 22, height: 22 }} className="text-white/55" strokeWidth={1.6} />
        <span className="font-[family-name:var(--font-body)] text-white/45" style={{ fontSize: 16 }}>
          12 czerwca 2026
        </span>
      </div>
      <div
        className="mt-[16px] font-[family-name:var(--font-display)] font-bold text-white"
        style={{ fontSize: 26, lineHeight: "32px", letterSpacing: "-0.014em" }}
      >
        Jak strona zaprojektowana z myślą o gościu zwiększa rezerwacje bezpośrednie.
      </div>
      <p
        className="mt-[10px] font-[family-name:var(--font-body)] text-white/55"
        style={{ fontSize: 16, lineHeight: "24px" }}
      >
        Krótki przewodnik po tym, jak właściciel butikowego hotelu może uniknąć prowizji OTA i odzyskać kontrolę nad gościem od pierwszego kliknięcia.
      </p>
    </Frame>
  );
}

export function DecorProgress() {
  return (
    <Frame width={762} height={215} padding={32} radius={28}>
      <div className="flex items-baseline justify-between">
        <span
          className="font-[family-name:var(--font-display)] font-bold text-white"
          style={{ fontSize: 26, letterSpacing: "-0.012em" }}
        >
          Publikowanie
        </span>
        <span
          className="font-[family-name:var(--font-display)] font-bold text-white"
          style={{ fontSize: 30, letterSpacing: "-0.014em" }}
        >
          72%
        </span>
      </div>
      <div className="mt-[16px] font-[family-name:var(--font-body)] text-white/45" style={{ fontSize: 16 }}>
        Optymalizacja zdjęć — 14 z 19 plików
      </div>
      <div
        className="mt-[18px] overflow-hidden rounded-full"
        style={{ height: 18, background: "rgba(255,255,255,0.08)" }}
      >
        <div
          className="h-full rounded-full"
          style={{ width: "72%", background: "rgba(255,255,255,0.85)" }}
        />
      </div>
    </Frame>
  );
}
