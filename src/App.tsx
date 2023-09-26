import { VRButton } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import VRSpace from "./components/VRSpace";
import { SCENE } from "./state/Config.tsx";
import HUD from "./UI/HUD";
import useStore from "./state/store.js";

const App = () => {
	const HUDVisible = useStore((state) => state.HUDVisible);

	return (
		<>
			<VRButton />
			<Canvas camera={{ fov: 60, position: SCENE.camPosition }}>
				<VRSpace />
				<Perf />
			</Canvas>
			<HUD visible={HUDVisible} />
		</>
	);
};
export default App;
