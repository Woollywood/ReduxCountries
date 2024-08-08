import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Controls } from '../features/controls/Controls';
import Countries from '../features/countries/Countries';

export const HomePage = () => {
	const controls = useSelector((state) => state.controls);
	const navigate = useNavigate();

	return (
		<>
			<Controls />
			<Countries controls={controls} navigate={navigate} />
		</>
	);
};
