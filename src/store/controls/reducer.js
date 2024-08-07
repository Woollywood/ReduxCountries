const initialState = {
	search: '',
	region: '',
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'setSearch':
			return { ...state, search: payload };
		case 'setRegion':
			return { ...state, region: payload };
		case 'resetControls':
			return initialState;
		default:
			return state;
	}
};
