import type { DefaultTheme } from "styled-components";

const rootFontSize = 16;
/**
 *
 * @param {Number} px
 * @returns {string}
 */
const convertPixelToRem = (px: number): string => {
  const rem = px / rootFontSize;

  return `${rem.toString()}rem`;
};

const mediaSizes = {
  mobile: 320,
  tablet: 786,
  desktop: 1024,
};

const colours = {
  white: "#ffffff",
  "blue-100": "#4678DE",
  "blue-200": "#689AFF",
  "blue-300": "#A9C5FF",
  "blue-400": "#EEF4FF",
  "navy-100": "#0B2B6C",
  "navy-200": "#28447C",
  "navy-300": "#415E9A",
  "gray-100": "#333333",
  "gray-200": "#666666",
  "gray-300": "#888888",
  "gray-400": "#aaaaaa",
  "gray-450": "#cacaca",
  "gray-500": "#e6e6e6",
  "gray-600": "#eeeeee",
  "gray-700": "#f6f6f6",
  "gray-800": "#fafafa",
  "lime-100": "#D5EC4B",
  "lime-200": "#FCFF5A",
  "status-100": "#F07474",
  "status-200": "#9F7AEA",
  "status-300": "#FFA553",
  "status-400": "#FFB800",
  "status-500": "#F26F9E",
  "status-600": "#0AA882",
  "status-700": "#0F6FC8",
  "status-bg-100": "#FFF8F8",
  "status-bg-200": "#FAF5FF",
  "status-bg-300": "#FFF9F6",
  "status-bg-400": "#FFFDEF",
  "status-bg-500": "#FFF5F7",
  "status-bg-600": "#EFFDEF",
  "status-bg-700": "#F2FCFF",
  "bluegray-100": "#F7FAFC",
  "bluegray-200": "#EDF2F7",
  "bluegray-300": "#E2E8F0",
  "bluegray-400": "#CBD5E0",
  "bluegray-500": "#A0AEC0",
  "bluegray-600": "#718096",
  "bluegray-700": "#4A5568",
  "bluegray-800": "#2D3748",
  "bluegray-900": "#1A202C",
  "teal-400": "#17F2E9",
  "teal-500": "#38B2AC",
  "teal-600": "#319795",
  "red-100": "#F56565",
  "red-300": "#FC8181",
  "dark-mode-100": "rgba(255, 255, 255, 0.1)",
  "dark-mode-200": "rgba(255, 255, 255, 0.25)",
  "dark-mode-300": "rgba(240, 116, 116, 0.2)",
};

const borderRadius = {
  xsr: convertPixelToRem(3),
  smd: convertPixelToRem(5),
  mlg: convertPixelToRem(10),
};

const fontSize = {
  xxs: convertPixelToRem(10),
  xs: convertPixelToRem(12),
  xsm: convertPixelToRem(13.5),
  sm: convertPixelToRem(14),
  base: convertPixelToRem(16),
  xl: convertPixelToRem(20),
  "2xl": convertPixelToRem(24),
  "3xl": convertPixelToRem(30),
};

const defaultTheme: DefaultTheme = {
  fontSize,
  colours,
  borderRadius,
  mediaSizes,
};

export default defaultTheme;
