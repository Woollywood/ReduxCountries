import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'theme',
	initialState: 'light',
	reducers: {
		toggle: (state) => (state === 'light' ? 'dark' : 'light'),
	},
});

export const { toggle } = slice.actions;
export const reducer = slice.reducer;
