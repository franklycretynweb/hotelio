import { Atuty } from "@/components/sections/Atuty";
import { Cennik } from "@/components/sections/Cennik";
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
      <Cennik />
      <Atuty />
      <MiniShowcase />
      <Proces />
      <Kalkulator />
      <Cta />
      <Footer />
    </>
  );
}
