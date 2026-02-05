'use client';
import React, {useEffect, useState} from 'react';

const Footer:React.FC = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {


    const tick = () => {
      setTime(new Date());
    };

    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <footer className="w-full bg-black flex justify-center px-8 align-bottom ">
      <div className="bg-gray-700 p-4 rounded-md">
        <p className="text-sm text-black">
          &copy; {time ? time.toLocaleDateString() : '—'} {time ? time.toLocaleTimeString() : '—'} Task App. All rights reserved.
        </p>  
      </div>
      </footer>
    );
}

export default Footer;