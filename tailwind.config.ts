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
        gradientLightPrimary: '#5A84C0',
        gradientDartPrimary: '#594Ed2',
        neutralBlack: '#1C1C1C',
        neutralWhite: '#FFFFFF',
        lightGray: '#F0F0F0',
        midGray: '#DFDFDF',
        darkGray: '#9E9E9E',
      },
    },
  },
  plugins: [],
};
export default config;
