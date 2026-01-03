import { CaseStudies2 } from "@/components/case-studies2";
import IntegrationsThree from "@/components/services";
import { Feature2 } from "@/components/feature2";
import HeroSection from "@/components/hero-section";
import { ContactSection } from "@/components/contact-section";
import SanityTest from "./SanityTest/page";


export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <HeroSection />
      <div className="mx-auto max-w-6xl gap-32 flex flex-col pt-24">
        <section id="our-work">
          <CaseStudies2 className="py-0" />
        </section>
        <section id="about">
          <Feature2 className="py-0" />
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
