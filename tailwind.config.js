module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "4xl": "0.5px 0.5px 8px 0.1px",
        "highlight": "2px -1px 25px 2px",
        "5xl": "-0.1px -0.1px 20px -15px",
      },
      fontFamily: {
        homemade: ["'Homemade Apple', cursive"]
      },
    },
  },
 
  plugins: [],
}
