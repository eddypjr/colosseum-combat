import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7856ff',
      },
    },
    screens: {
      maxXs: { max: '480px' },
      maxSm: { max: '640px' },
      maxMd: { max: '768px' },
      maxLg: { max: '1024px' },
      maxXl: { max: '1280px' },
    },
  },
  plugins: [],
};
export default config;
