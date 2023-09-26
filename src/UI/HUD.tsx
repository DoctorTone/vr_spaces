import { useState } from "react";
import useStore from "../state/store";

interface VRState {
	currentExhibit: number;
}

const HUD = () => {
	const [exhibit, setExhibit] = useState(-1);
	const callback = (state: VRState) => {
		setExhibit(state.currentExhibit);
	};
	const sub = useStore.subscribe(callback);

	return (
		<>
			{exhibit > 0 && (
				<div id="hud" className="panel">
					<h2>Art</h2>
					<p>Imagine going to a virtual art museum</p>
				</div>
			)}
		</>
	);
};

export default HUD;
