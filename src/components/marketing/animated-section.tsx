"use client";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { ReactNode } from "react";
import { Variants } from "motion/react";

export const transitionVariants: Variants = {
  item: {

    // @ts-expect-error - hidden is not a valid property in the Variants type
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
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

interface AnimatedSectionProps {
  children: ReactNode;
  staggerDelay?: number;
}

export function AnimatedSection({
  children,
  staggerDelay = 0.1,
}: AnimatedSectionProps) {
  return (
    <AnimatedGroup
      variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: staggerDelay,
            },
          },
        },
        ...transitionVariants,
      }}
    >
      {children}
    </AnimatedGroup>
  );
}
