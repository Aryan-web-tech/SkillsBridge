/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust these paths based on your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC107',       // Amber/Golden Yellow
        secondary: '#2196F3',     // Blue
        tertiary: '#4CAF50',      // Green
        neutralLight: '#F5F5F5',  // Light Gray/Off-White
        neutralDark: '#333333',   // Dark Gray
        textPrimary: '#333333',   // Dark Gray
        textSecondary: '#757575', // Medium Gray
      },
      borderRadius: {
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.07)',
      },
    },
    fontFamily: {
      'sans': ['"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Example sans-serif stack
      // You can add more custom fonts here if needed
    },
  },
  plugins: [],
}