import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-c7-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-c7-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-c7-primary text-c7-primary-foreground shadow hover:bg-c7-primary/90",
        destructive:
          "bg-c7-destructive text-c7-destructive-foreground shadow-sm hover:bg-c7-destructive/90",
        outline:
          "border border-c7-input bg-c7-background shadow-sm hover:bg-c7-accent hover:text-c7-accent-foreground",
        secondary:
          "bg-c7-secondary text-c7-secondary-foreground shadow-sm hover:bg-c7-secondary/80",
        ghost: "hover:bg-c7-accent hover:text-c7-accent-foreground",
        link: "text-c7-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-c7-md px-3 text-xs",
        lg: "h-10 rounded-c7-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
