import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { caseStudies as featuredCaseStudies } from "@/data/company";
import { Card } from "@/components/ui/card";
import Image from "next/image";
export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-8">
              Our Work
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Real results for{" "}
              <span className="text-primary">real businesses</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              See how we've helped SMEs and startups grow through smart
              strategy, data-driven campaigns, and creative execution.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies from Catalog */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCaseStudies.map((study) => (
              <div className="flex flex-col gap-4" key={study.clientName}>
                {study.clientLogo && (
                  <Card className="aspect-square overflow-hidden px-6">
                    <Image
                      src={study.clientLogo}
                      alt={study.clientName}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </Card>
                )}
                <div className="sm:max-w-sm flex-1">
                  <h3 className="text-foreground text-xl font-semibold">
                    {study.clientName}
                  </h3>
                  <p className="text-muted-foreground my-4 text-lg">
                    {study.solution}
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground text-2xl font-semibold">
                    {study.metric}
                  </h3>
                  <p className="text-muted-foreground">{study.metricLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to be our next success story?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let's discuss your goals and see how we can help you achieve
              similar results. Book a free discovery call to get started.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">Book a discovery call</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/services">View our services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
