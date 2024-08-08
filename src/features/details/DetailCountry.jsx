import { Info } from './Info';
import { useDetailCountry } from './hooks';

export default function DetailCountry({ name, navigate }) {
	const { currentCountry, error, status } = useDetailCountry(name);

	return (
		<>
			{status === 'loading' && <h2>Loading...</h2>}
			{status === 'error' && <h2>{error.message}</h2>}
			{status === 'success' && currentCountry && <Info push={navigate} {...currentCountry} />}
		</>
	);
}
