import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "var(--orange)",
        lightorange: "var(--lightorange)",
        almostblack: "var(--almostblack)",
        fullblack: "var(--fullblack)",
        fullwhite: "var(--white)",
        almostwhite: "var(--almostwhite)",
        graycolor: "var(--gray)"
      },
    },
  },
  plugins: [],
};
export default config;
