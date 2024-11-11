/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F875AA",
        secondary: "#FFDFDF",
        tertiary: "#FFF6F6",
        softblue: "#AEDEFC ",
      },
      height: {
        100: "430px",
      },
      fontFamily: {
        banner: "Dancing Script",
        Parisienne: "Parisienne",
        AbhayaLibre: "Abhaya Libre",
      },
    },
  },
  plugins: [],
};
