import { cn } from "@/lib/utils";
import Image from "next/image";

export function Feature3({ className }: { className?: string }) {
  return (
    <div className={cn("container px-6", className)}>
      <div className="flex flex-col space-y-10 md:space-y-16">
        <div className="lg:flex lg:gap-x-4">
          <div className="lg:w-1/2">
            <div className="mb-6 md:mb-8 lg:mb-0">
              <img
                alt="placeholder hero"
                className="aspect-4/3 w-full rounded-md border border-border bg-zinc-50 object-cover"
                src="/images/decorative/decorative-4.png"
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
              <div className="aspect-4/3 w-full rounded-md border border-border h-full grid place-content-center">
                <div className="dark:bg-muted/50 relative mx-auto w-fit h-full">
                  <div
                    aria-hidden
                    className="bg-radial to-background dark:to-background absolute inset-0 z-2 from-transparent to-75%"
                  />
                  <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
                    <IntegrationCard>
                      <Image
                        alt="shopify"
                        src="/images/integration-logos/shopify-logo.svg"
                        className="w-10 sm:w-15"
                        width={100}
                        height={100}
                      />
                    </IntegrationCard>
                    <IntegrationCard>
                      <Image
                        alt="klaviyo"
                        src="/images/integration-logos/klaviyo-logo.svg"
                        className="w-10 sm:w-15"
                        width={100}
                        height={100}
                      />
                    </IntegrationCard>
                  </div>
                  <div className="mx-auto my-2 flex w-fit justify-center gap-2">
                    <IntegrationCard>
                      <Image
                        alt="meta"
                        src="/images/integration-logos/meta-logo.svg"
                        className="w-10 sm:w-15"
                        width={100}
                        height={100}
                      />
                    </IntegrationCard>
                    <IntegrationCard
                      borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                      className="dark:bg-white/10"
                    >
                      <Image
                        alt="meta"
                        src="/images/brand/logo-light.svg"
                        className="w-10 sm:w-15"
                        width={100}
                        height={100}
                      />
                    </IntegrationCard>
                    <IntegrationCard>
                      <Image
                        alt="tiktok"
                        src="/images/integration-logos/tiktok-logo.svg"
                        className="w-10 sm:w-15"
                        width={100}
                        height={100}
                      />
                    </IntegrationCard>
                  </div>

                  <div className="mx-auto flex w-fit justify-center gap-2">
                    <IntegrationCard>
                      <Image
                        alt="google"
                        src="/images/integration-logos/google-logo.svg"
                        className="w-10 sm:w-15"
                        width={100}
                        height={100}
                      />
                    </IntegrationCard>

                    <IntegrationCard>
                      <Image
                        alt="semrush"
                        src="/images/integration-logos/semrush-logo.svg"
                        className="w-15 sm:w-20"
                        width={100}
                        height={100}
                      />
                    </IntegrationCard>
                  </div>
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
                src="/images/decorative/decorative-5.png"
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

const IntegrationCard = ({
  children,
  className,
  borderClassName,
}: {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-background relative flex size-20 sm:size-30 rounded-xl dark:bg-transparent",
        className
      )}
    >
      <div
        role="presentation"
        className={cn(
          "absolute inset-0 rounded-xl border border-black/20 dark:border-white/25",
          borderClassName
        )}
      />
      <div className="relative z-20 m-auto size-fit">{children}</div>
    </div>
  );
};
