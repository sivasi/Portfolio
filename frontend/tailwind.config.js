/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  animation: {
    text: 'text 5s ease infinite',
  },
  extend: {
    keyframes: {
      displace: {
        '0%': { transform: 'rotate(0deg)' },
        '20%': { transform: 'rotate(-90deg)' },
        '40%': { transform: 'rotate(0deg)' },
        '60%': { transform: 'rotate(0deg)' },
        '80%': { transform: 'rotate(90deg)' },
        '100%': { transform: 'rotate(0deg)' },
      },
    },
  },
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

