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
import { Target, CheckCircle, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Marketing Services | Toggle Solutions",
  description:
    "Drive real business results with our performance marketing campaigns. Google, Meta, TikTok ads that actually convert. Book a discovery call.",
  keywords: [
    "performance marketing",
    "google ads",
    "facebook ads",
    "tiktok ads",
    "conversion optimization",
    "ROI",
  ],
  openGraph: {
    title: "Performance Marketing Services | Toggle Solutions",
    description:
      "Drive real business results with our performance marketing campaigns. Google, Meta, TikTok ads that actually convert.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Services | Toggle Solutions",
    description:
      "Drive real business results with our performance marketing campaigns. Google, Meta, TikTok ads that actually convert.",
  },
};

const deliverables = [
  "Campaign strategy & setup",
  "Creative development & testing",
  "Audience research & targeting",
  "A/B testing & optimization",
  "Performance reporting & analysis",
  "Budget management & scaling",
];

const process = [
  {
    step: "01",
    title: "Strategy & Planning",
    description:
      "We analyze your business, audience, and goals to create a custom campaign strategy.",
  },
  {
    step: "02",
    title: "Campaign Setup",
    description:
      "We build and launch your campaigns across Google, Meta, and TikTok with proper tracking.",
  },
  {
    step: "03",
    title: "Creative Development",
    description:
      "We create compelling ad creatives that resonate with your target audience.",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description:
      "We continuously test and optimize campaigns to improve performance and ROI.",
  },
  {
    step: "05",
    title: "Reporting & Scaling",
    description:
      "We provide regular reports and scale successful campaigns for maximum growth.",
  },
];

const useCases = [
  {
    industry: "E-commerce",
    challenge: "Low conversion rates and high acquisition costs",
    solution: "Optimized product ads with dynamic retargeting",
    result: "40% increase in conversion rate, 25% lower CPA",
  },
  {
    industry: "SaaS",
    challenge: "Struggling to generate qualified trial signups",
    solution: "Lead generation campaigns with lead scoring",
    result:
      "300% increase in qualified leads, 50% higher trial-to-paid conversion",
  },
  {
    industry: "Professional Services",
    challenge: "Limited brand awareness and lead generation",
    solution: "Brand awareness campaigns with lead nurturing",
    result: "200% increase in brand awareness, 150% more qualified inquiries",
  },
];

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most campaigns start showing initial results within 2-4 weeks, with significant improvements typically seen within 6-8 weeks as we optimize and scale successful campaigns.",
  },
  {
    question: "What platforms do you work with?",
    answer:
      "We specialize in Google Ads, Meta (Facebook & Instagram), TikTok Ads, and LinkedIn. We choose platforms based on where your audience is most active.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We focus on business metrics like cost per acquisition, return on ad spend, and lifetime value. We also track conversion rates, lead quality, and revenue attribution.",
  },
  {
    question: "What's your minimum budget?",
    answer:
      "Our minimum monthly budget is RM 3,000 for ad spend, plus our management fee. This ensures we can properly test and optimize campaigns.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Absolutely! We specialize in helping SMEs and startups grow. We understand the unique challenges and opportunities that smaller businesses face.",
  },
  {
    question: "How often do you report on performance?",
    answer:
      "We provide weekly performance reports and monthly strategy reviews. You'll always know how your campaigns are performing and what we're doing to improve them.",
  },
];

export default function PerformanceMarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-8">
              Performance Marketing
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Ads that actually <span className="text-primary">convert</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We create and optimize performance marketing campaigns that drive
              real business results. No vanity metrics, just measurable growth
              for your business.
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
                  What is performance marketing?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Performance marketing is all about measurable results.
                    Unlike traditional advertising, every dollar spent is
                    tracked and optimized for specific business outcomes like
                    leads, sales, or signups.
                  </p>
                  <p>
                    We focus on platforms like Google Ads, Meta (Facebook &
                    Instagram), and TikTok Ads to reach your target audience
                    with precision and measure every interaction.
                  </p>
                  <p>
                    Our approach combines strategic targeting, compelling
                    creative, and continuous optimization to maximize your
                    return on investment.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Target className="h-24 w-24 text-primary" />
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
              Everything you need to run successful performance marketing
              campaigns
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
              A proven approach to performance marketing success
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
                Everything you need to know about our performance marketing
                services
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
              Ready to grow with performance marketing?
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
