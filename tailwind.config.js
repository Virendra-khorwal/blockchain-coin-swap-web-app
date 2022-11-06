/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "dark-primary": "#0A0A0A",
      "dark-secondary": "#1C1E1F",
      "dark-light": "#2E3032",
      "primary-color": "#6B66FF",
      "accent-color": "#79EFBC",
      white: "#eff6ff",
      "red-color": "##ef4444",
      "yellow-color": "##eab308",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "md": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};