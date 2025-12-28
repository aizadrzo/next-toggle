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
              description="Maximize your ROI with expert media buying and data-driven campaigns."
            >
              <Target className="text-white w-6 h-6" />
            </ServicesCard>

            <ServicesCard
              title="Email Digital Marketing"
              description="Boost engagement and retention with personalized CRM solutions."
            >
              <Mail className="text-white w-6 h-6" />
            </ServicesCard>

            <ServicesCard
              title="Branding"
              description="Create a powerful brand presence with custom strategies that resonate with your audience."
            >
              <Paintbrush className="text-white w-6 h-6" />
            </ServicesCard>

            <ServicesCard
              title="Content Marketing"
              description="Elevate your brand with compelling content and innovative design."
            >
              <Images className="text-white w-6 h-6" />
            </ServicesCard>

            <ServicesCard
              title="Web Development"
              description="Captivate and convert visitors with sleek, user-friendly websites."
            >
              <Terminal className="text-white w-6 h-6" />
            </ServicesCard>

            <ServicesCard
              title="Reporting & Analysis"
              description="Transform complex data into actionable insights for continuous improvement."
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
    <Card className="p-6 border-none bg-zinc-50">
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
