/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      xs: '480px',
      md: '768px',
      lg: '976px',
      xl: '1340px',
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
