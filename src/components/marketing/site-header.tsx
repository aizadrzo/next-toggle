"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  ArrowRight,
  Code,
  TrendingUp,
  FileText,
  ChevronDown,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  ListItem,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Custom websites and applications built with modern technologies.",
    icon: Code,
  },
  {
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    description: "Data-driven campaigns to maximize ROI and growth.",
    icon: TrendingUp,
  },
  {
    title: "Content Strategy",
    href: "/services/content-strategy",
    description: "Strategic content that engages and converts your audience.",
    icon: FileText,
  },
];

const navigation = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-lg group-hover:opacity-90 transition-opacity">
                T
              </div>
              <span className="font-bold text-xl text-foreground tracking-tight">
                Toggle Solutions
              </span>
            </Link>
          </div>

          {/* Right Actions & Navigation */}
          <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-primary font-medium bg-transparent">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-indigo-600 p-6 no-underline outline-none focus:shadow-md"
                              href="/services"
                            >
                              <div className="h-6 w-6 text-white mb-2">
                                <Code className="h-6 w-6" />
                              </div>
                              <div className="mb-2 mt-4 text-lg font-medium text-white">
                                Our Services
                              </div>
                              <p className="text-sm leading-tight text-white/90">
                                Comprehensive digital solutions tailored to your
                                business needs.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        {services.map((service) => (
                          <ListItem
                            key={service.title}
                            title={service.title}
                            href={service.href}
                            icon={service.icon}
                          >
                            {service.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  {navigation.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "text-muted-foreground hover:text-primary font-medium bg-transparent"
                          )}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <Button
              asChild
              className="hidden md:inline-flex rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 shadow-none"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col gap-4 mt-6">
                    {/* Mobile Services Accordion-style */}
                    <div className="space-y-4">
                      <div
                        className="flex items-center justify-between text-lg font-medium text-foreground cursor-pointer"
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                      >
                        Services
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            mobileServicesOpen ? "rotate-180" : ""
                          )}
                        />
                      </div>

                      {mobileServicesOpen && (
                        <div className="pl-4 space-y-3 border-l-2 border-border ml-2">
                          {services.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              className="block text-sm text-muted-foreground hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button className="w-full mt-4">Get in Touch</Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
