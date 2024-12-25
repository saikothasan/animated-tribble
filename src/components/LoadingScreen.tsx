import { Html } from '@react-three/drei';

export function LoadingScreen() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-white">
        <div className="w-32 h-32 border-4 border-t-blue-500 border-opacity-50 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg">Loading Solar System...</p>
      </div>
    </Html>
  );
}