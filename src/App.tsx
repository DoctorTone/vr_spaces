import { VRButton } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import VRSpace from "./components/VRSpace";
import { SCENE } from "./state/Config.tsx";

const App = () => {
	return (
		<>
			<VRButton />
			<Canvas camera={{ fov: 60, position: SCENE.camPosition }}>
				<VRSpace />
			</Canvas>
		</>
	);
};
export default App;
