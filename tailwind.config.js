/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        serif: ['"PT Serif"', 'serif'],
      },
      colors: {
        'sanity-black': '#101112',
        'sanity-red': '#f03e2f',
        'sanity-orange': '#F36458',
        'sanity-gray': '#e6e8eb',
        'sanity-dark-gray': '#2a2c32',
      },
      letterSpacing: {
        'tighter-custom': '-0.04em',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'float-slow': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateZ(40px) translateY(0)' },
          '50%': { transform: 'translateZ(40px) translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}