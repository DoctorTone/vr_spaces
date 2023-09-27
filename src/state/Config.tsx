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
		description: `Would you like to visit a virtual art gallery where you can see all the pieces close up. 
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
	{
		title: "Education",
		description: `Imagine a virtual learning space where you could conduct virtual experiments without breaking anything, or get taught by virtual 
	experts from around the world or just have access to a vast array of information in an interactive environment.`,
	},
	{
		title: "Games",
		description: `Play a whole new style of immersive games, or re-imagine some old favourites inside a VR headset! VR shooter coming soon!`,
	},
	{
		title: "Advertising",
		description:
			"Companies can promote as many products as they like in a large virtual space. They can appear as realistic as the real-world equivalent.",
	},
	{
		title: "Health",
		description:
			"VR opens up all sorts of opportunities such as virtual surgery, visualisation of anatomy and sharing of vast quantities of medical data and knowledge.",
	},
	{
		title: "Music",
		description:
			"Your favourite band in a 360 video or a calming environment with relaxing sounds.",
	},
	{
		title: "Showroom",
		description: `A large space to display anything you want`,
	},
];

export { SCENE, EXHIBITS, EXHIBITS_INDEX, EXHIBIT_TEXT };
