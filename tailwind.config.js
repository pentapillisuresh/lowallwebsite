/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#FF6B35',
        secondary: '#0C1F38',
        'primary-light': '#ff8c5c',
        'primary-dark': '#e54e1b',
        'secondary-light': '#1a3352',
        'secondary-dark': '#071225',
      },
    },
  },
  plugins: [],
}