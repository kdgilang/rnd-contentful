import React, { Component } from 'react';
import Header from '../Header';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: null,
			password: null,
		}
		this.userChange = this.userChange.bind(this);
		this.passChange = this.passChange.bind(this);
	}
	render() {
		return (
			<div id="blog">
			    <div className="header-wrapper">
		            <Header />
		        </div>
		        <div className="container">
		        	<div className="row">
		        		<div className="col-sm-3"></div>
						<div className="col-sm-6">
							<form className="form panel" onSubmit={this.onSubmit.bind(this)}>
								<div className="form-group">
									<input type="text" name="user" className="form-control" onChange={this.userChange} required/>
								</div>
								<div className="form-group">
									<input type="password" name="password" className="form-control" onChange={this.passChange} required/>
								</div>
								<div className="form-group">
									<button className="btn btn-primary">Login</button>
								</div>
							</form>
						</div>
					</div>
		        </div>
			</div>
		)
	}
	userChange(e) {
		this.setState({user: e.target.value});
	}
	passChange(e) {
		this.setState({password: e.target.value});
	}
	onSubmit(event) {
		event.preventDefault();
		if(this.state.user && this.state.password) {
			if(this.state.user === 'admin' && this.state.password === 'admin') {
				localStorage.setItem('user', 'admin');
			}
		} 
		alert('Wrong credentials.');
	}
	componentDidMount() {
		if(true) {
			return false
		}
	}
}

export default Home;