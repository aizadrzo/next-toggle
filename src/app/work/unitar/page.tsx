import { caseStudies } from "@/data/case-studies";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { notFound } from "next/navigation";

export default function UnitarPage() {
  const study = caseStudies.find((s) => s.slug === "unitar");

  if (!study) {
    notFound();
  }

  return (
    <CaseStudyLayout study={study}>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p>
          UNITAR International University is a leading private university in
          Malaysia, recognized for its innovative approach to education and a
          strong commitment to producing workforce-ready graduates. In a
          hyper-competitive higher education landscape, they target ambitious
          undergraduate and postgraduate students seeking a university that
          bridges the gap between academic theory and real-world application.
        </p>

        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
        <p>
          UNITAR faced a "moonshot" challenge: they set an aggressive target for
          student acquisition that seemed nearly impossible in a saturated
          market. Previous campaigns managed by top media agencies had
          struggled, resulting in ballooning costs and diminishing returns. By
          mid-2024, acquisition costs were spiraling out of control—with TikTok
          CPLs hitting RM525 and Facebook reaching RM291—making it difficult to
          scale spend efficiently without bleeding budget.
        </p>

        <h2 className="text-2xl font-semibold mb-4">The Goal</h2>
        <p>
          The objective was to re-engineer the lead generation engine to fuel
          aggressive enrollment targets. UNITAR needed to drastically increase
          the volume of qualified leads across Malaysia while simultaneously
          driving acquisition costs well below industry benchmarks. The ultimate
          aim was to prove that they could scale ad spend significantly without
          suffering from CPL inflation.
        </p>

        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
        <p>
          Toggle executed a data-driven, multi-channel performance strategy
          designed to scale smarter, not just bigger. We implemented a
          comprehensive "Full-Funnel Messaging Matrix," delivering tailored
          content—from myth-busting hooks on TikTok to urgency-driven
          calls-to-action on Google and Meta. By integrating advanced tracking
          like Facebook CAPI and diversifying channels based on distinct roles
          (intent vs. storytelling), we optimized algorithmic efficiency and
          ensured every ringgit spent drove impact.
        </p>

        <h2 className="text-2xl font-semibold mb-4">The Result</h2>
        <p>
          We didn't just meet the target; we redefined the baseline for success.
          From June to September 2025, the campaign generated over 32,000
          qualified leads. We successfully reduced the Cost Per Lead (CPL) by a
          massive 47% year-on-year, despite scaling ad spend to RM4 million.
          Furthermore, UNITAR dominated the digital space, capturing a
          staggering 77% of total impressions within the Education & Training
          category in Malaysia.
        </p>
      </div>
    </CaseStudyLayout>
  );
}
