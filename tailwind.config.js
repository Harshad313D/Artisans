/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      colors: {
        heritage: {
          gold: "#D4AF37",
          ruby: "#7A1C21",
          cream: "#FAFAF5",
          saffron: "#E67E22",
          mehendi: "#4A5D23",
          dark: "#1A1A1A",
        },
      },
      borderRadius: {
        arch: "12rem 12rem 0 0", // Simulates traditional Indian archways
      },
    },
  },
  plugins: [],
};
