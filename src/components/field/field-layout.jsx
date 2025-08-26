import styles from './field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ isGameEnded, isDraw, field, handleClick }) => {
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
