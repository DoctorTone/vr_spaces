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
		// player.rotation.y += -xPos * delta * SCENE.ROTATION_SPEED;
		player.position.x += tempVec.x * -zPos * delta * SCENE.MOVEMENT_SPEED;
		player.position.z += tempVec.z * -zPos * delta * SCENE.MOVEMENT_SPEED;
	});

	return <></>;
};

export default VRNavigation;
