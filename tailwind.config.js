/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#11081f",
        highlight1: "#01ABFD",
        highlight2: "#8027EB",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif"],
      light: ["Switzer-Light", "Switzer-Light"],
      medium: ["Switzer-Medium", "Switzer-Medium"],
      bold: ["Switzer-Bold", "Switzer-Bold"],
      italic: ["Switzer-Light-Italic", "Switzer-Light-Italic"],
    },
  },
  plugins: [require("tailwindcss-animated")],
};
