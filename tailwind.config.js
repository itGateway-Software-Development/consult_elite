/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['poppins', 'sans-serif'],
        italic: ['playfair display', 'serif'],
      },
      colors: {
        "default": {
          100: '#fde3d1',  // lightest shade
          200: '#fbbd9e',
          300: '#f9956b',
          400: '#f77c4c',
          500: '#f57f29',  // base color
          600: '#d36823',
          700: '#b1511d',
          800: '#8f3a17',
          900: '#e36000',  // darkest shade
        },
        secondary: {
          100: '#fbd4c8',  // lightest shade
          200: '#f7a29a',
          300: '#f78b6e',
          400: '#f4734a',
          500: '#ee4723',  // base color
          600: '#d43b1e',
          700: '#b52e1a',
          800: '#971a15',
          900: '#7a1411',  // darkest shade
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
