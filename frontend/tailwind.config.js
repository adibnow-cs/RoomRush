/** @type {import('tailwindcss').Config} */
export default {
    content: [
    // Files to scan for Tailwind class names
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      container:{
      padding:'10rem'
      }
    },
    plugins: [],
  }
  