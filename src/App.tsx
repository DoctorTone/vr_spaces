import { VRButton } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import VRSpace from "./components/VRSpace";
import { SCENE } from "./state/Config";

const App = () => {
	return (
		<>
			<VRButton />
			<Canvas camera={{ position: SCENE.cameraPosition }}>
				<VRSpace />
			</Canvas>
		</>
	);
};
export default App;
