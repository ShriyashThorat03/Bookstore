/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FFCE1A',
        secondary: '#0D0842',
        'blackBG': '#F3F3F3',
        'Favorite': '#ff5841',
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary:["Nunito Sans", "sans-serif"]
      },
      spacing: {
        '12': '3rem',
      },
      screens: {
        'xl': { max: '1279px' },
      },
      maxWidth: {
        '8xl': '80rem',
      },
      minWidth: {
        '1/2': '50%',
      },
    },
  },
  plugins: [],
};
