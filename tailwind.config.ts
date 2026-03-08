import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
        headline: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        brand: {
          coral: '#E09000',
          red: '#F0A500',
          dark: '#1A1A1A',
          darkBrown: '#F2F2F0',
          offwhite: '#F2F2F0',
          amber: '#F0A500',
          warmGrey: '#FAFAF9',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: '16px',
        md: '12px',
        sm: '8px',
        card: '16px',
        heroPanel: '20px',
        button: '999px',
      },
      boxShadow: {
        card: '0 1px 4px rgba(0,0,0,0.05)',
        cardHover: '0 4px 16px rgba(0,0,0,0.08)',
        heroPanel: '0 8px 32px rgba(240,165,0,0.15)',
        nav: '0 1px 0 #EBEBEB',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;