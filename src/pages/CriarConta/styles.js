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

	@media (min-width: 768px){
		display:grid;
		grid-template-columns: 1fr 1fr;

		&& > div {
			justify-self: center;
			align-self: center;

			&,
			button {
				margin: 0;
			}
		}
	}
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
