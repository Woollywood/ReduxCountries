import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	status: 'idle',
	currentCountry: null,
	neighbors: [],
	error: null,
};

export const getContryByName = createAsyncThunk('getContryByName', async (name, { extra: { client, api } }) => {
	const { data } = await client.get(api.searchByCountry(name));
	return data[0];
});

export const getNeighborsByBorder = createAsyncThunk(
	'getNeighborsByBorder',
	async (borders, { extra: { client, api } }) => {
		const { data } = await client.get(api.filterByCode(borders));
		return data;
	}
);

export const slice = createSlice({
	name: 'details',
	initialState,
	reducers: {
		resetCountry: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getContryByName.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(getContryByName.rejected, (state, { error }) => {
				state.status = 'idle';
				state.error = error;
			})
			.addCase(getContryByName.fulfilled, (state, { payload }) => {
				state.status = 'success';
				state.error = null;
				state.currentCountry = payload;
			})
			.addCase(getNeighborsByBorder.fulfilled, (state, { payload }) => {
				state.neighbors = payload.map((c) => c.name);
			});
	},
});

export const { resetCountry } = slice.actions;
export const reducer = slice.reducer;
