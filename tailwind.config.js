/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#05060a',
          900: '#0a0b12',
          850: '#0e0f18',
          800: '#13141f',
          700: '#1b1d2b',
          600: '#262838',
          500: '#3a3d52',
        },
        accent: {
          blue: '#4f7cff',
          violet: '#9b6dff',
          pink: '#ff7ac6',
          cyan: '#5ad6ff',
        },
      },
      backgroundImage: {
        'gemini-grad': 'linear-gradient(135deg, #4f7cff 0%, #9b6dff 50%, #ff7ac6 100%)',
        'gemini-grad-soft': 'linear-gradient(135deg, rgba(79,124,255,0.15) 0%, rgba(155,109,255,0.15) 50%, rgba(255,122,198,0.15) 100%)',
      },
      keyframes: {
        'blob-float': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.08)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'blob-float': 'blob-float 18s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
};
