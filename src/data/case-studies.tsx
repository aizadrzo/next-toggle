import React from "react";

export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  client: {
    name: string;
    logo: string;
    industry: string;
    location: string;
    about: string;
    website: string;
  };
  metrics: {
    value: string;
    label: string;
    description: string;
  }[];
  heroImage: string;
  content: React.ReactNode;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "kith-and-kin",
    title: "Unlocking New Growth Channels",
    excerpt:
      "Kith & Kin faced challenges with inconsistent leads from organic methods. We implemented a scalable paid advertising strategy to generate high-quality leads.",
    heroImage: "/images/client-works/kith-and-kin-ads-1.png",
    client: {
      name: "Kith & Kin Realty Sdn. Bhd.",
      logo: "/images/client-logos/kith-kin-logo.png",
      industry: "Real Estate",
      location: "Kuala Lumpur, Malaysia",
      about:
        "Kith & Kin is a boutique real estate agency focusing on high-end properties and personalized services.",
      website: "https://kithandkinrealty.com/",
    },
    metrics: [
      {
        value: "392%",
        label: "Increase in Lead Volume",
        description: "From paid campaigns",
      },
      {
        value: "47%",
        label: "Cost Per Lead",
        description: "Sustainable scaling",
      },
    ],
    content: (
      <>
        <h2>The Challenge</h2>
        <p>
          Kith & Kin Realty, a prominent player in the luxury real estate
          market, relied heavily on organic referrals and traditional
          networking. While effective, these channels were unpredictable. They
          needed a way to predictably generate leads for their agents without
          sacrificing the quality of their prospects.
        </p>
        <h2>Our Approach</h2>
        <p>
          We launched a targeted paid social media campaign focusing on Meta
          (Facebook & Instagram) ads. By leveraging precise audience targeting
          based on interest, behavior, and demographics ensuring we reached
          high-net-worth individuals interested in property investment.
        </p>
        <h3>Key Strategies</h3>
        <ul>
          <li>
            <strong>Creative Testing:</strong> We tested multiple ad formats,
            including video walkthroughs and high-quality image carousels.
          </li>
          <li>
            <strong>Lead Qualification:</strong> Implemented a lead generation
            form with qualifying questions to filter out low-intent users.
          </li>
          <li>
            <strong>Retargeting:</strong> Created custom audiences based on
            website visitors and video viewers to re-engage warm prospects.
          </li>
        </ul>
        <h2>The Results</h2>
        <p>
          Within the first 3 months, the campaign stabilized their lead flow.
          Not only did the volume increase by nearly 400%, but the cost per lead
          stabilized at a profitable rate, allowing Kith & Kin to scale their
          agent team with confidence.
        </p>
      </>
    ),
  },
  {
    slug: "unitar",
    title: "From Moonshot to Milestone",
    excerpt:
      "UNITAR needed to scale student acquisition in a competitive market. We helped them increase lead volume while significantly reducing Cost Per Lead (CPL).",
    heroImage: "/images/client-works/unitar-ads-1.jpg",
    client: {
      name: "UNITAR Education Sdn. Bhd.",
      logo: "/images/client-logos/unitar-logo.png",
      industry: "Education",
      location: "Petaling Jaya, Malaysia",
      about:
        "UNITAR International University is one of the first private universities in Malaysia, offering a wide range of academic programs.",
      website: "https://unitar.my/",
    },
    metrics: [
      {
        value: "32K+",
        label: "Leads from Ads",
        description: "Qualified student leads",
      },
      {
        value: "77%",
        label: "Total Impressions",
        description: "Across Malaysia",
      },
    ],
    content: (
      <>
        <h2>The Objective</h2>
        <p>
          In the highly competitive higher education sector, UNITAR needed to
          stand out to prospective students. The goal was to drive enrollments
          for their new intake while managing a strict marketing budget.
        </p>
        <h2>Strategic Execution</h2>
        <p>
          We devised a multi-channel digital marketing strategy encompassing
          Google Search Ads, Display Network, and Social Media advertising.
        </p>
        <blockquote>
          "Data-driven decisions were at the core of our strategy. We monitored
          performance daily and optimized bids to ensure maximum visibility for
          high-converting keywords."
        </blockquote>
        <h3>Optimization & Scaling</h3>
        <p>
          By segmenting campaigns based on specific faculties and programs, we
          were able to tailor ad copy and landing pages to speak directly to the
          students' interests. This relevance significantly improved quality
          scores and reduced costs.
        </p>
        <h2>Impact</h2>
        <p>
          The campaign resulted in a massive influx of inquiries, with over
          32,000 leads generated. The brand visibility also saw a massive boost,
          cementing UNITAR's position as a top choice for private education.
        </p>
      </>
    ),
  },
];
