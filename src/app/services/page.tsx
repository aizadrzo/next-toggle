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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Toggle Solutions",
  description:
    "Comprehensive digital marketing services: Performance Marketing, Content Strategy, Branding, Web Development, Email Marketing, and Analytics. Book a discovery call.",
  keywords: [
    "digital marketing services",
    "performance marketing",
    "content marketing",
    "branding",
    "web development",
    "email marketing",
    "analytics",
  ],
  openGraph: {
    title: "Our Services | Toggle Solutions",
    description:
      "Comprehensive digital marketing services: Performance Marketing, Content Strategy, Branding, Web Development, Email Marketing, and Analytics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Toggle Solutions",
    description:
      "Comprehensive digital marketing services: Performance Marketing, Content Strategy, Branding, Web Development, Email Marketing, and Analytics.",
  },
};

const services = [
  {
    name: "Performance Marketing",
    description:
      "Google, Meta, TikTok ads that actually convert. We optimize for results, not vanity metrics.",
    icon: Target,
    href: "/services/performance-marketing",
    features: [
      "Campaign strategy & setup",
      "Creative development",
      "A/B testing & optimization",
      "Performance reporting",
    ],
    pricing: "Starting from RM 3,000/month",
  },
  {
    name: "Content Strategy & Marketing",
    description:
      "Strategic content that builds trust and drives action. No fluff, just results.",
    icon: Users,
    href: "/services/content-marketing",
    features: [
      "Content strategy & planning",
      "Blog writing & editing",
      "Social media content",
      "Content calendar management",
    ],
    pricing: "Starting from RM 2,500/month",
  },
  {
    name: "Branding",
    description:
      "Visual identity that resonates with your audience and sets you apart from competitors.",
    icon: Palette,
    href: "/services/branding",
    features: [
      "Brand strategy & positioning",
      "Logo & visual identity",
      "Brand guidelines",
      "Marketing materials",
    ],
    pricing: "Starting from RM 5,000/project",
  },
  {
    name: "Web Development",
    description:
      "Fast, beautiful websites that convert visitors into customers and grow your business.",
    icon: Code,
    href: "/services/web-development",
    features: [
      "Custom website design",
      "Mobile-responsive development",
      "SEO optimization",
      "Performance optimization",
    ],
    pricing: "Starting from RM 8,000/project",
  },
  {
    name: "Email Marketing",
    description:
      "Email campaigns that people actually read and act on. Build relationships that drive sales.",
    icon: Mail,
    href: "/services/email-marketing",
    features: [
      "Email strategy & automation",
      "Template design",
      "List management",
      "Performance analytics",
    ],
    pricing: "Starting from RM 1,500/month",
  },
  {
    name: "Reporting & Analytics",
    description:
      "Clear insights on what's working so you can make smart decisions and grow faster.",
    icon: BarChart3,
    href: "/services/analytics-reporting",
    features: [
      "Analytics setup & tracking",
      "Custom dashboards",
      "Monthly reporting",
      "Strategic recommendations",
    ],
    pricing: "Starting from RM 1,000/month",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-8">
              Our Services
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Everything you need to{" "}
              <span className="text-primary">grow your business</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We offer comprehensive digital marketing services designed to help
              SMEs and startups achieve sustainable growth. Each service is
              tailored to your specific needs and goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">Get started today</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/work">See our results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.name}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <p className="text-sm text-primary font-medium">
                        {service.pricing}
                      </p>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm text-foreground">
                      What's included:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How we work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our proven process ensures you get results from day one
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We learn about your business, goals, and challenges",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We create a custom plan tailored to your needs",
              },
              {
                step: "03",
                title: "Execution",
                description: "We implement campaigns and track performance",
              },
              {
                step: "04",
                title: "Optimize",
                description:
                  "We continuously improve based on data and results",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to get started?
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
                <Link href="/about">Learn more about us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
