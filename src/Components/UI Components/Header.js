import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faFlag, faHome } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
	const history = useHistory();
	const iconBomb = <FontAwesomeIcon icon={faBomb} />;
	const iconFlag = <FontAwesomeIcon icon={faFlag} />;
	const iconHome = <FontAwesomeIcon icon={faHome} size="lg" />;

	// added button onClick routing
	return (
		<div className="divHeader">
			<h1 className="headingMinesweeper">
				{iconBomb} MINESWEEPER {iconFlag}
			</h1>

			<Button
				variant="warning"
				onClick={() => history.push("/")}
				className="shadow-lg buttonHome"
				size="lg"
			>
				{iconHome}
			</Button>

			<Button
				variant="secondary"
				onClick={() => history.push("/Game")}
				className="shadow-lg buttonStartNewGame"
				size="lg"
			>
				Start Game
			</Button>

			<Button
				variant="light"
				onClick={() => history.push("/Help")}
				className="shadow-lg buttonHowToPlay"
				size="lg"
			>
				Help
			</Button>
		</div>
	);
};
export default Header;

// References:

// https://stackoverflow.com/questions/44877821/how-to-navigate-on-path-by-button-click-in-react-router-v4

// https://www.kindacode.com/article/programmatically-navigate-using-react-router/

// https://react-bootstrap.github.io/components/buttons/
