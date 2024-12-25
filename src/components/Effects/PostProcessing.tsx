import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { useStore } from '../../store';

export function PostProcessing() {
  const quality = useStore((state) => state.quality);

  return (
    <EffectComposer>
      <Bloom 
        intensity={1.5}
        luminanceThreshold={0.9}
        luminanceSmoothing={0.025}
      />
      {quality === 'high' && (
        <ChromaticAberration
          offset={[0.002, 0.002]}
        />
      )}
    </EffectComposer>
  );
}