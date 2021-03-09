import React from 'react';

import {
	Container,
	LinkLogo
} from './styles';

import logo from '../../assets/img/logo.svg';

const Header = () => (
	<Container>
		<LinkLogo to="/">
			<img src={logo} alt="Logo" />
		</LinkLogo>
	</Container>
);

export default Header;
