import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-[#2F2F2F] bg-[#1A1A1A] text-white",
        secondary: "border-transparent bg-[#1A1A1A] text-white",
        destructive:
          "border-transparent bg-[rgba(244,33,46,0.1)] text-[#F4212E] border-[rgba(244,33,46,0.2)]",
        outline: "text-white border-[#2F2F2F]",
        accent:
          "border-[rgba(29,155,240,0.2)] bg-[rgba(29,155,240,0.1)] text-[#1D9BF0]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
