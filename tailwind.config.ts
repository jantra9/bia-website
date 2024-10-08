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
      fontFamily:{
        custom:['Otomanopee','sans-serif'],
        poppins: ['Poppins', 'sans-serif'], // Add Poppins to the font family list
      
      },
    },
  },
  plugins: [],
};

export default config;
