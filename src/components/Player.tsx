import { useRef, useEffect } from "react";
import * as THREE from "three";
import { PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const MOVEMENT_SPEED = 50;

const Player = () => {
	const directionRef = useRef({
		forward: false,
		backward: false,
		left: false,
		right: false,
	});
	const lockRef = useRef(false);
	const velocity = new THREE.Vector3();
	const direction = new THREE.Vector3();
	const _vector = new THREE.Vector3();

	const moveRight = (distance: number, camera: THREE.Camera) => {
		_vector.setFromMatrixColumn(camera.matrix, 0);

		camera.position.addScaledVector(_vector, distance);
	};

	const moveForward = (distance: number, camera: THREE.Camera) => {
		_vector.setFromMatrixColumn(camera.matrix, 0);

		_vector.crossVectors(camera.up, _vector);

		camera.position.addScaledVector(_vector, distance);
	};
	const pointerLocked = (event: THREE.Event | undefined): void => {
		lockRef.current = true;
	};

	const pointerUnlocked = (event: THREE.Event | undefined): void => {
		lockRef.current = false;
	};

	useFrame((state, delta) => {
		const camera = state.camera;
		// DEBUG
		// console.log("Camera = ", camera.position);
		if (lockRef.current) {
			velocity.x -= velocity.x * 10.0 * delta;
			velocity.z -= velocity.z * 10.0 * delta;
			direction.z =
				Number(directionRef.current.forward) -
				Number(directionRef.current.backward);
			direction.x =
				Number(directionRef.current.right) - Number(directionRef.current.left);
			direction.normalize(); // this ensures consistent movements in all directions

			if (directionRef.current.forward || directionRef.current.backward)
				velocity.z -= direction.z * MOVEMENT_SPEED * delta;
			if (directionRef.current.left || directionRef.current.right)
				velocity.x -= direction.x * MOVEMENT_SPEED * delta;
			moveRight(-velocity.x * delta, camera);
			moveForward(-velocity.z * delta, camera);
		}
	});

	const keyDown = (event: KeyboardEvent): void => {
		switch (event.code) {
			case "ArrowUp":
			case "KeyW":
				directionRef.current.forward = true;
				break;

			case "ArrowLeft":
			case "KeyA":
				directionRef.current.left = true;
				break;

			case "ArrowDown":
			case "KeyS":
				directionRef.current.backward = true;
				break;

			case "ArrowRight":
			case "KeyD":
				directionRef.current.right = true;
				break;

			default:
				break;
		}
	};

	const keyUp = (event: KeyboardEvent): void => {
		switch (event.code) {
			case "ArrowUp":
			case "KeyW":
				directionRef.current.forward = false;
				break;

			case "ArrowLeft":
			case "KeyA":
				directionRef.current.left = false;
				break;

			case "ArrowDown":
			case "KeyS":
				directionRef.current.backward = false;
				break;

			case "ArrowRight":
			case "KeyD":
				directionRef.current.right = false;
				break;

			default:
				break;
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", keyDown);
		document.addEventListener("keyup", keyUp);
	}, []);

	return (
		<PointerLockControls onLock={pointerLocked} onUnlock={pointerUnlocked} />
	);
};

export default Player;
