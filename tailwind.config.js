/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {},
    // colors: {
    //   customBlue: "#2A5A9A",
    //   customGrey: "#F2F2F2",
    //   orange: { 400: "#FF9529" },
    //   red: "#FF0000",
    // },
  },
  plugins: [require("daisyui")],
};
