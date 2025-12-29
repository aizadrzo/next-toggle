import { cn } from "@/lib/utils";
import { ChartSpline, CircleDollarSign, Save, HandCoins } from "lucide-react";
import { Card } from "./ui/card";
import { NumberTicker } from "./ui/number-ticker";
import Image from "next/image";

const Feature2 = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container px-6">
        <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
          <Image
            src="/images/decorative/decorative-3.png"
            alt="placeholder hero"
            className=" w-full h-full rounded-md object-cover bg-zinc-50 shadow-sm"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl">
              Built by Operators, Not Outsourcers.
            </h2>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg text-left">
              No juniors learning on your dime. Toggle is led by veterans who
              have scaled major brands across E-commerce and Tech. We bring
              unicorn-level strategies to grow your business in SEA, the US, and
              Europe.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-6 mt-16 w-full">
        <div className="grid gap-3 md:grid-cols-3">
          {/* Card 1 */}
          <Card className="rounded-xl p-8 bg-zinc-50 border-none">
            <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center">
              <HandCoins className="text-white w-6 h-6" />
            </div>
            <h3 className="text-6xl sm:text-7xl font-bold text-foreground tracking-tighter">
              <NumberTicker value={50} />
              M+
            </h3>
            <div className="mt-auto">
              <h3 className="text-xl font-semibold text-foreground w-1/3 mb-4">
                Ad Spend Managed
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Focuses on scale and experience
              </p>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="rounded-xl p-8 bg-zinc-50 border-none">
            <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center">
              <ChartSpline className="text-white w-6 h-6" />
            </div>
            <h3 className="text-6xl sm:text-7xl font-bold text-foreground tracking-tighter">
              <NumberTicker value={25} />%
            </h3>
            <div className="mt-auto">
              <h3 className="text-xl font-semibold text-foreground w-2/3 mb-4">
                Improvement in Conversion Rates
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Focuses on efficiency and optimization
              </p>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="rounded-xl p-8 bg-zinc-50 border-none">
            <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center">
              <CircleDollarSign className="text-white w-6 h-6" />
            </div>
            <h3 className="text-6xl sm:text-7xl font-bold text-foreground tracking-tighter">
              <NumberTicker value={21} />%
            </h3>
            <div className="mt-auto">
              <h3 className="text-xl font-semibold text-foreground w-2/3 mb-4">
                Average Return on Ad Spend
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Focuses on profitability and returns
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { Feature2 };
