import * as React from "react";
import Svg, { Path, type SvgProps } from "react-native-svg";

export type IconHomeProps = SvgProps & {
  size?: number;
};

export function IconHome({ size = 24, ...props }: IconHomeProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7H4a1 1 0 0 1-1-1V10.5Z"
        stroke={props.color ?? "#111827"}
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
