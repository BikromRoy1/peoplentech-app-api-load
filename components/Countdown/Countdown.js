'use client';
import { useEffect, useState } from 'react';

function Countdown({ seminarDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const targetDate = new Date(seminarDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [seminarDate]);

  return (
    <div className='grid grid-cols-4 gap-4'>
      <div className='glass-card px-4 py-2 rounded-xl text-center transform hover:-translate-y-2 transition-all'>
        <div className='text-2xl font-bold text-white'>{timeLeft.days}</div>
        <div className='text-white/70 text-sm'>Days</div>
      </div>
      <div className='glass-card px-4 py-2 rounded-xl text-center transform hover:-translate-y-2 transition-all'>
        <div className='text-2xl font-bold text-white'>{timeLeft.hours}</div>
        <div className='text-white/70 text-sm'>Hours</div>
      </div>
      <div className='glass-card px-4 py-2 rounded-xl text-center transform hover:-translate-y-2 transition-all'>
        <div className='text-2xl font-bold text-white'>{timeLeft.minutes}</div>
        <div className='text-white/70 text-sm'>Minutes</div>
      </div>
      <div className='glass-card px-4 py-2 rounded-xl text-center transform hover:-translate-y-2 transition-all'>
        <div className='text-2xl font-bold text-white'>{timeLeft.seconds}</div>
        <div className='text-white/70 text-sm'>Seconds</div>
      </div>
    </div>
  );
}

export default Countdown;
