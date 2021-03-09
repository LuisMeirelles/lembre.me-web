import React from 'react';

import {
	Container,
	Input
} from './styles.js';

const InputBlock = props => (
	<Container>
		<Input {...props} />
	</Container>
);

export default InputBlock;
