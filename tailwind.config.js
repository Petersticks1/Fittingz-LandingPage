/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C75',
          light: '#3282B8',
          dark: '#1B262C',
        },
        'main-text': '#222831',
        card: {
          DEFAULT: '#E3EFF6',
          hover: '#F7F9FC',
        },
        accent: {
          DEFAULT: '#38BDF8',
          hover: '#0EA5E9',
          light: '#E0F2FE',
        },
        navy: {
          DEFAULT: '#0F1B2D',
          light: '#162440',
          dark: '#090F1A',
        },
        muted: '#7A7A8C',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
