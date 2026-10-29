/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#062d52',
          900: '#074883',
          850: '#075da9', // Primary Blue
          800: '#0868be',
          700: '#0b75c9', // Vibrant Blue
          600: '#1e8eeb',
          500: '#3ba2f6',
          100: '#dbeafe',
          50: '#eff6ff',
          brown: '#6f3f13' // Arca Forte Brown
        },
        cream: {
          50: '#fffdf7',
          100: '#fff9e9', // Base Cream
          200: '#fff1c9', // Soft Golden Cream
          300: '#f8e2a9',
          border: '#e9dfc8'
        },
        ink: {
          900: '#12253b', // Deep Navy
          700: '#2c3e50',
          500: '#5f6f7e', // Muted Slate
          300: '#94a3b8'
        }
      }
    }
  },
  plugins: [],
}

