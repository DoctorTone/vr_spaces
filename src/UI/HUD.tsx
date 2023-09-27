import { useState } from "react";
import useStore from "../state/store";
import { EXHIBIT_TEXT } from "../state/Config";

interface VRState {
	currentExhibit: number;
}

const HUD = () => {
	const [exhibit, setExhibit] = useState(-1);
	const callback = (state: VRState) => {
		setExhibit(state.currentExhibit);
	};
	useStore.subscribe(callback);

	return (
		<>
			{exhibit > -1 && (
				<div id="hud" className="panel">
					<h1>{EXHIBIT_TEXT[exhibit].title}</h1>
					<p>{EXHIBIT_TEXT[exhibit].description}</p>
				</div>
			)}
		</>
	);
};

export default HUD;
