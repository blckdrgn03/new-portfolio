'use client'

import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';

const CountUpOnVisible = ({ start, end, duration }) => {
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    // Check if running in the browser
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing after it becomes visible
          }
        },
        { threshold: 0.1 } // Adjust this threshold as needed
      );

      if (countRef.current) {
        observer.observe(countRef.current);
      }

      return () => {
        if (countRef.current) {
          observer.unobserve(countRef.current);
        }
      };
    }
  }, []);

  return (
    <div className='text-white' ref={countRef}>
      {isVisible && (
        <CountUp delay={0.5} start={start} end={end} duration={duration} />
      )}
    </div>
  );
};

export default CountUpOnVisible;
