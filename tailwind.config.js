
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d9efff',
          200: '#bde3ff',
          300: '#8fd0ff',
          400: '#5ab7ff',
          500: '#2d9cff',
          600: '#0c7fe5',
          700: '#0566b8',
          800: '#074f8d',
          900: '#083f70'
        }
      }
    }
  },
  plugins: []
}
