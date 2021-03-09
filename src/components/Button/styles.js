import styled from 'styled-components';

export const Botao = styled.button`
	font: bold 1.5rem 'Roboto Mono', monospace;
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
	height: 4rem;
	width: 20rem;
	background-color: var(--color-primary);
	border: 3px solid var(--color-primary);
	cursor: pointer;
	border-radius: 10px;
	color: #fff;
	transition: background-color 0.2s, color 0.2s;

	@media (min-width: 768px) {
		font-size: 1.75rem;
	}
`;
