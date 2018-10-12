import React, {Component} from 'react';

class ImageBeauty extends Component {
	constructor(props) {
		super(props)
		this.state = {loader: true}
	}
	render() {
		return (
			<div className="c-img">
				<img src={this.props.src} alt={this.props.alt} />
				{this.state.loader ? <div className="loader-img"></div> : null}
			</div>
		)
	}
	componentDidMount() {
		this.loadImage();
	}
	loadImage() {
		let img = new Image();
		img.src = this.props.src;
		img.alt = this.props.alt;
		console.log(img);
		img.onload = () => {
			this.setState({loader: false});
			console.log(this.state.loader)
		}
	}
}

export default ImageBeauty;