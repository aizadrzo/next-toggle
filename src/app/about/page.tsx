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
import { Users, Heart, CheckCircle } from "lucide-react";
import { values, timeline } from "./data";
import { team } from "@/data/company";
import { TeamGrid } from "@/components/marketing/team-grid";

export const metadata: Metadata = {
  title: "About Us | Toggle Solutions",
  description:
    "Learn about Toggle Solutions, a people-first digital marketing agency helping SMEs and startups grow through smart strategy and creative execution.",
  keywords: [
    "about toggle solutions",
    "digital marketing agency",
    "team",
    "company story",
    "mission",
    "values",
  ],
  openGraph: {
    title: "About Us | Toggle Solutions",
    description:
      "Learn about Toggle Solutions, a people-first digital marketing agency helping SMEs and startups grow through smart strategy and creative execution.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Toggle Solutions",
    description:
      "Learn about Toggle Solutions, a people-first digital marketing agency helping SMEs and startups grow through smart strategy and creative execution.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-8">
              About Us
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              We're here to help you <span className="text-primary">grow</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Toggle Solutions was born from a simple belief: marketing should
              be about people, not just numbers. We help SMEs and startups grow
              through smart strategy, data-driven campaigns, and creative
              execution.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-alt py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
                  Our story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    It all started when our founder, Sarah, was working at a
                    large agency and realized that most businesses—especially
                    SMEs and startups—weren't getting the attention and care
                    they deserved.
                  </p>
                  <p>
                    Too many agencies were focused on vanity metrics and complex
                    strategies that didn't actually help businesses grow. We
                    knew there had to be a better way.
                  </p>
                  <p>
                    So we started Toggle Solutions with a simple mission: to be
                    the marketing partner that actually cares about your
                    success. We combine strategic thinking with creative
                    execution, always backed by data and insights.
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

      {/* Values Section */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What makes us different
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our values guide everything we do and how we work with our clients
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-alt py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From humble beginnings to helping businesses across Malaysia grow
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {item.year}
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

      {/* Team Section */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet the team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The people behind Toggle Solutions
            </p>
          </div>
          <TeamGrid title="Leadership" members={team.leadership} />
          <TeamGrid title="Core Team" members={team.coreTeam} />
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-alt py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
                  Our culture
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Work-life balance
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        We believe in sustainable growth—for our clients and our
                        team.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Continuous learning
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        We stay ahead of trends and invest in our team's growth.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Transparency
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Open communication with clients and within our team.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Results-focused
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        We measure success by our clients' success, not our own
                        metrics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Heart className="h-24 w-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to work together?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We'd love to learn about your business and see how we can help you
              grow. Let's start with a conversation.
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
    </div>
  );
}
