import React from "react";
import { Lotus } from "./Lotus";

const Exhibits = () => {
	return (
		<group>
			<Lotus
				position={[0, 0, 3.5]}
				scale={[0.65, 0.65, 0.65]}
				rotation-y={(Math.PI * 2) / 3}
			/>
		</group>
	);
};

export default Exhibits;
