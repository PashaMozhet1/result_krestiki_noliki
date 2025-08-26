import { FieldLayout } from '../../components';
// import styles from './field.module.css';

export const FieldContainer = ({
	// currentPlayer,
	// setCurrentPlayer,
	isGameEnded,
	// setIsGameEnded,
	isDraw,
	// setIsDraw,
	field,
	// setField,
	handleClick,
}) => {
	return <FieldLayout isGameEnded={isGameEnded} isDraw={isDraw} field={field} handleClick={handleClick} />;
};
