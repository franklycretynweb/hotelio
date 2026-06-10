"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/cn";

import { CardDesign } from "@/components/sections/atuty/cards/CardDesign";
import { CardSeo } from "@/components/sections/atuty/cards/CardSeo";
import { CardAI } from "@/components/sections/atuty/cards/CardAI";
import { CardCMS } from "@/components/sections/atuty/cards/CardCMS";
import { CardWebVitals } from "@/components/sections/atuty/cards/CardWebVitals";
import { CardBooking } from "@/components/sections/atuty/cards/CardBooking";
import { CardResponsywnosc } from "@/components/sections/atuty/cards/CardResponsywnosc";
import {
  DecorAnalytics,
  DecorCalendar,
  DecorDashboard,
  DecorFiles,
  DecorGauge,
  DecorLogin,
  DecorMedia,
  DecorProfile,
  DecorProfileDetail,
  DecorProgress,
  DecorRating,
  DecorTextCard,
  DecorTwoTile,
  DecorUrl,
} from "@/components/sections/atuty/decor/Decor";

/**
 * Atuty — Clerk Components mechanic, take 3.
 *
 *   Layout — no Container constraint; section uses full viewport width with
 *   light side padding. The grid is [accordion 380px | canvas 1fr]; the canvas
 *   column stretches to the right edge of the section (no fixed VIEW_W box).
 *
 *   Centering — canvas div positioned absolutely with left:50%/top:50% inside
 *   the column. Animating only `x = -cx*SCALE` and `y = -cy*SCALE` (in
 *   post-scale pixels) lands the active card center at the visible center of
 *   the column, independent of column width. No need to know the column size.
 *
 *   Focus — radial ink mask + opacity contrast. No frame, no ring.
 */

type FocusId = "design" | "seo" | "ai" | "cms" | "perf" | "booking" | "rwd";

const FRAME_W = 5961;
const FRAME_H = 4273;
const SCALE = 0.62;
const CANVAS_H = 920;

type CardEntry =
  | {
      id: string;
      kind: "main";
      focusId: FocusId;
      x: number;
      y: number;
      w: number;
      h: number;
      Component: ComponentType<{ active?: boolean }>;
    }
  | {
      id: string;
      kind: "decor";
      x: number;
      y: number;
      w: number;
      h: number;
      Component: ComponentType;
    };

const CARDS: CardEntry[] = [
  { id: "url", kind: "decor", x: 2263, y: 540, w: 724, h: 136, Component: DecorUrl },
  { id: "rating", kind: "decor", x: 1538, y: 649, w: 703, h: 164, Component: DecorRating },
  { id: "login", kind: "decor", x: 1538, y: 877, w: 695, h: 454, Component: DecorLogin },
  { id: "files", kind: "decor", x: 3748, y: 540, w: 751, h: 751, Component: DecorFiles },
  { id: "dashboard", kind: "decor", x: 3032, y: 1264, w: 639, h: 386, Component: DecorDashboard },
  { id: "twotile", kind: "decor", x: 1538, y: 1348, w: 698, h: 418, Component: DecorTwoTile },
  { id: "gauge", kind: "decor", x: 4563, y: 1561, w: 424, h: 356, Component: DecorGauge },
  { id: "media", kind: "decor", x: 5039, y: 1561, w: 391, h: 356, Component: DecorMedia },
  { id: "profile", kind: "decor", x: 2281, y: 1668, w: 703, h: 196, Component: DecorProfile },
  { id: "profile-detail", kind: "decor", x: 3030, y: 1699, w: 666, h: 508, Component: DecorProfileDetail },
  { id: "calendar", kind: "decor", x: 2281, y: 1912, w: 710, h: 682, Component: DecorCalendar },
  { id: "text-card", kind: "decor", x: 3030, y: 2256, w: 660, h: 338, Component: DecorTextCard },
  { id: "progress", kind: "decor", x: 3748, y: 2378, w: 762, h: 215, Component: DecorProgress },
  { id: "analytics", kind: "decor", x: 3303, y: 2653, w: 707, h: 711, Component: DecorAnalytics },

  { id: "design", kind: "main", focusId: "design", x: 3030, y: 540, w: 641, h: 674, Component: CardDesign },
  { id: "seo", kind: "main", focusId: "seo", x: 2281, y: 792, w: 706, h: 845, Component: CardSeo },
  { id: "ai", kind: "main", focusId: "ai", x: 4563, y: 548, w: 887, h: 949, Component: CardAI },
  { id: "cms", kind: "main", focusId: "cms", x: 3748, y: 1361, w: 763, h: 958, Component: CardCMS },
  { id: "perf", kind: "main", focusId: "perf", x: 1538, y: 1818, w: 695, h: 776, Component: CardWebVitals },
  { id: "booking", kind: "main", focusId: "booking", x: 4563, y: 1981, w: 867, h: 980, Component: CardBooking },
  { id: "rwd", kind: "main", focusId: "rwd", x: 2281, y: 2644, w: 948, h: 907, Component: CardResponsywnosc },
];

type AtutItem = { id: FocusId; title: string; body: string };

const ITEMS: AtutItem[] = [
  {
    id: "design",
    title: "Wyróżniający i przejrzysty design strony",
    body: "Spójna paleta, typografia i system komponentów — strona, która buduje markę Twojego hotelu od pierwszej sekundy.",
  },
  {
    id: "seo",
    title: "SEO — Twoja strona widoczna w internecie",
    body: "Techniczne SEO, szybkie ładowanie i czysta struktura — wyższe pozycje w Google na zapytania o Twój hotel.",
  },
  {
    id: "ai",
    title: "Strona zaprojektowana tak, aby AI poleciło Twój hotel",
    body: "Dane strukturalne, Open Graph i Schema.org — asystenci AI rozumieją Twoją ofertę i polecają ją gościom.",
  },
  {
    id: "cms",
    title: "Proste w obsłudze zarządzanie zawartością strony",
    body: "Edytuj teksty, zdjęcia i oferty bez programisty. Zmiany publikują się natychmiast, z podglądem na żywo.",
  },
  {
    id: "perf",
    title: "Strona szybka, responsywna i dopasowana do Twojego Hotelu",
    body: "Performance strony w zielonym zakresie, lekki kod i optymalizowane obrazy — strona ładuje się błyskawicznie na każdym łączu.",
  },
  {
    id: "booking",
    title: "Strona, która prowadzi użytkownika do rezerwacji",
    body: "Przemyślany lejek konwersji: jasne CTA, szybki wybór terminu i krótka ścieżka do potwierdzenia rezerwacji.",
  },
  {
    id: "rwd",
    title: "Pełna zgodność z urządzeniami Twoich klientów",
    body: "Responsywne layouty dopracowane do desktopu, tabletu i telefonu — Twój gość rezerwuje wygodnie, gdziekolwiek jest.",
  },
];

function SectionHeader() {
  return (
    <div className="flex flex-col">
      <div className="text-[12px] uppercase tracking-[0.22em] text-cream/45">
        Twoja strona hotelowa
      </div>
      <h2 className="mt-5 whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(2.5rem,4.8vw,5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-cream">
        Co znajdziesz w&nbsp;gotowej stronie.
      </h2>
    </div>
  );
}

function Accordion({
  items,
  activeId,
  onSelect,
}: {
  items: AtutItem[];
  activeId: FocusId;
  onSelect: (id: FocusId) => void;
}) {
  return (
    <div className="flex flex-col">
      <ul className="flex flex-col">
        {items.map((item, i) => {
          const open = item.id === activeId;
          return (
            <li
              key={item.id}
              className={cn(
                "relative border-l-2 transition-colors duration-300",
                open ? "border-terracotta" : "border-cream/10",
              )}
            >
              <button
                type="button"
                onClick={() => onSelect(item.id)}
                aria-expanded={open}
                className="flex w-full items-start gap-7 py-6 pl-8 pr-2 text-left"
              >
                <span
                  className={cn(
                    "mt-[6px] font-[family-name:var(--font-display)] text-[13px] font-medium tabular-nums tracking-[0.12em] transition-colors duration-300",
                    open ? "text-terracotta" : "text-cream/35",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "flex-1 font-[family-name:var(--font-display)] text-[20px] font-medium leading-[1.3] transition-colors duration-300",
                    open ? "text-cream" : "text-cream/50",
                  )}
                >
                  {item.title}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-7 pl-[70px] pr-4 text-[15px] leading-[1.6] text-cream/60">
                  {item.body}
                </p>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CanvasCard({
  entry,
  active,
}: {
  entry: CardEntry;
  active: boolean;
}) {
  const isMain = entry.kind === "main";
  const opacity = isMain ? (active ? 1 : 0.28) : 0.18;
  return (
    <motion.div
      animate={{ opacity }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "absolute",
        left: entry.x,
        top: entry.y,
        width: entry.w,
        height: entry.h,
      }}
    >
      <entry.Component {...(isMain ? { active } : {})} />
    </motion.div>
  );
}

function ActiveMobileCard({ activeId }: { activeId: FocusId }) {
  const entry = CARDS.find(
    (c) => c.kind === "main" && c.focusId === activeId,
  );
  if (!entry) return null;
  const targetW = 360;
  const s = targetW / entry.w;
  return (
    <div
      className="overflow-hidden"
      style={{ width: entry.w * s, height: entry.h * s }}
    >
      <div
        style={{
          width: entry.w,
          height: entry.h,
          transform: `scale(${s})`,
          transformOrigin: "top left",
        }}
      >
        <entry.Component active />
      </div>
    </div>
  );
}

export function Atuty() {
  const [active, setActive] = useState<FocusId>("design");
  const activeEntry = CARDS.find(
    (c) => c.kind === "main" && c.focusId === active,
  )!;

  const cx = activeEntry.x + activeEntry.w / 2;
  const cy = activeEntry.y + activeEntry.h / 2;

  return (
    <Section tone="dark" id="atuty" className="relative overflow-hidden py-24 lg:py-32">
      {/* Container keeps the accordion aligned with the rest of the page
          (max-w 1440 + lg:px-12). Canvas bleeds out beyond the container's
          right padding via negative `right` so cards reach the viewport edge
          like on clerk.com, while the left padding rhythm is preserved. */}
      <Container size="wide" className="relative">
        {/* Section header — outside grid, spans full container width so the
            long H2 can sit on one line. */}
        <SectionHeader />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:mt-20 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:items-stretch lg:gap-16">
          <Accordion items={ITEMS} activeId={active} onSelect={setActive} />

          <div
            className="relative hidden lg:block"
            style={{ minHeight: CANVAS_H }}
          >
            {/* Canvas extends from the right column's left edge to the viewport
                right edge. On the Container-wide layout (max-w 1440, lg:px-12),
                the right col's right edge sits at viewport coord 50vw+672.
                Distance to viewport right = 50vw-672, so we extend the canvas
                by that amount with a negative `right`. clamp at 0 for narrow
                viewports where the container already touches the viewport. */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ right: "min(0px, calc(672px - 50vw))" }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: FRAME_W,
                  height: FRAME_H,
                  transformOrigin: "top left",
                  scale: SCALE,
                }}
                initial={false}
                animate={{ x: -cx * SCALE, y: -cy * SCALE }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              >
                {CARDS.map((entry) => (
                  <CanvasCard
                    key={entry.id}
                    entry={entry}
                    active={entry.kind === "main" && entry.focusId === active}
                  />
                ))}
              </motion.div>

              {/* Radial ink fade — soft circular focus, hard ink at edges */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 45% 55% at 50% 50%, rgba(17,16,16,0) 0%, rgba(17,16,16,0) 26%, rgba(17,16,16,0.4) 48%, rgba(17,16,16,0.82) 70%, var(--ink) 90%)",
                }}
              />
              {/* Left edge ink wipe — dissolves cards near the accordion */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-[10%]"
                style={{
                  background:
                    "linear-gradient(to right, var(--ink) 0%, rgba(17,16,16,0.55) 60%, rgba(17,16,16,0) 100%)",
                }}
              />
            </div>
          </div>

          <div className="flex justify-center lg:hidden">
            <ActiveMobileCard activeId={active} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
