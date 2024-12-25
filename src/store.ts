import { create } from 'zustand';

interface StoreState {
  isPaused: boolean;
  togglePause: () => void;
}

export const useStore = create<StoreState>((set) => ({
  isPaused: false,
  togglePause: () => set((state) => ({ isPaused: !state.isPaused })),
}));