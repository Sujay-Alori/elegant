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
        arch: {
          blue: '#0284C7',
          'blue-light': '#38BDF8',
          'blue-dark': '#0369A1',
          'blue-950': '#082f49',
          cyan: '#06B6D4',
          red: '#DC2626',
          'red-light': '#EF4444',
          'red-dark': '#991B1B',
          dark: '#0A0D14',
          'dark-surface': '#111827',
          'dark-card': '#161F30',
          light: '#F8FAFC',
          muted: '#64748B',
          border: '#E2E8F0',
          'border-dark': '#1F293D',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        serif: ['"Cinzel"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'draw': 'draw 2s cubic-bezier(0.65, 0, 0.35, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      backgroundImage: {
        'blueprint-grid': "radial-gradient(rgba(2, 132, 199, 0.08) 1px, transparent 1px)",
        'blueprint-grid-dark': "radial-gradient(rgba(56, 189, 248, 0.12) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
