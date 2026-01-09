import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ChartNoAxesCombined,
  Images,
  Mail,
  Paintbrush,
  Target,
  Terminal,
} from "lucide-react";

export default function Integrations({ className }: { className?: string }) {
  return (
    <section>
      <div className={cn("py-24", className)}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Full Stack Digital Solutions
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              From brand awareness to final scale, we cover it all.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <ServicesCard
              title="Performance Marketing"
              description="Drive growth with campaign optimization and performance creative, using audience and conversion data to guide what we produce and scale."
            >
              <Target className="text-white w-6 h-6" />
            </ServicesCard>

            <ServicesCard
              title="Email Marketing"
              description="Set up automated journeys, newsletters, and segmentation that grow LTV and reduce churn over time."
            >
              <Mail className="text-white w-6 h-6" />
            </ServicesCard>

            <ServicesCard
              title="Branding"
              description="Define your message and visual direction, then apply it consistently so your brand stands out in competitive markets."
            >
              <Paintbrush className="text-white w-6 h-6" />
            </ServicesCard>

            <ServicesCard
              title="Content Marketing"
              description="Create a content system that builds awareness, drives qualified traffic, and supports conversion across channels."
            >
              <Images className="text-white w-6 h-6" />
            </ServicesCard>

            <ServicesCard
              title="Web Development"
              description="Design and develop high-performing websites and landing pages built for speed, clarity, and conversions."
            >
              <Terminal className="text-white w-6 h-6" />
            </ServicesCard>

            <ServicesCard
              title="Reporting & Analysis"
              description="Build a reporting cadence that tracks what matters and highlights what to improve next, not just what happened."
            >
              <ChartNoAxesCombined className="text-white w-6 h-6" />
            </ServicesCard>
          </div>
        </div>
      </div>
    </section>
  );
}

const ServicesCard = ({
  title,
  description,
  children,
  link = "https://github.com/meschacirung/cnblocks",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  link?: string;
}) => {
  return (
    <Card className="p-6 bg-zinc-50 border border-border">
      <div className="relative">
        <div className="*:size-10">
          <div className="bg-zinc-900 rounded-lg flex items-center justify-center">
            {children}
          </div>
        </div>

        <div className="my-6 space-y-1.5">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};
