import { useEffect } from "react";
import * as THREE from "three";

const VideoPlayer = (props: JSX.IntrinsicElements["group"]) => {
	let videoTexture;
	const video = document.getElementById("video") as HTMLVideoElement;
	video!.play();
	videoTexture = new THREE.VideoTexture(video);

	return (
		<group {...props}>
			<mesh>
				<planeGeometry args={[1.6 / 1.25, 0.9 / 1.25]} />
				<meshLambertMaterial color={0xffffff} map={videoTexture} />
			</mesh>
		</group>
	);
};

export default VideoPlayer;
