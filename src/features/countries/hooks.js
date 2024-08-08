import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisible, selectMeta, getCountries, set } from './slice';

export function useCountries(controls) {
	const { search, region } = controls;
	const countries = useSelector((state) => selectVisible(state, { search, region }));
	const { status, error } = useSelector(selectMeta);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCountries());
		return () => dispatch(set([]));
	}, [dispatch]);

	return [countries, { status, error }];
}
