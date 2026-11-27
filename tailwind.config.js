/** @type {import('tailwindcss').Config} */

// Colours come from CSS variables in src/index.css (Graphite Violet palette).
// Change the palette there; light/dark values switch with the `dark` class on <html>.
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        ink: token("ink"),
        muted: token("muted"),
        line: token("line"),
        accent: token("accent"),
        "accent-ink": token("accent-ink"),
        "on-accent": token("on-accent"),
        second: token("second"),
        chip: token("chip"),
      },
      fontFamily: {
        display: ['"Syne"', "system-ui", "sans-serif"],
        sans: ['"Manrope"', "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: { prose: "65ch" },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0.001", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "none" },
        },
        pulse_dot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-dot": "pulse_dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
