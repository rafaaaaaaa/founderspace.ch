/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
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
      haas: ["HAAS", "sans-serif"],
    },
  },
  plugins: [],
};
