import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './config';

import { reducer as themeReducer } from './features/theme/slice';
import { reducer as controlsReducer } from './features/controls/slice';
import { reducer as countriesReducer } from './features/countries/slice';
import { reducer as detailsReducer } from './features/details/slice';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		controls: controlsReducer,
		countries: countriesReducer,
		details: detailsReducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {
					client: axios,
					api,
				},
			},
		}),
});
