import styles from './field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ isGameEnded, isDraw, field, handleClick }) => {
	// let match = false;

	// for (let winArray of WIN_PATTERNS) {
	// 	const [a, b, c] = winArray;
	// 	if (field[a] && field[a] === field[b] && field[b] === field[c]) {
	// 		match = true;
	// 	}
	// }
	// const gameEnd = true;

	return (
		<>
			<ul className={styles.field}>
				{field.map((value, index) => (
					<button
						key={index}
						className={styles['field-button']}
						onClick={() => handleClick(index)}
						disabled={(isGameEnded || isDraw || field[index] !== '') && true}
					>
						{value}
					</button>
				))}
			</ul>
		</>
	);
};

FieldLayout.propTypes = {
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	field: PropTypes.array,
	handleClick: PropTypes.func,
};

// export const FieldLayout = ({ currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, isDraw, setIsDraw, field, setField }) => {
// 	// let match = false;

// 	// for (let winArray of WIN_PATTERNS) {
// 	// 	for (let index = 0; index < field.length; index++) {
// 	// 		if (winArray.includes(field[index])) {
// 	// 			match = true;
// 	// 		}
// 	// 	}
// 	// }

// 	return (
// 		<>
// 			<ul className={styles.field}>
// 				{field.map((value, index) => (
// 					<button
// 						key={index}
// 						className={styles['field-button']}
// 						onClick={() => {
// 							if (currentPlayer === 'X' && field[index] === '') {
// 								// setCurrentPlayer('O');
// 								field[index] = 'X';
// 							} else if (currentPlayer === 'O' && field[index] === '') {
// 								// setCurrentPlayer('X');
// 								field[index] = 'O';
// 							}
// 							if (match) {
// 								setIsGameEnded(true);
// 							} else if (field.every((value) => value !== '')) {
// 								setIsDraw(true);
// 							} else {
// 								setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
// 							}
// 						}}
// 					>
// 						{value}
// 					</button>
// 				))}
// 			</ul>
// 		</>
// 	);
// };

// export const FieldLayout = ({ currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, isDraw, setIsDraw, field, setField }) => {
// 	return (
// 		<>
// 			<ul className={styles.field}>
// 				{field.map((value, index) => (
// 					<button
// 						key={index}
// 						className={styles['field-button']}
// 						onClick={() => {
// 							if (currentPlayer === 'X' && field[index] === '') {
// 								// setCurrentPlayer('O');
// 								field[index] = 'X';
// 							} else if (currentPlayer === 'O' && field[index] === '') {
// 								// setCurrentPlayer('X');
// 								field[index] = 'O';
// 							}
// 							WIN_PATTERNS.forEach((winState) => {
// 								if (field.some((value) => value === )) {
// 									setIsGameEnded(true);
// 								}
// 							});

// 							if (field.every((value) => value !== '')) {
// 								setIsDraw(true);
// 							} else {
// 								setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
// 							}
// 						}}
// 					>
// 						{value}
// 					</button>
// 				))}
// 			</ul>
// 		</>
// 	);
// };

// export const FieldLayout = ({ currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, isDraw, setIsDraw, field, setField }) => {
// 	for (let index = 0; index < WIN_PATTERNS.length; index++) {
// 		const winState = WIN_PATTERNS[index];
// 	}

// 	return (
// 		<>
// 			<ul className={styles.field}>
// 				{field.map((value, index) => (
// 					<button
// 						key={index}
// 						className={styles['field-button']}
// 						onClick={() => {
// 							if (currentPlayer === 'X' && field[index] === '') {
// 								// setCurrentPlayer('O');
// 								field[index] = 'X';
// 							} else if (currentPlayer === 'O' && field[index] === '') {
// 								// setCurrentPlayer('X');
// 								field[index] = 'O';
// 							}
// 							if (field.some((value, index) => value === winState)) {
// 								setIsGameEnded(true);
// 							} else if (field.every((value) => value !== '')) {
// 								setIsDraw(true);
// 							} else {
// 								setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
// 							}
// 						}}
// 					>
// 						{value}
// 					</button>
// 				))}
// 			</ul>
// 		</>
// 	);
// };
