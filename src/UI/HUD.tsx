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
	const sub = useStore.subscribe(callback);

	return (
		<>
			{exhibit > -1 && (
				<div id="hud" className="panel">
					<h2>{EXHIBIT_TEXT[exhibit].title}</h2>
					<p>{EXHIBIT_TEXT[exhibit].description}</p>
				</div>
			)}
		</>
	);
};

export default HUD;
