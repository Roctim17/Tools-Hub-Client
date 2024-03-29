module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          secondary: "#176F6B",

          primary: "#FFC000",

          accent: "#FFEDD5",

          neutral: "#27292e",
          // neutral: "#F3F4F6",

          "base-100": "#FFFFFF",

          info: "#98A8DD",

          success: "#1BBB70",

          warning: "#DF7E07",

          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}