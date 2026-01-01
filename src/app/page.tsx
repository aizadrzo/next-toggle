import IntegrationsThree from "@/components/services";
import { Feature2 } from "@/components/feature2";
import HeroSection from "@/components/hero-section";
import { ContactSection } from "@/components/contact-section";
import { Gallery6 } from "@/components/gallery6";
import LogoCloud from "@/components/logo-cloud";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <HeroSection />
      <LogoCloud />
      <div className="mx-auto max-w-6xl gap-32 flex flex-col pt-16 sm:pt-0">
        <section id="about">
          <Feature2 className="py-0" />
        </section>
        <section id="work">
          <Gallery6 className="py-0" />
        </section>
        <section id="services">
          <IntegrationsThree className="py-0" />
        </section>
      </div>
      <section id="contact" className="w-full bg-zinc-50 mt-24">
        <ContactSection className="py-16 max-w-6xl mx-auto" />
      </section>
    </div>
  );
}
