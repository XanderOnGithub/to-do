import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3FA7D6",
        secondary: "#FAC05E",
        accept: "#59CD90",
        decline: "#EE6352",
      },
    },
  },
  plugins: [],
};
export default config;
