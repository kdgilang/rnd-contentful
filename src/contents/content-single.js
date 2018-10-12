import React from 'react';
import ReactMarkDown from 'react-markdown';

export default ({content}) => {
	return (
		<div className="col-12 item-single">
			<div className="panel">
				<div className="thumb">
					<img src={content.heroImage.fields.file.url} alt=""/>
				</div>
				<div className="meta">
					
				</div>
				<div className="body">
					<div className="text">
						<h1>{content.title}</h1>
						<ReactMarkDown source={content.body} />
					</div>
				</div>
			</div>
		</div>
	)
}