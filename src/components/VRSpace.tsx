import { XR } from "@react-three/xr";
import { Sky } from "@react-three/drei";
import { SCENE } from "../state/Config";
import Floor from "../models/Floor";
import { ShowRoom } from "../models/ShowRoom";
import Ground from "../models/Ground";
import Exhibits from "../models/Exhibits";
import Player from "./Player";

const VRSpace = () => {
	return (
		<>
			<XR>
				<Sky />
				<Floor position-z={2} />
				<Ground position-y={-0.1} />
				<ambientLight intensity={0.25} />
				<pointLight position={SCENE.pointLight1} />
				<pointLight position={SCENE.pointLight2} />
				<ShowRoom />
				<Exhibits />
				<Player />
			</XR>
		</>
	);
};

export default VRSpace;
