import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 grid-pattern dark:opacity-[0.05]"></div>
         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Latest <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              News, trends, and expert advice on digital marketing, web development, and branding.
            </p>
            
            <div className="max-w-md mx-auto relative">
                <Input placeholder="Search articles..." className="pl-10 h-11 rounded-full bg-white dark:bg-slate-800 border-border" />
                <Search className="absolute left-3.5 top-3 w-5 h-5 text-muted-foreground" />
            </div>
         </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center mb-12">
                {["All", "Marketing", "Development", "Design", "Strategy"].map((cat, i) => (
                    <Button key={i} variant={i === 0 ? "default" : "outline"} size="sm" className="rounded-full">
                        {cat}
                    </Button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        title: "The Future of SEO in 2025",
                        excerpt: "How AI and voice search are changing the landscape of search engine optimization.",
                        date: "Oct 12, 2024",
                        author: "Sarah Jenkins",
                        category: "Marketing",
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQFZD5ES_gHrup8Y8QGUBslAmH0HDogxuRKxIgG8umKo5WYNtHzKo3Fx_Fjg_cvI4a-IeFqZTJO_pgVZPhBmfqUfitc-kxJ9TXc0qTtk0KM20rmzD9uch0OZfRZ0fAlIFfl8mujjSq2fCE4u3mh4yMprrebbEZmKKP3uRiQVPfZ2Y4UQ5swE2brRHxI7pMPPCdLnAeNN9Xh0_-o23EhZQy3CN49YCpD9t8pjYRdbPElnJt1-URYSIUtutOzn-S22tcpJOfN4DbDw"
                    },
                    {
                        title: "Webflow vs WordPress: Which is Right for You?",
                        excerpt: "A comprehensive comparison of the two most popular CMS platforms for business websites.",
                        date: "Oct 05, 2024",
                        author: "David Chen",
                        category: "Development",
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHH9F1hA3sgMw4JOouNm3myHfiiR3wl2CIET2-LsS91L7U2MsKpHgiTcB3i0zjSTWdbueHpo_kFbN8ghLIZApk-Zya4UwVX1CfbQePxRye96FGOd3OhJ18I0CvtAObkrry01WZa8_7HgOtnZKXW5FfoFbv4GaOyf8JmLuNNnaysRuiOj_8tShVZnSsxHCFX88_753eQpLDuaDGtprmFjO4L4oBuef527ni2rCL61jUA4fmzXTTqNdkEBCwFExn5JEQp_0txu3JXQ"
                    },
                    {
                        title: "Building a Brand Identity that Lasts",
                        excerpt: "Why consistency is key and how to create a visual language that resonates with your audience.",
                        date: "Sep 28, 2024",
                        author: "Elena Rodriguez",
                        category: "Design",
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaO0WyD5Iw1u3lg2wZpSOzS2DpBd1UvDI8iUKGElc8gBejRfvfDYSITe53Uir8_0iHnQYtst-RUuCSgcbh0xXbCgGThFw4Ke09XzGuq3rmw7Kr-j1CNMWpt7FTNZWGJx6YysPXNeuuvmTe1b57RZmLMR-WnYOdkN86R8oA6OYbumkfXilaURnFy8gWBdu3pi6X2AEOMemVhX2YEGSKr-MI0yIwZ4hc3zuKVCMIpyOmagG1GaX1U3OtbVg2FwqUPusy9TjwBGAM3g"
                    },
                     {
                        title: "5 Tips for Effective Email Marketing",
                        excerpt: "Maximize your open rates and conversions with these proven email strategies.",
                        date: "Sep 15, 2024",
                        author: "Sarah Jenkins",
                        category: "Marketing",
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2vfSKHCPtmdbGdHI0w8K12Lcarrh98uPcAHqaAbsvQyXlOx2w_BdOdf7K0whymNTjIQO1HVLcPdXyfnZ6--n6MJeAoaR3fLmnPMI-SpF8xPPhTi4HStaHp0zEWjBszMVkWhFwrZqml3LMMjGCuVMRv7JX8QlTsTdYnDTIMLaQ23AyiaUpNJlv_8d6YuA0tT9gg6jEGxU9iVrVwl7rr3c9xCR2rK6ifPKNXSKqiUKclQTDh2Zug_tcHnVOIUtkvcsjJJNTKOh6LA"
                    },
                    {
                        title: "Optimizing Web Performance for Speed",
                        excerpt: "Technical techniques to shave milliseconds off your load time and improve user experience.",
                        date: "Sep 02, 2024",
                        author: "David Chen",
                        category: "Development",
                         img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgDPUiuY36A4JiQ01SL8RMQTOXnwFP34jAfEL31Hk7tmrXfBIxa73hbqI5XC8BiacG21nwX6QOkrinC8QIa_klxrRQ5seV90ZcsFMZmpvD5Iic4QuXB7jpMCw-JXbBghqgnLwcLW6c2ryVVWWZ98Q7mh3Y223IkUTOEHaksCecfS4DyH11CZgZJ3q1KFd2ns04iiaHu_AEK7QxYaIIXt_hKnCbL3mSog9FEQopjTHzUsUaJs29DoKbVIMGls_SB9-YSo4npvwgWA",
                    },
                     {
                        title: "The Power of Storytelling in Business",
                        excerpt: "How to craft narratives that connect emotionally with your customers.",
                        date: "Aug 20, 2024",
                        author: "Elena Rodriguez",
                        category: "Strategy",
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuCC_WDyeud4xBRawx2qu2r3-0zM1tRNYBqoFg2JCfLzYSm84X4KD29PSGUh9Dk7gQ8KdzB6hS50l16foWXZyMKznre44a-VX9WK2HGMWp3gvpRy7QsyVfBQxSoNC0KtxYXPI60M_7zqKDi3ITsYyQn2MbvtFlbhe1B6NMeVuI48goNDC4ogwyQVpYkGQVToFlun9mUKmPrEnMqfzWlwMfvtHXovXv26NkIPVPVXBaP1OyF04EBcZkC3QZuyp6b60l6fa-LBoV-w"
                    }
                ].map((post, i) => (
                    <div key={i} className="flex flex-col group rounded-2xl bg-white dark:bg-slate-800 border border-border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="h-48 overflow-hidden relative">
                             <img alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={post.img} />
                             <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                                {post.category}
                             </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-3 H-3" /> {post.date}
                                </div>
                                <div className="flex items-center gap-1">
                                    <User className="w-3 H-3" /> {post.author}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                <Link href="#" className="hover:underline">{post.title}</Link>
                            </h3>
                            <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <Link href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-600 mt-auto">
                                Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="rounded-full min-w-[200px]">
                    Load More Articles
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
