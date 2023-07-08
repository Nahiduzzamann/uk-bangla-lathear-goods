/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(1, 1, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(1, 1, 1, 1)',
          },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 4s infinite',
      },
    },
  },
  plugins: [require("daisyui")],
}

