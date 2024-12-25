import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

interface AtmosphereProps {
  radius: number;
  color: string;
}

export function Atmosphere({ radius, color }: AtmosphereProps) {
  const atmosphereRef = useRef<Mesh>(null);

  useFrame(() => {
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={atmosphereRef}>
      <sphereGeometry args={[radius * 1.05, 32, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.3}
        depthWrite={false}
      />
    </mesh>
  );
}