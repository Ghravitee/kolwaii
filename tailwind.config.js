/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Dark-Purple": "hsl(254, 83%, 7%)",
        "Purple-Accent": "hsla(270, 87%, 24%, 0.812)",
        "Dark-Grayish-Blue": "hsl(227, 12%, 61%)",
        "Very-Dark-Blue": "hsl(233, 12%, 13%)",
        "Very-Pale-Red": "hsl(13, 100%, 96%)",
        "Very-Light-Gray": "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        aiioko: "url('/ai.jpg')",
      },
    },
  },
  plugins: [],
};
