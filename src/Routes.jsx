import React from 'react';
import {Switch, Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';


import Landing from './pages/Landing';
import Login from './pages/Login';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Landing}/>
			<Route path='/login' component={Login}/>
		</Switch>
	</BrowserRouter>
);


export default Routes;