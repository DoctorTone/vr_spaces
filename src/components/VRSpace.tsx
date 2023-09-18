import { useEffect, useRef } from "react";
import { XR } from "@react-three/xr";
import { PointerLockControls, Sky } from "@react-three/drei";
// import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Floor from "../models/Floor";
import { Room } from "../models/Room";

const VRSpace = () => {
	const directionRef = useRef({
		forward: false,
		backward: false,
		left: false,
		right: false,
	});
	const lockRef = useRef(false);

	useFrame((state) => {
		// DEBUG
		if (lockRef.current) {
			console.log("Locked...");
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

	const pointerLocked = (event: THREE.Event | undefined): void => {
		lockRef.current = true;
	};

	const pointerUnlocked = (event: THREE.Event | undefined): void => {
		lockRef.current = false;
	};

	useEffect(() => {
		document.addEventListener("keydown", keyDown);
		document.addEventListener("keyup", keyUp);
	}, []);

	return (
		<>
			<XR>
				<Sky />
				<Floor />
				<ambientLight />
				<pointLight position={[0, 10, 0]} />
				<Room />
			</XR>
			<PointerLockControls onLock={pointerLocked} onUnlock={pointerUnlocked} />
		</>
	);
};

export default VRSpace;
