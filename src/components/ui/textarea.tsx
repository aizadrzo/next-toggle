import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-[#2F2F2F] bg-[#1A1A1A] px-4 py-3 text-[15px] text-white transition-all placeholder:text-[#6B6B6B] focus-visible:outline-none focus-visible:border-[#1D9BF0] focus-visible:shadow-[0_0_0_3px_rgba(29,155,240,0.1)] disabled:cursor-not-allowed disabled:opacity-50 resize-y",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
