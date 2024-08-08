import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	search: '',
	region: '',
};

export const slice = createSlice({
	name: 'controls',
	initialState,
	reducers: {
		setSearch: (state, { payload }) => {
			state.search = payload;
		},
		setRegion: (state, { payload }) => {
			state.region = payload;
		},
		reset: (state) => initialState,
	},
});

export const { setSearch, setRegion, reset } = slice.actions;
export const reducer = slice.reducer;
