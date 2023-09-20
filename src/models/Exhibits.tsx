import React from "react";
import { Lotus } from "./Lotus";
import { Art } from "./Art";
import { Architecture } from "./Architecture";
import { Video } from "./Video";

const Exhibits = () => {
	return (
		<group>
			<group>
				<Lotus
					position={[0, 0, 3.5]}
					scale={0.65}
					rotation-y={(Math.PI * 2) / 3}
				/>
			</group>
			<group>
				<Art
					position={[-9.4, 1, 3]}
					scale={[0.03, 0.03, 0.03]}
					rotation-y={Math.PI}
				/>
			</group>
			<group>
				<Architecture
					position={[-8.4, 1, 3]}
					rotation-y={Math.PI}
					scale={0.4}
				/>
			</group>
			<group>
				<Video position={[-7.35, 1.25, 3]} rotation-y={Math.PI} />
			</group>
		</group>
	);
};

export default Exhibits;
