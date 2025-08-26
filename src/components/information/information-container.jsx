import { InformationLayout } from '../../components';

export const InformationContainer = ({ currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, isDraw, setIsDraw, setField }) => {
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			setField={setField}
		/>
	);
};
