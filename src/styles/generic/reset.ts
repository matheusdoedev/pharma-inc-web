import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
	body {
		min-height: 100vh;
	}

	*, ul, ol, dl {
		margin: 0;
		padding: 0;
		outline: none;
		box-sizing: border-box;
  	}

	html {
		font-size: 62.5%;
	}
`;

export default Reset;
