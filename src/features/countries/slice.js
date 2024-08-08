import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	status: 'idle',
	items: [],
	error: null,
};

export const getCountries = createAsyncThunk('getCountries', async (_, { extra: { client, api } }) => {
	const { data } = await client.get(api.ALL_COUNTRIES);
	return data;
});

export const slice = createSlice({
	name: 'countries',
	initialState,
	reducers: {
		set: (state, { payload }) => {
			state.items = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCountries.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(getCountries.rejected, (state, { error }) => {
				state.status = 'rejected';
				state.error = error;
			})
			.addCase(getCountries.fulfilled, (state, { payload }) => {
				state.status = 'fulfilled';
				state.error = null;
				state.items = payload;
			});
	},
});

export const { set } = slice.actions;
export const reducer = slice.reducer;

export const selectMeta = (state) => ({
	status: state.countries.status,
	error: state.countries.error,
	length: state.countries.length,
});

export const selectVisible = (state, { search = '', region = '' }) =>
	state.countries.items.filter(
		(country) => country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
	);
