const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        text: "#2D3341",
        black: colors.black,
        white: colors.white,
        ash: "#edf0f6",
        gray: colors.gray,
        red: colors.red,
        crimson: "#e84b3c",
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
        projects: "#8d9094",
      },
      spacing: {
        100: "50rem",
      },
    },
  },
}
