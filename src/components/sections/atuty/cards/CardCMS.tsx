import { PenLine } from "lucide-react";
import { CardShell } from "./CardShell";

const FIELDS = [
  { label: "Tytuł", value: "Znajdź swój wymarzony pokój" },
  { label: "Podtytuł", value: "Butikowe pokoje, rzeka i góry" },
  { label: "CTA", value: "Zabookuj pobyt" },
];

export function CardCMS({ active = false }: { active?: boolean }) {
  return (
    <CardShell
      width={763}
      height={958}
      padding={47}
      radius={36}
      border={2}
      iconBoxSize={72}
      icon={
        <PenLine
          className="text-white/80"
          style={{ width: 32, height: 32 }}
          strokeWidth={1.6}
        />
      }
      number="04"
      rightSlot={
        <span
          className="font-[family-name:var(--font-body)] text-white/45"
          style={{ fontSize: 19 }}
        >
          Auto-zapis
        </span>
      }
      active={active}
    >
      <h3
        className="mt-[28px] font-[family-name:var(--font-display)] font-medium text-white"
        style={{ fontSize: 30, lineHeight: "38px", letterSpacing: "-0.014em" }}
      >
        Proste w obsłudze zarządzanie zawartością strony
      </h3>
      <p
        className="mt-[8px] font-[family-name:var(--font-body)] text-white/60"
        style={{ fontSize: 21, lineHeight: "32px" }}
      >
        Edytuj teksty, zdjęcia i oferty bez programisty. Zmiany publikują się
        natychmiast, z podglądem na żywo.
      </p>

      <div className="mt-[28px] flex flex-col gap-[16px]">
        {FIELDS.map((f) => (
          <div
            key={f.label}
            className="rounded-[26px] border border-white/[0.05] bg-[#262626]"
            style={{ padding: "20px 26px" }}
          >
            <div
              className="font-[family-name:var(--font-body)] font-medium uppercase text-white/40"
              style={{ fontSize: 18, letterSpacing: "0.1em" }}
            >
              {f.label}
            </div>
            <div className="mt-[6px] flex items-center justify-between gap-3">
              <span
                className="font-[family-name:var(--font-body)] text-white/90"
                style={{ fontSize: 22 }}
              >
                {f.value}
              </span>
              <PenLine
                className="text-white/40"
                style={{ width: 22, height: 22 }}
                strokeWidth={1.6}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[28px] flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-[20px] bg-white font-[family-name:var(--font-body)] font-medium text-black"
          style={{ height: 64, fontSize: 21 }}
        >
          Publikuj
        </button>
        <button
          type="button"
          className="flex-1 rounded-[20px] font-[family-name:var(--font-body)] font-medium text-white"
          style={{ height: 64, fontSize: 21, background: "rgba(255,255,255,0.1)" }}
        >
          Podgląd
        </button>
      </div>
    </CardShell>
  );
}
