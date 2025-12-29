import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  FileText,
  Code,
  CheckCircle,
  ArrowRight,
  BrainCircuit,
  Users,
  Award,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl dark:bg-primary/5"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/5"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Our Expertise
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Digital Solutions for <span className="text-gradient">Modern Brands</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We help businesses grow by combining creative design, strategic
            marketing, and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Performance Marketing",
                desc: "Maximize your ROI with data-driven campaigns across Google, Facebook, and LinkedIn. We optimize every click to convert visitors into loyal customers.",
                items: [
                  "PPC Management",
                  "Conversion Optimization",
                  "Analytics & Reporting",
                ],
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHACMNfNj-eIa69rh5zWWNcl1jPrKyOmHqI8Mj36KQ114cqXBOhEmWb2dKdxHxlbpfNHtBLRbRu7HrGu4gI8CLkXgAWFmpLPe_Y5t_CAYcBvqpfjcalAOAvistD43mcpaPdYKA7vCplR_7vkITXq7dunLD5EH6uzk51HMNaPqumAbmDQSte8LcYiW9WIwAyNmdlr5Gw1TkRv9hv4mGm9bEi5YuKtRAY5PJ3ciR-cXustY-HmLdtWO8Fopv7ENz5sTRadJqHapeeA",
              },
              {
                icon: FileText,
                title: "Content Strategy",
                desc: "Tell your brand's story with compelling content that engages and inspires. From SEO blogs to social media narratives, we build your voice.",
                items: [
                  "SEO Copywriting",
                  "Social Media Planning",
                  "Brand Storytelling",
                ],
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuTmwTfg34NniiZ6RR1ta42NAW_g-qfRazqFFr-c7v0taidoOcROBGiSXocDqsBPyn1nhKxYPLkS5-RrohNFpUqNLwXka3dv8UI4VsAYx0TpLXZWq4KV6A2bGQj_QLdWC_2FLkEid5moyHAzQvdyyE9OoHeoyJe9iPswbRRdztK5No_hdMTwcy4l_TgCAhGGtjS13r3qID9prd7jD_0RJ3ruxwfGssTDinQFWD54ZgEb9LIoGHBgfqNpHtou2YTkjBW1si6hmNgw",
              },
              {
                icon: Code,
                title: "Web Development",
                desc: "Build a robust online presence with custom websites and web applications. We prioritize speed, security, and responsive design for every user.",
                items: [
                  "Custom Web Apps",
                  "E-commerce Solutions",
                  "UI/UX Design",
                ],
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7DVjdS15m689Ps3-94abbPKJkky4aAvOePZMZxukglDq3aoKu8V_Zqte2PYisuXr1YO392_shqHEyooPdGiymMUZMSDfqNYxCohiAUcTQLeNNFQGbE1iaMBM6V8Jdva_UkjFc9PkShrPkvtmcFaL9gacG1vbL9N9HcO6FCDLt3VVr0KnX5F57X6pXBQ5dUpcpNaUf1C9RrGhzQqHZcggAsZByn34Ymr2igtpxB8fY40XquI2ZDtK9fXaFaMCmuREkyFq0uqe-Aw",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={s.img}
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 absolute top-40 right-8 shadow-md border-4 border-white dark:border-slate-800">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {s.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className="inline-flex items-center text-primary font-medium text-sm hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Why Choose Toggle Solutions?
              </h2>
              <div className="space-y-8">
                {[
                  {
                    icon: BrainCircuit,
                    title: "Strategic Approach",
                    desc: "We don't just execute tasks; we align our digital strategies with your business goals for long-term growth.",
                  },
                  {
                    icon: Users,
                    title: "Dedicated Team",
                    desc: "Our team of experts becomes an extension of your company, providing consistent support and clear communication.",
                  },
                  {
                    icon: Award,
                    title: "Proven Results",
                    desc: "We measure success by your success. Our portfolio showcases tangible improvements in traffic, leads, and sales.",
                  },
                ].map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <f.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{f.title}</h4>
                      <p className="text-muted-foreground text-sm">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-sky-500/20 rounded-2xl transform rotate-3 translate-x-2 translate-y-2"></div>
              <img
                alt="Team meeting"
                className="relative rounded-2xl shadow-lg w-full object-cover h-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9sf-A5NNjXYCbrE3rlEuVpcQwirp9dBaNBdy5ZPlvORM-dnOCem1ZKuTJUyeNrG0H4OAYnNQUqari_a3OSDuSYLoJj0DziSnf5iB1b5KHaUK8QcaofdGQG_BTfUInd4CK3-5sNXlMuvG70_xsSybApvGrTQYffVuekgMLItTRGjjsO_E1bRYvzzi36wGzAev2sH-YuPXr1XdJ6xYKR4DFnEgygB91ThnIshMOMHFk3xKPz8TOal5XIdbiyaEXoGXBZ9tiIXCCXw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-white dark:bg-background border-t border-border">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to elevate your digital presence?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
                    Let's discuss how our services can help you achieve your business objectives. Get a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/30">
                        <Link href="/contact">Start a Project</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full">
                        <Link href="/pricing">View Pricing</Link>
                    </Button>
                </div>
            </div>
        </section>
    </div>
  );
}
