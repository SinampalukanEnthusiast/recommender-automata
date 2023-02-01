module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jacques": ["Jacques Francois", "system-ui", "sans-serif"],
        "junge" : ["Junge", "system-ui", "serif"],
        "poppins" : ["Poppins", "system-ui", "sans-serif"],
      },
    }
  },
  plugins: [require("daisyui")],
}
