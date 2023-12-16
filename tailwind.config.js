/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'min': '0px', 'max': '768px' },
        'md': { 'min': '769px', 'max': '1000px' },
        'lg': { 'min': '1001px' },
      },
    },
  },
  plugins: [],
}

