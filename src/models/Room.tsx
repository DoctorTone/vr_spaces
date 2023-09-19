/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		Room: THREE.Mesh;
	};
	materials: {};
};

export function Room(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF("./models/mainRoom.gltf") as GLTFResult;
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.Room.geometry} scale={[6, 1, 6]}>
				<meshLambertMaterial color={0xababab} />
			</mesh>
		</group>
	);
}

useGLTF.preload("./models/mainRoom.gltf");
