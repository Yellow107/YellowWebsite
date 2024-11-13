/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      'mobile':{'max':'540px'},
      'tablet':{'min':'541px','max':'1024px'}
    },
    fontFamily: {
      'display': 'var(--font-outfit)',
      'body': 'var(--font-satoshi)',
    },
    extend: {
      colors: {
        'body': '#111111',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.15)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      keyframes: {
        'scale': {
          '0': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.5s ease-out",
        "accordion-up": "accordion-up 0.5s ease-out",
        'scale-up': 'scale 0.5s ease-out',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'link': 'cubic-bezier(.19,1,.22,1)',
        'anim-primary': 'cubic-bezier(0.62, 0.05, 0.01, 0.99);'
      },
      transitionDuration: {
        '2000': '2000ms',
        '5000': '5000ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}