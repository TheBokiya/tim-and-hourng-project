module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Roboto",
    },
    extend: {
      colors: {
        navy: "#0d335d",
        gold: "#fab95b",
        gray: {
          default: "#4B5563",
          light: "#F3F4F6",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
