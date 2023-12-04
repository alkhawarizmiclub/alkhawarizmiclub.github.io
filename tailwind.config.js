/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('assets/images/header-bg.png')",
      }
    },
  },
  plugins: [],
}

