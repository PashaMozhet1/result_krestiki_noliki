import PropTypes from 'prop-types';

export const Reset = ({ setCurrentPlayer, setIsGameEnded, setIsDraw, setField }) => {
	const handleClick = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return <button onClick={handleClick}>Начать сначала</button>;
};

Reset.propTypes = {
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	setField: PropTypes.func,
};
