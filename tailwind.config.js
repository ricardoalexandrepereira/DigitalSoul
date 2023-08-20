/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxSwahdow: {
        ShadowBlur:"3px 3px 12px 3px rgba(255, 255, 255, 0.075)"
      },
      backgroundImage: {
        'contextWrapper': "url('/digital-img2.jpg')",
        'contextcc': "url('/cccoil.svg')",
        
      },
      colors:{
        White:"#ffffff",
        Black:"#000000",
        Orange:"#eeb844",
        DarkBlue:"#3E2044",
        Pink:"#e83468",
        Purple:"#e83468",
        WhiteGray:"#b3b2b1",
        blur:"rgba(255, 255, 255, 8)",
        Glass:"rgba(255, 255, 255, 0.15)",
        Glass1:"rgba(210, 130, 241, 0.15)",
        
      }
    },
    screens:{
      xs:"480px",
      sm:"640px",
      md:"768px",
      lg:"1024px",
      xl:"1228px"
    }
  },
  plugins: [],
}
