import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

/* displays a GitHub spinner icon on the homepage which links to the github repository of this react application on my GitHub page */
export default function Home() {
	const iconGitHub = <FontAwesomeIcon icon={faGithub} spin size="6x" />;
	return (
		<div>
			<h1 className="iconGitHub">
				<a href="https://github.com/ChadProbert" target="_blank">
					{iconGitHub}
				</a>
			</h1>
		</div>
	);
}

/* References:

https://fontawesome.com/v5.15/icons/github?style=brands

*/
