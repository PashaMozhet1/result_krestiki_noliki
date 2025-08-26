import { FieldLayout } from '../../components';
import PropTypes from 'prop-types';

export const FieldContainer = ({ isGameEnded, isDraw, field, handleClick }) => {
	return <FieldLayout isGameEnded={isGameEnded} isDraw={isDraw} field={field} handleClick={handleClick} />;
};

FieldContainer.propTypes = {
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
