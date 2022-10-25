/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "hsl(228, 19%, 5%)",
        white: "hsl(0, 0%, 98%)",
        "dark-grey": "hsl(213, 24%, 16%)",
        "light-grey": "hsl(210, 2%, 78%)",
        "light-emerald": "hsl(176, 96%, 69%)",
        "dark-emerald": "hsl(177, 40%, 45%)",
        // black: "hsl(196, 29%, 13%)",
        // darkGreen: "hsl(178, 48%, 32%)",
        // lightGreen: "hsl(177, 50%, 46%)",
        // grey: "hsl(177, 43%, 91%)",
        // white: "hsl(180, 100%, 100%)",
      },
    },
  },
  plugins: [],
};
