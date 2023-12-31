/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		Cube027: THREE.Mesh;
		Cube027_1: THREE.Mesh;
		Cube027_2: THREE.Mesh;
		Cube027_3: THREE.Mesh;
		Cube027_4: THREE.Mesh;
		KEYs: THREE.Mesh;
	};
	materials: {
		Board: THREE.MeshStandardMaterial;
		CutOuts: THREE.MeshStandardMaterial;
		Tex_Label_Keyboard: THREE.MeshStandardMaterial;
		Tex_Label_NumCapsScroll: THREE.MeshStandardMaterial;
		Tex_Emi_LEDs: THREE.MeshStandardMaterial;
		["Tex_Keys-Lettering"]: THREE.MeshStandardMaterial;
	};
};

export function Tech(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF("./models/keyboard.glb") as GLTFResult;
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube027.geometry}
				material={materials.Board}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube027_1.geometry}
				material={materials.CutOuts}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube027_2.geometry}
				material={materials.Tex_Label_Keyboard}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube027_3.geometry}
				material={materials.Tex_Label_NumCapsScroll}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube027_4.geometry}
				material={materials.Tex_Emi_LEDs}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.KEYs.geometry}
				material={materials["Tex_Keys-Lettering"]}
			/>
		</group>
	);
}

useGLTF.preload("./models/keyboard.glb");
