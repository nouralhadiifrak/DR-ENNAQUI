"use client";

import { useIsDark } from "@/lib/useIsDark";
import {
  MovingGradientButton,
  type GradientPalette,
  type MovingGradientButtonProps,
} from "./fx/MovingGradientButton";

// Palettes built from the brand colours #FF9D9D · #FFC5AA · #EEF8CD · #BBF1D2,
// with a deep rose-plum fill in light mode so the text stays readable.
const PRIMARY_LIGHT: GradientPalette = {
  fill: "#7A3B4A",
  hoverFill: "#5E2B38",
  textColor: "#FFF5F0",
  hoverTextColor: "#FFFFFF",
  borderColor: "#7A3B4A",
  strokeColor: "#FFC5AA",
  headColor: "#FF9D9D",
};

const PRIMARY_DARK: GradientPalette = {
  fill: "#FF9D9D",
  hoverFill: "#FFC5AA",
  textColor: "#2A1A20",
  hoverTextColor: "#23161C",
  borderColor: "#FF9D9D",
  strokeColor: "#EEF8CD",
  headColor: "#FFFFFF",
};

const OUTLINE_LIGHT: GradientPalette = {
  fill: "rgba(253, 240, 233, 0)",
  hoverFill: "rgba(253, 240, 233, 1)",
  textColor: "#3B2530",
  hoverTextColor: "#7A3B4A",
  borderColor: "rgba(59, 37, 48, 0.14)",
  strokeColor: "rgba(255, 157, 157, 0.7)",
  headColor: "#B44F5C",
};

const OUTLINE_DARK: GradientPalette = {
  fill: "rgba(39, 28, 33, 0)",
  hoverFill: "rgba(39, 28, 33, 1)",
  textColor: "#FBEEE8",
  hoverTextColor: "#FFFFFF",
  borderColor: "rgba(251, 238, 232, 0.16)",
  strokeColor: "rgba(255, 157, 157, 0.5)",
  headColor: "#FF9D9D",
};

export type BrandVariant = "primary" | "outline";

type Props = Omit<MovingGradientButtonProps, "palette"> & { variant?: BrandVariant };

export function BrandButton({ variant = "primary", ...props }: Props) {
  const dark = useIsDark();
  const palette =
    variant === "outline" ? (dark ? OUTLINE_DARK : OUTLINE_LIGHT) : dark ? PRIMARY_DARK : PRIMARY_LIGHT;
  return <MovingGradientButton palette={palette} {...props} />;
}
