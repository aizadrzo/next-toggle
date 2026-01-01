import { cn } from "@/lib/utils";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import LogoCloud from "./logo-cloud";
import { Button } from "./ui/button";

interface CaseStudies2Props {
  className?: string;
}

const CaseStudies2 = ({ className }: CaseStudies2Props) => {
  return (
    <section className={cn("py-24", className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">
            Real Brands. Real Revenue
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Join the 50+ ambitious companies that trust Toggle to scale their
            growth.
          </p>
        </div>
        <div className="mt-12">
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
                  Kith & Kin faced challenges with inconsistent leads from
                  organic methods. We implemented a scalable paid advertising
                  strategy to generate high-quality leads.
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
                className="w-full py-6 text-base cursor-pointer shadow-md font-semibold"
                variant="outline"
              >
                Learn More
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
                  market. We helped them increase lead volume while
                  significantly reducing Cost Per Lead (CPL).
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
                className="w-full py-6 text-base cursor-pointer shadow-md font-semibold"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <LogoCloud />
    </section>
  );
};

export { CaseStudies2 };
