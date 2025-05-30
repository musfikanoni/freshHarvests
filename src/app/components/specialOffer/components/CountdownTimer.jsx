"use client";
import { useEffect, useState } from "react";

export default function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 text-center mt-4">
      <div className="bg-white shadow-xl lg:px-3 px-1.5 lg:py-3 py-2 rounded">
        <p className="lg:text-xl text-base">{timeLeft.days}</p>
        <span className="lg:text-xl text-xs">Days</span>
      </div>
      <div className="bg-white shadow-xl lg:px-3 px-1.5 lg:py-3 py-2 rounded">
        <p className="lg:text-xl text-base">{timeLeft.hours}</p>
        <span className="lg:text-xl text-xs">Hours</span>
      </div>
      <div className="bg-white shadow-xl lg:px-3 px-1.5 lg:py-3 py-2 rounded">
        <p className="lg:text-xl text-base">{timeLeft.minutes}</p>
        <span className="lg:text-xl text-xs">Minutes</span>
      </div>
      <div className="bg-white shadow-xl lg:px-3 px-1.5 lg:py-3 py-2 rounded">
        <p className="lg:text-xl text-base">{timeLeft.seconds}</p>
        <span className="lg:text-xl text-xs">Seconds</span>
      </div>
    </div>
  );
}
