import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
	return (
        <header className="App-header">
        	<div className="container">
	        	<div className="row align-items-center">
	        		<div className="col-xs-12 col-sm-3">
	        			<Link to="/"><img className="logo" src="./logo.png" alt="logo" /></Link>
	        		</div>
	        		<div className="col-xs-12 col-sm-9">
			        	<ul>
			        		<li><Link to="/">Home</Link></li>
			        		<li><Link to="/blog">Blog</Link></li>
			        	</ul>
	        		</div>
	        	</div>
        	</div>
        </header>
	)
}