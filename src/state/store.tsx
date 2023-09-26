import { create } from "zustand";

interface VRState {
	HUDVisible: boolean;
	setHUDVisibility: (status: boolean) => void;
}

const useStore = create<VRState>()((set) => ({
	HUDVisible: false,
	setHUDVisibility: (status) => set({ HUDVisible: status }),
}));

export default useStore;
