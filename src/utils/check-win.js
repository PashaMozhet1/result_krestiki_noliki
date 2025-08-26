import { WIN_PATTERNS } from '../utils';

export const checkWin = (field, currentPlayer) =>
	WIN_PATTERNS.some((winPattern) => winPattern.every((buttonIndex) => field[buttonIndex] === currentPlayer));
