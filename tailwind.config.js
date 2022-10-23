/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark-primary': '#0A0A0A',
      'dark-secondary': '#1C1E1F',
      'primary-color': '#6B66FF',
      'accent-color': '#79EFBC',
      'white': '#eff6ff',
      'red': '##ef4444',
      'yellow': '##eab308',
    }
  },
  plugins: [],
}