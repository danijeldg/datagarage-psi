/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Clash Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        purple: "#837BD9",
        "purple-dark": "#5329EA",
        blue: "#A3F1FE",
        dark: "#0a0a1a",
        "dark-secondary": "#1a1a2e",
        "dark-tertiary": "#131123",
      },
    },
  },
  plugins: [],
};
