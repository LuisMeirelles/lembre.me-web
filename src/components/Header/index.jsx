import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import brand from '../../assets/img/brand.svg';

const Header = () => (
	<Container>
		<Link to="/">
			<img src={brand} alt="Logo" />
		</Link>
	</Container>
);

export default Header;
