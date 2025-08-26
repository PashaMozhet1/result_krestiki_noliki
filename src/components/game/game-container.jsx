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
		setField(newField);

		if (checkWin(newField, currentPlayer)) {
			setIsGameEnded(true);
		} else if (newField.some((value) => value === '')) {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		} else {
			setIsDraw(true);
		}
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
