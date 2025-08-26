import { Reset } from '../index';
import PropTypes from 'prop-types';

export const InformationLayout = ({ currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, isDraw, setIsDraw, setField }) => {
	return (
		<>
			{isDraw && !isGameEnded && <h2>Ничья</h2>}
			{isGameEnded && <h2>Победа: {currentPlayer}</h2>}
			{(isDraw || isGameEnded) && (
				<Reset setCurrentPlayer={setCurrentPlayer} setIsGameEnded={setIsGameEnded} setIsDraw={setIsDraw} setField={setField} />
			)}
			{!isDraw && !isGameEnded && <h2>Ходит: {currentPlayer}</h2>}
		</>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	setField: PropTypes.func,
};
