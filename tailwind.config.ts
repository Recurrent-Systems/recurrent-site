import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        steel: "#11243f",
        signal: "#1d4f91",
        mist: "#d9e7fb",
        glow: "#89aee8"
      },
      fontFamily: {
        sans: ["Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        panel: "0 24px 80px rgba(8, 17, 31, 0.22)"
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(137,174,232,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(137,174,232,0.12) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
