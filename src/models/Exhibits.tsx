import React from "react";
import { Lotus } from "./Lotus";
import { Art } from "./Art";
import { Architecture } from "./Architecture";
import { Video } from "./Video";
import { Education } from "./Education";
import { Games } from "./Games";
import { Advertising } from "./Advertising";
import { Health } from "./Health";
import { Music } from "./Music";

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
			<group>
				<Education position={[-6.35, 1.2, 3]} rotation-x={-Math.PI / 4} />
			</group>
			<group>
				<Games position={[6.4, 1.25, 2.9]} scale={0.1} />
			</group>
			<group>
				<Advertising position={[7.4, 1.1, 2.9]} rotation-z={-Math.PI / 12} />
			</group>
			<group>
				<Health position={[8.4, 1.3, 2.9]} scale={1} />
			</group>
			<group>
				<Music position={[9.4, 1.2, 2.9]} scale={0.0005} />
			</group>
		</group>
	);
};

export default Exhibits;
