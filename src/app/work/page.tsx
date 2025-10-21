"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { ArrowRight, Search, TrendingUp, Users, Filter } from "lucide-react";

const caseStudies = [
  {
    id: "techflow-growth",
    title: "TechFlow: 300% Growth in Trial Signups",
    client: "TechFlow",
    industry: "SaaS",
    service: "Performance Marketing",
    challenge: "Low conversion rates and high acquisition costs",
    outcome: "300% increase in trial signups",
    metric: "300%",
    description: "increase in trial signups",
    image: "/api/placeholder/400/300",
    testimonial:
      "Toggle didn't just improve our marketing—they transformed our entire business.",
    author: "Sarah Chen",
    role: "Founder",
  },
  {
    id: "retail-brand",
    title: "E-commerce Brand: 250% ROI Improvement",
    client: "RetailCo",
    industry: "E-commerce",
    service: "Performance Marketing",
    challenge: "Poor ad performance and low ROAS",
    outcome: "250% ROI improvement",
    metric: "250%",
    description: "ROI improvement",
    image: "/api/placeholder/400/300",
    testimonial:
      "Finally, a marketing agency that actually understands our business.",
    author: "Marcus Rodriguez",
    role: "CEO",
  },
  {
    id: "service-leads",
    title: "Service Business: 500% More Qualified Leads",
    client: "ServicePro",
    industry: "Professional Services",
    service: "Content Marketing",
    challenge: "Low brand awareness and lead generation",
    outcome: "500% more qualified leads",
    metric: "500%",
    description: "more qualified leads",
    image: "/api/placeholder/400/300",
    testimonial:
      "Working with Toggle was like having a marketing team that actually cares.",
    author: "Lisa Park",
    role: "Marketing Director",
  },
  {
    id: "startup-branding",
    title: "Startup: Complete Brand Transformation",
    client: "InnovateLab",
    industry: "Technology",
    service: "Branding",
    challenge: "Unclear brand identity and positioning",
    outcome: "Complete brand overhaul",
    metric: "100%",
    description: "brand transformation",
    image: "/api/placeholder/400/300",
    testimonial:
      "They helped us find our voice and stand out in a crowded market.",
    author: "David Kim",
    role: "Co-founder",
  },
  {
    id: "saas-website",
    title: "SaaS Platform: Website Redesign & Optimization",
    client: "CloudTech",
    industry: "SaaS",
    service: "Web Development",
    challenge: "Outdated website with poor conversion rates",
    outcome: "150% increase in conversions",
    metric: "150%",
    description: "increase in conversions",
    image: "/api/placeholder/400/300",
    testimonial:
      "The new website perfectly represents our brand and converts visitors into customers.",
    author: "Amanda Lee",
    role: "Head of Marketing",
  },
  {
    id: "email-campaigns",
    title: "E-commerce: Email Marketing Success",
    client: "ShopEasy",
    industry: "E-commerce",
    service: "Email Marketing",
    challenge: "Low email engagement and sales",
    outcome: "200% increase in email revenue",
    metric: "200%",
    description: "increase in email revenue",
    image: "/api/placeholder/400/300",
    testimonial:
      "Our email campaigns now drive more revenue than any other channel.",
    author: "James Wilson",
    role: "Marketing Manager",
  },
];

const industries = [
  "All",
  "SaaS",
  "E-commerce",
  "Professional Services",
  "Technology",
];
const services = [
  "All",
  "Performance Marketing",
  "Content Marketing",
  "Branding",
  "Web Development",
  "Email Marketing",
];

export default function WorkPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedService, setSelectedService] = useState("All");

  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesSearch =
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.challenge.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesIndustry =
      selectedIndustry === "All" || study.industry === selectedIndustry;
    const matchesService =
      selectedService === "All" || study.service === selectedService;

    return matchesSearch && matchesIndustry && matchesService;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-8">
              Our Work
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Real results for{" "}
              <span className="text-primary">real businesses</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              See how we've helped SMEs and startups grow through smart
              strategy, data-driven campaigns, and creative execution.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full md:w-64"
                  />
                </div>
                <div className="flex gap-4">
                  <Select
                    value={selectedIndustry}
                    onValueChange={setSelectedIndustry}
                  >
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={selectedService}
                    onValueChange={setSelectedService}
                  >
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="h-4 w-4" />
                {filteredCaseStudies.length} case studies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCaseStudies.map((study) => (
              <Card
                key={study.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{study.industry}</Badge>
                    <Badge variant="secondary">{study.service}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    <strong>{study.client}</strong>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-1">
                        Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {study.challenge}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {study.metric}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {study.description}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">
                            Result
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {study.outcome}
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <blockquote className="text-sm text-muted-foreground italic mb-2">
                        "{study.testimonial}"
                      </blockquote>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {study.author}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {study.role}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/work/${study.id}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group-hover:gap-2 transition-all"
                    >
                      Read full case study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No case studies found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedIndustry("All");
                  setSelectedService("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to be our next success story?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let's discuss your goals and see how we can help you achieve
              similar results. Book a free discovery call to get started.
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
