/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A86FF',         // Calm, trustworthy blue
        accent: '#FFBE0B',          // Optimistic yellow
        neutralBase: '#F6F8FC',     // Background
        darkText: '#0D0672',        // For main text
        secondarySky: '#8ECAE6',    // Sky Blue for buttons/icons
        secondaryOrange: '#FB8500', // Deep orange for CTA
      },
      borderRadius: {
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.07)',
      },
    },
    fontFamily: {
      sans: ['"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
}
