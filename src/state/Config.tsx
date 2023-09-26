import * as THREE from "three";

const SCENE = {
	camPosition: new THREE.Vector3(-11, 1.7, -2),
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
	CAR_POSITION,
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
	new THREE.Vector3(0, 0, 3.5),
];

const EXHIBIT_TEXT = [
	{
		title: "Art",
		description: `Imagine visiting a virtual art gallery where you can see all the pieces close up. 
			You could finally see a Da Vinci or a Constable!`,
	},
	{
		title: "Architecture",
		description: `A 3D view can let you see all aspects of a house design, let you look around 
			the interior or alter the layout. You could even plan a whole housing complex, 
			determing the best place to situate everything.`,
	},
	{
		title: "Film",
		description: `Watch your favourite film in a large immersive environment, or use multiple 
			video displays to inform and entertain your audience.`,
	},
	{ title: "Education", description: `Virtual Learning` },
	{ title: "Games", description: "Shooters" },
	{ title: "Advertising", description: "Pepsi" },
	{ title: "Health", description: "Virtual surgery" },
	{ title: "Music", description: "Concerts" },
	{
		title: "Showroom",
		description: `A large space to display anything you want`,
	},
];

export { SCENE, EXHIBITS, EXHIBITS_INDEX, EXHIBIT_TEXT };
