import React from 'react';
import {
	Route,
	Switch
} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import CriarConta from './pages/CriarConta';
import Login from './pages/Login';
import PaginaInicial from './pages/PaginaInicial';
import SaibaMais from './pages/SaibaMais';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={PaginaInicial} />
			<Route path='/login' component={Login} />
			<Route path='/criar-conta' component={CriarConta} />
			<Route path='/saiba-mais' component={SaibaMais} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
