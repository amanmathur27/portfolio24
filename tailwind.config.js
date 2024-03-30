/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#C778DD",
        backgnd: "#282C33",
        grayy: "#ABB2BF",
        
        //Shades of Black
        midnightBlue: "#101720",
        deepNavyBlue: "#011222",
        charcoalGray: "#171717",
        richBlack: "#020D19",
        oilBlack: "#0C0C0C",
        darkSlateGray: "#0D1717",
        obsidian: "0B1215",

        //SHades of White
        ghostWhite: "#F8F8FF",
        ivory: "#FFFFF0",
        snow: "FFFAFA",
        offWhite: "#FAF9F6"
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};