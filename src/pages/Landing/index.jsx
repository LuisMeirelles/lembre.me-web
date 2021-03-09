import React from 'react';

import {
	Container,
	Main
} from './styles.js';

import Navbar from '../../components/Navbar';

import brand from '../../assets/img/brand.svg';

const Landing = () => {
	return (
		<Container>
			<Navbar items={[ {
				text: 'SAIBA MAIS',
				path: '/more',
				key: 'saibaMais'
			}, 
			{
				text:'LOGIN',
				path:'/login',
				key: 'login'
			}]} />

			<Main>
				<img src={brand} alt="Logo" />
			</Main>
		</Container>
	);
};

export default Landing;
