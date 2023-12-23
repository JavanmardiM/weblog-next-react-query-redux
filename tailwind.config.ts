import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          10: "lab(80.992 32.325 -7.103)",
          50: "lab(62.916 59.272 -1.587)",
          70: "lab(48.471 50.975 -21.68)",
          100: "lab(33 42.09 -43.19)",
        },
        secondary: "",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        Merriweather: ["Merriweather"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
