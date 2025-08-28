import { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        gün: Math.floor(difference / (1000 * 60 * 60 * 24)),
        saat: Math.floor((difference / (1000 * 60 * 60)) % 24),
        dakika: Math.floor((difference / 1000 / 60) % 60),
        saniye: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) return null;
    return (
      <div key={interval} className="flex flex-col items-center dark:bg-zinc-900 bg-gray-200 rounded-xl p-2 sm:p-3 md:p-6 mx-1 border dark:border-zinc-700/50 border-gray-300 transform transition-transform duration-300 hover:scale-105 min-w-[60px] sm:min-w-[70px]">
        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-500">{String(timeLeft[interval]).padStart(2, '0')}</span>
        <span className="text-[9px] sm:text-xs md:text-sm font-semibold uppercase dark:text-gray-300 text-gray-700 mt-1">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center py-4 flex-wrap gap-1 sm:gap-2">
      {timerComponents.length > 0 ? (
        timerComponents
      ) : (
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-red-500">Yarış başladı!</span>
      )}
    </div>
  );
};

export default Countdown;