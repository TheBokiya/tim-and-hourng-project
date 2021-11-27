module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      mdImg: "640px",
      xlImg: "896px",
    },
    fontFamily: {
      sans: "Roboto",
    },
    extend: {
      colors: {
        navy: "#022741",
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
