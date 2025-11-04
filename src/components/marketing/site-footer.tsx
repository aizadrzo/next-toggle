import Link from "next/link";
// Container replaced with standard Tailwind classes
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
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
};

export function SiteFooter() {
  return (
    <footer className="bg-[#0A0A0A]" role="contentinfo">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="text-2xl font-bold text-white"
                aria-label="Toggle Solutions homepage"
              >
                <Image
                  src="images/brand/logo.svg"
                  alt="Toggle Solutions"
                  width={150}
                  height={24}
                />
              </Link>
              <p className="mt-4 text-sm text-[#6B6B6B]">
                People-first digital marketing agency helping SMEs and startups
                grow through smart strategy, data-driven campaigns, and creative
                execution.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <a
                    href="mailto:hello@togglesolutions.com"
                    className="hover:text-white focus:text-white focus:outline-none"
                  >
                    hello@togglesolutions.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <a
                    href="tel:+60123456789"
                    className="hover:text-white focus:text-white focus:outline-none"
                  >
                    +60 12-345 6789
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span>Kuala Lumpur, Malaysia</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B6B6B] hover:text-white focus:text-white focus:outline-none"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B6B6B] hover:text-white focus:text-white focus:outline-none"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B6B6B] hover:text-white focus:text-white focus:outline-none"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
              <p className="text-sm text-[#6B6B6B]">
                © 2024 Toggle Solutions. All rights reserved.
              </p>
              <div className="flex gap-6">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-[#6B6B6B] hover:text-white focus:text-white focus:outline-none"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild size="sm">
                <Link href="/contact">Book a discovery call</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
