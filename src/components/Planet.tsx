import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

interface PlanetProps {
  name: string;
  radius: number;
  orbitRadius: number;
  rotationSpeed: number;
  orbitSpeed: number;
  color: string;
}

export function Planet({ radius, orbitRadius, rotationSpeed, orbitSpeed, color }: PlanetProps) {
  const planetRef = useRef<Mesh>(null);
  const orbitRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (planetRef.current && orbitRef.current) {
      // Rotate planet around its axis
      planetRef.current.rotation.y += rotationSpeed;
      
      // Orbit around the sun
      orbitRef.current.rotation.y += orbitSpeed;
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh
        ref={planetRef}
        position={[orbitRadius, 0, 0]}
      >
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
}