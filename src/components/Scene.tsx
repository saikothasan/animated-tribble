import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { SolarSystem } from './SolarSystem';
import { Suspense } from 'react';
import { LoadingScreen } from './LoadingScreen';

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 50, 100], fov: 45 }}
      style={{ height: '100vh' }}
      gl={{ antialias: true }}
      dpr={[1, 2]} // Responsive rendering for different pixel ratios
    >
      <Suspense fallback={<LoadingScreen />}>
        <color attach="background" args={['#000010']} />
        <Stars radius={300} depth={50} count={5000} factor={4} />
        <ambientLight intensity={0.1} />
        <SolarSystem />
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
          minDistance={5}
          maxDistance={500}
        />
      </Suspense>
    </Canvas>
  );
}