import { ColorType, Theme, ColorScheme } from "presets/theme";

export function getColorBasedOnType(
  type: ColorType,
  theme: Theme
): ColorScheme {
  return theme.color[type];
}
export function getTextColorBasedOnType(
  type: ColorType,
  theme: Theme
): string {
  return (getColorBasedOnType(type,theme)).text;
}
export function getMainColorBasedOnType(
  type: ColorType,
  theme: Theme
): string {
  return (getColorBasedOnType(type,theme)).main;
}
export function getLightColorBasedOnType(
  type: ColorType,
  theme: Theme
): string {
  return (getColorBasedOnType(type,theme)).light;
}
export function getDarkColorBasedOnType(
  type: ColorType,
  theme: Theme
): string {
  return (getColorBasedOnType(type,theme)).dark;
}
