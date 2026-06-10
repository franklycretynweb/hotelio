import { cn } from "@/lib/cn";

type EyebrowProps = React.HTMLAttributes<HTMLSpanElement> & {
  number?: string;
};

/**
 * Numbered + uppercase + small caps "eyebrow" label used across the design.
 * Looks like:  01 — STRONY HOTELOWE
 */
export function Eyebrow({
  number,
  className,
  children,
  ...props
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-terracotta",
        className,
      )}
      {...props}
    >
      {number ? (
        <>
          <span className="tabular-nums">{number}</span>
          <span aria-hidden className="h-px w-6 bg-terracotta/60" />
        </>
      ) : null}
      <span>{children}</span>
    </span>
  );
}
