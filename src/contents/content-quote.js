import React from 'react';

export default ({content}) => {
	return (
		<div className="content-quote">
			<div className="thumb thumb-quote">
				<div className="overlay"></div>
				<img src={content.background.fields.file.url} />
			</div>
			<div className="text-quote text-center">
				<h3>{content.quote}</h3>
			</div>
		</div>
	)
}