/* eslint-disable react/prop-types */
import React from 'react';

import {Container,	NavItem} from './styles.js';


const Navbar = ({ items }) => (
	<Container>
		{ items.map(item => <NavItem key={item.key} to={item.path}>{item.text}</NavItem>)}
	</Container>
);

export default Navbar;
