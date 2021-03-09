import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	height: 100vh;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 1.5rem;
`;

export const Main = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
`;

export const ContainerBotao = styled.div`
	height: 4rem;
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-secondary);
	border-radius: 10px;
	margin: 1.5rem 0;

	& + & {
		margin-top: 1.5rem;
	}

	button {
		width:100%;
		transition: transform 0.2s;
	}

	&:hover,
	&:focus {
		button {
			transform: translate(-10px, -10px);
		}

	}

	@media(min-width: 768px){
		width: 20rem;
	}
`;

export const BotaoCriarConta = styled(Link)`
	font-weight: bold;
	font-size: 1.5rem;
	border-radius: 10px;
	color: var(--color-primary);
	transition: background-color 0.2s, color 0.2s;

	&:hover,
	&:focus,
	&:active {
		color: var(--color-secondary);
	}

	@media (min-width: 768px) {
		font-size: 1.75rem;

		& + & {
			margin-left: 2.5rem;
		}
	}
`;
