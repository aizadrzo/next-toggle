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
import { Palette, CheckCircle, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Branding Services | Toggle Solutions",
  description:
    "Create distinctive brands that connect with your audience. Logo design, visual identity, and brand strategy that sets you apart. Book a discovery call.",
  keywords: [
    "branding",
    "logo design",
    "visual identity",
    "brand strategy",
    "brand guidelines",
    "brand positioning",
  ],
  openGraph: {
    title: "Branding Services | Toggle Solutions",
    description:
      "Create distinctive brands that connect with your audience. Logo design, visual identity, and brand strategy that sets you apart.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding Services | Toggle Solutions",
    description:
      "Create distinctive brands that connect with your audience. Logo design, visual identity, and brand strategy that sets you apart.",
  },
};

const deliverables = [
  "Brand strategy & positioning",
  "Logo & visual identity",
  "Brand guidelines & style guide",
  "Marketing materials design",
  "Website design direction",
  "Brand implementation support",
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business, audience, and competitive landscape to define your unique brand positioning.",
  },
  {
    step: "02",
    title: "Visual Identity Creation",
    description:
      "We create a distinctive logo and visual identity that reflects your brand personality and values.",
  },
  {
    step: "03",
    title: "Brand Guidelines",
    description:
      "We develop comprehensive brand guidelines to ensure consistent application across all touchpoints.",
  },
  {
    step: "04",
    title: "Implementation",
    description:
      "We help you implement your new brand across all marketing materials and digital platforms.",
  },
  {
    step: "05",
    title: "Launch & Support",
    description:
      "We support your brand launch and provide ongoing guidance to maintain brand consistency.",
  },
];

const useCases = [
  {
    industry: "Startup",
    challenge: "Unclear brand identity and positioning",
    solution: "Complete brand strategy and visual identity",
    result: "Clear brand positioning, 200% increase in brand recognition",
  },
  {
    industry: "E-commerce",
    challenge: "Generic brand that doesn't stand out",
    solution: "Distinctive visual identity and brand personality",
    result: "300% increase in brand recall, 150% higher customer loyalty",
  },
  {
    industry: "Professional Services",
    challenge: "Low brand trust and credibility",
    solution: "Professional brand identity and positioning",
    result: "400% increase in brand trust, 250% more qualified inquiries",
  },
];

const faqs = [
  {
    question: "How long does a branding project take?",
    answer:
      "A complete branding project typically takes 6-12 weeks, depending on the scope and complexity. This includes strategy, design, and implementation phases.",
  },
  {
    question: "What's included in a branding project?",
    answer:
      "We provide brand strategy, logo design, visual identity, brand guidelines, and implementation support. Additional services like website design can be added.",
  },
  {
    question: "Do you work with existing brands?",
    answer:
      "Yes! We work with both new brands and existing brands looking to refresh or reposition their identity. We can evolve your brand while maintaining recognition.",
  },
  {
    question: "What makes a strong brand?",
    answer:
      "A strong brand has clear positioning, distinctive visual identity, consistent messaging, and emotional connection with its audience. It's memorable and trustworthy.",
  },
  {
    question: "How do you ensure brand consistency?",
    answer:
      "We create comprehensive brand guidelines and provide ongoing support to ensure your brand is applied consistently across all touchpoints and materials.",
  },
  {
    question: "Can you help with brand implementation?",
    answer:
      "Absolutely! We provide implementation support and can help you apply your new brand across websites, marketing materials, and digital platforms.",
  },
];

export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-8">
              Branding
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Visual identity that{" "}
              <span className="text-primary">resonates</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We create distinctive brands that connect with your audience and
              set you apart from competitors. From strategy to implementation,
              we've got you covered.
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
                  What is branding?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Branding is more than just a logo—it's the complete
                    experience your customers have with your business. It's how
                    you're perceived, remembered, and differentiated.
                  </p>
                  <p>
                    We create brands that tell your story, connect with your
                    audience, and drive business results. Every element is
                    designed to reinforce your unique value proposition.
                  </p>
                  <p>
                    Our approach combines strategic thinking with creative
                    execution to build brands that stand out and build lasting
                    relationships.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Palette className="h-24 w-24 text-primary" />
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
              Everything you need to build a strong, distinctive brand
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
              A proven approach to branding success
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
              Here's how we've helped businesses build stronger brands
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
                Everything you need to know about our branding services
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
              Ready to build a stronger brand?
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
