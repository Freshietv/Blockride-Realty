/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#070711",
        graphite: "#10101d",
        violet: "#9d4edd",
        amethyst: "#c77dff",
        aurum: "#f6c453",
        champagne: "#ffe7a3",
        cyanline: "#51f7ff"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 32px rgba(157, 78, 221, 0.35)",
        gold: "0 0 26px rgba(246, 196, 83, 0.28)"
      },
      backgroundImage: {
        "radial-lux": "radial-gradient(circle at top left, rgba(246,196,83,.18), transparent 34%), radial-gradient(circle at top right, rgba(157,78,221,.22), transparent 30%), linear-gradient(135deg, #070711 0%, #10101d 48%, #070711 100%)",
        "panel": "linear-gradient(145deg, rgba(255,255,255,.13), rgba(255,255,255,.035))"
      }
    }
  },
  plugins: []
};
