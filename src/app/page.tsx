import { Atuty } from "@/components/sections/Atuty";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Kalkulator } from "@/components/sections/Kalkulator";
import { MiniShowcase } from "@/components/sections/MiniShowcase";
import { Proces } from "@/components/sections/Proces";

export default function Home() {
  return (
    <>
      <Hero />
      <Atuty />
      <MiniShowcase />
      <Proces />
      <Kalkulator />
      <Cta />
      <Footer />
    </>
  );
}
