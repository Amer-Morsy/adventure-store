/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#270A4B",
        secondary: "#E8C36D",
        dark: "#110734",
      },
      fontFamily: {
        sans: ["VT323"],
      },
    },
  },
  plugins: [],
};
