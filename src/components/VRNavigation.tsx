import { useEffect, useRef } from "react";
import { useController, useXR } from "@react-three/xr";
import { useFrame, useThree } from "@react-three/fiber";
import { SCENE } from "../state/Config";
import * as THREE from "three";

const VRNavigation = () => {
	const rightController = useController("right");
	const player = useXR((state) => state.player);
	const tempVec = new THREE.Vector3();
	const collisionObjects = useRef<THREE.Box3[]>([]);
	const collisionObjectNames: string[] = [
		"Collision1",
		"Collision2",
		"Collision3",
		"Collision4",
		"Collision5",
		"Collision6",
		"Collision7",
		"Collision8",
		"Collision9",
		"Collision10",
		"Collision11",
	];
	const lastCamPosition = new THREE.Vector3();
	const scene = useThree((state) => state.scene);
	let currentBox;
	let collided = false;
	// DEBUG
	console.log("Rendered...");

	useFrame((_, delta) => {
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

		// Collision detection
		collided = false;
		for (let i = 0; i < collisionObjects.current.length; ++i) {
			currentBox = collisionObjects.current[i];
			if (currentBox!.containsPoint(player.position)) {
				collided = true;
				player.position.copy(lastCamPosition);
				break;
			}
		}
		if (!collided) {
			lastCamPosition.copy(player.position);
			collided = false;
		}
	});

	useEffect(() => {
		const elem = document.getElementById("welcome");
		if (elem) {
			elem!.style.display = "none";
		}
		player.position.copy(SCENE.VRStartPosition);
		player.rotation.y = -Math.PI / 2;
		// Get all collision boxes
		let currentCollider;
		collisionObjectNames.forEach((obj) => {
			currentCollider = scene.getObjectByName(obj) as THREE.Mesh;
			if (currentCollider) {
				currentCollider.geometry.computeBoundingBox();
				currentCollider.geometry.boundingBox!.expandByScalar(0.25);
				currentCollider.geometry.boundingBox!.min.x +=
					currentCollider.position.x;
				currentCollider.geometry.boundingBox!.min.z +=
					currentCollider.position.z;
				currentCollider.geometry.boundingBox!.max.x +=
					currentCollider.position.x;
				currentCollider.geometry.boundingBox!.max.z +=
					currentCollider.position.z;
				collisionObjects.current.push(currentCollider.geometry.boundingBox!);
			}
		});
	}, []);

	return <></>;
};

export default VRNavigation;
