const Floor = () => {
	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]}>
			<planeGeometry args={[40, 40]} />
			<meshLambertMaterial color="brown" />
		</mesh>
	);
};

export default Floor;
