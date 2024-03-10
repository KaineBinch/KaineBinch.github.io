import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '768px',
      },
      print: {
        md: '@media print and (min-width: 768px)',
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["nord"],
  },
}