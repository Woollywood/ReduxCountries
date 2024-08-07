export const reducer = (state = 'light', { type }) => {
	switch (type) {
		case 'toggleTheme':
			return state === 'light' ? 'dark' : 'light';
		default:
			return state;
	}
};
