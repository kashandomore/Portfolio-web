module.exports = {
  content: ["./components/**/*.{tsx,js,ts}", "./pages/**/*.{tsx,js,ts}"],
  theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      // fontFamily: { headline: ["Oswald"] },
      colors: {
        bgBody: "#010212",
        primary: "#010212",
        secondory: "#f26c4f",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};
