import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Cta() {
  return (
    <Section tone="cream" id="cta" className="py-24 lg:py-28">
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-[360px] lg:max-w-[420px]">
            <Image
              src="/img/cta-hotel-illustration.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 30vw, 80vw"
              className="object-contain"
            />
          </div>

          <div className="max-w-2xl">
            <p className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.6vw,2.25rem)] font-bold leading-[1.2] tracking-tight text-heading">
              Wiesz już ile kosztuje Cię ten status quo.
              <br className="hidden lg:block" />
              <span className="text-heading/65">
                {" "}Zmiana nie wymaga rezygnacji z Bookingu — wymaga własnego
                kanału, który zarabia obok niego.
              </span>
            </p>

            <div className="mt-10">
              <Link
                href="mailto:kontakt@hotelio.biz"
                className="group inline-flex h-14 items-center gap-3 rounded-md bg-terracotta pl-6 pr-3 text-[15px] font-medium text-cream transition-colors hover:bg-terracotta-warm"
              >
                Dowiedz się więcej
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cream/15 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
