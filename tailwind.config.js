/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'max': '768px' },
        'md': { 'max': '1000px' },
        'lg': { 'max': '1200px' },
        'xl': { 'min': '1201px' },
      },
    },
  },
  plugins: [],
}

