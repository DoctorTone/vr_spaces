import { create } from "zustand";

interface VRState {
	currentExhibit: number;
}

const useStore = create<VRState>()(() => ({
	currentExhibit: -1,
}));

export default useStore;
