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
import { Billboard, Text } from "@react-three/drei";

const Exhibits = () => {
	return (
		<group>
			<mesh position={[-10.7, 1, 3.305]}>
				<boxGeometry args={[1.35, 2.5, 0.1]} />
				<meshStandardMaterial
					color={0xe1dbb7}
					roughness={0.3}
					metalness={0.6}
				/>
			</mesh>
			<mesh position={[10.7, 1, 3.305]}>
				<boxGeometry args={[1.35, 2.5, 0.1]} />
				<meshStandardMaterial
					color={0xe1dbb7}
					roughness={0.3}
					metalness={0.6}
				/>
			</mesh>
			<group>
				<Text
					position={[0, 2.5, 6.15]}
					rotation-y={Math.PI}
					fontSize={0.5}
					color={0x333333}
					textAlign="center"
				>
					Showroom
				</Text>
				<Lotus
					position={[0, 0, 3.5]}
					scale={0.65}
					rotation-y={(Math.PI * 2) / 3}
				/>
			</group>
			<group>
				<Billboard
					position={[-9.4, 2, 3]}
					follow={true}
					lockX={false}
					lockY={false}
					lockZ={false}
				>
					<Text fontSize={0.1} color={0x333333} textAlign="center">
						Art
					</Text>
				</Billboard>
				<Art
					position={[-9.4, 1, 3]}
					scale={[0.03, 0.03, 0.03]}
					rotation-y={Math.PI}
				/>
			</group>
			<group>
				<Billboard
					position={[-8.4, 1.6, 3]}
					follow={true}
					lockX={false}
					lockY={false}
					lockZ={false}
				>
					<Text fontSize={0.1} color={0x333333} textAlign="center">
						Architecture
					</Text>
				</Billboard>
				<Architecture
					position={[-8.4, 1, 3]}
					rotation-y={Math.PI}
					scale={0.4}
				/>
			</group>
			<group>
				<Billboard
					position={[-7.35, 1.6, 3]}
					follow={true}
					lockX={false}
					lockY={false}
					lockZ={false}
				>
					<Text fontSize={0.1} color={0x333333} textAlign="center">
						Film
					</Text>
				</Billboard>
				<Video position={[-7.35, 1.25, 3]} rotation-y={Math.PI} />
			</group>
			<group>
				<Billboard
					position={[-6.35, 1.55, 3]}
					follow={true}
					lockX={false}
					lockY={false}
					lockZ={false}
				>
					<Text fontSize={0.1} color={0x333333} textAlign="center">
						Education
					</Text>
				</Billboard>
				<Education position={[-6.35, 1.2, 3]} rotation-x={-Math.PI / 4} />
			</group>
			<group>
				<Billboard
					position={[6.4, 1.65, 2.9]}
					follow={true}
					lockX={false}
					lockY={false}
					lockZ={false}
				>
					<Text fontSize={0.1} color={0x333333} textAlign="center">
						Games
					</Text>
				</Billboard>
				<Games position={[6.4, 1.25, 2.9]} scale={0.1} />
			</group>
			<group>
				<Billboard
					position={[7.4, 1.75, 2.9]}
					follow={true}
					lockX={false}
					lockY={false}
					lockZ={false}
				>
					<Text fontSize={0.1} color={0x333333} textAlign="center">
						Advertising
					</Text>
				</Billboard>
				<Advertising position={[7.4, 1.1, 2.9]} rotation-z={-Math.PI / 12} />
			</group>
			<group>
				<Billboard
					position={[8.4, 1.65, 2.9]}
					follow={true}
					lockX={false}
					lockY={false}
					lockZ={false}
				>
					<Text fontSize={0.1} color={0x333333} textAlign="center">
						Health
					</Text>
				</Billboard>
				<Health position={[8.4, 1.3, 2.9]} scale={1} />
			</group>
			<group>
				<Billboard
					position={[9.4, 1.55, 2.9]}
					follow={true}
					lockX={false}
					lockY={false}
					lockZ={false}
				>
					<Text fontSize={0.1} color={0x333333} textAlign="center">
						Music
					</Text>
				</Billboard>
				<Music position={[9.4, 1.2, 2.9]} scale={0.0005} />
			</group>
		</group>
	);
};

export default Exhibits;
