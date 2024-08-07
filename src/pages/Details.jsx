import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { selectDetails } from '../store/details/selectors';
import { loadContryByName, resetCountry } from '../store/details/actions';

export const Details = () => {
	const { name } = useParams();
	const navigate = useNavigate();
	const { currentCountry, error, status } = useSelector(selectDetails);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadContryByName(name));
		return () => dispatch(resetCountry);
	}, [name, dispatch]);

	return (
		<div>
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack /> Back
			</Button>
			{status === 'loading' && <h2>Loading...</h2>}
			{status === 'error' && <h2>{error.message}</h2>}
			{status === 'success' && currentCountry && <Info push={navigate} {...currentCountry} />}
		</div>
	);
};
