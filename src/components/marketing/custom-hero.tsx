"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import LiquidEther from "@/components/LiquidEther";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

interface CustomHeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function CustomHero({
  badge,
  title,
  titleHighlight,
  description,
  primaryCTA,
  secondaryCTA,
}: CustomHeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* LiquidEther Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'auto' }}>
        <LiquidEther
          mouseForce={30}
          cursorSize={150}
          colors={['#78FFFB', '#1D00AB', '#9D52FF', '#6993FF']}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={2000}
          autoRampDuration={0.6}
          dt={0.008}
          isViscous={true}
          viscous={50}
        />
      </div>
      
      <div className="relative pt-24 md:pt-36 pb-16 md:pb-32" style={{ zIndex: 10, pointerEvents: 'none' }}>
        {/* Removed dark gradient overlay to show LiquidEther */}

        <div className="mx-auto max-w-7xl px-6" style={{ pointerEvents: 'none' }}>
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <AnimatedGroup>
              {badge && (
                <Badge variant="secondary" className="mb-8" style={{ pointerEvents: 'auto' }}>
                  {badge}
                </Badge>
              )}
            </AnimatedGroup>

            <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="span"
                className="block"
              >
                {title}
              </TextEffect>
              {titleHighlight ? " " : null}
              {titleHighlight && (
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="span"
                  className="text-primary"
                >
                  {titleHighlight}
                </TextEffect>
              )}
            </h1>
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mx-auto mt-8 max-w-2xl text-balance text-lg"
            >
              {description}
            </TextEffect>

            {(primaryCTA || secondaryCTA) && (
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
              >
                {primaryCTA && (
                  <div
                    key={1}
                    className="rounded-[calc(var(--radius-xl)+0.125rem)] p-0.5 mt-8"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href={primaryCTA.href}>
                        <span className="text-nowrap">{primaryCTA.text}</span>
                      </Link>
                    </Button>
                  </div>
                )}
              </AnimatedGroup>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
