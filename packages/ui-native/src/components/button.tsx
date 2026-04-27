import * as React from "react";
import { Pressable, Text, type PressableProps } from "react-native";

import { cn } from "../lib/cn";

export type ButtonVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = PressableProps & {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
};

function getButtonClassName(variant: ButtonVariant) {
  if (variant === "secondary")
    return "bg-secondary text-secondary-foreground";
  if (variant === "destructive")
    return "bg-destructive text-destructive-foreground";
  if (variant === "outline") return "border border-border bg-background";
  if (variant === "ghost") return "bg-transparent";
  return "bg-primary text-primary-foreground";
}

function getTextClassName(variant: ButtonVariant) {
  if (variant === "outline" || variant === "ghost") return "text-foreground";
  if (variant === "secondary") return "text-secondary-foreground";
  if (variant === "destructive") return "text-destructive-foreground";
  return "text-primary-foreground";
}

function getSizeClassName(size: ButtonSize) {
  if (size === "sm") return "h-8 px-3";
  if (size === "lg") return "h-11 px-6";
  return "h-10 px-4";
}

export function Button({
  className,
  children,
  variant = "default",
  size = "md",
  disabled,
  ...props
}: ButtonProps) {
  const PressableAny = Pressable as unknown as React.ComponentType<any>;
  const TextAny = Text as unknown as React.ComponentType<any>;
  return (
    <PressableAny
      accessibilityRole="button"
      className={cn(
        "flex-row items-center justify-center rounded-md",
        getSizeClassName(size),
        getButtonClassName(variant),
        disabled ? "opacity-50" : undefined,
        className
      )}
      disabled={disabled}
      {...props}
    >
      <TextAny className={cn("text-sm font-semibold", getTextClassName(variant))}>
        {children}
      </TextAny>
    </PressableAny>
  );
}
