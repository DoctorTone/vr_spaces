/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		["steering_wheel#details#LOD2"]: THREE.Mesh;
		["steering_wheel#details_normal#LOD2"]: THREE.Mesh;
		["wheelBL#details_normal#LOD2"]: THREE.Mesh;
		["wheelBL#rims#LOD2"]: THREE.Mesh;
		["wheelBL_tire#tires#LOD2"]: THREE.Mesh;
		["wheelBL_caliper#calipers#LOD6"]: THREE.Mesh;
		["wheelBR#details_normal#LOD2"]: THREE.Mesh;
		["wheelBR#rims#LOD2"]: THREE.Mesh;
		["wheelBR_tire#tires#LOD2"]: THREE.Mesh;
		["wheelBR_caliper#calipers#LOD6"]: THREE.Mesh;
		["wheelFL#details_normal#LOD2"]: THREE.Mesh;
		["wheelFL#rims#LOD2"]: THREE.Mesh;
		["wheelFL_tire#tires#LOD2"]: THREE.Mesh;
		["wheelFL_caliper#calipers#LOD6"]: THREE.Mesh;
		["wheelFR#details_normal#LOD2"]: THREE.Mesh;
		["wheelFR#rims#LOD2"]: THREE.Mesh;
		["wheelFR_tire#tires#LOD2"]: THREE.Mesh;
		["wheelFR_caliper#calipers#LOD6"]: THREE.Mesh;
		["chassis#carpaint#LOD2"]: THREE.Mesh;
		["chassis#carpaint_custom03#LOD2"]: THREE.Mesh;
		["chassis#details#LOD2"]: THREE.Mesh;
		["chassis#details_normal#LOD2"]: THREE.Mesh;
		["chassis#emissive_ID_rear#LOD2"]: THREE.Mesh;
		["chassis#emissive_ID_thirdlight#LOD2"]: THREE.Mesh;
		["chassis#glass#LOD2"]: THREE.Mesh;
		["chassis#roof#LOD2"]: THREE.Mesh;
		["chassis#tiled_carbon#LOD2"]: THREE.Mesh;
		["chassis#underside#LOD2"]: THREE.Mesh;
		["detach_bumper_B_5#carpaint#LOD2"]: THREE.Mesh;
		["detach_bumper_B_5#carpaint_decals#LOD2"]: THREE.Mesh;
		["detach_bumper_B_5#details_normal#LOD2"]: THREE.Mesh;
		["detach_bumper_F_5#carpaint#LOD2"]: THREE.Mesh;
		["detach_bumper_F_5#details#LOD2"]: THREE.Mesh;
		["detach_bumper_F_5#details_normal#LOD2"]: THREE.Mesh;
		["detach_bumper_F_5#tiled_grid#LOD2"]: THREE.Mesh;
		["detach_diffuser#details#LOD2"]: THREE.Mesh;
		["detach_diffuser#details_normal#LOD2"]: THREE.Mesh;
		["detach_diffuser#tiled_grid#LOD2"]: THREE.Mesh;
		["detach_door_L_70#carpaint#LOD2"]: THREE.Mesh;
		["detach_door_L_70#details#LOD2"]: THREE.Mesh;
		["detach_door_R_70#carpaint#LOD2"]: THREE.Mesh;
		["detach_door_R_70#details#LOD2"]: THREE.Mesh;
		["detach_hood_120#carpaint#LOD2"]: THREE.Mesh;
		["detach_hood_120#carpaint_custom01#LOD2"]: THREE.Mesh;
		["detach_hood_120#carpaint_decals#LOD2"]: THREE.Mesh;
		["detach_hood_120#details#LOD2"]: THREE.Mesh;
		["detach_hood_120#details_normal#LOD2"]: THREE.Mesh;
		["detach_skirt_L_3#carpaint#LOD2"]: THREE.Mesh;
		["detach_skirt_L_3#carpaint_decals#LOD2"]: THREE.Mesh;
		["detach_skirt_L_3#details#LOD2"]: THREE.Mesh;
		["detach_skirt_L_3#details_normal#LOD2"]: THREE.Mesh;
		["detach_skirt_R_3#carpaint#LOD2"]: THREE.Mesh;
		["detach_skirt_R_3#carpaint_decals#LOD2"]: THREE.Mesh;
		["detach_skirt_R_3#details#LOD2"]: THREE.Mesh;
		["detach_skirt_R_3#details_normal#LOD2"]: THREE.Mesh;
		["glass#glass#LOD2"]: THREE.Mesh;
		["glass_detachable#glass#LOD2"]: THREE.Mesh;
		["detach_trunk_45#details_normal#LOD2"]: THREE.Mesh;
		["detach_trunk_45#tiled_carbon#LOD2"]: THREE.Mesh;
		["detach_trunk_45#tiled_grid#LOD2"]: THREE.Mesh;
	};
	materials: {
		["Default.002"]: THREE.MeshBasicMaterial;
		["Default.008"]: THREE.MeshStandardMaterial;
		["Default.003"]: THREE.MeshBasicMaterial;
		Material: THREE.MeshStandardMaterial;
		["Default.001"]: THREE.MeshBasicMaterial;
		["Default.004"]: THREE.MeshStandardMaterial;
		["Default.005"]: THREE.MeshBasicMaterial;
		["Default.006"]: THREE.MeshBasicMaterial;
		["Default.007"]: THREE.MeshBasicMaterial;
	};
};

export function Lotus(props: JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF("./models/Lotus.gltf") as GLTFResult;
	return (
		<group visible={true} {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["steering_wheel#details#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[0.393, -0.297, -0.283]}
				rotation={[1.806, 0, -Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["steering_wheel#details_normal#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[0.393, -0.298, -0.276]}
				rotation={[1.802, 0, -Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelBL#details_normal#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[1.425, 1.027, -4.271]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelBL#rims#LOD2"].geometry}
				material={materials["Default.008"]}
				position={[1.425, 1.027, -4.271]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelBL_tire#tires#LOD2"].geometry}
				material={materials["Default.003"]}
				position={[1.425, 1.027, -4.271]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelBL_caliper#calipers#LOD6"].geometry}
				material={materials["Default.002"]}
				position={[-0.101, 1.027, -4.271]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelBR#details_normal#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[-1.425, 1.027, -0.521]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelBR#rims#LOD2"].geometry}
				material={materials["Default.008"]}
				position={[-1.425, 1.027, -0.521]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelBR_tire#tires#LOD2"].geometry}
				material={materials["Default.003"]}
				position={[-1.664, 1.027, -4.271]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelBR_caliper#calipers#LOD6"].geometry}
				material={materials["Default.002"]}
				position={[-0.136, 1.028, -4.271]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelFL#details_normal#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[1.39, 0.989, 0.536]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelFL#rims#LOD2"].geometry}
				material={materials["Default.008"]}
				position={[1.39, 0.989, 0.536]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelFL_tire#tires#LOD2"].geometry}
				material={materials["Default.003"]}
				position={[1.39, 0.989, 0.536]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelFL_caliper#calipers#LOD6"].geometry}
				material={materials["Default.002"]}
				position={[-0.12, 0.989, 0.536]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelFR#details_normal#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[-1.63, 0.989, 0.536]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelFR#rims#LOD2"].geometry}
				material={materials["Default.008"]}
				position={[-1.63, 0.989, 0.536]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelFR_tire#tires#LOD2"].geometry}
				material={materials["Default.003"]}
				position={[-1.39, 0.989, 4.285]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["wheelFR_caliper#calipers#LOD6"].geometry}
				material={materials["Default.002"]}
				position={[-0.12, 0.989, 0.536]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["chassis#carpaint#LOD2"].geometry}
				material={materials.Material}
				position={[-0.12, 0.341, -1.874]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["chassis#carpaint_custom03#LOD2"].geometry}
				material={materials.Material}
				position={[-0.12, 0.341, -1.874]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["chassis#details#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[-0.12, 0.341, -1.874]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["chassis#details_normal#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[-0.12, 0.341, -1.874]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["chassis#emissive_ID_rear#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[-0.12, 0.341, -1.874]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["chassis#emissive_ID_thirdlight#LOD2"].geometry}
				material={materials["Default.001"]}
				position={[-0.12, 0.341, -1.874]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["chassis#glass#LOD2"].geometry}
				material={materials["Default.004"]}
				position={[-0.12, 0.341, -1.874]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["chassis#roof#LOD2"].geometry}
				material={materials["Default.001"]}
				position={[-0.12, 0.341, -1.874]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["chassis#tiled_carbon#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[-0.12, 0.341, -1.874]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["chassis#underside#LOD2"].geometry}
				material={materials["Default.005"]}
				position={[-0.12, 0.341, -1.874]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_bumper_B_5#carpaint#LOD2"].geometry}
				material={materials.Material}
				position={[1.644, 3.197, -2.41]}
				rotation={[-Math.PI / 2, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_bumper_B_5#carpaint_decals#LOD2"].geometry}
				material={materials["Default.001"]}
				position={[1.644, -0.543, -3.094]}
				rotation={[Math.PI / 2, 0, -Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_bumper_B_5#details_normal#LOD2"].geometry}
				material={materials.Material}
				position={[1.644, 3.197, -2.41]}
				rotation={[-Math.PI / 2, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_bumper_F_5#carpaint#LOD2"].geometry}
				material={materials.Material}
				position={[-0.12, 0.274, 2.208]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_bumper_F_5#details#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[-0.12, 0.274, 2.208]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_bumper_F_5#details_normal#LOD2"].geometry}
				material={materials["Default.001"]}
				position={[-0.12, 0.274, 2.208]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_bumper_F_5#tiled_grid#LOD2"].geometry}
				material={materials["Default.006"]}
				position={[-0.12, 0.274, 2.208]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_diffuser#details#LOD2"].geometry}
				material={materials["Default.007"]}
				position={[-0.12, 0.917, -5.131]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_diffuser#details_normal#LOD2"].geometry}
				material={materials["Default.001"]}
				position={[-0.12, 0.917, -5.131]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_diffuser#tiled_grid#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[-0.12, 0.917, -5.131]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_door_L_70#carpaint#LOD2"].geometry}
				material={materials.Material}
				position={[1.681, 1.133, -0.617]}
				rotation={[-Math.PI, 0, 0]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_door_L_70#details#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[1.681, 1.133, -0.617]}
				rotation={[-Math.PI, 0, 0]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_door_R_70#carpaint#LOD2"].geometry}
				material={materials.Material}
				position={[-1.681, 1.842, -0.617]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_door_R_70#details#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[-1.681, 1.842, -0.617]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_hood_120#carpaint#LOD2"].geometry}
				material={materials.Material}
				position={[0.347, 1.121, 2.104]}
				rotation={[-Math.PI, 0, -Math.PI / 2]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_hood_120#carpaint_custom01#LOD2"].geometry}
				material={materials.Material}
				position={[0.347, 1.121, 2.104]}
				rotation={[-Math.PI, 0, -Math.PI / 2]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_hood_120#carpaint_decals#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[0.347, 1.121, 2.104]}
				rotation={[-Math.PI, 0, -Math.PI / 2]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_hood_120#details#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[0.345, 1.115, 2.104]}
				rotation={[-Math.PI, 0, -Math.PI / 2]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_hood_120#details_normal#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[0.347, 1.121, 2.104]}
				rotation={[-Math.PI, 0, -Math.PI / 2]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_skirt_L_3#carpaint#LOD2"].geometry}
				material={materials.Material}
				position={[-0.614, 0.001, 0.916]}
				rotation={[Math.PI, -Math.PI / 2, 0]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_skirt_L_3#carpaint_decals#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[-0.614, 0.001, 0.916]}
				rotation={[Math.PI, -Math.PI / 2, 0]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_skirt_L_3#details#LOD2"].geometry}
				material={materials["Default.001"]}
				position={[-0.614, 0.001, 0.916]}
				rotation={[Math.PI, -Math.PI / 2, 0]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_skirt_L_3#details_normal#LOD2"].geometry}
				material={materials["Default.001"]}
				position={[-0.614, 0.001, 0.916]}
				rotation={[Math.PI, -Math.PI / 2, 0]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_skirt_R_3#carpaint#LOD2"].geometry}
				material={materials.Material}
				position={[-1.141, 0.71, 2.911]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_skirt_R_3#carpaint_decals#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[-1.141, 0.71, 2.911]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_skirt_R_3#details#LOD2"].geometry}
				material={materials["Default.001"]}
				position={[-1.141, 0.71, 2.911]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_skirt_R_3#details_normal#LOD2"].geometry}
				material={materials["Default.001"]}
				position={[-1.141, 0.71, 2.911]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["glass#glass#LOD2"].geometry}
				material={materials["Default.004"]}
				position={[-0.12, 0.274, 2.202]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["glass_detachable#glass#LOD2"].geometry}
				material={materials["Default.004"]}
				position={[-0.12, 0.274, 2.202]}
				rotation={[Math.PI, 0, Math.PI]}
				scale={11.918}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_trunk_45#details_normal#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[0.353, 1.91, -3.179]}
				rotation={[-Math.PI, 0, -Math.PI / 2]}
				scale={11.927}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_trunk_45#tiled_carbon#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[0.353, 1.91, -3.179]}
				rotation={[-Math.PI, 0, -Math.PI / 2]}
				scale={11.927}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes["detach_trunk_45#tiled_grid#LOD2"].geometry}
				material={materials["Default.002"]}
				position={[0.353, 1.91, -3.179]}
				rotation={[-Math.PI, 0, -Math.PI / 2]}
				scale={11.927}
			/>
		</group>
	);
}

useGLTF.preload("./models/Lotus.gltf");
