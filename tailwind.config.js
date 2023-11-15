/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      title: ["var(--font-open-sans)"],
      body: ["var(--font-lato)"],
    },
    extend: {
      colors: {
        reddish: "#a61c00",
        blueish: "#008aa6",
        mainBg: "#efefef",
        headerBg: "#f8f9fa",
      },
      screens: {
        xmd: "880px",
      },
    },
  },
}

