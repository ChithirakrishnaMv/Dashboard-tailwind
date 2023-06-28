/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
}

