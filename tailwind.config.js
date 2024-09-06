/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '520px',
        '2xs': '370px',
        '3xs': '290px',
      },
      spacing: {
        lg: '2em',
        md: '1.5em',
        sm: '1em',
        xs: '0.5em',
      },
    },
  },
  plugins: [],
};
