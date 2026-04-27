import * as React from "react";

import { cn } from "../lib/cn";
import logoSrc from "../images/logo.svg";

export type LogoSize = "sm" | "md" | "lg";
export type LogoType = "full" | "mark" | "text";
export type LogoVariant = "default" | "white";

export interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  size?: LogoSize;
  type?: LogoType;
  /**
   * "default" renderiza com as cores originais da marca.
   * "white"   aplica filter para uso em fundos escuros.
   */
  variant?: LogoVariant;
}

/** Alturas base para cada tamanho */
const fullHeights: Record<LogoSize, number> = { sm: 20, md: 30, lg: 48 };
const markHeights: Record<LogoSize, number> = { sm: 24, md: 36, lg: 56 };
const textSizes: Record<LogoSize, string> = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-3xl",
};

/**
 * type="mark" — exibe apenas o ícone C7.
 * O conteúdo é idêntico ao logo.svg, apenas com o viewBox recortado
 * na região do ícone (x: 0–490, y: 0–400.4).
 */
function LogoMark({
  height,
  white,
}: {
  height: number;
  white: boolean;
}) {
  const aspectRatio = 490 / 400.4;
  return (
    <svg
      viewBox="0 0 490 400.4"
      height={height}
      width={Math.round(height * aspectRatio)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={white ? { filter: "brightness(0) invert(1)" } : undefined}
    >
      {/* paths extraídos diretamente do logo.svg original */}
      <polygon
        fill="#333333"
        points="82.9 320.94 82.9 88.19 184.7 88.19 184.7 0 0 0 0 400.4 309.9 400.4 248.71 320.94 82.9 320.94"
      />
      <rect fill="#f5cc2f" x="132.29" y="222.25" width="52.92" height="52.92" />
      <polygon
        fill="#306497"
        points="486.83 78.13 485.07 0 262.82 0 262.82 88.19 365.12 88.19 248.71 320.94 309.9 400.4 310.44 400.4 486.83 78.13"
      />
    </svg>
  );
}

export function Logo({
  size = "md",
  type = "full",
  variant = "default",
  className,
  ...props
}: LogoProps) {
  const isWhite = variant === "white";

  if (type === "mark") {
    return (
      <span
        className={cn("inline-flex items-center", className)}
        role="img"
        aria-label="Chave7"
        {...props}
      >
        <LogoMark height={markHeights[size]} white={isWhite} />
      </span>
    );
  }

  if (type === "text") {
    return (
      <span
        className={cn(
          "font-bold tracking-tight select-none",
          textSizes[size],
          isWhite ? "text-white" : "text-[#333333]",
          className
        )}
        {...props}
      >
        Chave7
      </span>
    );
  }

  // type === "full" — usa o logo.svg real
  return (
    <span
      className={cn("inline-flex items-center", className)}
      role="img"
      aria-label="Chave7"
      {...props}
    >
      <img
        src={logoSrc}
        alt="Chave7"
        height={fullHeights[size]}
        style={
          isWhite ? { filter: "brightness(0) invert(1)", height: fullHeights[size] } : { height: fullHeights[size] }
        }
        draggable={false}
      />
    </span>
  );
}

Logo.displayName = "Logo";
