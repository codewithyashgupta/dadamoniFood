export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heading: '#333',
        searchBar: "#EFF0F6",
        btnOne: "#1F1F39",
        btnTwo: "#F4AE00",
      },
      fontFamily: {
        heading: ['Your Heading Font', 'sans-serif'], // Example heading font family
      },
    },
  },
  plugins: [],
}