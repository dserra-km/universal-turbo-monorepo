/** @type {import('tailwindcss').Config} */
import nativewindPreset from "nativewind/preset";
import workspacePreset from "@repo/tailwind-config/preset";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [nativewindPreset, workspacePreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
