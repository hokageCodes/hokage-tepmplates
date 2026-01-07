/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        accent: "#6c47ff", // Updated to match the purple-ish color in the navbar
        bg: "#fafbfc",
        text: "#18181b",
        card: "#fff",
        border: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
