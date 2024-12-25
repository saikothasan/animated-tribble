import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import { Planet } from './Planet';

export function SolarSystem() {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate the entire solar system slowly
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshBasicMaterial color="#FDB813" />
      </mesh>

      {/* Planets */}
      <Planet 
        name="Mercury" 
        radius={0.383} 
        orbitRadius={10} 
        rotationSpeed={0.01} 
        orbitSpeed={0.04}
        color="#A0522D"
      />
      <Planet 
        name="Venus" 
        radius={0.949} 
        orbitRadius={15} 
        rotationSpeed={0.0067} 
        orbitSpeed={0.015}
        color="#DEB887"
      />
      <Planet 
        name="Earth" 
        radius={1} 
        orbitRadius={20} 
        rotationSpeed={0.01} 
        orbitSpeed={0.01}
        color="#4B9CD3"
      />
      <Planet 
        name="Mars" 
        radius={0.532} 
        orbitRadius={25} 
        rotationSpeed={0.01} 
        orbitSpeed={0.008}
        color="#CD5C5C"
      />
    </group>
  );
}