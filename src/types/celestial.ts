export interface CelestialBody {
  name: string;
  radius: number;
  orbitRadius: number;
  rotationSpeed: number;
  orbitSpeed: number;
  color: string;
  texture?: string;
  atmosphereColor?: string;
  hasAtmosphere?: boolean;
}

export interface CameraSettings {
  position: [number, number, number];
  target: [number, number, number];
}

export type ViewMode = 'realistic' | 'schematic' | 'educational';