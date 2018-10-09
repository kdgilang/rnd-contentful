import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
export default () => {
	return (
	  <main>
	    <Switch>
	      <Route exact path='/' component={Home}/>
	      <Route path='/blog'  />
	      <Route path='/schedule' />
	    </Switch>
	  </main>
	)
}