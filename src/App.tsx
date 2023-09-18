import { VRButton } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import VRSpace from "./components/VRSpace";

const App = () => {
	return (
		<>
			<VRButton />
			<Canvas>
				<VRSpace />
			</Canvas>
		</>
	);
};
export default App;
