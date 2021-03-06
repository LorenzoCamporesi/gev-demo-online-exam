module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        RobotoMono: ["'Roboto Mono'", 'monospace'],
        NanumBrush: ["'Nanum Brush Script'", 'cursive'],
      },
    },
  },
  plugins: [],
}
