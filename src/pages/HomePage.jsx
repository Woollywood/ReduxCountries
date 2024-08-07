import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { selectVisible, selectMeta } from '../store/countries/selectors';
import { selectAll } from '../store/controls/selectors';
import { loadContries, setCountries } from '../store/countries/actions';

export const HomePage = () => {
	const { search, region } = useSelector(selectAll);
	const countries = useSelector((state) => selectVisible(state, { search, region }));
	const { status, error } = useSelector(selectMeta);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(loadContries());
		return () => dispatch(setCountries([]));
	}, [dispatch]);

	return (
		<>
			<Controls />

			{error && <h2>Can't fetch data</h2>}
			{status === 'loading' && <h2>Loading...</h2>}
			{status === 'success' && (
				<List>
					{countries.map((c) => {
						const countryInfo = {
							img: c.flags.png,
							name: c.name,
							info: [
								{
									title: 'Population',
									description: c.population.toLocaleString(),
								},
								{
									title: 'Region',
									description: c.region,
								},
								{
									title: 'Capital',
									description: c.capital,
								},
							],
						};

						return <Card key={c.name} onClick={() => navigate(`/country/${c.name}`)} {...countryInfo} />;
					})}
				</List>
			)}
		</>
	);
};
