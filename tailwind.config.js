/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/blog/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  important: "#app",
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}