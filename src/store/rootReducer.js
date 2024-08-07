import { combineReducers } from 'redux';
import { reducer as themeReducer } from './theme/reducer';
import { reducer as countriesReducer } from './countries/reducer';
import { reducer as controlsReducer } from './controls/reducer';
import { reducer as detailsReducer } from './details/reducer';

export const rootReducer = combineReducers({
	theme: themeReducer,
	countries: countriesReducer,
	controls: controlsReducer,
	details: detailsReducer,
});
