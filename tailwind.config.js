/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#4B99B8',
        'area': '#93C2D4'
      },
    },
  },
  plugins: [],
}

