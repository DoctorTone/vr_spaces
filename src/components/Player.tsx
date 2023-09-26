import { useRef, useEffect } from "react";
import * as THREE from "three";
import { PointerLockControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { EXHIBITS, SCENE } from "../state/Config";
import useStore from "../state/store";

const MOVEMENT_SPEED = 50;

const Player = () => {
	const HUDVisible = useStore((state) => state.HUDVisible);
	const setHUDVisibility = useStore((state) => state.setHUDVisibility);

	const directionRef = useRef({
		forward: false,
		backward: false,
		left: false,
		right: false,
	});
	const lockRef = useRef(false);
	const collisionObjects: THREE.Box3[] = [];
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
	const velocity = new THREE.Vector3();
	const direction = new THREE.Vector3();
	const _vector = new THREE.Vector3();
	const tempVec = new THREE.Vector3();
	const lastCamPosition = new THREE.Vector3();
	let currentBox;
	let collided = false;
	const scene = useThree((state) => state.scene);

	const moveRight = (distance: number, camera: THREE.Camera) => {
		_vector.setFromMatrixColumn(camera.matrix, 0);

		camera.position.addScaledVector(_vector, distance);
	};

	const moveForward = (distance: number, camera: THREE.Camera) => {
		_vector.setFromMatrixColumn(camera.matrix, 0);

		_vector.crossVectors(camera.up, _vector);

		camera.position.addScaledVector(_vector, distance);
	};
	const pointerLocked = (): void => {
		lockRef.current = true;
	};

	const pointerUnlocked = (): void => {
		lockRef.current = false;
	};

	useFrame((state, delta) => {
		const camera = state.camera;
		// DEBUG
		// console.log("Camera = ", camera.position);
		lastCamPosition.copy(camera.position);
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
			for (let i = 0; i < collisionObjects.length; ++i) {
				currentBox = collisionObjects[i];
				if (currentBox!.containsPoint(camera.position)) {
					collided = true;
					camera.position.copy(lastCamPosition);
					break;
				}
			}
			if (!collided) {
				lastCamPosition.copy(camera.position);
				collided = false;
			}
			// See if we are near to artefacts - show UI
			tempVec.copy(camera.position);
			tempVec.y = 0;
			if (tempVec.distanceTo(EXHIBITS.ART_POSITION) <= SCENE.PROXIMITY) {
				setHUDVisibility(true);
			} else if (HUDVisible) {
				setHUDVisibility(false);
			}
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
				collisionObjects.push(currentCollider.geometry.boundingBox!);
			}
		});
	}, []);

	return (
		<PointerLockControls onLock={pointerLocked} onUnlock={pointerUnlocked} />
	);
};

export default Player;
