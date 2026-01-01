import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyLayout } from "@/components/case-study-layout";

export default function BrunoPage() {
  const study = caseStudies.find((s) => s.slug === "kualesa");

  if (!study) {
    notFound();
  }
  return (
    <CaseStudyLayout study={study}>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p>
          Kualesa Co. isn't just an apparel brand; it is the fresh face of the
          Malaysian eco-revolution. As a beacon of style and conscience, they
          are redefining what it means to get dressed in the morning. Committed
          to sustainability and ethical practices, they use eco-conscious
          materials to create clothing that looks as good as it feels, proving
          that high fashion and low carbon footprints can coexist seamlessly.
        </p>

        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
        <p>
          In a fashion industry often dominated by "fast, cheap, and
          disposable," true sustainability can be a hard sell. The challenge was
          to break the stigma that eco-friendly clothing is boring or
          ill-fitting. Kualesa needed to cut through the noise of fast fashion
          and convince modern consumers that choosing ethical apparel doesn't
          mean sacrificing chic design or personal style.
        </p>

        <h2 className="text-2xl font-semibold mb-4">The Goal</h2>
        <p>
          Kualesa aimed to create more than just a customer base; they wanted to
          ignite a movement. Their goal was to empower consumers to "wear their
          values," transforming the act of buying clothes into a conscious
          decision for the planet. They sought to position themselves as the
          perfect blend of mindful consumption and aesthetic appeal, inviting
          Malaysians to make a statement without saying a word.
        </p>

        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
        <p>
          We positioned Kualesa Co. not just as a brand, but as a lifestyle
          choice for the modern, responsible citizen. By highlighting their
          dedication to eco-conscious materials and ethical sourcing, we crafted
          a narrative that elevated "responsible fashion" into an aspirational
          standard. The strategy focused on the intersection of "chic" and
          "conscious," proving that style and sustainability are not mutually
          exclusive.
        </p>

        <h2 className="text-2xl font-semibold mb-4">The Result</h2>
        <p>
          Kualesa Co. has successfully established itself as a leader in the
          responsible fashion space. They have transformed the shopping
          experience into a positive impact mission, successfully blending form
          with functionality. Today, they stand as a beacon of conscience in the
          industry, proving that when you design with purpose, customers don't
          just buy the product—they join the movement.
        </p>
      </div>
    </CaseStudyLayout>
  );
}
