/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          darker: 'var(--color-cyber-darker)',
          dark: 'var(--color-cyber-dark)',
          deep: 'var(--color-cyber-deep)',
          mid: 'var(--color-cyber-mid)',
        },
        neon: {
          sky: 'var(--color-neon-sky)',
          blue: 'var(--color-neon-blue)',
          cyan: 'var(--color-neon-cyan)',
          purple: 'var(--color-neon-purple)',
          pink: 'var(--color-neon-pink)',
          green: 'var(--color-neon-green)',
          yellow: 'var(--color-neon-yellow)',
          orange: 'var(--color-neon-orange)',
        },
        glass: {
          border: 'var(--color-glass-border)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}