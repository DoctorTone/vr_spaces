import { useEffect, useState } from "react";
import { XR, Controllers } from "@react-three/xr";
import { Sky } from "@react-three/drei";
import { SCENE } from "../state/Config";
import Floor from "../models/Floor";
import { ShowRoom } from "../models/ShowRoom";
import Ground from "../models/Ground";
import Exhibits from "../models/Exhibits";
import Player from "./Player";
import VRNavigation from "./VRNavigation";

const VRSpace = () => {
	const [VRSupported, setVRSupported] = useState(false);

	useEffect(() => {
		// Determine whether to go VR or desktop
		const isVRSupported = async () => {
			if ("xr" in navigator) {
				const supported = await navigator.xr!.isSessionSupported(
					"immersive-vr"
				);
				if (supported) {
					setVRSupported(true);
				}
			}
		};

		isVRSupported();
	}, []);

	return (
		<>
			<XR>
				<Controllers />
				<Sky />
				<Floor position-z={2} />
				<Ground position-y={-0.1} />
				<ambientLight intensity={0.25} />
				<pointLight position={SCENE.pointLight1} />
				<pointLight position={SCENE.pointLight2} />
				<ShowRoom />
				<Exhibits />
				{VRSupported ? <VRNavigation /> : <Player />}
			</XR>
		</>
	);
};

export default VRSpace;
