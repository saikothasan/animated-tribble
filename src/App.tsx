import { Scene } from './components/Scene';
import { Controls } from './components/UI/Controls';

function App() {
  return (
    <div className="w-full h-screen bg-black">
      <Scene />
      <Controls />
    </div>
  );
}

export default App;