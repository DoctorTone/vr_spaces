import React from "react";

const Plinth = (props: JSX.IntrinsicElements["group"]) => {
	return (
		<group {...props}>
			<mesh>
				<boxGeometry args={[0.5, 0.95, 0.5]} />
				<meshLambertMaterial color={0xffffff} />
			</mesh>
			<mesh position={[0, 0.49, 0]}>
				<boxGeometry args={[0.5, 0.025, 0.5]} />
				<meshLambertMaterial color={0xcc7306} />
			</mesh>
		</group>
	);
};

export default Plinth;
