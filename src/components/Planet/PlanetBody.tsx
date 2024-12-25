import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

interface PlanetBodyProps {
  radius: number;
  texture?: string;
  color: string;
  rotationSpeed: number;
}

export function PlanetBody({ radius, texture, color, rotationSpeed }: PlanetBodyProps) {
  const meshRef = useRef<Mesh>(null);
  const map = texture ? useTexture(texture) : null;

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed * delta;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius, 64, 64]} />
      <meshStandardMaterial
        map={map}
        color={color}
        roughness={0.7}
        metalness={0.3}
      />
    </mesh>
  );
}