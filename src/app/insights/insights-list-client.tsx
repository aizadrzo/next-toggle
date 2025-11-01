"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
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
import { Search, Filter } from "lucide-react";
import { InsightCard } from "@/components/insights/insight-card";
import type { WordPressPostWithEmbed } from "@/lib/wordpress";
import { getCategories, getTags } from "@/lib/wordpress";

interface InsightsListClientProps {
  initialPosts: WordPressPostWithEmbed[];
}

export function InsightsListClient({ initialPosts }: InsightsListClientProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Extract unique categories and tags from posts
  const { categories, tags } = useMemo(() => {
    const categorySet = new Set<string>();
    const tagSet = new Set<string>();

    initialPosts.forEach((post) => {
      const postCategories = getCategories(post);
      const postTags = getTags(post);

      postCategories.forEach((cat) => categorySet.add(cat.name));
      postTags.forEach((tag) => tagSet.add(tag.name));
    });

    return {
      categories: Array.from(categorySet).sort(),
      tags: Array.from(tagSet).sort(),
    };
  }, [initialPosts]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const title = post.title.rendered.toLowerCase();
      const excerpt = post.excerpt.rendered.toLowerCase();
      const author = post._embedded?.author?.[0]?.name?.toLowerCase() || "";

      const matchesSearch =
        !searchTerm ||
        title.includes(searchTerm.toLowerCase()) ||
        excerpt.includes(searchTerm.toLowerCase()) ||
        author.includes(searchTerm.toLowerCase());

      const postCategories = getCategories(post);
      const postTags = getTags(post);

      const matchesCategory =
        selectedCategory === "All" ||
        postCategories.some((cat) => cat.name === selectedCategory);

      const matchesTag =
        selectedTag === "All" ||
        postTags.some((tag) => tag.name === selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [initialPosts, searchTerm, selectedCategory, selectedTag]);

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
                      <SelectItem value="All">All</SelectItem>
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
                      <SelectItem value="All">All</SelectItem>
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
                {filteredPosts.length} articles
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <InsightCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
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
