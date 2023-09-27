/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
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
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")]
}
