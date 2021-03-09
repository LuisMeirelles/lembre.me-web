import styled from 'styled-components';

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
