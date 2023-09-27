import { useEffect } from "react";
import { useController, useXR } from "@react-three/xr";
import { useFrame } from "@react-three/fiber";
import { SCENE } from "../state/Config";
import * as THREE from "three";

const VRNavigation = () => {
	const rightController = useController("right");
	const player = useXR((state) => state.player);
	const tempVec = new THREE.Vector3();

	useFrame((state, delta) => {
		if (!rightController) return;
		const camera = player.children[0];

		const [xPos, zPos] = [
			rightController.inputSource!.gamepad!.axes[2],
			rightController.inputSource!.gamepad!.axes[3],
		];
		camera.getWorldDirection(tempVec);
		// Forward/backward movement
		player.position.x += tempVec.x * -zPos * delta * SCENE.MOVEMENT_SPEED;
		player.position.z += tempVec.z * -zPos * delta * SCENE.MOVEMENT_SPEED;

		// Sideways movement
		tempVec.crossVectors(player.up, tempVec);
		player.position.x += tempVec.x * -xPos * delta * SCENE.MOVEMENT_SPEED;
		player.position.z += tempVec.z * -xPos * delta * SCENE.MOVEMENT_SPEED;
	});

	useEffect(() => {
		player.position.set(-11, 0, -1);
		player.rotation.y = -Math.PI / 2;
	}, []);

	return <></>;
};

export default VRNavigation;
