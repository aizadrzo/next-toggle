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
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Filter,
  BookOpen,
} from "lucide-react";

const articles = [
  {
    id: "performance-marketing-guide",
    title: "The Complete Guide to Performance Marketing in 2024",
    excerpt:
      "Everything you need to know about performance marketing, from strategy to execution and optimization.",
    content: "Performance marketing has evolved significantly in 2024...",
    author: "Sarah Chen",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["Performance Marketing", "Strategy", "Guide"],
    category: "Marketing",
    image: "/api/placeholder/400/250",
  },
  {
    id: "content-strategy-tips",
    title: "5 Content Strategy Tips That Actually Work",
    excerpt:
      "Learn the proven content strategies that help businesses build trust and drive conversions.",
    content: "Content marketing isn't just about creating content...",
    author: "Marcus Rodriguez",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    tags: ["Content Marketing", "Strategy", "Tips"],
    category: "Content",
    image: "/api/placeholder/400/250",
  },
  {
    id: "branding-small-business",
    title: "Branding for Small Businesses: A Practical Guide",
    excerpt:
      "How to build a strong brand identity that resonates with your audience and sets you apart.",
    content: "Branding isn't just for big corporations...",
    author: "Lisa Park",
    publishedAt: "2024-01-05",
    readTime: "7 min read",
    tags: ["Branding", "Small Business", "Identity"],
    category: "Branding",
    image: "/api/placeholder/400/250",
  },
  {
    id: "email-marketing-best-practices",
    title: "Email Marketing Best Practices for 2024",
    excerpt:
      "The latest email marketing strategies and tactics that deliver real results.",
    content: "Email marketing continues to be one of the most effective...",
    author: "David Kim",
    publishedAt: "2024-01-01",
    readTime: "5 min read",
    tags: ["Email Marketing", "Best Practices", "Strategy"],
    category: "Email",
    image: "/api/placeholder/400/250",
  },
  {
    id: "web-development-trends",
    title: "Web Development Trends Every Business Should Know",
    excerpt:
      "Stay ahead with the latest web development trends that impact user experience and conversions.",
    content: "Web development is constantly evolving...",
    author: "Amanda Lee",
    publishedAt: "2023-12-28",
    readTime: "9 min read",
    tags: ["Web Development", "Trends", "UX"],
    category: "Development",
    image: "/api/placeholder/400/250",
  },
  {
    id: "analytics-dashboard-setup",
    title: "How to Set Up Analytics Dashboards That Matter",
    excerpt:
      "Learn how to create analytics dashboards that provide actionable insights for your business.",
    content: "Analytics dashboards are only as good as the data...",
    author: "James Wilson",
    publishedAt: "2023-12-25",
    readTime: "6 min read",
    tags: ["Analytics", "Dashboard", "Data"],
    category: "Analytics",
    image: "/api/placeholder/400/250",
  },
];

const categories = [
  "All",
  "Marketing",
  "Content",
  "Branding",
  "Email",
  "Development",
  "Analytics",
];
const tags = [
  "All",
  "Performance Marketing",
  "Content Marketing",
  "Branding",
  "Small Business",
  "Strategy",
  "Best Practices",
  "Trends",
  "UX",
  "Data",
];

export default function InsightsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesTag =
      selectedTag === "All" || article.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-8">
              Insights & Resources
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Marketing insights that{" "}
              <span className="text-primary">actually help</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Practical tips, strategies, and insights to help you grow your
              business. No fluff, just actionable advice from our team.
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
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full md:w-64"
                  />
                </div>
                <div className="flex gap-4">
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedTag} onValueChange={setSelectedTag}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Tag" />
                    </SelectTrigger>
                    <SelectContent>
                      {tags.map((tag) => (
                        <SelectItem key={tag} value={tag}>
                          {tag}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="h-4 w-4" />
                {filteredArticles.length} articles
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <Card
                key={article.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{article.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {article.author}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {new Date(article.publishedAt).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <Link
                        href={`/insights/${article.id}`}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group-hover:gap-2 transition-all"
                      >
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedTag("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Stay updated with our latest insights
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get our best marketing tips and strategies delivered straight to
              your inbox.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Input
                placeholder="Enter your email address"
                className="sm:w-80"
              />
              <Button size="lg">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to put these insights into action?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let's discuss how we can help you implement these strategies and
              grow your business. Book a free discovery call to get started.
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
