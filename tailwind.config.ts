import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#0a0a0f",
        "bg-surface": "#111827",
        "bg-card": "#1e293b",
        "accent-cyan": "#06b6d4",
        "accent-violet": "#8b5cf6",
        "text-primary": "#f1f5f9",
        "text-muted": "#94a3b8",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #06b6d4, #8b5cf6)",
        "gradient-card": "linear-gradient(135deg, rgba(6,182,212,0.05), rgba(139,92,246,0.05))",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(6,182,212,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(6,182,212,0.6), 0 0 80px rgba(6,182,212,0.3)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
