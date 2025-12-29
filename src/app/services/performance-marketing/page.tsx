import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, MousePointerClick, Share2, LineChart, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Marketing - Toggle Solutions",
};

export default function PerformanceMarketingPage() {
  return (
    <div className="bg-background transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-900/20">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-600/10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/5"></div>
        
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 mb-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 transform rotate-3">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Performance <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">Marketing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Data-driven strategies designed to maximize your ROI and accelerate business growth across all digital channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
            >
              Start Growing <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="#portfolio" 
              className="px-8 py-3.5 rounded-full border border-border font-medium hover:bg-white dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">Comprehensive Marketing Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From targeted ad campaigns to complete funnel optimization, we deliver measurable results that impact your bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border">
              <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MousePointerClick className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Paid Search (PPC)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Capture high-intent leads exactly when they are searching for your services. We manage and optimize campaigns for maximum conversion efficiency.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mr-2" /> Google Ads Management
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mr-2" /> Remarketing Campaigns
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border">
              <div className="w-14 h-14 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <Share2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Social Media Ads</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Engage your ideal audience on the platforms they use daily. We create compelling visual creatives and laser-focused targeting strategies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-indigo-600 mr-2" /> Meta (Facebook/Instagram)
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-indigo-600 mr-2" /> LinkedIn B2B Targeting
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border">
              <div className="w-14 h-14 rounded-xl bg-sky-50 dark:bg-sky-900/20 flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                <LineChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">SEO & Analytics</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Build long-term organic authority and make informed decisions with deep data analysis. We turn traffic into revenue through optimization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-sky-600 mr-2" /> Technical SEO & Content
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-sky-600 mr-2" /> Conversion Rate Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">Client Portfolio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore some of our successful campaigns and see how we've helped brands scale their revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU1W7ghZ_1DGAAu6Im6O9xTY628VFj65bYNue_E-WEpi8g1utbV_jU2vVD7sX0CmsAqZVJf2Ls5lopamLToM-EhjXU0UZ8yEgCV5PAmEJPW_PQlC0oThb5kK-IKuDClTiGp2-b1u5ksEJ7u4UZr61nJG_4nJOoG10oa_BMwvh72qEIs7PqJmvG6dpuLElWFZNWRqJE-EapJO95-5XwieBeXtI_5EE30Z-F0Cks4lGZ-_n-xwemuHraoOn_G_X03woXmYduOjFhaA" 
                  alt="FinTech Dashboard Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-wide text-primary uppercase">FinTech</span>
                  <h3 className="text-xl font-bold mt-1 text-foreground group-hover:text-primary transition-colors">Nova Financial</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                    Achieved 200% ROI within 3 months through a targeted LinkedIn Ads campaign and a thought-leadership content syndication strategy.
                  </p>
                </div>
                <div className="mt-auto flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-muted-foreground border border-border">LinkedIn Ads</span>
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-muted-foreground border border-border">Lead Gen</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi7F71jTOrIOMO4oUfnZJjWEiqzGW4z8sfb2cIBmr2lpBXXuV15yZrO55I7_nQpGuXIMbQrbmqmLD-wZdt8g4_V0cftDnARi0R56Oh66OdEttmyBx5GDbGYFvyRkvdyzlUGm-BKH1EBJj-dBdMyfrk-kUlyKR6aJ_zh4D5QJnO_cpy1D5cHLvWgROwR_vJwagPmX4OqHaXWrEsbHrOBiyJdT8QyPEyOMaUY0Gioc24EgJaDSkSvLx7sF9Drohh3zGsphVeqSentQ" 
                  alt="E-Commerce Fashion Store Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-wide text-primary uppercase">E-Commerce</span>
                  <h3 className="text-xl font-bold mt-1 text-foreground group-hover:text-primary transition-colors">Lumina Fashion</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                    Scaled monthly revenue by 150% using dynamic product ads on Instagram and automated email retargeting workflows.
                  </p>
                </div>
                <div className="mt-auto flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-muted-foreground border border-border">Facebook Ads</span>
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-muted-foreground border border-border">Email Automation</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZs871StUwJ7s4dx4wjTD1JdDO2zaO6K5v3k-_l-WJuGfSHfyQbr9Yp3COelWmf5WFgyxOnHgQp6pyu9IKxfWxknSXg00WbJZPb_YO1fwPQTHKNxzosABUiv-f5eqGKV9R-Pb0a61DSkbog2361CitzfAOoumJJ2VtYCxiJLffYuY-7AKoMmA0Imi2ZeZr_oOxcQ7oilWrbLsFfdsDxXydBkjL-B_xUWFpU3-F0csN4BZetzW1mep8aeijM60Skmuo6szMKWxtjg" 
                  alt="Healthcare Mobile App Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-wide text-primary uppercase">Healthcare</span>
                  <h3 className="text-xl font-bold mt-1 text-foreground group-hover:text-primary transition-colors">MediConnect</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                    Increased new patient bookings by 40% utilizing local SEO optimization, Google Maps ranking strategies, and search ads.
                  </p>
                </div>
                <div className="mt-auto flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-muted-foreground border border-border">Local SEO</span>
                  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs text-muted-foreground border border-border">Google Ads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-black/10 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Scale Your Business?</h2>
                <p className="text-blue-100 text-lg">
                  Let's discuss your growth targets and design a performance marketing strategy that delivers real ROI.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 rounded-full bg-white text-primary font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
                >
                  Contact Us <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
