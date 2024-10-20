/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelBlue: '#A0DFF0',
        pastelPink: '#F7BFBF',
        pastelYellow: '#FEEFA1',
        pastelGreen: '#C8E7C8',
        lightGray: '#F3F4F6',
        purple900: '#240046',  // Adeola's brand dark color
        green400: '#A3D2CA',   // Button and accents
      }
    },
  },
  plugins: [],
};
