/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '256': '64rem',
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },
      screens: {
        xs: '400px', // Example: custom extra-small breakpoint
      },
    },
  },
  plugins: [],
}

