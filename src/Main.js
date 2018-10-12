import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Single from './pages/Single';
export default () => {
	return (
	  <main>
	    <Switch>
	      <Route exact path='/' component={Home}/>
	      <Route path='/blog' component={Blog} />
	      <Route path='/single/:slug' component={Single}/>
	    </Switch>
	  </main>
	)
}