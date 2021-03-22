import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 1.5rem;
`;

export const Main = styled.div`
	width: 100%;
	display: flex;
	flex: 1;
`;

export const Form = styled.form`
	width: 100%;
	display:flex;
	flex-direction: column;
	justify-content:center;
	align-items:center;

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
	&:focus-within {
		button {
			transform: translate(-10px, -10px);
		}

	}

	@media(min-width: 768px){
		width: 20rem;
	}
`;

export const ErrorContainer = styled.div`
	margin: 1.5rem 0;
	width: clamp(25rem, 40%, 500px);
	display:flex;
	flex-direction: column;
	align-items:center;

	@media (min-width: 768px) {
		width: 90%;
	}
`;

export const BotaoVoltar = styled.button`
	font-weight: bold;
	font-size: 1.5rem;
	padding: 0 0.5rem;
	border-radius: 5px;
	color: var(--color-primary);
	transition: background-color 0.2s, color 0.2s;
	margin-left: auto;
	background: none;
	border: none;
	cursor: pointer;
	height: fit-content;

	&:hover,
	&:focus-within,
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
