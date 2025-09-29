/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tatroz-green': '#1BCC0C',
        'tatroz-green-light': '#22D912',
        'tatroz-green-dark': '#159A0A',
      }
    },
  },
  plugins: [],
};
