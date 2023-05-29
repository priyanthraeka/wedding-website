/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      timesNewRoman: ["Times New Roman"],
      alexBrush: ["Alex Brush"],
      nanumMyeongjo: ["Nanum Myeongjo"],
      poppins: ["Poppins"],
      allura: ["Allura"],
      alkatra: ["Alkatra"],
      satisfy: ["Satisfy"],
      notoSerifBalinese: ["Noto Serif Balinese"],
      courierPrime: ["Courier Prime"],
      ephesis: ["Ephesis"],
      sourceSerifPro: ["Source Serif Pro"],
      kaushanScript: ["Kaushan Script"]
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
};
