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
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Users,
  TrendingUp,
  BarChart3,
  Palette,
  Code,
  Mail,
  CheckCircle,
  Star,
  Quote,
} from "lucide-react";

const services = [
  {
    name: "Performance Marketing",
    description:
      "Google, Meta, TikTok ads that actually convert. We optimize for results, not vanity metrics.",
    icon: Target,
    href: "/services/performance-marketing",
  },
  {
    name: "Content Strategy & Marketing",
    description:
      "Strategic content that builds trust and drives action. No fluff, just results.",
    icon: Users,
    href: "/services/content-marketing",
  },
  {
    name: "Branding",
    description:
      "Visual identity that resonates with your audience and sets you apart.",
    icon: Palette,
    href: "/services/branding",
  },
  {
    name: "Web Development",
    description:
      "Fast, beautiful websites that convert visitors into customers.",
    icon: Code,
    href: "/services/web-development",
  },
  {
    name: "Email Marketing",
    description: "Email campaigns that people actually read and act on.",
    icon: Mail,
    href: "/services/email-marketing",
  },
  {
    name: "Reporting & Analytics",
    description:
      "Clear insights on what's working so you can make smart decisions.",
    icon: BarChart3,
    href: "/services/analytics-reporting",
  },
];

const problems = [
  {
    title: "Your marketing feels scattered",
    description:
      "You're trying everything but nothing seems to stick. Social media, ads, content—it's all over the place.",
  },
  {
    title: "You're not seeing real results",
    description:
      "Likes and followers are nice, but they don't pay the bills. You need actual customers and sales.",
  },
  {
    title: "You don't know what's working",
    description:
      "You're flying blind. No clear data on what's driving results or where to invest your budget.",
  },
];

const solutions = [
  {
    title: "We create focused strategies",
    description:
      "No more throwing spaghetti at the wall. We build clear, focused marketing strategies that work.",
  },
  {
    title: "We drive measurable growth",
    description:
      "Every campaign is designed to generate leads, sales, and real business impact.",
  },
  {
    title: "We give you crystal-clear insights",
    description:
      "You'll know exactly what's working, what isn't, and where to invest next.",
  },
];

const results = [
  {
    client: "Tech Startup",
    industry: "SaaS",
    challenge: "Low conversion rates",
    outcome: "300% increase in trial signups",
    metric: "300%",
    description: "increase in trial signups",
  },
  {
    client: "E-commerce Brand",
    industry: "Retail",
    challenge: "Poor ad performance",
    outcome: "250% ROI improvement",
    metric: "250%",
    description: "ROI improvement",
  },
  {
    client: "Service Business",
    industry: "Professional Services",
    challenge: "Low brand awareness",
    outcome: "500% more qualified leads",
    metric: "500%",
    description: "more qualified leads",
  },
];

const testimonials = [
  {
    quote:
      "Toggle didn't just improve our marketing—they transformed our entire business. We went from struggling to get leads to turning them away.",
    author: "Sarah Chen",
    role: "Founder",
    company: "TechFlow",
  },
  {
    quote:
      "Finally, a marketing agency that actually understands our business. They delivered results that exceeded our expectations.",
    author: "Marcus Rodriguez",
    role: "CEO",
    company: "GrowthCo",
  },
  {
    quote:
      "Working with Toggle was like having a marketing team that actually cares about our success. Highly recommend.",
    author: "Lisa Park",
    role: "Marketing Director",
    company: "InnovateLab",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-8">
              People-first digital marketing
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Marketing that actually{" "}
              <span className="text-primary">moves the needle</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We help SMEs and startups grow through smart strategy, data-driven
              campaigns, and creative execution. No fluff, just results.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">Book a discovery call</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/work">See our work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-alt py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Sound familiar?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These are the challenges we help businesses solve every day
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {problems.map((problem, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {problem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Here's how we fix it
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our approach is simple: focus on what works, measure everything,
              and iterate fast
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {solutions.map((solution, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-6">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-alt py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our core services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to grow your business, delivered with
              expertise and care
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.name}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <service.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {service.description}
                  </CardDescription>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group-hover:gap-2 transition-all"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Real results for real businesses
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Here's what happens when you work with a team that actually cares
              about your success
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {results.map((result, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {result.metric}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {result.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>{result.client}</strong> • {result.industry}
                  </p>
                  <p className="text-sm">{result.challenge}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild size="lg">
              <Link href="/work">See more case studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-alt py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What our clients say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don't just take our word for it—hear from the businesses we've
              helped grow
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
                  <blockquote className="text-lg text-foreground mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex -space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-alt py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="cta-section mx-auto max-w-4xl text-center p-16">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to grow your business?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Let's talk about how we can help you achieve your marketing
                goals. Book a free discovery call and see what's possible.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg">
                  <Link href="/contact">Book a discovery call</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/about">Learn more about us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
