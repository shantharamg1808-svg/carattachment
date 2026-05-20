module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdeae8',
          100: '#fbc5c1',
          200: '#f8a099',
          300: '#f67b72',
          400: '#f3564a',
          500: '#EB0E00', // Exact hex requested by user
          600: '#bc0b00',
          700: '#8d0800',
          800: '#5e0500',
          900: '#2f0300',
        }
      }
    },
  },
  plugins: [],
};
