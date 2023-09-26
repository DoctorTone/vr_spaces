import { Lotus } from "./Lotus";
import { Art } from "./Art";
import { Architecture } from "./Architecture";
import { Video } from "./Video";
import { Education } from "./Education";
import { Games } from "./Games";
import { Advertising } from "./Advertising";
import { Health } from "./Health";
import { Music } from "./Music";
import { Text } from "@react-three/drei";
import { EXHIBITS, EXHIBITS_INDEX } from "../state/Config";

const Exhibits = () => {
	return (
		<group>
			{/* Collision boxes */}
			<mesh visible={false} name="Collision1" position={[-12, 2, 0]}>
				<boxGeometry args={[1, 4, 8]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>
			<mesh visible={false} name="Collision2" position={[-7.75, 2, 3.25]}>
				<boxGeometry args={[6, 4, 2]} />
				<meshBasicMaterial color={0xff00ff} />
			</mesh>
			<mesh visible={false} name="Collision3" position={[-8.5, 2, -2.75]}>
				<boxGeometry args={[8, 4, 1]} />
				<meshBasicMaterial color={0xffff00} />
			</mesh>
			<mesh visible={false} name="Collision4" position={[-3.6, 2, 4.5]}>
				<boxGeometry args={[2, 4, 1]} />
				<meshBasicMaterial color={0xffff00} />
			</mesh>
			<mesh visible={false} name="Collision5" position={[0, 2, 3]}>
				<boxGeometry args={[5, 4, 3]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>
			<mesh visible={false} name="Collision6" position={[6.25, 2, 3.4]}>
				<boxGeometry args={[7.25, 4, 2]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>
			<mesh visible={false} name="Collision7" position={[10.5, 2, 4]}>
				<boxGeometry args={[2, 4, 2]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>
			<mesh visible={false} name="Collision8" position={[12, 2, 0]}>
				<boxGeometry args={[1, 4, 8]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>
			<mesh visible={false} name="Collision9" position={[8.1, 2, -2.75]}>
				<boxGeometry args={[7, 4, 1]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>
			<mesh visible={false} name="Collision10" position={[0, 2, -4]}>
				<boxGeometry args={[9.5, 4, 1]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>
			<mesh visible={false} name="Collision11" position={[-11, 2, 4]}>
				<boxGeometry args={[2, 4, 2]} />
				<meshBasicMaterial color={0xff0000} />
			</mesh>

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
			<group position={EXHIBITS[EXHIBITS_INDEX.CAR_POSITION]}>
				<Text
					position={[0, 2.5, 2.65]}
					rotation-y={Math.PI}
					fontSize={0.5}
					color={0x333333}
					textAlign="center"
				>
					Showroom
				</Text>
				<Lotus scale={0.65} rotation-y={(Math.PI * 2) / 3} />
			</group>
			<group
				position={EXHIBITS[EXHIBITS_INDEX.ART_POSITION]}
				rotation-y={Math.PI}
			>
				<Text position-y={2} fontSize={0.1} color={0x333333} textAlign="center">
					Art
				</Text>
				<Art name="Art" position-y={1} scale={[0.03, 0.03, 0.03]} />
			</group>
			<group position={EXHIBITS[EXHIBITS_INDEX.HOUSE_POSITION]}>
				<Text
					position-y={1.6}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Architecture
				</Text>
				<Architecture
					name="Architecture"
					position-y={1}
					rotation-y={Math.PI}
					scale={0.4}
				/>
			</group>
			<group position={EXHIBITS[EXHIBITS_INDEX.FILM_POSITION]}>
				<Text
					position-y={1.65}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Film
				</Text>
				<Video position-y={1.3} />
			</group>
			<group position={EXHIBITS[EXHIBITS_INDEX.BOOK_POSITION]}>
				<Text
					position-y={1.6}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Education
				</Text>
				<Education position-y={1.25} rotation-x={-Math.PI / 4} />
			</group>
			<group position={EXHIBITS[EXHIBITS_INDEX.GAME_POSITION]}>
				<Text
					position-y={1.65}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Games
				</Text>
				<Games position-y={1.25} scale={0.1} />
			</group>
			<group position={EXHIBITS[EXHIBITS_INDEX.BOTTLE_POSITION]}>
				<Text
					position-y={1.75}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Advertising
				</Text>
				<Advertising position-y={1.1} rotation-z={-Math.PI / 12} />
			</group>
			<group position={EXHIBITS[EXHIBITS_INDEX.CROSS_POSITION]}>
				<Text
					position-y={1.65}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Health
				</Text>
				<Health position-y={1.3} scale={1} />
			</group>
			<group position={EXHIBITS[EXHIBITS_INDEX.PHONES_POSITION]}>
				<Text
					position-y={1.65}
					rotation-y={Math.PI}
					fontSize={0.1}
					color={0x333333}
					textAlign="center"
				>
					Music
				</Text>
				<Music position-y={1.25} scale={0.0005} />
			</group>
		</group>
	);
};

export default Exhibits;
