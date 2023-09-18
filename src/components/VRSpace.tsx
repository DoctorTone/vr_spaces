import { XR } from "@react-three/xr";
import { Sky } from "@react-three/drei";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
import Floor from "../models/Floor";
import { Room } from "../models/Room";

const VRSpace = () => {
	return (
		<XR>
			<Sky />
			<Floor />
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Room />
		</XR>
	);
};

export default VRSpace;
