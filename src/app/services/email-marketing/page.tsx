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
import { Mail, CheckCircle, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Email Marketing Services | Toggle Solutions",
  description:
    "Create email campaigns that people actually read. Email marketing strategy, automation, and campaigns that drive engagement and sales. Book a discovery call.",
  keywords: [
    "email marketing",
    "email campaigns",
    "email automation",
    "lead nurturing",
    "email strategy",
    "conversion optimization",
  ],
  openGraph: {
    title: "Email Marketing Services | Toggle Solutions",
    description:
      "Create email campaigns that people actually read. Email marketing strategy, automation, and campaigns that drive engagement and sales.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Marketing Services | Toggle Solutions",
    description:
      "Create email campaigns that people actually read. Email marketing strategy, automation, and campaigns that drive engagement and sales.",
  },
};

const deliverables = [
  "Email strategy & automation",
  "Template design & development",
  "List management & segmentation",
  "Campaign creation & execution",
  "Performance analytics & reporting",
  "A/B testing & optimization",
];

const process = [
  {
    step: "01",
    title: "Strategy & Planning",
    description:
      "We analyze your audience and goals to create a comprehensive email marketing strategy.",
  },
  {
    step: "02",
    title: "List Building & Segmentation",
    description:
      "We help you grow your email list and segment subscribers for targeted campaigns.",
  },
  {
    step: "03",
    title: "Template Design",
    description:
      "We create beautiful, responsive email templates that reflect your brand.",
  },
  {
    step: "04",
    title: "Campaign Creation",
    description:
      "We develop engaging email campaigns that drive action and build relationships.",
  },
  {
    step: "05",
    title: "Automation & Optimization",
    description:
      "We set up automated sequences and continuously optimize for better results.",
  },
];

const useCases = [
  {
    industry: "E-commerce",
    challenge: "Low email engagement and sales",
    solution:
      "Automated email sequences with personalized product recommendations",
    result: "200% increase in email revenue, 150% higher customer retention",
  },
  {
    industry: "SaaS",
    challenge: "Poor user onboarding and churn",
    solution: "Onboarding email series with feature education and support",
    result: "300% increase in user activation, 50% reduction in churn",
  },
  {
    industry: "Professional Services",
    challenge: "Limited lead nurturing and conversion",
    solution: "Lead nurturing sequences with valuable content and case studies",
    result: "400% increase in lead conversion, 250% more qualified inquiries",
  },
];

const faqs = [
  {
    question: "How long does it take to see results from email marketing?",
    answer:
      "You can see initial results within 2-4 weeks, with significant improvements typically occurring after 2-3 months of consistent, strategic email marketing.",
  },
  {
    question: "What email platforms do you work with?",
    answer:
      "We work with popular platforms like Mailchimp, ConvertKit, Klaviyo, and others. We can also recommend the best platform for your specific needs.",
  },
  {
    question: "How do you measure email marketing success?",
    answer:
      "We track open rates, click rates, conversion rates, revenue per email, and overall ROI. We also measure engagement and subscriber growth.",
  },
  {
    question: "Can you help grow our email list?",
    answer:
      "Yes! We can help you implement lead magnets, optimize signup forms, and create strategies to grow your email list organically.",
  },
  {
    question: "Do you create automated email sequences?",
    answer:
      "Absolutely! We create welcome series, onboarding sequences, nurture campaigns, and other automated email flows to engage subscribers.",
  },
  {
    question: "What's your minimum engagement?",
    answer:
      "Our minimum engagement is 3 months to ensure we can develop and execute a proper email marketing strategy. Most clients see the best results with 6-12 month engagements.",
  },
];

export default function EmailMarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-8">
              Email Marketing
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Email campaigns that{" "}
              <span className="text-primary">people actually read</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We create email marketing campaigns that build relationships,
              drive engagement, and generate real business results. No spam,
              just value.
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
                  What is email marketing?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Email marketing is about building relationships with your
                    audience through valuable, relevant content delivered
                    directly to their inbox. It's one of the most effective
                    marketing channels.
                  </p>
                  <p>
                    We create email campaigns that educate, engage, and convert
                    your subscribers into customers. Every email is designed to
                    provide value and drive action.
                  </p>
                  <p>
                    Our approach combines strategic planning, creative design,
                    and data-driven optimization to maximize your email
                    marketing ROI.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-24 w-24 text-primary" />
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
              Everything you need for successful email marketing
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
              A proven approach to email marketing success
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
              Here's how we've helped businesses grow with email marketing
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
                Everything you need to know about our email marketing services
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
              Ready to grow with email marketing?
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
