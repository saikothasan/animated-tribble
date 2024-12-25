import { Settings, ZoomIn, ZoomOut, Pause, Play } from 'lucide-react';
import { useStore } from '../../store';

export function Controls() {
  const { isPaused, togglePause } = useStore();

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md rounded-full p-4">
      <div className="flex items-center space-x-6">
        <button className="text-white hover:text-blue-400 transition-colors">
          <ZoomOut className="w-6 h-6" />
        </button>
        <button className="text-white hover:text-blue-400 transition-colors">
          <ZoomIn className="w-6 h-6" />
        </button>
        <button 
          className="text-white hover:text-blue-400 transition-colors"
          onClick={togglePause}
        >
          {isPaused ? (
            <Play className="w-6 h-6" />
          ) : (
            <Pause className="w-6 h-6" />
          )}
        </button>
        <button className="text-white hover:text-blue-400 transition-colors">
          <Settings className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}