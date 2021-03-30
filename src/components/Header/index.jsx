import React from 'react';
import logo from '../../assets/img/logo.svg';
import {
	Container,
	LinkLogo
} from './styles';

const Header = ({ children }) => (
	<Container>
		<LinkLogo to="/">
			<img src={logo} alt="Logo" />
		</LinkLogo>

		{children}
	</Container>
);

export default Header;
