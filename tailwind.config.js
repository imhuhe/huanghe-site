/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Noto Serif SC"', '"Playfair Display"', 'serif'],
        cn: ['"Noto Serif SC"', 'serif'],
      },
      colors: {
        muted: '#9AA0A6',
      },
    },
  },
  plugins: [],
}
