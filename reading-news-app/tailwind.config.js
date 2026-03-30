/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic': ['Comic Sans MS', 'Chalkboard SE', 'Marker Felt', 'sans-serif'],
      },
      colors: {
        'kid-blue': '#4A90E2',
        'kid-green': '#7ED321',
        'kid-yellow': '#F5A623',
        'kid-red': '#FF6B6B',
        'kid-purple': '#9B59B6',
        'kid-pink': '#FF69B4',
        'kid-orange': '#FF8C42',
      },
    },
  },
  plugins: [],
}
