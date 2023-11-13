/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-cool": "#b2b2b2",
        "light-harsh": "rgba(239, 237, 253, 0.70)",
        "light-2": "rgba(255, 255, 255, 0.50)",
        harsh: "#A9A9A9",
        transparent: "rgba(255, 255, 255, 0.08)",
        "transparent-1": "rgba(29, 28, 32, 0.79)",
        "card-transparent": "rgba(9, 6, 23, 0.53)",
      },
      fontFamily: {
        sans: ["Aeonik Pro", ...defaultTheme.fontFamily.sans],
        "aeonik-pro": "Aeonik Pro",
        "fira-sans": "Fira Sans",
        "aeonik-pro-bold": "Aeonik Pro Bold",
        atilla: "Atilla",
        "aeonik-fono": "Aeonik Fono",
        "aeonik-fono-bold": "Aeonik Fono Bold",
        poppins: "Poppins",
        "poppins-semi-bold": "Poppins Semi Bold",
        "poppins-light": "Poppins Light",
        "poppins-bold": "Poppins Bold",
        "dm-sans": "DM Sans",
        "dm-sans-bold": "DM Sans Bold",
        "sf-pro-text": "SF Pro Text",
        "sf-pro-text-semi-bold": "SF Pro Text Semibold",
        "sf-pro-text-bold": "SF Pro Text Bold",
        "ibm-plex-mono": "IBM Plex Mono",
        "ibm-plex-semi-bold": "IBM Plex Mono Semi Bold",
        "noto-sans": "Noto Sans",
        inter: "Inter",
        "inter-bold": "Inter Bold",
        "inter-light": "Inter Light",
      },
      fontSize: {
        heading: "60px",
        "sub-title-heading": "50px",
        "sub-heading": "23px",
        "semi-heading": "20px",
        lg: "20px",
        "caption-0.5": "10px",
        "caption-1": "12px",
        "caption-2": "13px",
        "caption-3": "15px",
      },
      backgroundImage: {
        "why-bg-1": "url(/div.sc-7dd06286-1.png)",
        "learn-1": "url(/learn-bg-1.png)",
        "learn-2": "url(/learn-2.png)",
        "round-bg": "url(/round-bg.png)",
        "why-bg-1": "url(/div.sc-7dd06286-1.png)",
        shade: "url(/bg-bridging.png)",
        star: "url(/star.png)",
        defi: "url(/defi.png)",
        "lazy-background-image": "url(/div.lazy-background-image.png)",
        "why-bg-2": "url(/why-bg.png)",
        "star-tiny-building-with-ease":
          "url(/start-tiny-building-with-ease.png)",
        "badge-common":
          "linear-gradient(90deg, rgba(229, 156, 255, 0.24) 0.01%, rgba(186, 156, 255, 0.24) 50.01%, rgba(156, 178, 255, 0.24) 100%)",
        "badge-color":
          " linear-gradient(0deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%), linear-gradient(90deg, #E59CFF 0.01%, #BA9CFF 50.01%, #9CB2FF 100%)",
        "button-gradient":
          "linear-gradient(152deg, #8C01FA 32.29%, #EB08A4 100%)",
        "text-gradient": "linear-gradient( #2B59FF, #BB2BFF)",
      },

      lineHeight: {
        "leading-24": "24px",
      },
    },
  },
  plugins: [],
};
