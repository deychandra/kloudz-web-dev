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
                                                  DEFAULT: '#0173c8',
                                                  dark: '#015a9e',
                                                  light: '#3d9be0',
                                                  50: '#e6f3fb',
                                                  100: '#cce7f7',
                                                  200: '#99cfef',
                                                  300: '#66b7e7',
                                                  400: '#339fdf',
                                                  500: '#0173c8',
                                                  600: '#015a9e',
                                                  700: '#014275',
                                                  800: '#012b4d',
                                                  900: '#001524',
                                        },
                                        dark: {
                                                  900: '#0a0e17',
                                                  800: '#111827',
                                                  700: '#1f2937',
                                                  600: '#374151',
                                                  500: '#4b5563',
                                        },
                                        accent: {
                                                  blue: '#3b82f6',
                                                  purple: '#8b5cf6',
                                                  cyan: '#06b6d4',
                                                  emerald: '#10b981',
                                        }
                              },
                              fontFamily: {
                                        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                                        display: ['Outfit', 'Inter', 'sans-serif'],
                                        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
                              },
                              fontSize: {
                                        'display-xl': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                                        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                                        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                                        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                              },
                              animation: {
                                        'fade-in': 'fadeIn 0.6s ease-out forwards',
                                        'fade-up': 'fadeUp 0.6s ease-out forwards',
                                        'fade-down': 'fadeDown 0.6s ease-out forwards',
                                        'scale-in': 'scaleIn 0.5s ease-out forwards',
                                        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
                                        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
                                        'float': 'float 6s ease-in-out infinite',
                                        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                                        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
                                        'spin-slow': 'spin 20s linear infinite',
                              },
                              keyframes: {
                                        fadeIn: {
                                                  '0%': { opacity: '0' },
                                                  '100%': { opacity: '1' },
                                        },
                                        fadeUp: {
                                                  '0%': { opacity: '0', transform: 'translateY(30px)' },
                                                  '100%': { opacity: '1', transform: 'translateY(0)' },
                                        },
                                        fadeDown: {
                                                  '0%': { opacity: '0', transform: 'translateY(-30px)' },
                                                  '100%': { opacity: '1', transform: 'translateY(0)' },
                                        },
                                        scaleIn: {
                                                  '0%': { opacity: '0', transform: 'scale(0.95)' },
                                                  '100%': { opacity: '1', transform: 'scale(1)' },
                                        },
                                        slideInLeft: {
                                                  '0%': { opacity: '0', transform: 'translateX(-50px)' },
                                                  '100%': { opacity: '1', transform: 'translateX(0)' },
                                        },
                                        slideInRight: {
                                                  '0%': { opacity: '0', transform: 'translateX(50px)' },
                                                  '100%': { opacity: '1', transform: 'translateX(0)' },
                                        },
                                        float: {
                                                  '0%, 100%': { transform: 'translateY(0)' },
                                                  '50%': { transform: 'translateY(-20px)' },
                                        },
                                        pulseGlow: {
                                                  '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(1, 115, 200, 0.3)' },
                                                  '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(1, 115, 200, 0.6)' },
                                        },
                                        gradientShift: {
                                                  '0%, 100%': { backgroundPosition: '0% 50%' },
                                                  '50%': { backgroundPosition: '100% 50%' },
                                        },
                              },
                              backgroundImage: {
                                        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                                        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                                        'hero-gradient': 'linear-gradient(135deg, #0a0e17 0%, #111827 50%, #0a0e17 100%)',
                                        'card-gradient': 'linear-gradient(145deg, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.8))',
                                        'glow-gradient': 'radial-gradient(circle at center, rgba(1, 115, 200, 0.15) 0%, transparent 70%)',
                              },
                              boxShadow: {
                                        'glow': '0 0 30px rgba(1, 115, 200, 0.3)',
                                        'glow-lg': '0 0 60px rgba(1, 115, 200, 0.4)',
                                        'card': '0 4px 40px rgba(0, 0, 0, 0.3)',
                                        'card-hover': '0 8px 60px rgba(0, 0, 0, 0.4)',
                              },
                              backdropBlur: {
                                        xs: '2px',
                              },
                              transitionTimingFunction: {
                                        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
                                        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
                              },
                              transitionDuration: {
                                        '400': '400ms',
                                        '600': '600ms',
                                        '800': '800ms',
                              },
                    },
          },
          plugins: [],
}
