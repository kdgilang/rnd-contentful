import React, { Component } from 'react';
import Header from '../Header';
import ContentSingle from '../contents/content-single';

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
								return <ContentSingle key={i} content={data.fields} />
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
		if(this.props.match.params.slug) {
			const contentful = require("contentful");
			const client = contentful.createClient({
			  space: '2zjii83rwifo',
			  accessToken: '5056d77d7e80f14d989dcb6d65eb4d8a178ffdc6f41094a4b8b18115674a3416'
			});

			client.getEntries({
				content_type: 'blogPost', 
				'fields.slug': this.props.match.params.slug,
			}).then((content) => {
				console.log(content)
				if(content.items) {
					this.setState({post: content.items, hasPost: true});
				} else {
					this.setState({hasPost: false});
				}
			}).catch(console.error)
		}
	}
}

export default Home;