/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aeonik: ["aeonik-trial", "sans-serif"],
      },

      screens: {
        custom: { max: "1250px" },
        tab: { max: "900px" },
      },
    },
  },
  plugins: [],
};
