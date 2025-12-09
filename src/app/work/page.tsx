import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
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

      {/* Featured Case Studies */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="border-border flex flex-col gap-10 sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <Image
                src="/images/case-studies/unitar-ad.png"
                alt="placeholder"
                className="aspect-square h-full w-full sm:max-w-60 rounded-2xl object-cover"
                width={300}
                height={300}
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <div className="space-y-2">
                  <h3 className="text-lg">UNITAR International University</h3>
                  <p className="text-muted-foreground">
                    Scaled student leads through data-driven, multi-channel
                    performance campaigns — generating 32,000+ qualified leads
                    and reducing CPL by 47% in just 4 months.
                  </p>
                </div>
                <div className="flex items-end gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-lg font-semibold">
                      Zaid Saad
                    </p>
                    <p className="text-muted-foreground">Digital Strategist</p>
                  </div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-primary text-4xl font-medium sm:text-5xl">
                  32K+
                </p>
                <p className="text-muted-foreground">Leads Generated</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-primary text-4xl font-medium sm:text-5xl">
                  47%
                </p>
                <p className="text-muted-foreground">CPL Reduction</p>
              </div>
            </div>
          </div>
          <Separator className="my-20" />
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="border-border flex flex-col gap-10 sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <Image
                src="/images/case-studies/kithkin-ad.png"
                alt="placeholder"
                className="aspect-square h-full w-full sm:max-w-60 rounded-2xl object-cover"
                width={300}
                height={300}
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <div className="space-y-2">
                  <h3 className="text-lg">Kith & Kin</h3>
                  <p className="text-muted-foreground">
                    Increase the number of qualified leads via paid advertising
                    while keeping the cost per lead (CPL) at a sustainable
                    level.
                  </p>
                </div>
                <div className="flex items-end gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-lg font-semibold">
                      Jordan Anthony Pinto
                    </p>
                    <p className="text-muted-foreground">Marketing Director</p>
                  </div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-primary text-4xl font-medium sm:text-5xl">
                  392%
                </p>
                <p className="text-muted-foreground">Leads Generated</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-primary text-4xl font-medium sm:text-5xl">
                  3.8x
                </p>
                <p className="text-muted-foreground">ROI Improvement</p>
              </div>
            </div>
          </div>
          <Separator className="my-20" />
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="border-border flex flex-col gap-10 sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <Image
                src="/images/case-studies/mahbub-catering-ad.png"
                alt="placeholder"
                className="aspect-square h-full w-full sm:max-w-60 rounded-2xl object-cover"
                width={300}
                height={300}
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <div className="space-y-2">
                  <h3 className="text-lg">Restoran Mahbub (Catering)</h3>
                  <p className="text-muted-foreground">
                    Curated sales messaging flows across Messenger, Instagram,
                    and WhatsApp. Generated 300+ message conversations inquiring
                    about their catering offering.
                  </p>
                </div>
                <div className="flex items-end gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-lg font-semibold">
                      Jordan Anthony Pinto
                    </p>
                    <p className="text-muted-foreground">Marketing Director</p>
                  </div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-primary text-4xl font-medium sm:text-5xl">
                  46%
                </p>
                <p className="text-muted-foreground">Increased Leads</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-primary text-4xl font-medium sm:text-5xl">
                  72%
                </p>
                <p className="text-muted-foreground">Across all projects</p>
              </div>
            </div>
          </div>
          <Separator className="my-20" />
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="border-border flex flex-col gap-10 sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <Image
                src="/images/case-studies/mahbub-ad.png"
                alt="placeholder"
                className="aspect-square h-full w-full sm:max-w-60 rounded-2xl object-cover"
                width={300}
                height={300}
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <div className="space-y-2">
                  <h3 className="text-lg">Restoran Mahbub (Online Delivery)</h3>
                  <p className="text-muted-foreground">
                    Increase the number of qualified leads via paid advertising
                    while keeping the cost per lead (CPL) at a sustainable
                    level.
                  </p>
                </div>
                <div className="flex items-end gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-lg font-semibold">
                      Jordan Anthony Pinto
                    </p>
                    <p className="text-muted-foreground">Marketing Director</p>
                  </div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-primary text-4xl font-medium sm:text-5xl">
                  RM2.6M+
                </p>
                <p className="text-muted-foreground">Online Revenue</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-primary text-4xl font-medium sm:text-5xl">
                  72%
                </p>
                <p className="text-muted-foreground">Across all projects</p>
              </div>
            </div>
          </div>
          <Separator className="my-20" />
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="border-border flex flex-col gap-10 sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <Image
                src="/images/case-studies/tpl-ad.png"
                alt="placeholder"
                className="aspect-square h-full w-full sm:max-w-60 rounded-2xl object-cover"
                width={300}
                height={300}
              />
              <div className="flex h-full flex-col justify-between gap-10">
                <div className="space-y-2">
                  <h3 className="text-lg">TPL Fresh Meats</h3>
                  <p className="text-muted-foreground">
                    Ran ads on Meta and Google using their own social media
                    content. Generated an additional RM172k in revenue at a +20
                    ROAS.
                  </p>
                </div>
                <div className="flex items-end gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-lg font-semibold">
                      Jordan Anthony Pinto
                    </p>
                    <p className="text-muted-foreground">Marketing Director</p>
                  </div>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-primary text-4xl font-medium sm:text-5xl">
                  RM172K+
                </p>
                <p className="text-muted-foreground">Meta Sales</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-primary text-4xl font-medium sm:text-5xl">
                  20x
                </p>
                <p className="text-muted-foreground">Return on Ad Spend</p>
              </div>
            </div>
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
