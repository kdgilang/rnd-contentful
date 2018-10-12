import React from 'react';
import ReactMarkDown from 'react-markdown';
import ImageBeauty from '../components/ImageBeauty'

export default ({content}) => {
	return (
		<div className="col-12 item-single">
			<div className="panel">
				<div className="thumb">
					<ImageBeauty src={content.heroImage.fields.file.url} alt="single pictures"/>
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