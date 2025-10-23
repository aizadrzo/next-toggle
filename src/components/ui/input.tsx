import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-auto w-full rounded-lg border border-[#2F2F2F] bg-[#1A1A1A] px-4 py-3 text-[15px] text-white transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white placeholder:text-[#6B6B6B] focus-visible:outline-none focus-visible:border-[#1D9BF0] focus-visible:shadow-[0_0_0_3px_rgba(29,155,240,0.1)] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
