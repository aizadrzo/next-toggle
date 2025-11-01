import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Share2,
  User,
} from "lucide-react";
import {
  getPostBySlug,
  getAllPostSlugs,
  getAuthorName,
  getFeaturedImageUrl,
  getCategories,
  getTags,
  getPlainExcerpt,
  calculateReadingTime,
} from "@/lib/wordpress";
import { WordPressContent } from "@/components/insights/wordpress-content";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs(100);
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Toggle Solutions",
      description: "The article you're looking for doesn't exist.",
    };
  }

  const excerpt = getPlainExcerpt(post.excerpt.rendered);
  const author = getAuthorName(post);
  const featuredImage = getFeaturedImageUrl(post);

  const metadata: Metadata = {
    title: `${post.title.rendered} | Toggle Solutions`,
    description: excerpt,
    keywords: getTags(post)
      .map((tag) => tag.name)
      .concat(["marketing insights", "marketing blog", "digital marketing"]),
    openGraph: {
      title: `${post.title.rendered} | Toggle Solutions`,
      description: excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: author ? [author] : undefined,
      images: featuredImage
        ? [
            {
              url: featuredImage,
              alt: post.title.rendered,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title.rendered} | Toggle Solutions`,
      description: excerpt,
      images: featuredImage ? [featuredImage] : [],
    },
  };

  return metadata;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const featuredImage = getFeaturedImageUrl(post);
  const author = getAuthorName(post);
  const categories = getCategories(post);
  const tags = getTags(post);
  const readingTime = calculateReadingTime(post.content.rendered);
  const publishedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get adjacent posts for navigation
  const allPosts = await getAllPostSlugs(100);
  const currentIndex = allPosts.findIndex((s) => s === slug);
  const prevSlug = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextSlug =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <Button variant="outline" asChild>
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Insights
                </Link>
              </Button>
            </div>

            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
                {categories.length > 0 && (
                  <Badge variant="outline">{categories[0].name}</Badge>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {readingTime} min read
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                {post.title.rendered}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {getPlainExcerpt(post.excerpt.rendered, 200)}
              </p>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                {author && (
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-foreground">{author}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {publishedDate}
                      </div>
                    </div>
                  </div>
                )}
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      post.title.rendered
                    )}&url=${encodeURIComponent(
                      `${
                        process.env.NEXT_PUBLIC_SITE_URL ||
                        "https://yoursite.com"
                      }/insights/${post.slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {featuredImage && (
        <section className="py-8">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={featuredImage}
                  alt={post.title.rendered}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <WordPressContent content={post.content.rendered} />
          </div>
        </div>
      </section>

      {/* Tags */}
      {tags.length > 0 && (
        <section className="py-12">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-wrap gap-2 justify-center">
                {tags.map((tag) => (
                  <Badge key={tag.id} variant="secondary">
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                {prevSlug && (
                  <Button variant="outline" asChild>
                    <Link
                      href={`/insights/${prevSlug}`}
                      className="inline-flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span className="hidden sm:inline">Previous Article</span>
                      <span className="sm:hidden">Previous</span>
                    </Link>
                  </Button>
                )}
              </div>
              <div className="flex-1 text-center min-w-0">
                <Button variant="outline" asChild>
                  <Link href="/insights">All Articles</Link>
                </Button>
              </div>
              <div className="flex-1 text-right min-w-0">
                {nextSlug && (
                  <Button variant="outline" asChild>
                    <Link
                      href={`/insights/${nextSlug}`}
                      className="inline-flex items-center gap-2"
                    >
                      <span className="hidden sm:inline">Next Article</span>
                      <span className="sm:hidden">Next</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
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
              Ready to put these insights into action?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let&apos;s discuss how we can help you implement these strategies
              and grow your business. Book a free discovery call to get started.
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
