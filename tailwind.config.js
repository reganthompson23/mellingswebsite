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
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dae7',
          300: '#b9c5da',
          400: '#8b9cbe',
          500: '#6d82ac',
          600: '#526490',
          700: '#435276',
          800: '#394563',
          900: '#2d3749',
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
    },
  },
  plugins: [],
}

