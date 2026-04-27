import * as React from "react";

export type IconHomeProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export function IconHome({ size = 24, ...props }: IconHomeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7H4a1 1 0 0 1-1-1V10.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
