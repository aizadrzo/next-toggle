import { cn } from "@/lib/utils";
import { AnimatedBeamDemo } from "./marketing-tools";

export function Feature3({ className }: { className?: string }) {
  return (
    <div className={cn("container px-6", className)}>
      <div className="flex flex-col space-y-10 md:space-y-16">
        <div className="lg:flex lg:gap-x-4">
          <div className="lg:w-1/2">
            <div className="mb-6 md:mb-8 lg:mb-0">
              <img
                alt="placeholder hero"
                className="aspect-4/3 w-full rounded-md border border-border object-cover"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              />
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
            <div>
              <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                Profit-First Marketing Across the Funnel
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                We build a full-funnel system across ads, creative, lifecycle,
                and reporting. The goal is sustainable growth that we can
                measure and scale with confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-row-reverse lg:flex lg:gap-x-4">
          <div className="lg:w-1/2">
            <div className="mb-6 md:mb-8 lg:mb-0">
              <div className="aspect-4/3 w-full rounded-md border border-border h-full">
                <div className="flex items-center justify-center">
                  <AnimatedBeamDemo />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
            <div>
              <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                One Growth System Across Every Channel
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Paid media, creative, website, SEO, email, and analytics work
                together under one strategy. This keeps execution aligned and
                helps every channel lift the others.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:gap-x-4">
          <div className="lg:w-1/2">
            <div className="mb-6 md:mb-8 lg:mb-0">
              <img
                alt="placeholder hero"
                className="aspect-4/3 w-full rounded-md border border-border object-cover"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              />
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
            <div>
              <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                Senior-Led, In-House Execution
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                You work with experienced operators who own both strategy and
                delivery. That means fewer handoffs, faster iteration, and clear
                priorities you can track week to week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
