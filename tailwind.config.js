/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Fraunces', 'ui-serif', 'Georgia'],
        display: ['Fraunces', 'ui-serif', 'Georgia'],
      },
      colors: {
        ink: {
          950: '#070B14',
          900: '#0B1220',
          800: '#111A2E',
          700: '#1B2740',
        },
        gold: {
          400: '#F4C24A',
          500: '#E8A93C',
          600: '#C8862A',
        },
        sand: {
          50: '#F8F6F1',
          100: '#F1ECE0',
        },
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(7,11,20,0.25)',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
