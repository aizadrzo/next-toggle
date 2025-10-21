import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
// Container replaced with standard Tailwind classes
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  CheckCircle,
  Quote,
} from "lucide-react";

// Mock data for case studies - in a real app this would come from a CMS
const caseStudies = {
  "techflow-growth": {
    id: "techflow-growth",
    title: "TechFlow: 300% Growth in Trial Signups",
    client: "TechFlow",
    industry: "SaaS",
    service: "Performance Marketing",
    challenge: "Low conversion rates and high acquisition costs",
    solution: "Lead generation campaigns with lead scoring",
    outcome:
      "300% increase in qualified leads, 50% higher trial-to-paid conversion",
    metric: "300%",
    description: "increase in trial signups",
    image: "/api/placeholder/800/400",
    testimonial:
      "Toggle didn't just improve our marketing—they transformed our entire business. The results speak for themselves.",
    author: "Sarah Chen",
    role: "Founder",
    company: "TechFlow",
    duration: "6 months",
    budget: "RM 15,000/month",
    results: [
      "300% increase in trial signups",
      "50% higher trial-to-paid conversion",
      "40% reduction in cost per acquisition",
      "200% increase in qualified leads",
    ],
    process: [
      {
        step: "01",
        title: "Audit & Strategy",
        description:
          "Analyzed existing campaigns and identified optimization opportunities",
      },
      {
        step: "02",
        title: "Campaign Restructure",
        description: "Rebuilt campaigns with better targeting and ad creative",
      },
      {
        step: "03",
        title: "Lead Scoring Implementation",
        description: "Implemented lead scoring to improve qualification",
      },
      {
        step: "04",
        title: "Optimization & Scaling",
        description: "Continuously optimized and scaled successful campaigns",
      },
    ],
    nextCaseStudy: "retail-brand",
    prevCaseStudy: null,
  },
  "retail-brand": {
    id: "retail-brand",
    title: "E-commerce Brand: 250% ROI Improvement",
    client: "RetailCo",
    industry: "E-commerce",
    service: "Performance Marketing",
    challenge: "Poor ad performance and low ROAS",
    solution: "Strategic campaign optimization with creative testing",
    outcome: "250% ROI improvement with better targeting",
    metric: "250%",
    description: "ROI improvement",
    image: "/api/placeholder/800/400",
    testimonial:
      "Finally, a marketing agency that actually understands our business. The results exceeded our expectations.",
    author: "Marcus Rodriguez",
    role: "CEO",
    company: "RetailCo",
    duration: "4 months",
    budget: "RM 20,000/month",
    results: [
      "250% ROI improvement",
      "60% increase in ROAS",
      "35% reduction in cost per sale",
      "150% increase in revenue",
    ],
    process: [
      {
        step: "01",
        title: "Performance Analysis",
        description:
          "Deep dive into existing campaign performance and audience data",
      },
      {
        step: "02",
        title: "Creative Testing",
        description: "Developed and tested new ad creatives and messaging",
      },
      {
        step: "03",
        title: "Audience Optimization",
        description: "Refined targeting based on high-value customer segments",
      },
      {
        step: "04",
        title: "Scale & Optimize",
        description: "Scaled successful campaigns and continued optimization",
      },
    ],
    nextCaseStudy: "service-leads",
    prevCaseStudy: "techflow-growth",
  },
  "service-leads": {
    id: "service-leads",
    title: "Service Business: 500% More Qualified Leads",
    client: "ServicePro",
    industry: "Professional Services",
    service: "Content Marketing",
    challenge: "Low brand awareness and lead generation",
    solution: "Educational content strategy with lead magnets",
    outcome: "500% more qualified leads with content marketing",
    metric: "500%",
    description: "more qualified leads",
    image: "/api/placeholder/800/400",
    testimonial:
      "Working with Toggle was like having a marketing team that actually cares. They understood our business from day one.",
    author: "Lisa Park",
    role: "Marketing Director",
    company: "ServicePro",
    duration: "8 months",
    budget: "RM 8,000/month",
    results: [
      "500% increase in qualified leads",
      "300% increase in organic traffic",
      "200% increase in brand awareness",
      "150% increase in email subscribers",
    ],
    process: [
      {
        step: "01",
        title: "Content Strategy",
        description:
          "Developed comprehensive content strategy and editorial calendar",
      },
      {
        step: "02",
        title: "Lead Magnet Creation",
        description: "Created valuable lead magnets and gated content",
      },
      {
        step: "03",
        title: "SEO Optimization",
        description:
          "Optimized content for search engines and organic discovery",
      },
      {
        step: "04",
        title: "Lead Nurturing",
        description: "Implemented automated email sequences for lead nurturing",
      },
    ],
    nextCaseStudy: null,
    prevCaseStudy: "retail-brand",
  },
};

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies];

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Toggle Solutions",
      description: "The case study you're looking for doesn't exist.",
    };
  }

  return {
    title: `${caseStudy.title} | Toggle Solutions`,
    description: `${
      caseStudy.client
    } achieved ${caseStudy.outcome.toLowerCase()}. See how we helped them overcome ${caseStudy.challenge.toLowerCase()}.`,
    keywords: [
      caseStudy.industry,
      caseStudy.service,
      "case study",
      "marketing results",
      "client success",
    ],
    openGraph: {
      title: `${caseStudy.title} | Toggle Solutions`,
      description: `${
        caseStudy.client
      } achieved ${caseStudy.outcome.toLowerCase()}. See how we helped them overcome ${caseStudy.challenge.toLowerCase()}.`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} | Toggle Solutions`,
      description: `${
        caseStudy.client
      } achieved ${caseStudy.outcome.toLowerCase()}. See how we helped them overcome ${caseStudy.challenge.toLowerCase()}.`,
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Case Study Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The case study you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link href="/work">Back to Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <Button variant="outline" asChild>
                <Link href="/work" className="inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Portfolio
                </Link>
              </Button>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="outline">{caseStudy.industry}</Badge>
                  <Badge variant="secondary">{caseStudy.service}</Badge>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                  {caseStudy.title}
                </h1>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    <strong className="text-foreground">
                      {caseStudy.client}
                    </strong>{" "}
                    was struggling with {caseStudy.challenge.toLowerCase()}.
                  </p>
                  <p>
                    We implemented {caseStudy.solution.toLowerCase()} and
                    achieved {caseStudy.outcome.toLowerCase()}.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">
                      {caseStudy.metric}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      {caseStudy.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-destructive" />
                    The Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Our Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Process
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                How we achieved these results
              </p>
            </div>
            <div className="space-y-8">
              {caseStudy.process.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The Results
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Measurable impact on {caseStudy.client}&apos;s business
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {caseStudy.results.map((result, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      <p className="font-medium text-foreground">{result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="text-center">
              <CardContent className="pt-12 pb-12">
                <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
                <blockquote className="text-xl text-muted-foreground italic mb-8">
                  &ldquo;{caseStudy.testimonial}&rdquo;
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">
                      {caseStudy.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {caseStudy.role}, {caseStudy.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Project Details
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">
                    {caseStudy.duration}
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Budget</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">
                    {caseStudy.budget}
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-foreground">
                    {caseStudy.service}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                {caseStudy.prevCaseStudy && (
                  <Button variant="outline" asChild>
                    <Link
                      href={`/work/${caseStudy.prevCaseStudy}`}
                      className="inline-flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous Case Study
                    </Link>
                  </Button>
                )}
              </div>
              <div className="flex-1 text-center">
                <Button variant="outline" asChild>
                  <Link href="/work">All Case Studies</Link>
                </Button>
              </div>
              <div className="flex-1 text-right">
                {caseStudy.nextCaseStudy && (
                  <Button variant="outline" asChild>
                    <Link
                      href={`/work/${caseStudy.nextCaseStudy}`}
                      className="inline-flex items-center gap-2"
                    >
                      Next Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to achieve similar results?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let&apos;s discuss your goals and see how we can help you achieve
              them. Book a free discovery call to get started.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">Book a discovery call</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/services">View our services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
