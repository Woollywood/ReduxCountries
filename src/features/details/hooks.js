import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContryByName, getNeighborsByBorder, resetCountry } from './slice';

export function useDetailCountry(name) {
	const details = useSelector((state) => state.details);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getContryByName(name));
		return () => dispatch(resetCountry());
	}, [name, dispatch]);

	return details;
}

export function useNeighbors(borders = []) {
	const dispatch = useDispatch();
	const neighbors = useSelector((state) => state.details.neighbors);

	useEffect(() => {
		if (borders.length > 0) {
			dispatch(getNeighborsByBorder(borders));
		}
	}, [borders, dispatch]);

	return neighbors;
}
