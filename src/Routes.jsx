import React from 'react';
import {
	Switch,
	Route
} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import PaginaInicial from './pages/PaginaInicial';
import Login from './pages/Login';
import CriarConta from './pages/CriarConta';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={PaginaInicial} />
			<Route path='/login' component={Login} />
			<Route path='/criar-conta' component={CriarConta} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
