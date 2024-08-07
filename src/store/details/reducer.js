const initialState = {
	status: 'idle',
	currentCountry: null,
	neighbors: [],
	error: null,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'setDetailsLoading':
			return { ...state, status: 'loading', error: null };
		case 'setDetailsError':
			return { ...state, status: 'idle', error: payload };
		case 'setDetailCountry':
			return {
				...state,
				status: 'success',
				error: null,
				currentCountry: payload,
			};
		case 'resetDetailCountry':
			return initialState;
		case 'setDetailsNeighbors':
			return { ...state, neighbors: payload };
		default:
			return state;
	}
};
