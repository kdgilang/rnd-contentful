import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
	return (
        <footer className="App-footer">
        	<div className="container">
	        	<div className="row text-center">
	        		<div className="col-12">
			        	<ul className="menu">
			        		<li><Link to="/">Home</Link></li>
			        		<li><Link to="/blog">Blog</Link></li>
			        	</ul>
	        		</div>
	        	</div>
        	</div>
        </footer>
	)
}