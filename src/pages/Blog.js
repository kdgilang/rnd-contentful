import React, { Component } from 'react';
import {TimelineLite} from 'gsap';
import Header from '../Header';
import ContentBlog from '../contents/content-blog';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {post: null, hasPost: false}
	}
	render() {
		return (
			<div id="blog">
			    <div className="header-wrapper">
		            <Header />
		         </div>
				<div className="fix-header">
					<div className="container">
						<div className="row">
						{ this.state.hasPost ?
							this.state.post.map((data,i) => {
								return <ContentBlog key={i} content={data.fields}></ContentBlog>
							})
							: null
						}
						</div>
					</div>
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

		client.getEntries({content_type: 'blogPost'}).then((content) => {
			if(content.items) {
				this.setState({post: content.items, hasPost: true});
				this.animationPost()
			}
		}).catch(console.error)
	}
	animationPost() {
		let tl = new TimelineLite();
		tl.staggerFrom('.item-blog', 0.5, {opacity:0, y: -10}, 0.5, "start");
	}
}

export default Home;