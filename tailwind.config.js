/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        paper: '#FAF9F6',
        ink: '#111111',
      }
    },
  },
  plugins: [],
};
