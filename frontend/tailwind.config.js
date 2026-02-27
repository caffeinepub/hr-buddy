import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                heading: ['Sora', 'system-ui', 'sans-serif'],
                body: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))',
                    50: 'oklch(0.96 0.03 195)',
                    100: 'oklch(0.92 0.06 195)',
                    200: 'oklch(0.84 0.09 195)',
                    300: 'oklch(0.72 0.11 195)',
                    400: 'oklch(0.60 0.13 195)',
                    500: 'oklch(0.48 0.12 195)',
                    600: 'oklch(0.40 0.11 195)',
                    700: 'oklch(0.32 0.09 195)',
                    800: 'oklch(0.24 0.07 195)',
                    900: 'oklch(0.16 0.05 195)',
                },
                amber: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    50: 'oklch(0.97 0.04 75)',
                    100: 'oklch(0.93 0.08 75)',
                    200: 'oklch(0.88 0.12 75)',
                    300: 'oklch(0.83 0.15 75)',
                    400: 'oklch(0.78 0.14 75)',
                    500: 'oklch(0.72 0.16 65)',
                    600: 'oklch(0.62 0.15 60)',
                },
                slate: {
                    50: 'oklch(0.98 0.004 240)',
                    100: 'oklch(0.95 0.006 240)',
                    200: 'oklch(0.90 0.008 240)',
                    300: 'oklch(0.82 0.012 240)',
                    400: 'oklch(0.68 0.016 240)',
                    500: 'oklch(0.52 0.02 240)',
                    600: 'oklch(0.42 0.022 240)',
                    700: 'oklch(0.32 0.02 240)',
                    800: 'oklch(0.22 0.018 240)',
                    900: 'oklch(0.15 0.015 240)',
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                card: '0 4px 24px -4px oklch(0.48 0.12 195 / 0.12)',
                'card-hover': '0 8px 40px -8px oklch(0.48 0.12 195 / 0.22)',
                glow: '0 0 40px oklch(0.48 0.12 195 / 0.25)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'fade-up': {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.6s ease-out forwards',
                'fade-in': 'fade-in 0.4s ease-out forwards',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
