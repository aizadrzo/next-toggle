import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Share2,
  User,
} from "lucide-react";

// Mock data for articles - in a real app this would come from a CMS
const articles = {
  "performance-marketing-guide": {
    id: "performance-marketing-guide",
    title: "The Complete Guide to Performance Marketing in 2024",
    excerpt:
      "Everything you need to know about performance marketing, from strategy to execution and optimization.",
    content: `
      <h2>What is Performance Marketing?</h2>
      <p>Performance marketing has evolved significantly in 2024. Unlike traditional advertising, performance marketing focuses on measurable results and specific business outcomes like leads, sales, or signups.</p>
      
      <h3>Key Components of Performance Marketing</h3>
      <ul>
        <li><strong>Data-driven targeting:</strong> Using customer data to reach the right audience</li>
        <li><strong>Conversion tracking:</strong> Measuring every interaction and outcome</li>
        <li><strong>ROI optimization:</strong> Continuously improving return on investment</li>
        <li><strong>Multi-channel approach:</strong> Coordinating campaigns across platforms</li>
      </ul>
      
      <h3>Platforms and Channels</h3>
      <p>The most effective performance marketing platforms include:</p>
      <ul>
        <li>Google Ads (Search, Display, YouTube)</li>
        <li>Meta (Facebook, Instagram)</li>
        <li>TikTok Ads</li>
        <li>LinkedIn Ads</li>
        <li>Email marketing platforms</li>
      </ul>
      
      <h3>Best Practices for 2024</h3>
      <p>To succeed in performance marketing this year, focus on:</p>
      <ol>
        <li><strong>Privacy-first approach:</strong> Adapt to cookie-less tracking and privacy regulations</li>
        <li><strong>Creative testing:</strong> Continuously test and optimize ad creatives</li>
        <li><strong>Attribution modeling:</strong> Use advanced attribution to understand customer journeys</li>
        <li><strong>Automation:</strong> Leverage AI and automation tools for optimization</li>
      </ol>
      
      <h3>Measuring Success</h3>
      <p>Key metrics to track include:</p>
      <ul>
        <li>Cost per acquisition (CPA)</li>
        <li>Return on ad spend (ROAS)</li>
        <li>Customer lifetime value (CLV)</li>
        <li>Conversion rates</li>
        <li>Attribution across touchpoints</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Performance marketing in 2024 requires a strategic approach that balances privacy, creativity, and data-driven optimization. By focusing on measurable outcomes and continuous improvement, businesses can achieve sustainable growth through performance marketing.</p>
    `,
    author: "Sarah Chen",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["Performance Marketing", "Strategy", "Guide"],
    category: "Marketing",
    image: "/api/placeholder/800/400",
    nextArticle: "content-strategy-tips",
    prevArticle: null,
  },
  "content-strategy-tips": {
    id: "content-strategy-tips",
    title: "5 Content Strategy Tips That Actually Work",
    excerpt:
      "Learn the proven content strategies that help businesses build trust and drive conversions.",
    content: `
      <h2>Why Content Strategy Matters</h2>
      <p>Content marketing isn't just about creating content—it's about creating the right content for the right audience at the right time. A solid content strategy can transform your business by building trust, driving traffic, and generating leads.</p>
      
      <h3>1. Know Your Audience Inside and Out</h3>
      <p>Before you create any content, you need to understand who you're creating it for. This means going beyond basic demographics to understand:</p>
      <ul>
        <li>Their pain points and challenges</li>
        <li>Their goals and aspirations</li>
        <li>Where they spend their time online</li>
        <li>What type of content they prefer</li>
        <li>How they make purchasing decisions</li>
      </ul>
      
      <h3>2. Create a Content Pillar Strategy</h3>
      <p>Organize your content around 3-5 main themes that align with your business goals and audience interests. These pillars should:</p>
      <ul>
        <li>Address your audience's main pain points</li>
        <li>Showcase your expertise</li>
        <li>Support your business objectives</li>
        <li>Differentiate you from competitors</li>
      </ul>
      
      <h3>3. Focus on Value Over Promotion</h3>
      <p>The 80/20 rule applies to content marketing: 80% of your content should provide value, while only 20% should be promotional. This means:</p>
      <ul>
        <li>Educational content that solves problems</li>
        <li>Behind-the-scenes insights</li>
        <li>Industry trends and analysis</li>
        <li>Case studies and success stories</li>
      </ul>
      
      <h3>4. Optimize for Search Intent</h3>
      <p>Understanding search intent is crucial for content success. Create content that matches what people are actually looking for:</p>
      <ul>
        <li><strong>Informational:</strong> How-to guides, tutorials, explanations</li>
        <li><strong>Navigational:</strong> Brand-specific searches</li>
        <li><strong>Transactional:</strong> Product comparisons, reviews</li>
        <li><strong>Commercial:</strong> Best practices, industry insights</li>
      </ul>
      
      <h3>5. Measure and Iterate</h3>
      <p>Content strategy is not a set-it-and-forget-it activity. You need to continuously measure performance and adjust your approach:</p>
      <ul>
        <li>Track engagement metrics (views, shares, comments)</li>
        <li>Monitor conversion rates</li>
        <li>Analyze which topics resonate most</li>
        <li>Adjust content frequency and format based on results</li>
      </ul>
      
      <h3>Putting It All Together</h3>
      <p>These five tips form the foundation of a successful content strategy. Start by understanding your audience, then create valuable content that addresses their needs while supporting your business goals. Remember, consistency and quality matter more than quantity.</p>
    `,
    author: "Marcus Rodriguez",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    tags: ["Content Marketing", "Strategy", "Tips"],
    category: "Content",
    image: "/api/placeholder/800/400",
    nextArticle: "branding-small-business",
    prevArticle: "performance-marketing-guide",
  },
  "branding-small-business": {
    id: "branding-small-business",
    title: "Branding for Small Businesses: A Practical Guide",
    excerpt:
      "How to build a strong brand identity that resonates with your audience and sets you apart.",
    content: `
      <h2>Why Branding Matters for Small Businesses</h2>
      <p>Branding isn't just for big corporations—it's essential for small businesses too. A strong brand helps you stand out, build trust, and create lasting relationships with customers.</p>
      
      <h3>Understanding Brand vs. Logo</h3>
      <p>Many people confuse branding with just having a logo, but branding is much more comprehensive:</p>
      <ul>
        <li><strong>Brand:</strong> The complete experience customers have with your business</li>
        <li><strong>Logo:</strong> Just one visual element of your brand</li>
        <li><strong>Brand Identity:</strong> Visual elements (colors, fonts, imagery)</li>
        <li><strong>Brand Voice:</strong> How you communicate with customers</li>
        <li><strong>Brand Values:</strong> What you stand for and believe in</li>
      </ul>
      
      <h3>Step 1: Define Your Brand Foundation</h3>
      <p>Before creating any visual elements, establish your brand foundation:</p>
      <ul>
        <li><strong>Mission:</strong> Why does your business exist?</li>
        <li><strong>Vision:</strong> Where do you want to be in the future?</li>
        <li><strong>Values:</strong> What principles guide your decisions?</li>
        <li><strong>Personality:</strong> How do you want to be perceived?</li>
      </ul>
      
      <h3>Step 2: Know Your Audience</h3>
      <p>Your brand should resonate with your target audience. Research and understand:</p>
      <ul>
        <li>Demographics (age, gender, income, location)</li>
        <li>Psychographics (interests, values, lifestyle)</li>
        <li>Pain points and challenges</li>
        <li>Preferred communication channels</li>
      </ul>
      
      <h3>Step 3: Develop Your Visual Identity</h3>
      <p>Create visual elements that reflect your brand personality:</p>
      <ul>
        <li><strong>Color palette:</strong> Choose 2-3 primary colors that evoke the right emotions</li>
        <li><strong>Typography:</strong> Select fonts that match your brand personality</li>
        <li><strong>Logo design:</strong> Create a simple, memorable logo</li>
        <li><strong>Imagery style:</strong> Define the type of photos and graphics you'll use</li>
      </ul>
      
      <h3>Step 4: Establish Your Brand Voice</h3>
      <p>Your brand voice should be consistent across all touchpoints:</p>
      <ul>
        <li>Website copy</li>
        <li>Social media posts</li>
        <li>Email communications</li>
        <li>Customer service interactions</li>
      </ul>
      
      <h3>Step 5: Create Brand Guidelines</h3>
      <p>Document your brand elements to ensure consistency:</p>
      <ul>
        <li>Logo usage rules</li>
        <li>Color codes and usage guidelines</li>
        <li>Typography specifications</li>
        <li>Voice and tone guidelines</li>
        <li>Do's and don'ts</li>
      </ul>
      
      <h3>Common Branding Mistakes to Avoid</h3>
      <ul>
        <li>Trying to appeal to everyone</li>
        <li>Copying competitors instead of being unique</li>
        <li>Inconsistent application across channels</li>
        <li>Not investing in professional design</li>
        <li>Changing your brand too frequently</li>
      </ul>
      
      <h3>Measuring Brand Success</h3>
      <p>Track these metrics to measure your branding efforts:</p>
      <ul>
        <li>Brand awareness surveys</li>
        <li>Customer recognition and recall</li>
        <li>Social media engagement</li>
        <li>Customer loyalty and retention</li>
        <li>Word-of-mouth referrals</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Building a strong brand takes time and effort, but it's an investment that pays off in the long run. Start with a solid foundation, be consistent in your application, and always keep your audience in mind. Remember, your brand is what people say about you when you're not in the room.</p>
    `,
    author: "Lisa Park",
    publishedAt: "2024-01-05",
    readTime: "7 min read",
    tags: ["Branding", "Small Business", "Identity"],
    category: "Branding",
    image: "/api/placeholder/800/400",
    nextArticle: null,
    prevArticle: "content-strategy-tips",
  },
};

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    return {
      title: "Article Not Found | Toggle Solutions",
      description: "The article you're looking for doesn't exist.",
    };
  }

  return {
    title: `${article.title} | Toggle Solutions`,
    description: article.excerpt,
    keywords: [
      ...article.tags,
      "marketing insights",
      "marketing blog",
      "digital marketing",
    ],
    openGraph: {
      title: `${article.title} | Toggle Solutions`,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Toggle Solutions`,
      description: article.excerpt,
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Article Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link href="/insights">Back to Insights</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
              <div className="flex items-center justify-center gap-4 mb-6">
                <Badge variant="outline">{article.category}</Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                {article.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-foreground">
                      {article.author}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap gap-2 justify-center">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                {article.prevArticle && (
                  <Button variant="outline" asChild>
                    <Link
                      href={`/insights/${article.prevArticle}`}
                      className="inline-flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous Article
                    </Link>
                  </Button>
                )}
              </div>
              <div className="flex-1 text-center">
                <Button variant="outline" asChild>
                  <Link href="/insights">All Articles</Link>
                </Button>
              </div>
              <div className="flex-1 text-right">
                {article.nextArticle && (
                  <Button variant="outline" asChild>
                    <Link
                      href={`/insights/${article.nextArticle}`}
                      className="inline-flex items-center gap-2"
                    >
                      Next Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
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
              <input
                placeholder="Enter your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-80"
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
