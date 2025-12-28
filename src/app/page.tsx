import CallToAction from "@/components/call-to-action";
import { CaseStudies2 } from "@/components/case-studies2";
import IntegrationsThree from "@/components/services";
import HeroSection from "@/components/hero-section";
import { Feature2 } from "@/components/feature2";
import FeaturesTwo from "@/components/features-two";
import Features from "@/components/features-12";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden mx-auto max-w-6xl gap-32">
      <HeroSection />
      <Features className="pt-12 pb-0" />
      <IntegrationsThree className="py-0" />
      <CaseStudies2 className="py-0" />
      <Feature2 className="py-0" />
      <CallToAction />
    </div>
  );
}
