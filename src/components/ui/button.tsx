import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:outline-2 focus-visible:outline-[#1D9BF0] focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black border-0 rounded-full font-semibold shadow-none transition-all duration-200 hover:bg-[#E6E6E6] hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] active:bg-[#D4D4D4] active:translate-y-0 disabled:bg-[#2F2F2F] disabled:text-[#6B6B6B] disabled:cursor-not-allowed",
        secondary:
          "bg-transparent text-white border border-[#3F3F3F] rounded-full font-semibold shadow-none transition-all duration-200 hover:bg-[#1A1A1A] hover:border-[#505050]",
        ghost:
          "bg-transparent text-[#A0A0A0] border-0 font-medium transition-all duration-200 hover:bg-[#1A1A1A] hover:text-white rounded-lg px-4 py-2",
        destructive:
          "bg-[#F4212E] text-white border-0 rounded-full font-semibold shadow-none transition-all duration-200 hover:bg-[#F4212E]/90 hover:-translate-y-[1px] hover:shadow-lg active:translate-y-0",
        outline:
          "border border-[#2F2F2F] bg-transparent rounded-full text-white font-semibold shadow-none transition-all duration-200 hover:bg-[#1A1A1A] hover:border-[#3F3F3F]",
        link: "text-[#1D9BF0] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-auto px-6 py-3 text-[15px]",
        sm: "h-auto px-4 py-2 text-[14px]",
        lg: "h-auto px-6 py-3 text-[15px]",
        icon: "size-11 rounded-full p-0",
        "icon-sm": "size-9 rounded-full p-0",
        "icon-lg": "size-12 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
