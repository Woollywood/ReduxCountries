import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { toggle } from './slice';
import styled from 'styled-components';
import { useTheme } from './hooks';

const ModeSwitcher = styled.div`
	color: var(--colors-text);
	font-size: var(--fs-sm);
	cursor: pointer;
	// font-weight: var(--fw-bold);
	text-transform: capitalize;
`;

export default function ThemeSwitcher() {
	const [theme, dispatch] = useTheme();

	return (
		<ModeSwitcher onClick={() => dispatch(toggle())}>
			{theme === 'light' ? <IoMoonOutline size='14px' /> : <IoMoon size='14px' />}{' '}
			<span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
		</ModeSwitcher>
	);
}
