/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        secondary: '#64748b',
        orange: '#ea580c',
      },
      screens:{
        '2xl' : '1320px'
      },
    },
  },
  plugins: [],
};
