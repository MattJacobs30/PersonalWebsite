/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust according to your project structure
  ],
  theme: {
    extend: {
      keyframes: {
        fontSize: {
          sm: '0.600rem',
          base: '0.8rem',
          xl: '1.066rem',
          '2xl': '1.421rem',
          '3xl': '1.894rem',
          '4xl': '2.525rem',
          '5xl': '3.366rem',
        },
        fontFamily: {
          heading: 'Expletus Sans',
          body: 'Expletus Sans',
        },
        fontWeight: {
          normal: '400',
          bold: '700',
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
    },
  },
  plugins: [],
};
