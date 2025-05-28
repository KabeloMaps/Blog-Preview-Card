/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // This scans all HTML files in the root directory
  theme: {
    extend: {
      colors: {
        customYellow: "#F4D04E",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
