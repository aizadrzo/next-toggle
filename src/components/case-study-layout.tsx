import Image from "next/image";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CaseStudy } from "@/data/case-studies";
import { Children } from "react";

interface CaseStudyLayoutProps {
  study: CaseStudy;
  children: React.ReactNode;
}

export function CaseStudyLayout({ study, children }: CaseStudyLayoutProps) {
  return (
    <section className="py-28 lg:py-20">
      <div className="container px-6 mx-auto flex flex-col gap-12 lg:flex-row lg:gap-24">
        <article className="mx-auto max-w-3xl w-full">
          <div className="mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <MoveLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="aspect-video w-full relative overflow-hidden rounded-lg border bg-muted">
              <Image
                src={study.heroImage}
                alt={study.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {study.title}
            </h1>
            <div className="prose dark:prose-invert">{children}</div>
          </div>
        </article>

        <aside className="lg:max-w-[300px] w-full shrink-0">
          <div className="flex flex-col items-start rounded-lg shadow-sm bg-zinc-50 py-6 md:py-8 sticky top-24">
            <div className="mb-8 px-6 w-full">
              <div className="relative w-full flex flex-col items-start">
                <Image
                  src={study.client.logo}
                  alt={study.client.name}
                  width={80}
                  height={80}
                  className="object-contain h-8 w-auto"
                />
              </div>
            </div>

            <div className="mb-5 px-6 last:mb-0 w-full">
              <div className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground">
                Client
              </div>
              <div className="text-sm font-medium">{study.client.name}</div>
            </div>

            <div className="mb-5 px-6 last:mb-0 w-full">
              <div className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground">
                Industry
              </div>
              <div className="text-sm font-medium">{study.client.industry}</div>
            </div>

            <div className="mb-5 w-full px-6 last:mb-0">
              <div className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground">
                Location
              </div>
              <div className="text-sm font-medium">{study.client.location}</div>
            </div>

            <div className="mb-5 px-6 last:mb-0 w-full">
              <div className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground">
                Service
              </div>
              <div className="text-sm font-medium">Paid Advertising</div>
            </div>

            <div className="mb-5 px-6 last:mb-0 w-full">
              <div className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground">
                Website
              </div>
              <div className="overflow-hidden text-sm">
                <a
                  href={study.client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground break-all"
                >
                  {new URL(study.client.website).hostname}
                </a>
              </div>
            </div>

            <div className="mt-4 px-6 w-full">
              <Button className="w-full" asChild>
                <Link href="/#contact">Start a Project</Link>
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
