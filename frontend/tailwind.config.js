import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,ts}"
  ],
  theme: {
    extend: {
      colors: {
        darkGreenish: "rgb(14, 24, 25)"
      }
    },
  },
  plugins: [],
};

export default config;
