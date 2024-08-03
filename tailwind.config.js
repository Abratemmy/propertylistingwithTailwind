/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        railway: ['Raleway', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      },
      colors: {
        mainBlack: '#1f2027',
        text2Color: 'var(--text2Color)',
        textColor: 'var(--textColor)',
        secondaryColor: 'var(--secondaryColor)',
        primaryColor: 'var(--primaryColor)',
        accentColor: 'var(--accentColor)'
      }
    },
  },
  plugins: [],
}

