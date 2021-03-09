import styled from 'styled-components';

export const Container = styled.div`
	height: 70px;
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-secondary);
	border-radius: 5px;

	& + & {
		margin-top: 1.5rem;
	}

	@media (min-width: 768px) {
		width: clamp(25rem, 40%, 500px);
	}
`;

export const Input = styled.input`
	height: 100%;
	width: 100%;
	border-radius: 5px;
	border: 3px solid var(--color-primary);
	text-align: center;
	font-size: 1.5em;
	font-weight: bold;
	transition: transform 0.2s;
	color:  var(--color-secondary);

	&:hover,
	&:focus {
		transform: translate(-10px, -10px);
	}

	&::placeholder {
		color:  var(--color-secondary);
	}

	&[type="number"]::-webkit-inner-spin-button,
	&[type="number"]::-webkit-outer-spin-button {
		appearance: none;
	}
`;
