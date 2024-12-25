import { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';

export function usePerformance() {
  const { gl } = useThree();
  const [fps, setFps] = useState(0);
  const [quality, setQuality] = useState<'high' | 'medium' | 'low'>('high');

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();

    function measure() {
      frameCount++;
      const now = performance.now();
      
      if (now >= lastTime + 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }

      requestAnimationFrame(measure);
    }

    const cleanup = measure();
    return () => cancelAnimationFrame(cleanup);
  }, []);

  useEffect(() => {
    if (fps < 30) {
      setQuality('low');
      gl.setPixelRatio(1);
    } else if (fps < 45) {
      setQuality('medium');
      gl.setPixelRatio(1.5);
    } else {
      setQuality('high');
      gl.setPixelRatio(window.devicePixelRatio);
    }
  }, [fps, gl]);

  return { fps, quality };
}