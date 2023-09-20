import React from "react";

export const Video = (props: JSX.IntrinsicElements["group"]) => {
	return (
		<group {...props}>
			<mesh>
				<boxGeometry args={[0.75, 0.5, 0.1]} />
				<meshLambertMaterial color={0x333333} />
			</mesh>
		</group>
	);
};
