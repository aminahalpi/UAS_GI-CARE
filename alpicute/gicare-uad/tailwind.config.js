/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Sesuaikan dengan struktur proyek Anda
  ],
  theme: {
    extend: {
      colors: { 'custom-blue': '#16293b', },
    },
  },
  plugins: [],
};
