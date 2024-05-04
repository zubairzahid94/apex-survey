import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "xs": "390px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        apex: {
          dark: "hsl(var(--apex-dark))",
          blue: "hsl(var(--apex-blue))",
          orange: "hsl(var(--apex-orange))",
          yellow: "hsl(var(--apex-yellow))",
          grey: {
            dark: "hsl(var(--apex-grey-dark))",
            medium: "hsl(var(--apex-grey-medium))",
            light: "hsl(var(--apex-grey-light))",
            bluish: "hsl(var(--apex-bluish-grey))",
          },
          green: {
            DEFAULT: "hsl(var(--apex-green))",
            sea: "hsl(var(--apex-sea-green))",
            dark: "hsl(var(--apex-dark-green))",
          },
        },
        bluishGrey: "hsl(var(--bluish-grey))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      screens: {
        xxs: "390px",
        xs: "480px",
      },
      backgroundColor: {
        apex: {
          dark: "hsl(var(--apex-dark))",
          blue: "hsl(var(--apex-blue))",
          orange: "hsl(var(--apex-orange))",
          yellow: "hsl(var(--apex-yellow))",
          grey: {
            dark: "hsl(var(--apex-grey-dark))",
            medium: "hsl(var(--apex-grey-medium))",
            light: "hsl(var(--apex-grey-light))",
            bluish: "hsl(var(--apex-bluish-grey))",
          },
          green: {
            DEFAULT: "hsl(var(--apex-green))",
            sea: "hsl(var(--apex-sea-green))",
            dark: "hsl(var(--apex-dark-green))",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        h1: ["var(--apex-h1-size)", {
          fontWeight: "var(--apex-h1-weight)",
          lineHeight: "var(--apex-h1-line-height)",
        }],
        h2: ["var(--apex-h2-size)", {
          fontWeight: "var(--apex-h2-weight)",
          lineHeight: "var(--apex-h2-line-height)",
        }],
        h3: ["var(--apex-h3-size)", {
          fontWeight: "var(--apex-h3-weight)",
          lineHeight: "var(--apex-h3-line-height)",
        }],
        h4: ["var(--apex-h4-size)", {
          fontWeight: "var(--apex-h4-weight)",
          lineHeight: "var(--apex-h4-line-height)",
        }],
        h5: ["var(--apex-h5-size)", {
          fontWeight: "var(--apex-h5-weight)",
          lineHeight: "var(--apex-h5-line-height)",
        }],
        btn: ["var(--apex-btn-size)", {
          fontWeight: "var(--apex-btn-weight)",
          lineHeight: "var(--apex-btn-line-height)",
        }],
        para: ["var(--apex-para-size)", {
          fontWeight: "var(--apex-para-weight)",
          lineHeight: "var(--apex-para-line-height)",
        }],
        small: ["var(--apex-small-size)", {
          fontWeight: "var(--apex-small-weight)",
          lineHeight: "var(--apex-small-line-height)",
        }],
        caption: ["var(--apex-caption-size)", {
          fontWeight: "var(--apex-caption-weight)",
          lineHeight: "var(--apex-caption-line-height)",
        }],
      },
      keyframes: {
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config