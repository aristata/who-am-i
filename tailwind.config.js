/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      english: ["IAMAPLAYER"],
      korean: ["omyu_pretty"]
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
