import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function WorkPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="pt-28 lg:pt-20 max-w-6xl mx-auto px-6">
        <div className="text-center sm:text-left">
          <h1 className="text-balance text-4xl font-bold md:text-5xl xl:text-5xl mb-6">
            Real results for <br className="hidden md:block" />
            real businesses
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Join the 50+ ambitious companies that trust Toggle to scale their
            growth.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-4 xl:gap-16">
          <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-3 lg:border-r lg:pr-8 xl:pr-12">
            <Image
              src="/images/client-works/kith-and-kin-ads-1.png"
              alt="kith-and-kin-ads"
              width={377}
              height={377}
              className="aspect-square h-full w-full rounded-2xl object-fill sm:max-w-60"
            />
            <div className="flex h-full flex-col gap-6 md:gap-0">
              <h3 className="text-2xl font-semibold mb-0 md:mb-3">
                Unlocking New Growth Channels
              </h3>
              <p className="text-lg">
                Kith & Kin faced challenges with inconsistent leads from organic
                methods. We implemented a scalable paid advertising strategy to
                generate high-quality leads.
              </p>
              <div className="flex flex-col mt-auto">
                <Image
                  src="/images/client-logos/kith-kin-logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
                <h3 className="text-muted-foreground text-sm">
                  Kith & Kin Realty Sdn. Bhd.
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-8 self-center lg:flex-col">
            <div className="flex flex-col">
              <p className="text-4xl font-semibold sm:text-5xl mb-2">392%</p>
              <p className="font-semibold">Increase in Lead Volume</p>
              <p className="text-muted-foreground">From paid campaigns</p>
            </div>
            <div className="flex flex-col">
              <p className="text-4xl font-semibold sm:text-5xl mb-2">47%</p>
              <p className="font-semibold">Cost Per Lead</p>
              <p className="text-muted-foreground">Sustainable scaling</p>
            </div>
          </div>
          <div className="block sm:hidden">
            <Button
              asChild
              className="w-full py-6 text-base cursor-pointer shadow-md font-semibold"
              variant="outline"
            >
              <Link href="/work/kith-and-kin">Learn More</Link>
            </Button>
          </div>
        </div>
        <Separator className="my-12" />
        <div className="grid gap-10 lg:grid-cols-4 xl:gap-16">
          <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-3 lg:border-r lg:pr-16 xl:pr-12">
            <Image
              src="/images/client-works/unitar-ads-1.jpg"
              alt="unitar-ads"
              width={377}
              height={377}
              className="aspect-square h-full w-full rounded-2xl object-fill sm:max-w-60"
            />
            <div className="flex h-full flex-col gap-6 md:gap-0">
              <h3 className="text-2xl font-semibold mb-0 md:mb-3">
                From Moonshot to Milestone
              </h3>
              <p className="text-lg">
                UNITAR needed to scale student acquisition in a competitive
                market. We helped them increase lead volume while significantly
                reducing Cost Per Lead (CPL).
              </p>
              <div className="flex flex-col mt-auto">
                <Image
                  src="/images/client-logos/unitar-logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
                <h3 className="text-muted-foreground text-sm">
                  UNITAR Education Sdn. Bhd.
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-10 self-center lg:flex-col">
            <div className="flex flex-col">
              <p className="text-4xl font-semibold sm:text-5xl mb-2">32K+</p>
              <p className="font-semibold">Leads from Ads</p>
              <p className="text-muted-foreground">Qualified student leads</p>
            </div>
            <div className="flex flex-col">
              <p className="text-4xl font-semibold sm:text-5xl mb-2">77%</p>
              <p className="font-semibold">Total Impressions</p>
              <p className="text-muted-foreground">Across Malaysia</p>
            </div>
          </div>
          <div className="block sm:hidden">
            <Button
              asChild
              className="w-full py-6 text-base cursor-pointer shadow-md font-semibold"
              variant="outline"
            >
              <Link href="/work/unitar">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            We're always looking for new challenges and opportunities to help
            businesses grow. Let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-all shadow-sm hover:shadow-md flex justify-center items-center gap-2"
            >
              Start a Project
            </Link>
            <Link
              href="/contact"
              className="bg-white dark:bg-slate-800 border border-border text-foreground hover:bg-gray-50 dark:hover:bg-slate-700 font-semibold py-3 px-8 rounded-md transition-all flex justify-center items-center gap-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
