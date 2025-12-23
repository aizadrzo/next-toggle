import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorkPage() {
  return (
    <div className="bg-white dark:bg-slate-950 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* Hero Section */}
      <section className="pt-48 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-950 dark:to-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Real results for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              real businesses
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See how we've helped SMEs and startups grow through smart strategy,
            data-driven campaigns, and creative execution.
          </p>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Case Study 1 */}
            <div className="group flex flex-col h-full">
              <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-900 mb-6 border border-border shadow-sm">
                <img
                  alt="Fintech Dashboard"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Axo1EHy8qvl1edlJQVAwRbYjuaf6hokJJg88FEQoknBYY6yJK8ut4fVdW9Yd7VizYPl6bw6v4EVm3ERMO0M5UCv9nFSKqzCtO2jROaMjKwRKbY0FL2-mEi2lhr28N22fR_FS7JkdP_QzmUhZ_IhSM00q6O-XE5C1EDnvhcKVt1GpaMK5xbydmDL3tchLIN1S6SlNeF2553vUWrZGtVu8RgITt9wXLNwm01_Y2skW9wkPrlBGQVktOVJqTlK9ugWtCESpVIUk4w"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                  SaaS Platform
                </span>
                <span className="text-sm text-muted-foreground">
                  6 months timeline
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                FinTrack Analytics Dashboard
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                A complete overhaul of a legacy financial tracking platform. We
                improved data visualization speeds by 40% and redesigned the UX
                for better accessibility.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-primary font-semibold hover:text-blue-700 dark:hover:text-blue-400 transition-colors mt-auto"
              >
                View Case Study{" "}
                <ArrowRight className="w-[18px] h-[18px] ml-1" />
              </Link>
            </div>

            {/* Case Study 2 */}
            <div className="group flex flex-col h-full">
              <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-900 mb-6 border border-border shadow-sm">
                <img
                  alt="Meeting Room"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRR58mlM7ZEP8VHoM-X9TiFYW0vNk8eQUsy3rPy8CebXYcJo919FTu9hu-FldP9QPh4uS8wscB97aha1PtRmLOOEemFqZfIB9OqS29NigYvDH5mt84V63-EytLoys8yYktB6OlnSQgvMqnO-0PJaHA9FwroC30AkFNCowqBdjCAjZQqHGZPVdXZwk_loF0buiGG8zSTemTRU_QP2xUsIjkSVnvvG6G6mPq6AMQqlWRPeTmSoUTJ7GC7c6iioINIJHfY-M0T9NZMQ"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                  Marketing Strategy
                </span>
                <span className="text-sm text-muted-foreground">Ongoing</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Growth Campaign for Nexus
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                Implemented a multi-channel digital marketing strategy that
                increased qualified leads by 150% within the first quarter
                through targeted PPC and SEO.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-primary font-semibold hover:text-blue-700 dark:hover:text-blue-400 transition-colors mt-auto"
              >
                View Case Study{" "}
                <ArrowRight className="w-[18px] h-[18px] ml-1" />
              </Link>
            </div>

            {/* Case Study 3 */}
            <div className="group flex flex-col h-full">
              <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-900 mb-6 border border-border shadow-sm">
                <img
                  alt="Data Analytics"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcBWDEu5yF1EFMWeyjhVWzZqX48dr3e_qBPPYWuCXuh9h4oxvHPUDYE8O4OgcAWqEtQLfYc2p92wTaOC5EgpT8oAwe24qCGEn3bDO3wjbrN8MjvxYbJMn-gsruKvHe30uib7xOhQIFxccm8DCF0pu8CmhG2bxCNRaxb5Mx0sm_5E681_HngtjLXcY_vspoH-Jx9-fkp0pikgBvsRFW-7wRmrmotCru5MAKCz_NxE_jNTU2LrsrTd1ClmJlIzw9ydeUwJHThiTvsw"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                  Web Development
                </span>
                <span className="text-sm text-muted-foreground">
                  3 months timeline
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                EcoStream E-commerce
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                Developed a custom Shopify storefront with headless architecture
                to support high-traffic product launches for a sustainable
                lifestyle brand.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-primary font-semibold hover:text-blue-700 dark:hover:text-blue-400 transition-colors mt-auto"
              >
                View Case Study{" "}
                <ArrowRight className="w-[18px] h-[18px] ml-1" />
              </Link>
            </div>

            {/* Case Study 4 */}
            <div className="group flex flex-col h-full">
              <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-900 mb-6 border border-border shadow-sm">
                <img
                  alt="Coding"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOeXqCigzfpld5d5JZKiXFnFSht8DdISuNdu1Xni4jmSPTgZGod0QBi4F7j3v5Y1gvL4Pf9lPFNXw3uMLEsofCg4xnwaHCE7OJ-tFk6eckeE_911M4dUXcIqFeU29K-S_I6Osi9JJ_BZifr2zCgKcPPw9VKL2oO0IyUIm91TKW1a3o0uEfkoUe6TahGUY-koLXLAe52ynvGiE0jnfTUy7fwJ0MrupQBIFW-DEfZQwPxtqTXKVEqaK6D3kFbNbpYKozofpBKl57tw"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                  Brand Identity
                </span>
                <span className="text-sm text-muted-foreground">
                  2 months timeline
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Nova Healthcare Rebrand
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                Modernized the visual identity and digital presence of a
                healthcare provider, resulting in a 25% increase in online
                appointment bookings.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-primary font-semibold hover:text-blue-700 dark:hover:text-blue-400 transition-colors mt-auto"
              >
                View Case Study{" "}
                <ArrowRight className="w-[18px] h-[18px] ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            We're always looking for new challenges and opportunities to help
            businesses grow. Let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-all shadow-sm hover:shadow-md flex justify-center items-center gap-2"
            >
              Start a Project
            </Link>
            <Link
              href="/contact"
              className="bg-white dark:bg-slate-800 border border-border text-foreground hover:bg-gray-50 dark:hover:bg-slate-700 font-semibold py-3 px-8 rounded-md transition-all flex justify-center items-center gap-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
