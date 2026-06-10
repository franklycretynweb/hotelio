import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  variant?: "cream" | "ink";
};

/**
 * hotelio. wordmark with towers (h, t) and compass (o).
 * The SVG is black-on-transparent — we mask with currentColor so it can sit
 * on cream or ink sections without bundling two assets.
 */
export function Logo({ className, variant = "ink" }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-block leading-none align-middle",
        variant === "cream" ? "text-cream" : "text-ink",
        className,
      )}
      aria-label="hotelio."
    >
      <span
        className="block aspect-[683/379] w-full"
        style={{
          backgroundColor: "currentColor",
          WebkitMaskImage: "url(/img/logo-hotelio.svg)",
          maskImage: "url(/img/logo-hotelio.svg)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
    </span>
  );
}
