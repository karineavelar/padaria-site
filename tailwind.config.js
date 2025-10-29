/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'padaria-blue': '#1e3a8a',
        'padaria-blue-light': '#3b82f6',
        'padaria-orange': '#f97316',
        'padaria-orange-light': '#fb923c',
        'padaria-red': '#dc2626',
        'padaria-red-light': '#f87171',
        'padaria-cream': '#fef3c7',
        'padaria-brown': '#92400e',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
