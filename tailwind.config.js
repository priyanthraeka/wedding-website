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
      kaushanScript: ["Kaushan Script"],
      meath: ["MeathFLF"],
      cherolina: ["Cherolina"],
      madi: ["Ms Madi"],
      italiana: ["Italiana"],
      cormorant: ["Cormorant"],
      rubik: ["Rubik"],
      kulim: ["Kulim Park"],
      arial: ["Arial"],
      daiBannaSil: ["Dai Banna SIL"],
      vithquki: ["Noto Serif Vithkuqi"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
