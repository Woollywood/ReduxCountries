export const setCountries = (countries) => ({
	type: 'setCountries',
	payload: countries,
});

export const setLoading = {
	type: 'setCountriesLoading',
};

export const setError = (error) => ({
	type: 'setContriesError',
	payload: error,
});

export const loadContries =
	() =>
	(dispatch, _, { client, api }) => {
		dispatch(setLoading);
		client
			.get(api.ALL_COUNTRIES)
			.then(({ data }) => dispatch(setCountries(data)))
			.catch((err) => dispatch(setError(err)));
	};
