import React from 'react';

import {
	Container,
	Main
} from './styles.js';

import Navbar from '../../components/Navbar';

import logo from '../../assets/img/logo.svg';

const Landing = () => {
	return (
		<Container>
			<Navbar items={[ {
				text: 'SAIBA MAIS',
				path: '/saiba-mais',
				key: 'saibaMais'
			},
			{
				text:'LOGIN',
				path:'/login',
				key: 'login'
			}]} />

			<Main>
				<img src={logo} alt="Logo" />
			</Main>
		</Container>
	);
};

export default Landing;
