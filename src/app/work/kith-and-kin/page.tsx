import { caseStudies } from "@/data/case-studies";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { notFound } from "next/navigation";

export default function KithAndKinPage() {
  const study = caseStudies.find((s) => s.slug === "kith-and-kin");

  if (!study) {
    notFound();
  }

  return (
    <CaseStudyLayout study={study}>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p>
            Kith and Kin are a reputable real estate agency specializing in
            development projects across Kuala Lumpur and Selangor. Their primary
            focus is promoting a newly launched development located in Dutamas,
            near the vibrant Mont Kiara district, aiming to attract local and
            expatriate buyers looking for modern urban living.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
          <p>
            Before partnering with Toggle, the client faced significant
            challenges in acquiring a consistent volume of high-quality leads.
            They had never run paid advertising before, relying solely on
            organic methods and traditional cold-calling, which struggled to
            deliver consistent results.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">The Goal</h2>
          <p>
            The primary objective was to drastically increase the volume of
            leads to capture market demand. Crucially, they needed to achieve
            this scale while maintaining a healthy, sustainable cost per lead
            (CPL).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
          <p>
            Toggle identified a massive opportunity: a significant lack of paid
            advertising competition surrounding their key project in Dutamas. We
            unleashed targeted Meta Ad campaigns using lead generation and
            message-specific strategies to reach the desired audience. By
            utilizing diverse, visually engaging creative formats like GIFs,
            images, and videos, we effectively showcased unique selling points
            to high-intent leads.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">The Result</h2>
          <p>
            The campaign delivered explosive growth over three months, achieving
            a 392% increase in leads. We maintained a highly efficient CPL of
            RM35 throughout the campaign. Most impressively, the strategy drove
            a 10% conversion rate from leads to closed deals, successfully
            opening a new growth channel.
          </p>
        </div>
      </div>
    </CaseStudyLayout>
  );
}
