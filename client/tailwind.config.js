/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        STIX: ["STIX Two Text"],
        Roboto: ["Roboto"],
        Poppins: ["Poppins"],
        OpenSans: ["Open Sans"],
        Rubik: ["Rubik"],
        Bellefair: ["Bellefair"],
        Baskervville: ["Baskervville"]
       },
       colors: {
        'brand-black': '#292929',
      }
    },
  },
  plugins: [],
}