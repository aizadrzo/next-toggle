"use client";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AvatarCircles } from "./ui/avatar-circles";

export default function HeroSection() {
  return (
    <>
      <main>
        <section className="overflow-hidden">
          <div className="relative mx-auto max-w-6xl px-6 py-28 lg:py-20">
            <div className="lg:flex lg:items-center lg:gap-12">
              <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl capitalize">
                  Scale Your Brand with a Growth Partner You Can Rely On
                </h1>
                <p className="mt-8">
                  We combine digital strategy, creative, acquisition, retention,
                  and analytics to help brands grow sustainably, while keeping
                  priorities clear and measurable.
                </p>
                <div>
                  <div className="mx-auto my-10 lg:my-12 lg:ml-0 lg:mr-auto flex flex-col sm:flex-row gap-4 sm:items-start">
                    <Button asChild size="lg">
                      <Link
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.querySelector("#contact");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        <span className="sm:block hidden">Get Started</span>
                        <span className="sm:hidden block">
                          Get a Free Brand Audit
                        </span>
                      </Link>
                    </Button>
                    <div className="flex items-center gap-2 justify-center">
                      <AvatarCircles
                        avatarUrls={[
                          {
                            imageUrl: "/images/client-avatar/tpl.png",
                          },
                          {
                            imageUrl: "/images/client-avatar/supermama.png",
                          },
                          {
                            imageUrl: "/images/client-avatar/kualesa.png",
                          },
                          {
                            imageUrl: "/images/client-avatar/unitar.png",
                          },
                          {
                            imageUrl: "/images/client-avatar/leica.png",
                          },
                        ]}
                        numPeople={50}
                      />
                      <div className="flex flex-col">
                        <div className="flex text-yellow-500 mb-1 gap-0.5">
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm text-left">
                          Rated 5/5 by over 50+ clients
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-md border border-blue-500/30 flex items-center justify-center bg-blue-500/5 text-blue-500">
                        <Check className="w-4 h-4 font-bold" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-left">
                        Full-stack digital marketing built for sustainable
                        growth
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-md border border-blue-500/30 flex items-center justify-center bg-blue-500/5 text-blue-500">
                        <Check className="w-4 h-4 font-bold" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-left">
                        A structured approach that reduces guesswork
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-md border border-blue-500/30 flex items-center justify-center bg-blue-500/5 text-blue-500">
                        <Check className="w-4 h-4 font-bold" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-left">
                        Transparent reporting that supports better decisions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
              <div className="relative">
                <div className="bg-radial-[at_65%_25%] to-background z-1 -inset-17 absolute from-transparent to-40%"></div>
                <Image
                  className="hidden dark:block"
                  src="/images/hero-img.png"
                  alt="app illustration"
                  width={2796}
                  height={2008}
                />
                <Image
                  className="dark:hidden"
                  src="/images/hero-img.png"
                  alt="app illustration"
                  width={2796}
                  height={2008}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
