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
        gradientDarkPrimary: '#594Ed2',
        neutralBlack: '#1C1C1C',
        neutralWhite: '#FFFFFF',
        lightGray: '#F0F0F0',
        midGray: '#DFDFDF',
        darkGray: '#9E9E9E',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        h1: ['24px', { lineHeight: '32px', fontWeight: '500' }],
        h2: ['16px', { lineHeight: '24px', fontWeight: '500' }],
        h3: ['16px', { lineHeight: '24px', fontWeight: '400' }],
      },
      boxShadow: {
        smallShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
        largeShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};

export default config;
