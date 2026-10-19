/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0a1e3f',
        'brand-blue': '#0ea5e9',
        'brand-light': '#e0f2fe',
      }
    },
  },
  plugins: [],
}