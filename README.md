# Toggle Solutions Website

A modern, SEO-friendly digital marketing agency website built with Next.js 15, Tailwind CSS v4, and shadcn/ui components.

## 🎯 Project Goals

- **Convert via clear value, proof, and a single CTA**: "Book a discovery call"
- **SEO-friendly, modular, CMS-ready** architecture
- **Tone**: Conversational, witty, confident, human (inspired by Attio's storytelling approach)
- **People-first digital marketing** agency helping SMEs and startups grow

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui + Radix UI primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **TypeScript**: Full type safety
- **Fonts**: Geist Sans & Geist Mono

## 📁 URL Structure

```
/                           # Homepage
/about                      # About Us
/services                   # Services hub
/services/performance-marketing
/services/content-marketing
/services/branding
/services/web-development
/services/email-marketing
/services/analytics-reporting
/work                       # Portfolio index
/work/[slug]                # Case study detail
/insights                   # Insights index (blog)
/insights/[slug]            # Article detail
/contact                    # Contact
```

## 🎨 Design Philosophy

- **Bold typography** with roomy spacing
- **Modular sections** for easy maintenance
- **Light motion** on scroll (no heavy parallax)
- **Color pops** for metrics and CTAs
- **Mobile-first** responsive design
- **Accessibility-first** approach (WCAG AA compliance)

## 🧩 Component Architecture

### Navigation Components

- `SiteHeader` - Sticky header with logo, nav links, and CTA button
- `MobileNavSheet` - Mobile navigation using Sheet component
- `SiteFooter` - Multi-column footer with links and social media

### UI Primitives (shadcn/ui)

- `Button`, `Badge`, `Card`, `Separator`, `Accordion`, `Tabs`
- `Dialog`, `Sheet`, `Avatar`, `Input`, `Textarea`, `Select`, `Label`
- `Form`, `Field`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`
- `Alert`, `AlertDialog`, `Popover`, `Tooltip`, `HoverCard`
- `DropdownMenu`, `ContextMenu`, `Menubar`, `Command`
- `Table`, `Pagination`, `Breadcrumb`, `Carousel`
- `AspectRatio`, `Skeleton`, `Spinner`, `Sonner`
- `Toggle`, `ToggleGroup`, `Resizable`, `ScrollArea`
- `Sidebar`, `Drawer`, `Empty`, `Kbd`, `InputGroup`

### Content Blocks

- `Hero` - H1 + subtext + CTA + optional visual/trust badges
- `LogoCloud` - Horizontal grid or marquee of client/partner logos
- `SectionHeader` - Eyebrow text + h2 + optional description
- `ServiceCard` - Icon + title + description + link arrow
- `MetricStat` - Large number + label + optional trend indicator
- `Testimonial` - Quote + avatar + name + role + company + location
- `CaseTile` - Client logo + industry + challenge + outcome metrics + CTA
- `PostCard` - Image + tags + title + excerpt + read time + date
- `FAQAccordion` - Accordion with custom trigger + "Have a question?" fallback
- `CTASection` - Full-width band with headline + subtext + CTA

### Forms

- `ContactForm` - Name, email, company, service selector, budget, message (RHF + Zod)
- `SubscribeForm` - Email input + submit (inline or card)

## 📄 Page Structure

### Homepage `/`

- **Hero**: Punchy headline + subcopy + primary CTA
- **Intro**: Who Toggle helps and how
- **Problems x3**: Common marketing pain points
- **Solutions x3**: Mirror each problem with Toggle's approach
- **Services highlights**: Cards linking to six service pages
- **Results/featured work**: 2–3 tiles with metric callouts
- **Testimonials**: 2–4 quotes
- **CTA band**: Reiterate value + CTA

### About `/about`

- **Story**: Origin and "why"
- **Mission & difference**: People-first, data + creative
- **Culture/team**: Small highlights or principle list
- **Timeline**: Compact milestones component
- **CTA**: Discovery call

### Services Hub `/services`

- **Overview**: Service philosophy
- **Grid**: Six service cards, each with value props
- **CTA**: Discovery call

### Individual Service Pages `/services/*`

- **Overview**: What/why/value
- **Deliverables**: Bullet list
- **Process**: 3–5 step flow
- **Use cases**: Examples by industry or outcome
- **Proof**: Mini case snippets/metrics
- **FAQ**: 4–6 common questions
- **CTA**: Enquiry/discovery call

### Work `/work`

- **Filterable grid**: Case studies by service/industry
- **Tiles**: Logo, goal, outcomes
- **CTA**

### Case Study `/work/[slug]`

- **Overview**: Client, challenge, solution, outcome
- **Process**: Narrative with visuals
- **Metrics**: Clear before/after
- **Testimonial**
- **Next steps CTA**

### Insights `/insights`

- **Content hub**: Search + filters
- **Cards**: Title, excerpt, tags, read time
- **Subscribe module**

### Article `/insights/[slug]`

- **Hero**: Title, meta, social share
- **Body**: Rich content, code/figures
- **Next/prev** + subscribe

### Contact `/contact`

- **Friendly intro**
- **Form**: Name, email, company, budget (optional), service selector, message
- **Direct**: Email, phone
- **CTA copy**: "Let's build something great together."

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd next-toggle

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

## 🎨 Styling & Theming

The project uses Tailwind CSS v4 with custom CSS variables for theming:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- **Container**: `mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`

## ♿ Accessibility

- **Keyboard navigation** for all interactive elements
- **ARIA labels** and semantic HTML
- **Focus management** for modals and dialogs
- **Color contrast** meets WCAG AA standards
- **Screen reader** friendly content structure

## 🔍 SEO Features

- **Metadata**: Title, description, keywords per page
- **OpenGraph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **JSON-LD**: Structured data for search engines
- **Semantic HTML**: Proper heading hierarchy
- **Image optimization**: Next.js Image component with WebP support

## 📊 Analytics & Tracking

- **Form submissions** tracked via API routes
- **Performance monitoring** ready for integration
- **Conversion tracking** for "Book a discovery call" CTAs

## 🗄️ CMS Integration Ready

The project is structured to easily integrate with headless CMS solutions:

### Data Models

```typescript
interface Service {
  slug: string;
  title: string;
  summary: string;
  deliverables: string[];
  processSteps: ProcessStep[];
  faqs: FAQ[];
}

interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  metrics: Metric[];
  testimonial: Testimonial;
}

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
  publishedAt: string;
  heroImage: string;
}
```

## 🎯 Content Guidelines

### Tone & Messaging

- **Conversational** and approachable
- **Witty** but professional
- **Confident** without being arrogant
- **Human** - avoid corporate jargon
- **Clear** value propositions
- **Outcome-focused** messaging

### Headline Patterns

- "Marketing that actually moves the needle."
- "From clicks to customers."
- "People-first digital marketing."

### CTA Strategy

- **Primary CTA**: "Book a discovery call" (consistent across all pages)
- **Secondary CTAs**: Service-specific actions
- **Every section** ends with a clear next step

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
npx vercel

# Or connect GitHub repository for automatic deployments
```

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Development Guidelines

### Code Style

- **TypeScript** for all components and utilities
- **Functional components** with hooks
- **Named exports** for components
- **Consistent naming**: PascalCase for components, camelCase for functions
- **File organization**: Co-locate related files

### Component Structure

```typescript
// Component file structure
export function ComponentName() {
  // Component logic
  return <div>{/* JSX */}</div>;
}
```

### Import Organization

```typescript
// 1. React imports
import { useState } from "react";

// 2. Next.js imports
import Link from "next/link";

// 3. Third-party imports
import { Button } from "@/components/ui/button";

// 4. Local imports
import { ComponentName } from "./component-name";
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to Toggle Solutions. All rights reserved.

## 📞 Contact

- **Email**: hello@togglesolutions.com
- **Phone**: +60 12-345 6789
- **Address**: Level 8, The Vertical Corporate Tower B, Avenue 10, The Vertical, Bangsar South, 59200 Kuala Lumpur, Malaysia

---

Built with ❤️ by Toggle Solutions
