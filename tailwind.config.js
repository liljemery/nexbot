/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/lib/esm/**/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000719'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

