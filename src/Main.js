import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Single from './pages/Single';
import Login from './pages/Login';
import Maintenance from './pages/Maintenance';
export default () => {
	return (
	  <main>
	    <Switch>
	      <Route exact path='/' component={Home}/>
	      <Route path='/blog' component={Blog} />
	      <Route path='/single/:slug' component={Single}/>
	      <Route path='/maintenance' component={Maintenance}/>
	      <Route path='/login' component={Login}/>
	    </Switch>
	  </main>
	)
}