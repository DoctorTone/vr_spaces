const Roof = (props: JSX.IntrinsicElements["group"]) => {
	return (
		<group {...props}>
			<mesh rotation={[Math.PI / 2, 0, 0]}>
				<planeGeometry args={[40, 40]} />
				<meshLambertMaterial color={0xababab} />
			</mesh>
		</group>
	);
};

export default Roof;
