const Ground = (props: JSX.IntrinsicElements["group"]) => {
	return (
		<group {...props}>
			<mesh rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[45, 32]} />
				<meshLambertMaterial color={0x555555} />
			</mesh>
		</group>
	);
};

export default Ground;
