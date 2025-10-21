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
import { BarChart3, CheckCircle, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Analytics & Reporting Services | Toggle Solutions",
  description:
    "Turn your data into actionable insights. Analytics setup, custom dashboards, and reporting that drives better business decisions. Book a discovery call.",
  keywords: [
    "analytics",
    "reporting",
    "data analysis",
    "business intelligence",
    "dashboard",
    "performance tracking",
  ],
  openGraph: {
    title: "Analytics & Reporting Services | Toggle Solutions",
    description:
      "Turn your data into actionable insights. Analytics setup, custom dashboards, and reporting that drives better business decisions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Analytics & Reporting Services | Toggle Solutions",
    description:
      "Turn your data into actionable insights. Analytics setup, custom dashboards, and reporting that drives better business decisions.",
  },
};

const deliverables = [
  "Analytics setup & tracking",
  "Custom dashboards & reports",
  "Data analysis & insights",
  "Performance monitoring",
  "Strategic recommendations",
  "Monthly reporting & reviews",
];

const process = [
  {
    step: "01",
    title: "Setup & Configuration",
    description:
      "We set up proper tracking and analytics tools to capture the data you need.",
  },
  {
    step: "02",
    title: "Dashboard Creation",
    description:
      "We create custom dashboards that give you clear visibility into your key metrics.",
  },
  {
    step: "03",
    title: "Data Analysis",
    description:
      "We analyze your data to identify trends, opportunities, and areas for improvement.",
  },
  {
    step: "04",
    title: "Insights & Recommendations",
    description:
      "We provide actionable insights and strategic recommendations based on your data.",
  },
  {
    step: "05",
    title: "Ongoing Monitoring",
    description:
      "We continuously monitor your performance and provide regular updates and reports.",
  },
];

const useCases = [
  {
    industry: "E-commerce",
    challenge: "No clear visibility into marketing performance",
    solution: "Comprehensive analytics setup with custom dashboards",
    result: "300% improvement in marketing ROI, 200% better decision making",
  },
  {
    industry: "SaaS",
    challenge: "Unclear user behavior and conversion paths",
    solution: "User journey tracking and conversion funnel analysis",
    result: "250% increase in conversion rates, 150% reduction in churn",
  },
  {
    industry: "Professional Services",
    challenge: "No data-driven insights for business growth",
    solution: "Business intelligence dashboard with KPI tracking",
    result:
      "400% increase in data-driven decisions, 300% better growth planning",
  },
];

const faqs = [
  {
    question: "What analytics tools do you work with?",
    answer:
      "We work with Google Analytics, Google Tag Manager, Facebook Pixel, and other popular analytics platforms. We can also recommend the best tools for your specific needs.",
  },
  {
    question: "How often do you provide reports?",
    answer:
      "We provide weekly performance updates and monthly comprehensive reports. We can also create custom reporting schedules based on your needs.",
  },
  {
    question: "Can you help interpret our existing data?",
    answer:
      "Absolutely! We can analyze your existing data and provide insights and recommendations to improve your performance.",
  },
  {
    question: "Do you provide strategic recommendations?",
    answer:
      "Yes! We don't just report on data—we provide actionable insights and strategic recommendations to help you grow your business.",
  },
  {
    question: "What metrics do you track?",
    answer:
      "We track metrics relevant to your business goals, including traffic, conversions, engagement, revenue, and other KPIs that matter to your success.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes! We can integrate analytics with your CRM, email marketing platform, and other business systems for comprehensive reporting.",
  },
];

export default function AnalyticsReportingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-8">
              Analytics & Reporting
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Clear insights on{" "}
              <span className="text-primary">what's working</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We turn your data into actionable insights that drive better
              decisions and business growth. No more guessing—just clear,
              data-driven strategies.
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
                  What is analytics & reporting?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Analytics and reporting is about making sense of your data
                    to drive better business decisions. It's not just about
                    collecting data—it's about understanding what it means.
                  </p>
                  <p>
                    We help you track the right metrics, analyze performance,
                    and turn insights into actionable strategies that grow your
                    business.
                  </p>
                  <p>
                    Our approach combines technical expertise with strategic
                    thinking to provide clear, actionable insights you can use
                    immediately.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-24 w-24 text-primary" />
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
              Everything you need for data-driven decision making
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
              A proven approach to analytics success
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
              Here's how we've helped businesses make better decisions with data
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
                Everything you need to know about our analytics & reporting
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
              Ready to make data-driven decisions?
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
