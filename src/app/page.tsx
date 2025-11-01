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
  BarChart3,
  Palette,
  Code,
  Mail,
  CheckCircle,
  Star,
  Quote,
} from "lucide-react";
import { services, testimonials } from "./data";

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
              The Authority in Digital Growth. Data-Powered.{" "}
              <span className="text-primary">Results-Obsessed</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We provide the map to your growth. Smart strategy, real-world
              data, and original creative ideas deliver results you can actually
              feel. Simple plan. Massive impact.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">Book a discovery call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Goals Section */}
      <section className="section-alt py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your Next-Level Growth Goals
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every ambitious business is aiming for these outcomes. We provide
              the strategy to get you there.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-6">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                1. Achieve Unified Marketing Momentum
              </h3>
              <p className="text-muted-foreground">
                Stop running in circles. Imagine all your marketing (social,
                ads, and content) working together as a single, powerful system.
                We'll give you the <strong>simple, unified plan</strong> that
                makes every dollar contribute to the overall goal.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-6">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                2. Convert Effort into Guaranteed Revenue
              </h3>
              <p className="text-muted-foreground">
                Move beyond 'nice-to-have' metrics like likes and followers.
                It's time for marketing that actually pays the bills. We focus
                on strategies that deliver{" "}
                <strong>measurable customers and reliable revenue</strong> you
                can count on.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-6">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                3. Future-Proof Your Sustained Success
              </h3>
              <p className="text-muted-foreground">
                Don't let today's success be tomorrow's bottleneck. We help you
                build a <strong>consistent, scalable marketing engine</strong>{" "}
                that works across multiple markets and keeps your growth smooth,
                no matter how big you get.
              </p>
            </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
