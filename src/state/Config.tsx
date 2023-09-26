import * as THREE from "three";

const SCENE = {
	camPosition: new THREE.Vector3(0, 1.7, 0),
	pointLight1: new THREE.Vector3(-5, 4.25, 0),
	pointLight2: new THREE.Vector3(5, 4.25, 0),
	PROXIMITY: 1.25,
};

const EXHIBITS = {
	ART_POSITION: new THREE.Vector3(-10.5, 0, 3),
	HOUSE_POSITION: new THREE.Vector3(-9, 0, 3),
	FILM_POSITION: new THREE.Vector3(-7.5, 0, 3),
	BOOK_POSITION: new THREE.Vector3(-6, 0, 3),
	GAME_POSITION: new THREE.Vector3(6, 0, 3),
	BOTTLE_POSITION: new THREE.Vector3(7.5, 0, 3),
	CROSS_POSITION: new THREE.Vector3(9, 0, 3),
	PHONES_POSITION: new THREE.Vector3(10.5, 0, 3),
};

export { SCENE, EXHIBITS };
