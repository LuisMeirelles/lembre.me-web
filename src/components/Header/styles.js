import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1.5rem;

	@media (min-width: 768px) {
		justify-content: flex-start;
	}
`;

export const LinkLogo = styled(Link)`
	width: 60%;

	@media(min-width: 768px) {
		width: 20%;
	}

	img {
		width: 100%;
	}
`;
