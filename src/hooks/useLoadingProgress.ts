import { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';

export function useLoadingProgress() {
  const { progress, loaded, total } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100 && loaded === total) {
      const timer = setTimeout(() => setIsReady(true), 500);
      return () => clearTimeout(timer);
    }
  }, [progress, loaded, total]);

  return { progress, isReady };
}