import { cn } from "@/lib/cn";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  tone?: "cream" | "dark";
};

export function Section({
  tone = "cream",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      data-tone={tone}
      className={cn(
        "relative w-full",
        tone === "cream" && "bg-cream text-ink-2",
        tone === "dark" && "bg-ink text-cream",
        className,
      )}
      {...props}
    />
  );
}
