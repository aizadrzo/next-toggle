import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
// Container replaced with standard Tailwind classes
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import {
  Users,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  FileText,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Content Marketing Services | Toggle Solutions",
  description:
    "Build trust and drive action with strategic content marketing. Blog writing, social media content, and content strategy that converts. Book a discovery call.",
  keywords: [
    "content marketing",
    "blog writing",
    "content strategy",
    "social media content",
    "SEO content",
    "lead generation",
  ],
  openGraph: {
    title: "Content Marketing Services | Toggle Solutions",
    description:
      "Build trust and drive action with strategic content marketing. Blog writing, social media content, and content strategy that converts.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing Services | Toggle Solutions",
    description:
      "Build trust and drive action with strategic content marketing. Blog writing, social media content, and content strategy that converts.",
  },
};

const deliverables = [
  "Content strategy & planning",
  "Blog writing & editing",
  "Social media content",
  "Content calendar management",
  "SEO-optimized content",
  "Content performance analysis",
];

const process = [
  {
    step: "01",
    title: "Strategy & Planning",
    description:
      "We analyze your audience, goals, and competitive landscape to create a comprehensive content strategy.",
  },
  {
    step: "02",
    title: "Content Creation",
    description:
      "We create high-quality, engaging content that resonates with your audience and drives action.",
  },
  {
    step: "03",
    title: "Distribution & Promotion",
    description:
      "We ensure your content reaches the right people through strategic distribution and promotion.",
  },
  {
    step: "04",
    title: "Performance Tracking",
    description:
      "We monitor content performance and optimize based on data and audience feedback.",
  },
  {
    step: "05",
    title: "Iteration & Growth",
    description:
      "We continuously refine our approach to improve results and scale your content marketing efforts.",
  },
];

const useCases = [
  {
    industry: "SaaS",
    challenge: "Low brand awareness and lead generation",
    solution: "Educational content strategy with lead magnets",
    result: "400% increase in organic traffic, 200% more qualified leads",
  },
  {
    industry: "E-commerce",
    challenge: "Poor customer engagement and retention",
    solution: "Customer-focused content with storytelling",
    result: "300% increase in email engagement, 150% higher customer retention",
  },
  {
    industry: "Professional Services",
    challenge: "Limited thought leadership and credibility",
    solution: "Expert content positioning and industry insights",
    result: "500% increase in brand mentions, 250% more referral business",
  },
];

const faqs = [
  {
    question: "How long does it take to see results from content marketing?",
    answer:
      "Content marketing is a long-term strategy. You'll typically see initial results within 3-6 months, with significant growth occurring after 6-12 months of consistent, high-quality content.",
  },
  {
    question: "What types of content do you create?",
    answer:
      "We create blog posts, social media content, email newsletters, case studies, whitepapers, and more. The content mix depends on your audience and business goals.",
  },
  {
    question: "How do you measure content marketing success?",
    answer:
      "We track metrics like organic traffic, lead generation, engagement rates, brand awareness, and conversion rates. We also measure content performance against your business objectives.",
  },
  {
    question: "Do you handle content distribution?",
    answer:
      "Yes! We create content and handle distribution across your owned channels, including your website, social media, and email marketing platforms.",
  },
  {
    question: "Can you work with our existing content team?",
    answer:
      "Absolutely! We can work alongside your existing team, providing strategy, guidance, and additional content creation support as needed.",
  },
  {
    question: "What's your minimum engagement?",
    answer:
      "Our minimum engagement is 3 months to ensure we can develop and execute a proper content strategy. Most clients see the best results with 6-12 month engagements.",
  },
];

export default function ContentMarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-8">
              Content Strategy & Marketing
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Content that builds{" "}
              <span className="text-primary">trust and drives action</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We create strategic content that educates your audience, builds
              trust, and drives meaningful business results. No fluff, just
              content that works.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">Get started</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/work">See case studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
                  What is content marketing?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Content marketing is about creating valuable, relevant
                    content that attracts and engages your target audience. It's
                    not about selling directly, but about building relationships
                    and trust.
                  </p>
                  <p>
                    We focus on creating content that educates, entertains, and
                    inspires your audience while subtly guiding them toward your
                    products or services.
                  </p>
                  <p>
                    Our approach combines strategic planning, creative
                    execution, and data-driven optimization to maximize your
                    content's impact.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="h-24 w-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What you get
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to run successful content marketing campaigns
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((deliverable, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{deliverable}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A proven approach to content marketing success
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {process.map((item, index) => (
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

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Real results
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Here's how we've helped businesses across different industries
              grow
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <Badge variant="outline">{useCase.industry}</Badge>
                  </div>
                  <CardTitle className="text-lg">Challenge</CardTitle>
                  <CardDescription>{useCase.challenge}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Solution
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {useCase.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Result
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {useCase.result}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about our content marketing services
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to grow with content marketing?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let's discuss your goals and see how we can help you achieve them.
              Book a free discovery call to get started.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">Book a discovery call</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/services">View all services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
