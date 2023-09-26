import * as THREE from "three";

const SCENE = {
	camPosition: new THREE.Vector3(0, 1.7, 0),
	pointLight1: new THREE.Vector3(-5, 4.25, 0),
	pointLight2: new THREE.Vector3(5, 4.25, 0),
	PROXIMITY: 1.25,
};

enum EXHIBITS_INDEX {
	ART_POSITION,
	HOUSE_POSITION,
	FILM_POSITION,
	BOOK_POSITION,
	GAME_POSITION,
	BOTTLE_POSITION,
	CROSS_POSITION,
	PHONES_POSITION,
}

const EXHIBITS = [
	new THREE.Vector3(-10.5, 0, 3),
	new THREE.Vector3(-9, 0, 3),
	new THREE.Vector3(-7.5, 0, 3),
	new THREE.Vector3(-6, 0, 3),
	new THREE.Vector3(6, 0, 3),
	new THREE.Vector3(7.5, 0, 3),
	new THREE.Vector3(9, 0, 3),
	new THREE.Vector3(10.5, 0, 3),
];

const EXHIBIT_TEXT = [
	{ title: "Art", description: "Virtual art museum" },
	{ title: "Architecture", description: "Houses" },
	{ title: "Film", description: "Watch films" },
	{ title: "Education", description: "Learning" },
	{ title: "Games", description: "Shooters" },
	{ title: "Advertising", description: "Pepsi" },
	{ title: "Health", description: "Virtual surgery" },
	{ title: "Music", description: "Concerts" },
];

export { SCENE, EXHIBITS, EXHIBITS_INDEX, EXHIBIT_TEXT };
