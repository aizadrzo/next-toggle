import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Features({ className }: { className?: string }) {
  return (
    <section>
      <div className={cn("py-24", className)}>
        <div className="mx-auto px-6">
          <div className="text-center">
            <h2 className="text-foreground text-4xl font-semibold">
              Partners, Not Just Vendors
            </h2>
            <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">
              We don't just run your ads; we obsess over your P&L.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
            <div className="space-y-4">
              <Card className="aspect-video overflow-hidden px-6">
                <Card className="h-full translate-y-6" />
              </Card>
              <div className="sm:max-w-sm">
                <h3 className="text-foreground text-xl font-semibold">
                  Profit Over ROAS
                </h3>
                <p className="text-muted-foreground my-4 text-lg">
                  We ignore vanity ROAS and optimize for Contribution Margin,
                  ensuring every dollar adds to your bottom line.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="aspect-video overflow-hidden p-6">
                <Card className="h-full" />
              </Card>
              <div className="sm:max-w-sm">
                <h3 className="text-foreground text-xl font-semibold">
                  Senior-Led Strategy
                </h3>
                <p className="text-muted-foreground my-4 text-lg">
                  No juniors. You work directly with veteran strategists who
                  have successfully scaled brands like yours.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="aspect-video overflow-hidden">
                <Card className="translate-6 h-full" />
              </Card>
              <div className="sm:max-w-sm">
                <h3 className="text-foreground text-xl font-semibold">
                  Creative That Converts
                </h3>
                <p className="text-muted-foreground my-4 text-lg">
                  We combine hard data with high-performance creative production
                  to stop the scroll and drive revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
