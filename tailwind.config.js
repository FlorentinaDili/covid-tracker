module.exports = {
 // purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
 //min 9:36
 purge: { content : ['./public/**/*.html','./src/**/*.vue']},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container:{
      center:'true',
      padding:'2rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
