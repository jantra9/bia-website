import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Includes the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Includes the `src` directory if applicable:
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
      'header-background': "url('/Header background.png')",
      },
      fontFamily:{
        custom:['Otomanopee','sans-serif']
      }
    },
  },
  plugins: [],
};

export default config;
