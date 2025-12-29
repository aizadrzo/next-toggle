import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CallToAction({ className }: { className?: string }) {
  return (
    <section className={cn("py-16 md:py-32", className)}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Ready to scale your business?
          </h2>
          <p className="mt-4">
            Book a free 30-minute consultation with our experts. No obligations,
            just actionable insights for your digital strategy.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">
                <span>Book a Call</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/">
                <span>Contact Us</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
