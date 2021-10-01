import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function Help() {
	const iconCrosshairs = <FontAwesomeIcon icon={faCrosshairs} spin />;

	return (
		<div className="shadow-lg divHelp">
			<h2 className="headingHelp">HOW TO PLAY?</h2>

			<h3 className="headingAimOfGame">
				{iconCrosshairs} Aim of the game {iconCrosshairs}
			</h3>
			<p className="paragraphAimOfGame">
				The aim of the game is to find all the mine placements without clicking
				on any of them. There are 10 mines randomly placed in the field of
				tiles. You have to use the clues displayed in the form of numbers around
				the mine placements. The numbered tiles indicate how many mines there
				are around that tile. You can flag a tile that you think is a potential
				mine.
			</p>

			<h3 className="headingInstructions">Instructions</h3>
			<p className="paragraphInstructions">
				Press mouse left-click on a tile to reveal that tile.
			</p>
			<p className="paragraphInstructions">
				Press mouse right-click on a tile to flag as a potential mine.
			</p>
			<p className="paragraphInstructions">
				Click "RESTART" to start new game.
			</p>
		</div>
	);
}

/* References:

https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react

https://fontawesome.com/v5.15/icons/mouse?style=solid

https://fontawesome.com/v5.15/icons/crosshairs?style=solid

*/
