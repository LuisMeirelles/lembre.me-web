import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1.5rem 0;
`;

export const Navbar = styled.nav`
	display: none;

	@media (min-width: 768px) {
		justify-content: flex-end;
		display: flex;
		width: 100%;
		align-items: center;

		a + & {
			width: 80%;
			justify-content: flex-end;
		}
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

export const Header = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1.5rem;
`;

export const LinkLogo = styled(Link)`
	width: 60%;

	@media(min-width: 768px) {
		width: 35%;
	}

	img {
		width: 100%;
	}
`;


export const Main = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;

	img {
		width: 100%;
	}

	@media (min-width: 768px) {
		img {
			width: initial;
		}
	}
`;

export const Conteudo = styled.div`
	width: 90%;

	div {
		text-align: justify;
		color:var(--color-primary);

		h1 {
			font-weight: bold;
			text-align: center;
			margin-bottom: 1rem;
		}

		p {
			font-family: 'Roboto';
			font-size: 1.5rem;
			font-weight: 400;
		}
	}

	img{
		display: none;
	}

	& + a {
		margin: 1.5rem 0;
		background-color: var(--color-primary);
		color: white;
	}

	@media (min-width: 768px) {
		display: flex;
		padding: 1.5rem 0;
		border-radius: 20px;
		justify-content: space-around;
		align-items: center;
		background-color: var(--color-primary);

		div {
			width: 50%;
			color: white;

			p {
				font-weight: 300;
			}
		}

		img {
			display: initial;
		}

		& + a {
			display: none;
		}
	}
`;
