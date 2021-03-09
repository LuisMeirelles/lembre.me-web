import React from 'react';

import {
	Container,
	Input as StyledInput
} from './styles.js';

const Input = props => (
	<Container>
		<StyledInput {...props} />
	</Container>
);

export default Input;
