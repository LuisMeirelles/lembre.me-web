import React from 'react';
import { ButtonLink as Link } from './styles';


const ButtonLink = ({ children, ...rest }) => (
	<Link {...rest}>
		{children}
	</Link>
);

export default ButtonLink;
