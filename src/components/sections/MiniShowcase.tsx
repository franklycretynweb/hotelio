import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/cn";

type Showcase = {
  id: string;
  title: string;
  body: string;
  href: string;
  imac: string;
  iphone: string;
  /** Card tone — matches the iMac base color in Figma. */
  surface: string;
};

const CARDS: Showcase[] = [
  {
    id: "lesna",
    title: "Leśna Polana Górajek",
    body: "10 domków w lesie świętokrzyskim. Miejsca, które sprzedają się ciszą i widokiem — jeszcze przed przyjazdem. Strona oddaje ten klimat i pozwala zarezerwować konkretny domek w dwie minuty.",
    href: "#",
    imac: "/img/mini-imac-green.png",
    iphone: "/img/mini-iphone-deepblue.png",
    surface: "#E9EFE2",
  },
  {
    id: "solny",
    title: "Hotel Solny Wieliczka",
    body: "Hotel z duszą, blisko Kopalni Soli. Strona prowadzi gościa od zdjęć saun do wyboru pakietu wellness — krótka ścieżka, jasna oferta, mniej maili do recepcji.",
    href: "#",
    imac: "/img/mini-imac-yellow.png",
    iphone: "/img/mini-iphone-orange.png",
    surface: "#F4EBD1",
  },
  {
    id: "orzel",
    title: "Willa Orzeł Jarkowice",
    body: "Górska willa z basenem. Sezon krótszy, więc każda rezerwacja musi się złapać. Strona zoptymalizowana pod intencje narciarskie i weekendowe wypady par.",
    href: "#",
    imac: "/img/mini-imac-pink.png",
    iphone: "/img/mini-iphone-orange.png",
    surface: "#F2E1E0",
  },
];

function ShowcaseRow({
  card,
  flipped,
}: {
  card: Showcase;
  flipped: boolean;
}) {
  return (
    <article
      className={cn(
        "grid grid-cols-1 items-stretch overflow-hidden rounded-2xl border border-ink/5",
        "lg:grid-cols-[1.05fr_1fr]",
      )}
      style={{ background: card.surface }}
    >
      <div
        className={cn(
          "flex flex-col justify-between gap-8 p-8 sm:p-10 lg:p-12",
          flipped && "lg:order-2",
        )}
      >
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.6vw,2.25rem)] font-bold leading-tight text-ink">
            {card.title}
          </h3>
          <p className="mt-4 max-w-md text-[14px] leading-relaxed text-ink/70">
            {card.body}
          </p>
        </div>
        <Link
          href={card.href}
          className="inline-flex w-fit items-center gap-2 text-[13px] font-medium uppercase tracking-[0.16em] text-ink underline-offset-[6px] hover:underline"
        >
          zobacz stronę
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div
        className={cn(
          "relative flex min-h-[280px] items-center justify-center px-6 pb-8 pt-2 lg:px-10 lg:pb-10 lg:pt-6",
          flipped && "lg:order-1",
        )}
      >
        <div className="relative aspect-[934/772] w-full max-w-[520px]">
          <Image
            src={card.imac}
            alt={`${card.title} — wersja desktop`}
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-contain"
          />
          <div className="absolute right-[-2%] bottom-[-12%] aspect-[322/625] w-[24%]">
            <Image
              src={card.iphone}
              alt={`${card.title} — wersja mobile`}
              fill
              sizes="(min-width: 1024px) 8vw, 22vw"
              className="object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export function MiniShowcase() {
  return (
    <Section tone="cream" id="mini-showcase" className="py-24 lg:py-32">
      <Container size="wide">
        <div className="mb-12 max-w-3xl">
          <Eyebrow number="02">Realizacje</Eyebrow>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-heading">
            Strony, które już sprzedają.
          </h2>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          {CARDS.map((card, i) => (
            <ShowcaseRow key={card.id} card={card} flipped={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
