"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// Container replaced with standard Tailwind classes
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  // { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

const services = [
  {
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    description: "Google, Meta, TikTok ads that actually convert.",
  },
  {
    title: "Content Marketing",
    href: "/services/content-marketing",
    description: "Strategic content that builds trust and drives action.",
  },
  {
    title: "Branding",
    href: "/services/branding",
    description: "Visual identity that resonates with your audience.",
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    description: "Fast, beautiful websites that convert visitors.",
  },
  {
    title: "Email Marketing",
    href: "/services/email-marketing",
    description: "Email campaigns that people actually read.",
  },
  {
    title: "Analytics & Reporting",
    href: "/services/analytics-reporting",
    description: "Clear insights on what's working.",
  },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2F2F2F] bg-black/80 backdrop-blur-sm supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className="flex h-16 items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              aria-label="Toggle Solutions homepage"
            >
              <span className="text-2xl font-bold text-white">Toggle</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.title} asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {navigation.slice(1).map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#1A1A1A] hover:text-white focus:bg-[#1A1A1A] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-[#A0A0A0]"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild>
              <Link href="/contact">Book a discovery call</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="flex lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
                  aria-label="Open main menu"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Link
                      href="/"
                      className="text-2xl font-bold text-white"
                      aria-label="Toggle Solutions homepage"
                    >
                      Toggle
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 flow-root" id="mobile-menu">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {/* Services dropdown for mobile */}
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-muted-foreground px-3">
                          Services
                        </div>
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-sm leading-7 text-foreground hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>

                      {/* Other navigation items */}
                      {navigation.slice(1).map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="py-6">
                      <Button asChild className="w-full">
                        <Link href="/contact">Book a discovery call</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
