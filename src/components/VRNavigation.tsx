import { useController, useXR } from "@react-three/xr";
import { useFrame } from "@react-three/fiber";
import { SCENE } from "../state/Config";

const VRNavigation = () => {
	const rightController = useController("right");
	const player = useXR((state) => state.player);

	useFrame((state, delta) => {
		if (!rightController) return;

		const [xPos, zPos] = [
			rightController.inputSource!.gamepad!.axes[2],
			rightController.inputSource!.gamepad!.axes[3],
		];
		player.position.x += xPos * delta * SCENE.MOVEMENT_SPEED;
		player.position.z += zPos * delta * SCENE.MOVEMENT_SPEED;
	});

	return <></>;
};

export default VRNavigation;
