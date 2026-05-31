import { useState, useEffect } from 'react';

export function useCountUp(endValue, duration = 2000, inView = true, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - percentage, 4);

      const currentVal = easeOut * endValue;
      setCount(decimals > 0 ? currentVal.toFixed(decimals) : Math.floor(currentVal));

      if (progress < duration) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount(decimals > 0 ? endValue.toFixed(decimals) : endValue);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [endValue, duration, inView]);

  return count;
}
