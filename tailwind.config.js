/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',"./node_modules/flowbite/**/*.js"],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),('flowbite/plugin')],
}

