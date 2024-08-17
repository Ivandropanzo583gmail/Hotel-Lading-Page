/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Imagem': "url('./unsplash_kKvQJ6rK6S4.png')",
        
      }
    },
  },
  plugins: [],
}
