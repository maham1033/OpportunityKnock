/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily:{
        sans:['Roboto','sans-serif']
      },
      gridTemplateColumns:{
        '70/30':'70% 28%',
      },
      colors: {
        customBlue: 'rgb(11, 6, 74)',
        customHoverLightBlue:'rgb(121, 115, 197)',
        
      },
    },
  },
  plugins: [],
}