/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
              "on-secondary-fixed-variant": "#004d4d",
              "on-secondary": "#001a1a",
              "on-surface": "#e8e0f0",
              "on-surface-variant": "#a098b0",
              "surface-bright": "#1a1a2e",
              "outline": "#5a5068",
              "on-primary-container": "#ffe0ec",
              "surface": "#0f0f1a",
              "secondary-fixed": "#c0fff4",
              "inverse-on-surface": "#0a0a12",
              "on-tertiary-container": "#fff0c0",
              "on-error-container": "#ffa0a0",
              "tertiary-fixed": "#fff0c0",
              "on-error": "#1a0000",
              "on-secondary-fixed": "#001a1a",
              "error-container": "#3d0f0f",
              "background": "#0a0a12",
              "tertiary-container": "#665200",
              "surface-container-high": "#1e1e30",
              "secondary-container": "#004d3d",
              "surface-tint": "#ff2d78",
              "primary-fixed-dim": "#ff80aa",
              "secondary-fixed-dim": "#00e6b8",
              "surface-variant": "#1e1e30",
              "on-secondary-container": "#c0fff4",
              "surface-container": "#141422",
              "on-primary-fixed": "#3d0020",
              "surface-dim": "#0f0f1a",
              "primary": "#ff2d78",
              "on-tertiary-fixed": "#1a1000",
              "on-primary-fixed-variant": "#8c0038",
              "tertiary": "#ffe04a",
              "inverse-primary": "#8c0038",
              "tertiary-fixed-dim": "#ffe04a",
              "error": "#ff4444",
              "surface-container-highest": "#28283e",
              "primary-fixed": "#ffe0ec",
              "on-primary": "#1a0010",
              "primary-container": "#b3004e",
              "on-tertiary": "#1a1000",
              "outline-variant": "#302840",
              "secondary": "#00ffcc",
              "inverse-surface": "#e8e0f0",
              "surface-container-low": "#111118",
              "surface-container-lowest": "#0a0a12",
              "on-tertiary-fixed-variant": "#665200",
              "on-background": "#e8e0f0"
      },
      "borderRadius": {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem"
      },
      "spacing": {},
      "fontFamily": {
              "headline": [
                      "Sora", "sans-serif"
              ],
              "display": [
                      "Sora", "sans-serif"
              ],
              "body": [
                      "Inter", "sans-serif"
              ],
              "label": [
                      "Space Grotesk", "sans-serif"
              ]
      },
      "fontSize": {}
    },
  },
  plugins: [],
}
