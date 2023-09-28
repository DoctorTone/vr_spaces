import { VRButton } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import VRSpace from "./components/VRSpace";
import { SCENE } from "./state/Config.tsx";
import HUD from "./UI/HUD";
import Welcome from "./UI/Welcome";
import Mobile from "./UI/Mobile.tsx";

import { getDeviceStatus } from "./utils/Utils.tsx";

const SHOW_STATS = false;

const App = () => {
	const isMobile = getDeviceStatus();

	return (
		<>
			<VRButton />
			<Canvas camera={{ fov: 60, position: SCENE.camPosition }}>
				<VRSpace />
				{SHOW_STATS && <Perf />}
			</Canvas>
			<HUD />
			{isMobile ? <Mobile /> : <Welcome />}
		</>
	);
};
export default App;
