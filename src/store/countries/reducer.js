const initialState = {
	status: 'idle',
	items: [],
	error: null,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'setCountries':
			return { ...state, status: 'success', items: payload, error: null };
		case 'setCountriesLoading':
			return { ...state, status: 'loading', error: null };
		case 'setContriesError':
			return { ...state, status: 'error', error: payload };
		default:
			return state;
	}
};
