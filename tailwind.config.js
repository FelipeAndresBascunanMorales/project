/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bokor: ['Bokor', 'sans-serif'], //download and add it to the font-family
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
