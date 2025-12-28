import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  ChartBarIncreasingIcon,
  Database,
  Fingerprint,
  IdCard,
} from "lucide-react";
import Image from "next/image";

export default function Features({ className }: { className?: string }) {
  return (
    <section className={cn("py-24", className)}>
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold">
            Partners, Not Just Vendors
          </h2>
          <p>We don't just run your ads; we obsess over your P&L.</p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion type="single" className="w-full" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Database className="size-4" />
                  Profit Over ROAS
                </div>
              </AccordionTrigger>
              <AccordionContent>
                We ignore vanity ROAS and optimize for Contribution Margin,
                ensuring every dollar adds to your bottom line.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Fingerprint className="size-4" />
                  Senior-Led Strategy
                </div>
              </AccordionTrigger>
              <AccordionContent>
                No juniors. You work directly with veteran strategists who have
                successfully scaled brands like yours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <IdCard className="size-4" />
                  Creative That Converts
                </div>
              </AccordionTrigger>
              <AccordionContent>
                We combine hard data with high-performance creative production
                to stop the scroll and drive revenue.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-background relative w-full rounded-2xl shadow-md">
            <Image
              src="/charts.png"
              className="size-full object-cover object-left-top dark:mix-blend-lighten"
              alt="charts"
              width={1207}
              height={929}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
