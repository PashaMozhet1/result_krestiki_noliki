export const Reset = ({ setCurrentPlayer, setIsGameEnded, setIsDraw, setField }) => {
	const handleClick = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return <button onClick={handleClick}>Начать сначала</button>;
};
