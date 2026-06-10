import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardShellProps = {
  width: number;
  height: number;
  padding: number;
  radius: number;
  border?: number;
  iconBoxSize: number;
  iconBoxRadius?: number;
  icon: ReactNode;
  number: string;
  rightSlot?: ReactNode;
  active?: boolean;
  children: ReactNode;
};

/**
 * Common shell for every main Atuty card.
 *
 * Layout matches Figma 205:8567 family of cards:
 *   - dark BG #1c1c1c, hair white border, soft outer glow
 *   - header row: dark icon-box (rounded square) + uppercase number on left,
 *     optional right slot (badge / metric / icons)
 *   - children: card-specific content beneath header
 */
export function CardShell({
  width,
  height,
  padding,
  radius,
  border = 2,
  iconBoxSize,
  iconBoxRadius,
  icon,
  number,
  rightSlot,
  active = false,
  children,
}: CardShellProps) {
  const numberSize = Math.round(iconBoxSize * 0.34);
  const headerGap = Math.round(padding * 0.42);
  return (
    <div
      style={{
        width,
        height,
        padding,
        borderRadius: radius,
        borderWidth: border,
      }}
      className={cn(
        "relative flex flex-col border-white/[0.06] bg-[#1c1c1c]",
        "shadow-[0_38px_113px_0_rgba(255,255,255,0.06),0_15px_45px_0_rgba(0,0,0,0.6)]",
        "transition-shadow duration-500",
        active &&
          "shadow-[0_38px_113px_0_rgba(201,100,67,0.2),0_15px_45px_0_rgba(0,0,0,0.7)]",
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center" style={{ gap: headerGap }}>
          <div
            className="flex items-center justify-center border border-white/[0.05] bg-[#262626]"
            style={{
              width: iconBoxSize,
              height: iconBoxSize,
              borderRadius: iconBoxRadius ?? Math.round(iconBoxSize * 0.44),
            }}
          >
            {icon}
          </div>
          <span
            className="font-[family-name:var(--font-body)] text-white/40"
            style={{
              fontSize: numberSize,
              letterSpacing: "0.06em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {number}
          </span>
        </div>
        {rightSlot}
      </div>
      {children}
    </div>
  );
}
