import { create } from "zustand";

interface VRState {
	HUDVisible: boolean;
	setHUDVisibility: (status: boolean) => void;
	currentExhibit: number;
}

const useStore = create<VRState>()((set) => ({
	HUDVisible: false,
	setHUDVisibility: (status) => set({ HUDVisible: status }),
	currentExhibit: -1,
	setCurrentExhibit: (exhibit: number) => set({ currentExhibit: exhibit }),
}));

export default useStore;
