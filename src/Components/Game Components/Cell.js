import React, { Component } from "react";

export default class Cell extends React.Component {
	// determines the suitable value to be displayed in each cell
	getValue() {
		const { value } = this.props;

		if (!value.isRevealed) {
			return this.props.value.isFlagged ? "🚩" : null;
		}
		if (value.isMine) {
			return "💣";
		}
		if (value.neighbour === 0) {
			return null;
		}
		return value.neighbour;
	}

	render() {
		const { value, onClick, cMenu } = this.props;
		let className =
			"cell" +
			(value.isRevealed ? "" : " hidden") +
			(value.isMine ? " is-mine" : "") +
			(value.isFlagged ? " is-flag" : "");

		return (
			<div onClick={onClick} className={className} onContextMenu={cMenu}>
				{this.getValue()}
			</div>
		);
	}
}

/* References:

https://codeburst.io/learning-react-js-by-building-a-minesweeper-game-ced9d41560ed

*/
