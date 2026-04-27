import * as React from "react";
import { View, type ViewProps } from "react-native";

import { cn } from "../lib/cn";

export type CardProps = ViewProps & {
  className?: string;
  children?: React.ReactNode;
};

export function Card({ className, ...props }: CardProps) {
  const ViewAny = View as unknown as React.ComponentType<any>;
  return (
    <ViewAny
      className={cn("rounded-xl border border-border bg-background", className)}
      {...props}
    />
  );
}
