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
          50: '#f0f9fb',
          100: '#d9f1f5',
          200: '#b8e4ec',
          300: '#88d1de',
          400: '#51b7cc',
          500: '#3498b5',
          600: '#2a7a99',
          700: '#26647d',
          800: '#245268',
          900: '#214557',
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

