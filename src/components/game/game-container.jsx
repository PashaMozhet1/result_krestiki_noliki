import { useState } from 'react';
import { GameLayout } from '../../components';
import { checkWin } from '../../utils';
import './game.css';
import PropTypes from 'prop-types';

export function GameContainer() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isDraw, setIsDraw] = useState(false);
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const handleClick = (cellIndex) => {
		const newField = [...field];
		newField[cellIndex] = `${currentPlayer}`;
		// console.log(newField);
		setField(newField);

		if (checkWin(newField, currentPlayer)) {
			setIsGameEnded(true);
		} else if (newField.some((value) => value === '')) {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		} else {
			setIsDraw(true);
		}

		// WIN_PATTERNS.map((combination) => {
		// 	const [a, b, c] = combination;
		// 	if (newField[a] && newField[a] === newField[b] && newField[b] === newField[c]) {
		// 		setIsGameEnded(true);
		// 		console.log(isGameEnded);
		// 		return;
		// 	} else if (newField.every((value) => value !== '') && !isGameEnded) {
		// 		setIsDraw(true);
		// 		return;
		// 	}
		// 	if (isGameEnded === false || isDraw === false) {
		// 		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		// 	}
		// });
	};

	return (
		<GameLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			handleClick={handleClick}
		/>
	);
}

GameContainer.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
