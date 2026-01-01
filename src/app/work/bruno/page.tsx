import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyLayout } from "@/components/case-study-layout";

export default function BrunoPage() {
  const study = caseStudies.find((s) => s.slug === "bruno");

  if (!study) {
    notFound();
  }
  return (
    <CaseStudyLayout study={study}>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p>
          BRUNO is more than a Japanese lifestyle brand; they are the curators
          of kitchen elegance. Renowned for seamlessly blending retro-inspired
          aesthetics with modern functionality, their collection—featuring
          signature hot plates and appliances—is a staple for homeowners seeking
          to inject vintage charm into their living spaces. They don't just sell
          tools; they sell a "lifestyle revolution" where design meets daily
          utility.
        </p>

        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
        <p>
          In a crowded home & living market,{" "}
          <b>aesthetics alone aren't enough.</b>
          While BRUNO’s products are visually stunning, the challenge was to
          elevate their e-commerce presence beyond just "pretty product shots."
          They needed to overcome the perception of being merely decorative and
          demonstrate the robust utility of their appliances. The brand needed
          to cut through the digital noise and prove that their form was matched
          equally by their function.
        </p>

        <h2 className="text-2xl font-semibold mb-4">The Goal</h2>
        <p>
          BRUNO sought to <b>humanize their digital footprint</b>. Their
          objective was to shift the narrative from "buying an appliance" to
          "investing in memories." They wanted to capture the target audience of
          design-conscious homemakers and build a deeper emotional connection,
          emphasizing that BRUNO is the centerpiece of joy, togetherness, and
          wholesome experiences in the kitchen.
        </p>

        <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
        <p>
          We moved beyond the spec sheet and focused on{" "}
          <b>lifestyle storytelling</b>. Our strategy highlighted that BRUNO
          products are vessels for connection.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <b>Emotional Positioning :</b> We crafted a campaign that emphasized
            "moments worth savoring," showcasing the appliances as the catalyst
            for gathering friends and family.
          </li>
          <li>
            <b>Visual Storytelling:</b> We created a series of lifestyle videos
            that highlighted the appliances in action, demonstrating their
            utility and the joy they bring to daily life.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">The Result</h2>
        <p>
          The collaboration successfully{" "}
          <b>redefined BRUNO’s value proposition</b> in the digital space. By
          successfully marrying style with practicality, we helped BRUNO
          transcend the "gadget" category and establish themselves as a
          lifestyle essential. The campaign resonated deeply with customers who
          value design, driving stronger engagement and proving that for BRUNO,
          the heart of the home is both beautiful and functional.
        </p>
      </div>
    </CaseStudyLayout>
  );
}
