import React from "react";

interface HUDProps {
	visible: boolean;
}

const HUD = ({ visible }: HUDProps) => {
	return (
		<>
			{visible && (
				<div id="hud" className="panel">
					<h2>Art</h2>
					<p>Imagine going to a virtual art museum</p>
				</div>
			)}
		</>
	);
};

export default HUD;
