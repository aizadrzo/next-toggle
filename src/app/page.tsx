import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern dark:opacity-[0.05]"></div>
        <div className="blob bg-sky-300 w-96 h-96 rounded-full top-0 right-0 dark:bg-sky-900 filter blur-[80px] opacity-30"></div>
        <div className="blob bg-blue-300 w-96 h-96 rounded-full bottom-0 left-0 dark:bg-blue-900 filter blur-[80px] opacity-30"></div>

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Accepting new projects
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Revolutionize Your <br />
              <span className="gradient-text">Digital Marketing</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Data-driven strategies for growth. We combine creative
              storytelling with technical expertise to scale your brand and
              drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="gradient-bg text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 rounded-full h-auto py-3.5 px-8 text-base"
              >
                <Link href="#services">Our Services</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full h-auto py-3.5 px-8 text-base bg-background/50 backdrop-blur-sm"
              >
                <Link href="#contact">View Portfolio</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-muted-foreground opacity-70">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-500" />
                <span>Google Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>Clutch Leader</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative z-10">
            <div className="relative rounded-2xl bg-white dark:bg-slate-800 border border-border shadow-2xl p-4 lg:p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-2 w-32 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Total Impressions
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    128.5k
                  </div>
                  <div className="text-xs text-green-500 flex items-center mt-2">
                    <TrendingUp className="w-3 h-3 mr-1" /> +12.5%
                  </div>
                </div>
                <div className="bg-sky-50 dark:bg-sky-900/20 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Conversions
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    4,293
                  </div>
                  <div className="text-xs text-green-500 flex items-center mt-2">
                    <TrendingUp className="w-3 h-3 mr-1" /> +8.2%
                  </div>
                </div>
              </div>
              <div className="relative h-48 w-full bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden flex items-end px-4 gap-2">
                <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-t-sm h-[40%]"></div>
                <div className="w-full bg-blue-300 dark:bg-blue-700 rounded-t-sm h-[65%]"></div>
                <div className="w-full bg-blue-400 dark:bg-blue-600 rounded-t-sm h-[50%]"></div>
                <div className="w-full gradient-bg rounded-t-sm h-[85%] relative group">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Peak Performance
                  </div>
                </div>
                <div className="w-full bg-blue-300 dark:bg-blue-700 rounded-t-sm h-[60%]"></div>
                <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-t-sm h-[45%]"></div>
              </div>
              <div
                className="absolute -right-8 top-20 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-xl border border-border animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <div
                className="absolute -left-6 bottom-20 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-xl border border-border animate-bounce"
                style={{ animationDuration: "4s" }}
              >
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-10 border-y border-border bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by industry leaders worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-bold">ACME Inc.</div>
            <div className="text-2xl font-bold">Vertex</div>
            <div className="text-2xl font-bold">GlobalBank</div>
            <div className="text-2xl font-bold">Starlight</div>
            <div className="text-2xl font-bold">NextGen</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-24 bg-background"
        id="services"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              Comprehensive Digital Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We don't just execute campaigns; we build ecosystems that drive
              sustainable growth for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Performance Marketing",
                desc: "Precision-targeted campaigns across Google, Meta, and LinkedIn designed to maximize ROI and lower acquisition costs.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2vfSKHCPtmdbGdHI0w8K12Lcarrh98uPcAHqaAbsvQyXlOx2w_BdOdf7K0whymNTjIQO1HVLcPdXyfnZ6--n6MJeAoaR3fLmnPMI-SpF8xPPhTi4HStaHp0zEWjBszMVkWhFwrZqml3LMMjGCuVMRv7JX8QlTsTdYnDTIMLaQ23AyiaUpNJlv_8d6YuA0tT9gg6jEGxU9iVrVwl7rr3c9xCR2rK6ifPKNXSKqiUKclQTDh2Zug_tcHnVOIUtkvcsjJJNTKOh6LA",
                href: "/services/performance-marketing"
              },
              {
                title: "Content Strategy",
                desc: "Compelling narratives and SEO-driven content that builds authority, engages audiences, and drives organic traffic.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuCC_WDyeud4xBRawx2qu2r3-0zM1tRNYBqoFg2JCfLzYSm84X4KD29PSGUh9Dk7gQ8KdzB6hS50l16foWXZyMKznre44a-VX9WK2HGMWp3gvpRy7QsyVfBQxSoNC0KtxYXPI60M_7zqKDi3ITsYyQn2MbvtFlbhe1B6NMeVuI48goNDC4ogwyQVpYkGQVToFlun9mUKmPrEnMqfzWlwMfvtHXovXv26NkIPVPVXBaP1OyF04EBcZkC3QZuyp6b60l6fa-LBoV-w",
                href: "/services/content-strategy"
              },
              {
                title: "Web Development",
                desc: "High-performance, responsive websites built with modern frameworks that convert visitors into loyal customers.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgDPUiuY36A4JiQ01SL8RMQTOXnwFP34jAfEL31Hk7tmrXfBIxa73hbqI5XC8BiacG21nwX6QOkrinC8QIa_klxrRQ5seV90ZcsFMZmpvD5Iic4QuXB7jpMCw-JXbBghqgnLwcLW6c2ryVVWWZ98Q7mh3Y223IkUTOEHaksCecfS4DyH11CZgZJ3q1KFd2ns04iiaHu_AEK7QxYaIIXt_hKnCbL3mSog9FEQopjTHzUsUaJs29DoKbVIMGls_SB9-YSo4npvwgWA",
                href: "/services/web-development"
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white dark:bg-slate-800 border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="bg-slate-50 dark:bg-slate-900 border-b border-border display-flex items-center justify-center h-[220px] overflow-hidden relative">
                  <img
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={service.img}
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors"></div>
                </div>
                <div className="p-8 pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary font-medium hover:text-blue-600 group-hover:underline"
                  >
                    Learn more{" "}
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Recent Work
              </h2>
              <p className="text-lg text-muted-foreground">
                See how we've helped brands transform their digital presence.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="hidden md:inline-flex rounded-full border-muted-foreground/20"
            >
              <Link href="/work">View All Projects</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="group relative rounded-2xl overflow-hidden shadow-lg h-80">
              <img
                alt="FinTech"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBifiX3hNJKhru4lLaeWX-DdM8d-t6cHtP6Y1yKmIq-p9lwBp7kv1OIrnTjV9vcaWgGetVeG6i9H45QvdSF-3fdMA5ZWFwcjwjrIGrGCMSezIE98Amy7Nrk-t0diXLGbrAC8uts4e_rVRYMsKxuPaknwYbkCOK9HwR7QbaIFR_BmQYtdIWVmYsxK3D-wLqdAU1FSE8CdSjNYG7R5tPQpVOeMY9VFrPdEjcFCGmbmYfwCPxbHiAi-aAt54ZJqem-NykmKKPCsikGyg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8 text-left">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2 block">
                  FinTech
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Nexus Finance App
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  Complete UI/UX overhaul and frontend development leading to a
                  40% increase in user retention.
                </p>
                <span className="text-white border-b border-white pb-1 text-sm font-medium hover:text-blue-300 hover:border-blue-300 transition-colors cursor-pointer">
                  View Case Study
                </span>
              </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden shadow-lg h-80">
              <img
                alt="E-commerce"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4J-mbp6jP5C5yUMtgh3KpdcCz9Dl_oQWTvrBt4bWhyHX-o0p-NceVGHQpMmiPRXpqdKT_2gFAAeaVney0RPe76IJ8VonSRBsrhjcPp3HvantNEBI9X7_k_PbmgvW06NuradDKZ3U27JjNPSD0WfCeJ20u529vSg5D7OVBSoqwydHYTc7wOvt0_Pfz7iMYhP_euHuo6KSe6DCdCn-aCptqI5zT7GS_tsehRmDAqHwlXybky-dq2325Nuoivn3h85zphj5AkIwz7A"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8 text-left">
                <span className="text-xs font-bold text-sky-300 uppercase tracking-wider mb-2 block">
                  E-commerce
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Lumina Fashion
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  SEO strategy and Shopify development that doubled organic
                  traffic in 6 months.
                </p>
                <span className="text-white border-b border-white pb-1 text-sm font-medium hover:text-sky-300 hover:border-sky-300 transition-colors cursor-pointer">
                  View Case Study
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/work"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full rounded-full"
              )}
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Team/About Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sky-100 dark:bg-sky-900 rounded-full z-0"></div>
              <img
                alt="Toggle Solutions Team"
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFsUFSZXnod0XLDNvVqXTOU5bdQul2qwaPro1QNvPPm99iCbXnA_otnq01SgFYyY4FnM8KDH7wNxF5fdG5BadN64jDvnJL4EIRjWYak1x7YkBbclM0wL1M6Gv9cC4m_MhvztXLE9GdmY_0QAczZnHpmrvlwCjej_R-6qg4nkKA642xpZTk1Sp7qmOukDVR9ek7TkAhMO0zmufGFa6jPn4STrB8QuueDFRXCq3igsIrmZ7VNhja93YYT3NP9zyx0Cezdg_VbIgaCw"
              />
              <div className="absolute bottom-10 -right-8 lg:-right-12 z-20 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-border max-w-xs hidden sm:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Client Satisfaction
                    </div>
                    <div className="font-bold text-xl text-foreground">98%</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  "The team went above and beyond our expectations."
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                About Toggle Solutions
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground mb-6">
                We are the architects of your digital success
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2018, Toggle Solutions started with a simple mission:
                to bridge the gap between creative design and data-driven
                marketing.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of strategists, designers, and developers work in
                unison to create seamless digital experiences. We believe in
                transparency, agility, and results that speak for themselves.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { label: "Projects Delivered", val: "150+" },
                  { label: "Industry Awards", val: "12+" },
                  { label: "Team Experts", val: "25+" },
                  { label: "Market Presence", val: "5yr" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold gradient-text">
                      {stat.val}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 relative">
        <div className="absolute inset-0 grid-pattern opacity-[0.05]"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Clients Love Our Work!
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here is what our partners have to
              say about working with us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Toggle Solutions completely transformed our online presence. Our leads increased by 200% within just three months. Their strategic approach is unmatched.",
                author: "Sarah Jenkins",
                role: "CMO, TechFlow",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQFZD5ES_gHrup8Y8QGUBslAmH0HDogxuRKxIgG8umKo5WYNtHzKo3Fx_Fjg_cvI4a-IeFqZTJO_pgVZPhBmfqUfitc-kxJ9TXc0qTtk0KM20rmzD9uch0OZfRZ0fAlIFfl8mujjSq2fCE4u3mh4yMprrebbEZmKKP3uRiQVPfZ2Y4UQ5swE2brRHxI7pMPPCdLnAeNN9Xh0_-o23EhZQy3CN49YCpD9t8pjYRdbPElnJt1-URYSIUtutOzn-S22tcpJOfN4DbDw",
                highlight: false,
              },
              {
                text: "Professional, creative, and timely. They handled our migration to Webflow seamlessly. The site speed is incredible and the SEO benefits were immediate.",
                author: "David Chen",
                role: "Founder, StartUp Hub",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHH9F1hA3sgMw4JOouNm3myHfiiR3wl2CIET2-LsS91L7U2MsKpHgiTcB3i0zjSTWdbueHpo_kFbN8ghLIZApk-Zya4UwVX1CfbQePxRye96FGOd3OhJ18I0CvtAObkrry01WZa8_7HgOtnZKXW5FfoFbv4GaOyf8JmLuNNnaysRuiOj_8tShVZnSsxHCFX88_753eQpLDuaDGtprmFjO4L4oBuef527ni2rCL61jUA4fmzXTTqNdkEBCwFExn5JEQp_0txu3JXQ",
                highlight: true,
              },
              {
                text: "We appreciate their attention to detail and data-driven mindset. They don't guess; they test and optimize. A true partner in our growth.",
                author: "Elena Rodriguez",
                role: "Director, Creative Arts",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaO0WyD5Iw1u3lg2wZpSOzS2DpBd1UvDI8iUKGElc8gBejRfvfDYSITe53Uir8_0iHnQYtst-RUuCSgcbh0xXbCgGThFw4Ke09XzGuq3rmw7Kr-j1CNMWpt7FTNZWGJx6YysPXNeuuvmTe1b57RZmLMR-WnYOdkN86R8oA6OYbumkfXilaURnFy8gWBdu3pi6X2AEOMemVhX2YEGSKr-MI0yIwZ4hc3zuKVCMIpyOmagG1GaX1U3OtbVg2FwqUPusy9TjwBGAM3g",
                highlight: false,
              },
            ].map((t, i) => (
              <div
                key={i}
                className={`bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-border relative ${
                  t.highlight
                    ? "mt-0 md:-mt-4 mb-4 md:mb-0 bg-gradient-to-b from-white to-blue-50 dark:from-slate-800 dark:to-blue-900/10"
                    : ""
                }`}
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-4 text-sm">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      alt={t.author}
                      className="w-full h-full object-cover"
                      src={t.img}
                    />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">
                      {t.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 dark:bg-blue-950 px-6 py-16 sm:px-12 sm:py-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-sky-600/20"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-sky-500/30 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to scale your business?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                Book a free 30-minute consultation with our experts. No
                obligations, just actionable insights for your digital strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white text-primary font-bold hover:bg-gray-100 shadow-lg"
                >
                  <Link href="/contact">Book a Call</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full bg-transparent border-white/30 text-white font-medium hover:bg-white/10"
                >
                  <Link href="mailto:hello@example.com">Send an Email</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
