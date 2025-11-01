import { cn } from "@/lib/utils";

interface WordPressContentProps {
  content: string;
  className?: string;
}

/**
 * Component for rendering WordPress HTML content safely
 * Handles WordPress-specific HTML classes and formatting
 */
export function WordPressContent({
  content,
  className,
}: WordPressContentProps) {
  return (
    <div
      className={cn("className", className)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
