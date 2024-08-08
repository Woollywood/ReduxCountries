import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function useTheme() {
	const theme = useSelector((state) => state.theme);
	const dispatch = useDispatch();

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	return [theme, dispatch];
}
