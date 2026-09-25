/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ivory: '#F5F3EE',
        charcoal: '#171817',
        'charcoal-dark': '#1C1C1B',
        'muted-warm': '#77736B',
        'brand-blue': '#168BCB',
        'brand-red': '#D92525',
      },
      fontFamily: {
        sans: ['"Manrope"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        serif: ['"Cinzel"', 'serif'],
      },
    },
  },
  plugins: [],
}
