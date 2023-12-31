/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Ankledot (https://sketchfab.com/Ankledot)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/headphones-skullcandy-crusher-wireless-4e902017e4624547b440da0a6658a689
Title: Headphones Skullcandy Crusher Wireless
*/

import * as THREE from "three";
import { useGLTF, Shadow } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		Skullcandy_Crusher_M_Skullcandy_Crusher_0: THREE.Mesh;
	};
	materials: {
		M_Skullcandy_Crusher: THREE.MeshStandardMaterial;
	};
};

export function Music(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF("./models/headphones.glb") as GLTFResult;
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Skullcandy_Crusher_M_Skullcandy_Crusher_0.geometry}
				material={materials.M_Skullcandy_Crusher}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<Shadow position={[0, -525, -0]} scale={700} opacity={0.6} />
		</group>
	);
}

useGLTF.preload("./models/headphones.glb");
