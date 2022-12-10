/** @type {import('tailwindcss').Config} */
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

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
        "light-emerald": "hsl(177, 40%, 45%)",
        "dark-emerald": "hsl(177, 41%, 36%)",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  console.log(allColors);
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}
