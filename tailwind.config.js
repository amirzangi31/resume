/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {

      screens: {
        '2xl': '1100px',
      }
    }
    ,
    extend: {
      colors: {
        "bg-body": "#0F0F0F",
        "text-primary": "#9f9f9f",
        primary : "#323232"
      }
    },
  },
  plugins: [],
}
