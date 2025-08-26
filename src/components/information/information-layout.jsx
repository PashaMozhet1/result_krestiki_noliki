// import styles from './information.module.css';
import { Reset } from '../index';

export const InformationLayout = ({ currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, isDraw, setIsDraw, setField }) => {
	return (
		<>
			{isDraw && !isGameEnded && <h2>Ничья</h2>}
			{isGameEnded && <h2>Победа: {currentPlayer}</h2>}
			{/* {isGameEnded && <h2>Победа: {currentPlayer === 'X' ? 'O' : 'X'}</h2>} */}
			{/* {isGameEnded && currentPlayer === 'X' && <h2>Победа: O</h2>}
			{isGameEnded && currentPlayer === 'O' && <h2>Победа: X</h2>} */}
			{/* {!isDraw && isGameEnded && currentPlayer === 'X' && <h2>Победа: O</h2>}
			{!isDraw && isGameEnded && currentPlayer === 'O' && <h2>Победа: X</h2>} */}
			{(isDraw || isGameEnded) && (
				<Reset setCurrentPlayer={setCurrentPlayer} setIsGameEnded={setIsGameEnded} setIsDraw={setIsDraw} setField={setField} />
			)}
			{/* {!isDraw && isGameEnded && currentPlayer === 'X' ? <h2>Победа: {currentPlayer}</h2>} */}
			{!isDraw && !isGameEnded && <h2>Ходит: {currentPlayer}</h2>}
		</>
	);
};
