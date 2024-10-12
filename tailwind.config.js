/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0B0C10',
        'secondary-dark': '#1F2833',
        'primary-light': '#C5C6C7',
        'accent-cyan': '#66FCF1',
        'accent-teal': '#45A29E',
      },
    },
  },
  plugins: [],
}