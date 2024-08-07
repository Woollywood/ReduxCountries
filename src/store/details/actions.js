export const setLoading = {
	type: 'setDetailsLoading',
};

export const setError = (error) => ({
	type: 'setDetailsError',
	payload: error,
});

export const setCountry = (country) => ({
	type: 'setDetailCountry',
	payload: country,
});

export const resetCountry = {
	type: 'resetDetailCountry',
};

export const setNeighbors = (countries) => ({
	type: 'setDetailsNeighbors',
	payload: countries,
});

export const loadContryByName =
	(name) =>
	(dispatch, _, { client, api }) => {
		dispatch(setLoading);
		client
			.get(api.searchByCountry(name))
			.then(({ data }) => dispatch(setCountry(data[0])))
			.catch((error) => dispatch(setError(error)));
	};

export const loadNeighborsByBorder =
	(borders) =>
	(dispatch, _, { client, api }) => {
		client
			.get(api.filterByCode(borders))
			.then(({ data }) => dispatch(setNeighbors(data.map((c) => c.name))))
			.catch((error) => console.log(error));
	};
