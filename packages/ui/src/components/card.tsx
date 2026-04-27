import * as React from "react";

import { cn } from "../lib/cn";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-card border border-border bg-card text-card-foreground", className)}
      {...props}
    />
  );
}
