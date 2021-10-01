import React, { Component } from "react";
import Board from "./Board";
import Cell from "./Cell";
import { PropTypes } from "prop-types";
import Button from "react-bootstrap/Button";

export default class Game extends React.Component {
	/* setting the initial height and width of the board and the 
  number of mines that will appear on the board */
	state = {
		height: 8,
		width: 8,
		mines: 10,
	};

	render() {
		const { height, width, mines } = this.state;
		return (
			<div>
				<div className="game">
					<Board height={height} width={width} mines={mines} />
				</div>
				<form>
					<Button
						variant="warning"
						type="submit"
						className="buttonTryAgain"
						size="lg"
					>
						restart
					</Button>
				</form>
			</div>
		);
	}
}

Cell.propTypes = {
	value: PropTypes.func,
};

/* References:

https://codeburst.io/learning-react-js-by-building-a-minesweeper-game-ced9d41560ed

https://www.youtube.com/watch?v=cx0S8JyiVxc

https://react-bootstrap.github.io/components/buttons/

*/
