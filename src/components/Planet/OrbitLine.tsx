import { Line } from '@react-three/drei';

interface OrbitLineProps {
  radius: number;
}

export function OrbitLine({ radius }: OrbitLineProps) {
  const points = [];
  const segments = 64;

  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push([
      Math.cos(theta) * radius,
      0,
      Math.sin(theta) * radius,
    ]);
  }

  return (
    <Line
      points={points}
      color="white"
      lineWidth={0.5}
      opacity={0.2}
      transparent
    />
  );
}