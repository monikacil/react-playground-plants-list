import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
    },
    extend: {
      height: {
        "header-min": "8rem",
        "footer-min": "2rem",
      },
    },
  },
  plugins: ["./node_modules/tailwindcss-base-buttons"],
};
