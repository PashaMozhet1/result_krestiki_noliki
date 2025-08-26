import { InformationContainer, FieldContainer } from '../../components';
import './game.css';
import PropTypes from 'prop-types';

export const GameLayout = ({
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
	field,
	setField,
	handleClick,
}) => {
	return (
		<>
			<h2>Крестики-нолики</h2>
			<InformationContainer
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
				setField={setField}
			/>
			<FieldContainer
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
				field={field}
				setField={setField}
				handleClick={handleClick}
			/>
		</>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
