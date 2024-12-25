export function detectDeviceCapabilities() {
  const gpu = (navigator as any).gpu;
  const webgl2 = !!document.createElement('canvas').getContext('webgl2');
  const memory = (navigator as any).deviceMemory || 4;
  
  if (gpu && webgl2 && memory >= 4) {
    return 'high';
  } else if (webgl2 && memory >= 2) {
    return 'medium';
  }
  return 'low';
}

export function adjustQualitySettings(quality: 'high' | 'medium' | 'low') {
  return {
    pixelRatio: quality === 'high' ? window.devicePixelRatio : quality === 'medium' ? 1.5 : 1,
    shadowMapSize: quality === 'high' ? 2048 : quality === 'medium' ? 1024 : 512,
    maxLights: quality === 'high' ? 8 : quality === 'medium' ? 4 : 2,
  };
}