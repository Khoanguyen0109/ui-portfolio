/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#09090b',
        surface: '#18181b',
        'surface2': '#3f3f46',
        border: '#3f3f46',
        accent: '#a78bfa',
        'accent-dim': 'rgba(167,139,250,0.10)',
        'accent-border': 'rgba(167,139,250,0.25)',
        red: '#ff6b6b',
        'red-dim': 'rgba(255,107,107,0.08)',
        muted: '#a1a1aa',
        'muted2': '#d4d4d8',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      fontSize: {
        '2xs': '11px',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '0%, 100%': { boxShadow: '0 0 0 3px rgba(52,211,153,0.18)' },
          '50%': { boxShadow: '0 0 0 6px rgba(52,211,153,0.06)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
