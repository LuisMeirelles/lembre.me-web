import React from 'react';

import { Botao } from './styles';

const Button = ({ children, ...rest }) => (
	<Botao {...rest}>
		{children}
	</Botao>
);

export default Button;
