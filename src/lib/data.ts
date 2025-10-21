// Mock data for CMS integration
// This can be replaced with actual CMS data fetching later

export interface Service {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: string;
  deliverables: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  useCases: {
    industry: string;
    challenge: string;
    solution: string;
    result: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  challenge: string;
  solution: string;
  outcome: string;
  metric: string;
  description: string;
  image: string;
  testimonial: string;
  author: string;
  role: string;
  company: string;
  duration: string;
  budget: string;
  results: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  nextCaseStudy: string | null;
  prevCaseStudy: string | null;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  category: string;
  image: string;
  nextArticle: string | null;
  prevArticle: string | null;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinks {
  company: FooterLink[];
  services: FooterLink[];
  resources: FooterLink[];
  legal: FooterLink[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface GlobalData {
  companyName: string;
  tagline: string;
  description: string;
  contactInfo: ContactInfo;
  navigation: NavigationItem[];
  footerLinks: FooterLinks;
  socialLinks: {
    name: string;
    href: string;
    icon: string;
  }[];
}

// Mock data
export const services: Service[] = [
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    description: "Google, Meta, TikTok ads that actually convert.",
    slug: "performance-marketing",
    icon: "Target",
    deliverables: [
      "Campaign strategy & setup",
      "Creative development & testing",
      "Audience research & targeting",
      "Performance optimization",
      "Conversion tracking",
      "Monthly reporting",
    ],
    process: [
      {
        step: "01",
        title: "Strategy & Planning",
        description: "We analyze your business, audience, and goals to create a custom campaign strategy.",
      },
      {
        step: "02",
        title: "Campaign Setup",
        description: "We build and launch your campaigns across Google, Meta, and TikTok with proper tracking.",
      },
      {
        step: "03",
        title: "Creative Development",
        description: "We create compelling ad creatives that resonate with your target audience.",
      },
      {
        step: "04",
        title: "Testing & Optimization",
        description: "We continuously test and optimize campaigns to improve performance and ROI.",
      },
      {
        step: "05",
        title: "Reporting & Scaling",
        description: "We provide regular reports and scale successful campaigns for maximum growth.",
      },
    ],
    useCases: [
      {
        industry: "SaaS",
        challenge: "Struggling to generate qualified trial signups",
        solution: "Lead generation campaigns with lead scoring",
        result: "300% increase in qualified leads, 50% higher trial-to-paid conversion",
      },
      {
        industry: "E-commerce",
        challenge: "Poor ad performance and low ROAS",
        solution: "Strategic campaign optimization with creative testing",
        result: "250% ROI improvement with better targeting",
      },
      {
        industry: "Professional Services",
        challenge: "High cost per lead and low conversion rates",
        solution: "Audience refinement and landing page optimization",
        result: "200% increase in qualified leads, 60% lower cost per acquisition",
      },
    ],
    faqs: [
      {
        question: "How long does it take to see results?",
        answer: "Most campaigns start showing initial results within 2-4 weeks, with significant improvements typically seen within 6-8 weeks as we optimize and scale successful campaigns.",
      },
      {
        question: "What platforms do you work with?",
        answer: "We specialize in Google Ads, Meta (Facebook & Instagram), TikTok Ads, and LinkedIn. We choose platforms based on where your audience is most active.",
      },
      {
        question: "How do you measure success?",
        answer: "We focus on business metrics like cost per acquisition, return on ad spend, and lifetime value. We also track conversion rates, lead quality, and revenue attribution.",
      },
      {
        question: "What's your minimum budget?",
        answer: "Our minimum monthly budget is RM 3,000 for ad spend, plus our management fee. This ensures we can properly test and optimize campaigns.",
      },
      {
        question: "Do you work with small businesses?",
        answer: "Absolutely! We specialize in helping SMEs and startups grow. We understand the unique challenges and opportunities that smaller businesses face.",
      },
      {
        question: "How often do you report on performance?",
        answer: "We provide weekly performance reports and monthly strategy reviews. You'll always know how your campaigns are performing and what we're doing to improve them.",
      },
    ],
  },
  // Add other services here...
];

export const caseStudies: Record<string, CaseStudy> = {
  "techflow-growth": {
    id: "techflow-growth",
    title: "TechFlow: 300% Growth in Trial Signups",
    client: "TechFlow",
    industry: "SaaS",
    service: "Performance Marketing",
    challenge: "Low conversion rates and high acquisition costs",
    solution: "Lead generation campaigns with lead scoring",
    outcome: "300% increase in qualified leads, 50% higher trial-to-paid conversion",
    metric: "300%",
    description: "increase in trial signups",
    image: "/api/placeholder/800/400",
    testimonial: "Toggle didn't just improve our marketing—they transformed our entire business. The results speak for themselves.",
    author: "Sarah Chen",
    role: "Founder",
    company: "TechFlow",
    duration: "6 months",
    budget: "RM 15,000/month",
    results: [
      "300% increase in trial signups",
      "50% higher trial-to-paid conversion",
      "40% reduction in cost per acquisition",
      "200% increase in qualified leads",
    ],
    process: [
      {
        step: "01",
        title: "Audit & Strategy",
        description: "Analyzed existing campaigns and identified optimization opportunities",
      },
      {
        step: "02",
        title: "Campaign Restructure",
        description: "Rebuilt campaigns with better targeting and ad creative",
      },
      {
        step: "03",
        title: "Lead Scoring Implementation",
        description: "Implemented lead scoring to improve qualification",
      },
      {
        step: "04",
        title: "Optimization & Scaling",
        description: "Continuously optimized and scaled successful campaigns",
      },
    ],
    nextCaseStudy: "retail-brand",
    prevCaseStudy: null,
  },
  // Add other case studies here...
};

export const articles: Record<string, Article> = {
  "performance-marketing-guide": {
    id: "performance-marketing-guide",
    title: "The Complete Guide to Performance Marketing in 2024",
    excerpt: "Everything you need to know about performance marketing, from strategy to execution and optimization.",
    content: `
      <h2>What is Performance Marketing?</h2>
      <p>Performance marketing has evolved significantly in 2024...</p>
      <!-- Full content here -->
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
  // Add other articles here...
};

export const globalData: GlobalData = {
  companyName: "Toggle Solutions",
  tagline: "Digital Marketing Agency Malaysia",
  description: "People-first digital marketing agency helping SMEs and startups grow through smart strategy, data-driven campaigns, and creative execution.",
  contactInfo: {
    email: "hello@togglesolutions.com",
    phone: "+60 12-345 6789",
    address: "Kuala Lumpur, Malaysia",
  },
  navigation: [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
  footerLinks: {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Work", href: "/work" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Performance Marketing", href: "/services/performance-marketing" },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "Branding", href: "/services/branding" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Email Marketing", href: "/services/email-marketing" },
      { name: "Analytics & Reporting", href: "/services/analytics-reporting" },
    ],
    resources: [
      { name: "Insights", href: "/insights" },
      { name: "Case Studies", href: "/work" },
      { name: "Services", href: "/services" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
  socialLinks: [
    { name: "LinkedIn", href: "https://linkedin.com/company/toggle-solutions", icon: "Linkedin" },
    { name: "Twitter", href: "https://twitter.com/togglesolutions", icon: "Twitter" },
    { name: "Facebook", href: "https://facebook.com/togglesolutions", icon: "Facebook" },
  ],
};

// Helper functions for data fetching
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles[slug];
}

export function getAllServices(): Service[] {
  return services;
}

export function getAllCaseStudies(): CaseStudy[] {
  return Object.values(caseStudies);
}

export function getAllArticles(): Article[] {
  return Object.values(articles);
}
