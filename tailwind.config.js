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
      },
      colors: {
        "default": {
          100: '#fde3b9',  // Light blend of both colors
          200: '#fbcf92',
          300: '#f8b96c',
          400: '#f6a446',
          500: '#f57f29',  // A balanced middle between #fabc14 and #ee4723
          600: '#d66f24',  // Darker tone based on the combination
          700: '#b75f1f',
          800: '#984f1a',
          900: '#7a3f15',  // Darkest shade
          "tr": "#f57f29cc" // Transparent version of the middle tone
        }
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
