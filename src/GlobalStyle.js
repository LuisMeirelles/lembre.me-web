import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
		--color-primary: #e74c3c;
		--color-secondary: #f4777d;
	}

	* {
		margin: 0;
		padding: 0;
		outline: none;
		box-sizing: border-box;
	}

	html,
	body,
	#root {
		height: 100vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	body {
		margin: 0;
		font-family: 'Roboto Mono', monospace;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	a {
		text-decoration: none;
	}
`;

export default GlobalStyle;
