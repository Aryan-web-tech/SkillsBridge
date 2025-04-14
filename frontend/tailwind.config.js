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
        primary: '#FFC107',
        secondary: '#2196F3',
        tertiary: '#4CAF50',
        neutralLight: '#F5F5F5',
        neutralDark: '#333333',
        textPrimary: '#333333',
        textSecondary: '#757575',
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
