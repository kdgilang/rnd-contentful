import React, { Component } from 'react';
import {TimelineLite} from 'gsap';
import Header from '../Header';
import $ from 'jquery';
import ContentAccordion from '../contents/content-accordion'
import ContentQuote from '../contents/content-quote'
import ContentBlog from '../contents/content-blog'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			post: null,
			hasPost: false,
			showCaption: false,
			quote: null,
			hasQuote: false,
		}
	}
	render() {
		return (
			<div id="home">
				<div className="header-wrapper">
		            <Header />
		        </div>
				<div className="section section-media">
					<div id="media" className="media-home">
						<div className="video">
							{this.theVideo()}
						</div>
						<div className="caption">
							{ this.state.showCaption ? 
								this.state.post.fields.caption.map((data, i)=> {
									return this.state.post.fields.caption.length === (i+1)
									? (<div className="text" key={i} id={'text'+(i+1)}>{data} <div id="line-caption"></div></div>) 
									: (<div className="text" key={i} id={'text'+(i+1)}>{data}</div>)
								})
								: null
							}
						</div>
						<div className="overlay"></div>
					</div>
				</div>
				<div className="nav-page">
					<div className="container">
						<ul className="menu">
							<li><a className="btn-scroll" href="#section-1">Welcome</a></li>
							<li><a className="btn-scroll" href="#section-2">Quote</a></li>
							<li><a className="btn-scroll" href="#section-3">Our Project</a></li>
							<li><a className="btn-scroll" href="#section-4">Contact</a></li>
						</ul>
					</div>
				</div>
				<div id="section-1" className="section section-animate pt-5 pb-5">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center mb-5">
								<h2 className="section-title">What is Lorem Ipsum?</h2>
							</div>
						</div>
						<div className="container-accordion">
							{ this.state.hasPost ?
								this.state.post.fields.embedItem.map((data, i) => {
									return data.fields.type == "Accordion"
									? (<ContentAccordion content={data.fields} key={i} />)
									: null
								})
								: null
							}
						</div>
					</div>
				</div>
				<div id="section-2" className="section section-animate pt-5 pb-5">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center mb-5">
								<h2 className="section-title">Quote Of the day</h2>
							</div>
							<div className="col-12">
								{ this.state.hasQuote ?
									(<ContentQuote content={this.state.quote.fields} />)
									: null
								}
							</div>
						</div>
					</div>
				</div>
				<div id="section-3" className="section section-animate pt-5 pb-5">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center mb-5">
								<h2 className="section-title">Our Blog</h2>
							</div>
							{ this.state.hasPost ?
								this.state.post.fields.embedItem.map((data, i) => {
									return data.fields.type == "Standard"
									? (<ContentBlog content={data.fields} key={i} />)
									: null
								})
								: null
							}
						</div>
					</div>
				</div>
				<div id="section-4" className="section section-animate pt-5 pb-5">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center mb-5">
								<h2 className="section-title">Our Contact</h2>
							</div>
						</div>
						<div className="panel p-5">
							<div className="row">
								<div className="col-12 col-sm-6">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
								</div>
								<div className="col-12 col-sm-6">
									<form action="">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Email" />
										</div>
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Name" />
										</div>
										<div className="form-group">
											<textarea className="form-control" defaultValue="Message"></textarea>
										</div>
										<div className="text-center">
											<a href="" className="btn btn-primary">Submit</a>
										</div>
									</form>
								</div>
							</div>
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

		client.getEntry('1EK7aWu9NyAyO0Mq6mUKmE').then((content) => {
			if(content.fields) {
				this.setState({post: content, hasPost: true})
				this.jQuery();
				setTimeout(()=>{
					this.setState({showCaption: true})
					this.animateCaption();
				}, 5000);
			}
		}).catch(console.error)
		
		client.getEntries({content_type: 'quote'}).then((content) => {
			if(content.items) {
				this.setState({quote: content.items[0], hasQuote: true,})
			}
		}).catch(console.error)
	}
	animateCaption() {
		var tl = new TimelineLite({onComplete: restart});
		tl.from('#text1', 1, {opacity:0, y: 30}, 'f1');
		tl.to('#text1', 0.5, {opacity:0, y: -50}, 'f1+=3');
		tl.from('#text2', 1, {opacity:0, y: 30}, 'f2');
		tl.to('#text2', 0.5, {opacity:0, y: -50}, 'f2+=3');
		tl.from('#text3', 1, {opacity:0, y: 30}, 'f3');
		tl.to('#text3', 0.5, {opacity:0, y: -50}, 'f3+=3');
		tl.from('#text4', 1, {opacity:0, y: 30}, 'f4');
		tl.to('#text4', 0.5, {opacity:0, y: -50}, 'f4+=3');
		tl.from('#line-caption', 0.8, {width:0}, 'f4+=0.5');
		tl.to('#line-caption', 0.5, {width:0}, 'f4+=2.5');
		function restart() {
			tl.restart();
		}
	}
	theVideo() {
		if(this.state.post && this.state.post.fields.video) {
			var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
			var regexuri = this.state.post.fields.video.match(regExp)
			return (
				<iframe title="video" src={`https://www.youtube.com/embed/${regexuri[2]}?autoplay=1&loop=1&controls=0&showinfo=0&rel=0&autohide=1&playlist=${regexuri[2]}`} allow="autoplay" frameBorder="0"></iframe>
			);
		}
		return null;
	}
	jQuery() {
		$('.content-accordion:first').slideDown(300);
		$('.nav-accordion:first').addClass('open');
		$(document).on('click', '.nav-accordion', function () {
			let id =  $(this).data('id');
			if($(this).hasClass('open')) {
				$('#'+id).stop(true, true).slideUp(300)
				$(this).removeClass('open');
			} else {
				$('.nav-accordion').removeClass('open');
				$('.content-accordion').slideUp(300);
				$(this).addClass('open');
				$('#'+id).stop(true, true).slideDown(500);
			}
		});

		$(".btn-scroll").on('click', function (e) {
			e.preventDefault();
			let top = $($(this).attr('href')).offset().top - $('.nav-page').height();
			$('html, body').delay(200).animate({scrollTop:top}, 700);
		});
	}
}

export default Home;