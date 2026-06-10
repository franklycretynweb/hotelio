import { cn } from "@/lib/cn";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-terracotta text-cream hover:bg-terracotta-warm",
        ghostDark:
          "bg-transparent text-cream border border-cream/30 hover:border-cream/60",
        ghostLight:
          "bg-transparent text-ink-2 border border-ink-2/20 hover:border-ink-2/60",
        link: "text-terracotta underline-offset-4 hover:underline px-0",
      },
      size: {
        sm: "h-9 px-4 text-[13px] rounded-md",
        md: "h-11 px-5 text-[14px] rounded-md",
        lg: "h-14 px-7 text-[15px] rounded-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export function Button({
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(button({ variant, size }), className)} {...props} />
  );
}

export { button as buttonVariants };
