/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-soft': '#0d1117',
        'dark-strong': '#03060a'
      }
    },
  },
  plugins: [],
}

