/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "380px",
      sm: "520px",
      md: "784px",
      lg: "1024px",
      xl: "1600px",
    },
    extend: {
      fontFamily:{
        main: ["Sora", `sans-serif`]
      }
    },
  },
  plugins: [],
};
