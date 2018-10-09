import React, { Component } from 'react';
import {TimelineLite} from 'gsap';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {post: null}
	}
	render() {
		return (
			<div className="section section-media">
				<div id="media" className="media-home">
					<div className="video">
						<iframe title="video" src="https://www.youtube.com/embed/Xd0Ok-MkqoE?autoplay=1&loop=1&controls=0&showinfo=0&rel=0&autohide=1&playlist=Xd0Ok-MkqoE" allow="autoplay" frameBorder="0"></iframe>
					</div>
					<div className="caption">

						<div className="text" id="text2">Test 2 tesxt</div>
						<div className="text" id="text3">Test 3 tesxt</div>
						<div className="text" id="text4">Test 4 tesxt</div>
					</div>
					<div className="overlay"></div>
				</div>
			</div>
		)
	}
	componentDidMount() {
		const contentful = require("contentful");
		const client = contentful.createClient({
		  space: '2zjii83rwifo',
		  accessToken: '5056d77d7e80f14d989dcb6d65eb4d8a178ffdc6f41094a4b8b18115674a3416'
		});

		client.getEntry('1EK7aWu9NyAyO0Mq6mUKmE').then((content) => {
			console.log(content)
			this.setState({post: content})
			console.log(this.state.post.fields.caption)
		}).catch(console.error)
		var tl = new TimelineLite({onComplete: restart});
		tl.from('#text1', 1, {opacity:0, y: 30}, 'f1');
		tl.to('#text1', 0.5, {opacity:0, y: -50}, 'f1+=3');
		tl.from('#text2', 1, {opacity:0, y: 30}, 'f2');
		tl.to('#text2', 0.5, {opacity:0, y: -50}, 'f2+=3');
		tl.from('#text3', 1, {opacity:0, y: 30}, 'f3');
		tl.to('#text3', 0.5, {opacity:0, y: -50}, 'f3+=3');
		tl.from('#text4', 1, {opacity:0, y: 30}, 'f4');
		tl.to('#text4', 0.5, {opacity:0, y: -50}, 'f4+=3');
		function restart() {
			tl.restart();
		}
	}
}

export default Home;