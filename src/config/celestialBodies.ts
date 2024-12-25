import { CelestialBody } from '../types/celestial';

export const celestialBodies: CelestialBody[] = [
  {
    name: 'Sun',
    radius: 5,
    orbitRadius: 0,
    rotationSpeed: 0.004,
    orbitSpeed: 0,
    color: '#FDB813',
    texture: 'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?auto=format&fit=crop&q=80&w=2048',
    hasAtmosphere: true,
    atmosphereColor: '#FDB81333'
  },
  {
    name: 'Mercury',
    radius: 0.383,
    orbitRadius: 10,
    rotationSpeed: 0.01,
    orbitSpeed: 0.04,
    color: '#A0522D',
    texture: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=2048'
  },
  // ... other planets
];