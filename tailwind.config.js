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
      colors: {
        primary:  '#F5A623',
        bg:       '#0F0F0F',
        surface:  '#1A1A1A',
        'text-1': '#FFFFFF',
        'text-2': '#A1A1AA',
      },
      fontSize: {
        'hero':    ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', fontWeight: '700' }],
        'section': ['2rem',    { lineHeight: '1.2',  fontWeight: '500' }],
        'label':   ['0.75rem', { lineHeight: '1',    fontWeight: '500', letterSpacing: '0.1em' }],
      },
      spacing: {
        'section': '6rem',
      },
      maxWidth: {
        'container': '72rem',
      },
    },
  },
  plugins: [],
}