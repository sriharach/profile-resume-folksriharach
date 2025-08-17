import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-color-primavera1': 'var(--main-color-primavera1)',
        'main-color-primavera2': 'var(--main-color-primavera2)',
        'main-color-primavera3': 'var(--main-color-primavera3)',
        'main-color-primavera4': 'var(--main-color-primavera4)',
        'main-color-primavera5': 'var(--main-color-primavera5)',
        'main-color-primavera6': 'var(--main-color-primavera6)',
        'color-gray1': 'var(--color-gray1)',
        'color-gray2': 'var(--color-gray2)',
      },
      keyframes: {
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        luminescence: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 255, 255, 1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0.5', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        moveUpDown: 'moveUpDown 2.5s ease-in-out infinite',
        luminescence: 'luminescence 2s infinite',
        fadeInUp: 'fadeInUp 1.6s ease-out',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#dc965a',
          secondary: '#FFE3BD',
          accent: '#37cdbe',
          neutral: '#3d4451',
          ghost: '#dc965a',
          'base-100': '#ffffff',
        },
      },
      // 'dark',
      // 'cupcake',
    ],
  },
} satisfies Config
