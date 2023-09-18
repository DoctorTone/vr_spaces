import { XR } from "@react-three/xr";
import { Sky } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Floor from "../models/Floor";

const VRSpace = () => {
	return (
		<XR>
			<Sky />
			<Floor />
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
		</XR>
	);
};

export default VRSpace;
