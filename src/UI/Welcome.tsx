const Welcome = () => {
	return (
		<div id="welcome" className="panel">
			<h1>Welcome to the Virtual Framework</h1>
			<p>Use the mouse to look around and the WASD or arrow keys to move.</p>
			<p>Pressing ESC will get the mouse pointer back</p>
			<p>
				If you move in close proximity to displayed objects you will find out
				more information.
			</p>
			<p>
				Make sure that you visit the site often as hopefully things will keep
				being updated!
			</p>
			<p>Press OK to start exploring</p>
			<button id="startButton" className="startButton">
				OK
			</button>
		</div>
	);
};

export default Welcome;
