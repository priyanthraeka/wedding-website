import { useEffect, useState } from "react";
import Card from "./Card";

const Countdown = () => {
  const TIME = "Dec 02, 2023";
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
      <h1 className="mb-5 text-center font-meath text-5xl text-white md:text-4xl lg:text-7xl">
        Save The Date
      </h1>
      <p className="text-center font-vithquki text-base text-white md:text-xl lg:text-xl">
        In the arithmetic of love, one plus one equals everything,
        <br />
        and two minus one equals nothing.
      </p>
      <div className="m-auto mt-10 flex w-full max-w-[500px] items-center justify-around gap-2 text-xl text-white">
        <div className="flex w-20 flex-col items-center justify-between">
          <p className="font-kalim text-3xl font-thin lg:text-5xl">
            {days < 0 ? "0" : days}
          </p>
          <span className="font-kalim text-2xl font-thin lg:text-3xl">D</span>
        </div>
        <div className="flex w-20 flex-col items-center justify-between">
          <p className="font-kalim text-3xl font-thin lg:text-5xl">
            {hours < 0 ? "0" : hours}
          </p>
          <span className="font-kalim text-2xl font-thin lg:text-3xl">H</span>
        </div>
        <div className="flex w-20 flex-col items-center justify-between">
          <p className="font-kalim text-3xl font-thin lg:text-5xl">
            {minutes < 0 ? "0" : minutes}
          </p>
          <span className="font-kalim text-2xl font-thin lg:text-3xl">M</span>
        </div>
        <div className="flex w-20 flex-col items-center justify-between">
          <p className="font-kalim text-3xl font-thin lg:text-5xl">
            {seconds < 0 ? "0" : seconds}
          </p>
          <span className="font-kalim text-2xl font-thin lg:text-3xl">S</span>
        </div>
      </div>
    </Card>
  );
};

export default Countdown;
