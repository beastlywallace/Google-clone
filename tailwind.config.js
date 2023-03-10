module.exports = {
  mode: 'jit',
  darkmode: false,
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend:{}
  },
  plugins: [
      require('@tailwindcss/line-clamp'), 
  ],
}
