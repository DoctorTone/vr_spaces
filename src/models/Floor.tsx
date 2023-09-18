import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Floor = () => {
	const texture = useTexture("./textures/laminate_floor.jpg");
	texture.repeat.set(20, 20);
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]}>
			<planeGeometry args={[40, 40]} />
			<meshLambertMaterial map={texture} />
		</mesh>
	);
};

export default Floor;
