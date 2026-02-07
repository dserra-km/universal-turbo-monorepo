/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../../packages/ui/src/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [
    require("nativewind/preset"),
    require("@repo/tailwind-config/preset")
  ],
  theme: {
    extend: {}
  },
  plugins: []
}