import React from "react";

const Exhibits = () => {
	return (
		<group>
			<mesh>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color={0x333333} />
			</mesh>
		</group>
	);
};

export default Exhibits;
