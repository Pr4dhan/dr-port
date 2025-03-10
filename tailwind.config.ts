import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./frontend/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0487E2",
        "primary-dark": "#0074CF",
        "primary-light": "#0793F0",
        secondary: "#CC5200",
        "secondary-light": "#DD7804",
        background: "#FAFAFA",
        "dark-background": "#121212",
        surface: "#FDFCFA",
        "dm-surface": "#1F1F1F",
        "dm-surface-dark": "#151515",
        "dm-surface-light": "#2D2D2D",
        error: "#EA3C53",
        "on-primary": "#ffffff",
        "on-primary-dark": "#ffffff",
        "on-background": "#000000",
        "on-surface": "#000000",
        "on-error": "#ffffff",
        github: "#2DBA4E",
        ring: "#3b82f6",
      },
      container: {
        center: true,
      },
      screens: {
        xs: "475px",
        premium: "1920px",
      },
      animation: {
        rgb: "moonbami 15s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      boxShadow: {
        gradient: "0px 0px 100px 100px rgba(3, 0, 28, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
