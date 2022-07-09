/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxWidth: {
      "card-description": "calc(100% - 2rem)",
    },
    extend: {},
  },
  plugins: [],
};
