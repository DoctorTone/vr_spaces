import { XR } from "@react-three/xr";
import { OrbitControls, Sky } from "@react-three/drei";
// import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Floor from "../models/Floor";
import { Room } from "../models/Room";

const VRSpace = () => {
	useFrame((state) => {
		//	 debug
		console.log("State = ", state.camera.position);
	});

	return (
		<>
			<XR>
				<Sky />
				<Floor />
				<ambientLight />
				<pointLight position={[0, 10, 0]} />
				<Room />
			</XR>
			<OrbitControls />
		</>
	);
};

export default VRSpace;
