import React from 'react';

import './App.css';

import brand from './assets/img/brand.svg';

const App = () => {
	return (
		<div className="container">
			<nav>
				<a href="#">SAIBA MAIS</a>
				<a href="#">LOGIN</a>
			</nav>
			<main>
				<img src={brand} alt="Logo"></img>
			</main>

		</div>

	);
};

export default App;
