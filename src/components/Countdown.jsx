import { useEffect, useState } from "react";
import Card from "./Card";

const Countdown = () => {
  const TIME = "May 31, 2023";
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = TIME;

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  });

  return (
    <Card className="flex h-[20vh] w-full flex-col content-center items-center justify-center gap-2 bg-white p-2">
      <h1 className="mb-5 text-center font-alexBrush text-3xl font-bold md:text-4xl lg:text-5xl">
        Hitung Mundur
      </h1>
      <div className="flex w-full max-w-[500px] items-center justify-around gap-2 text-xl text-white">
        <div className="flex w-20 flex-col items-center justify-between rounded-lg border border-[#fcc2fc] bg-[#fcc2fc]">
          <tt className="font-kaushanScript text-xl lg:text-2xl">
            {days < 0 ? "0" : days}
          </tt>
          <span className="font-kaushanScript text-sm font-bold lg:text-lg">
            Hari
          </span>
        </div>
        <div className="flex w-20 flex-col items-center justify-between rounded-lg border border-[#fcc2fc] bg-[#fcc2fc]">
          <tt className="font-kaushanScript text-xl lg:text-2xl">
            {hours < 0 ? "0" : hours}
          </tt>
          <span className="font-kaushanScript text-sm font-bold lg:text-lg">
            Jam
          </span>
        </div>
        <div className="flex w-20 flex-col items-center justify-between rounded-lg border border-[#fcc2fc] bg-[#fcc2fc]">
          <tt className="font-kaushanScript text-xl lg:text-2xl">
            {minutes < 0 ? "0" : minutes}
          </tt>
          <span className="font-kaushanScript text-sm font-bold lg:text-lg">
            Menit
          </span>
        </div>
        <div className="flex w-20 flex-col items-center justify-between rounded-lg border border-[#fcc2fc] bg-[#fcc2fc]">
          <tt className="font-kaushanScript text-xl lg:text-2xl">
            {seconds < 0 ? "0" : seconds}
          </tt>
          <span className="font-kaushanScript text-sm font-bold lg:text-lg">
            Detik
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Countdown;
