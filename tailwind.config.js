/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000', // Atau #0A0A0A
        'accent-blue': '#0066FF',
        'text-light': '#FFFFFF',
        'text-muted': '#A3A3A3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Pastikan nanti mengimpor font Inter
      }
    },
  },
  plugins: [],
}