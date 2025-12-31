/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rd-blue': '#003DA5',
        'rd-blue-hover': '#002F80',
        'rd-red': '#DC1C2E',
      },
    },
  },
  plugins: [],
}