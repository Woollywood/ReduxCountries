export const selectMeta = (state) => ({
	status: state.countries.status,
	error: state.countries.error,
	length: state.countries.length,
});

export const selectAll = (state) => state.countries.items;

export const selectVisible = (state, { search = '', region = '' }) =>
	state.countries.items.filter(
		(country) => country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
	);
