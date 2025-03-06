import { defineConfig } from "tailwindcss/helpers";
import animate from "tailwindcss-animate";

export default defineConfig({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables dark mode with the `.dark` class
  theme: {
    extend: {},
  },
  plugins: [
    animate, // Adds Tailwind CSS animation utilities
    ({ addVariant }) => {
      addVariant("dark", ".dark &"); // Custom dark variant (alternative to `dark:`)
    },
  ],
});
