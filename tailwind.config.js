/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        secondary: {
          50: '#fdf8f6',
          100: '#f7e8e1',
          200: '#f0d5c9',
          300: '#e5b3a1',
          400: '#d88872',
          500: '#c65d42',
          600: '#b84a31',
          700: '#993d2b',
          800: '#7c352a',
          900: '#662f26',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.25)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.25)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-lg': {
          textShadow: '0 8px 16px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

