/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.html"],
    theme: {
      extend: {
        screen: {
            "2xl": "1500px",
        }
      },
    },
    plugins: [],
  }