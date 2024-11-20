/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',"./node_modules/flowbite/**/*.js"],
  content: ['./node_modules/preline/preline.js'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('flowbite/plugin'),require('preline/plugin'),require('@tailwindcss/forms')],
}

