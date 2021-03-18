import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
	display:flex;
	align-items: center;
	justify-content:center.;
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
	height: 4rem;
	width: 20rem;
	background-color: var(--color-primary);
	border: 3px solid var(--color-primary);
	cursor: pointer;
	border-radius: 10px;
	font-size: 1.5rem;
	font-weight: bold;
	color: #fff;

	@media (min-width: 768px) {
		font-size: 1.75rem;
	}
`;
