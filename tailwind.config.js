/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // If using App Router
  ],
  theme: {
    extend: {
      colors: {
        'hueneu-primary': '#A6A39E',    // Soft, warm neutral gray
        'hueneu-secondary': '#E0DEDC', // Lighter neutral gray
        'hueneu-accent': '#FF6B6B',     // Vibrant coral/red
        'hueneu-offwhite': '#F5F5F5',
        'hueneu-charcoal': '#333333',
        'hueneu-success': '#4CAF50',
        'hueneu-warning': '#FFC107',
        'hueneu-error': '#F44336',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'logo-reveal': 'logo-reveal 1.5s ease-out forwards',
        'scroll-indicator-bounce': 'scroll-indicator-bounce 2s infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'pop-out': 'pop-out 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
      },
      keyframes: {
        'logo-reveal': {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'scroll-indicator-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop-out': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // For sophisticated visual hierarchy and spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // For sophisticated typography scales
      fontSize: {
        '7xl': ['5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
