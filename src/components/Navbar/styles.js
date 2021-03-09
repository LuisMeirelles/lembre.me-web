import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media (min-width: 768px) {
		justify-content: flex-end;
	}
`;

export const NavItem = styled(Link)`
	font-weight: bold;
	font-size: 1.5rem;
	padding: 0 0.5rem;
	border-radius: 5px;
	color: var(--color-primary);
	transition: background-color 0.2s, color 0.2s;
	&:hover,
	&:focus,
	&:active {
			background-color: var(--color-primary);
			color: white;
	}
	@media (min-width: 768px) {
		font-size: 1.75rem;

		& + & {
			margin-left: 2.5rem;
		}
	}
`;
