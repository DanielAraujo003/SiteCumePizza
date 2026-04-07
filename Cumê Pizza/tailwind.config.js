/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  // ← Isso faz as classes funcionarem!
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],  // Sua fonte
      },
    },
  },
  plugins: [],
}
