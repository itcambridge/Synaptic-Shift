/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00ffff",
      },
      fontFamily: {
        'geist-sans': ['var(--font-geist-sans)'],
        'geist-mono': ['var(--font-geist-mono)'],
      },
      height: {
        'animation-sm': '16rem',    // 256px
        'animation-md': '24rem',    // 384px
        'animation-lg': '32rem',    // 512px
      },
      width: {
        'animation-sm': '16rem',
        'animation-md': '24rem',
        'animation-lg': '32rem',
      },
      maxWidth: {
        'animation-container': '40rem', // 640px
      },
      spacing: {
        'animation': {
          'sm': '1rem',
          'md': '2rem',
          'lg': '4rem',
        },
        '90': '22.5rem',
      },
      zIndex: {
        'animation': '15',
        'animation-bg': '5',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#EAEAEA',
            h1: {
              color: '#FFFFFF',
              fontWeight: '600',
            },
            h2: {
              color: '#FFFFFF',
              fontWeight: '600',
              fontSize: '1.75rem',
            },
            h3: {
              color: '#FFFFFF',
              fontWeight: '500',
              fontSize: '1.5rem',
            },
            strong: {
              color: '#FFFFFF',
              fontWeight: '500',
            },
            p: {
              fontSize: '1.125rem',
              lineHeight: '1.8',
            },
            a: {
              color: '#00ffff',
              '&:hover': {
                color: '#66ffff',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};