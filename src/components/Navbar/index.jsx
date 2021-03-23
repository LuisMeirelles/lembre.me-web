import React from 'react';
import {
	Container,
	NavItem
} from './styles.js';


const Navbar = ({ items, children }) => (
	<Container>
		{items.map((item) => (
			<NavItem key={item.key} to={item.path}>
				{item.text}
			</NavItem>
		))}

		{children}
	</Container>
);

export default Navbar;
