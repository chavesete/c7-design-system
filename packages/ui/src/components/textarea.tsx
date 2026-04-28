import * as React from "react";

import { cn } from "../lib/cn";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-c7-md border border-c7-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-c7-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-c7-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
