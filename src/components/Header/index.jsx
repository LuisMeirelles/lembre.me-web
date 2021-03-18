import React from 'react';

import {
	Container,
	LinkLogo
} from './styles';

import logo from '../../assets/img/logo.svg';

const Header = ({ children }) => (
	<Container>
		<LinkLogo to="/">
			<img src={logo} alt="Logo" />
		</LinkLogo>

		{children}
	</Container>
);

export default Header;
