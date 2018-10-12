import React from 'react';

export default ({content}) => {
	return (
		<div className="col-12 col-sm-6 col-md-4 item-blog">
			<div className="panel">
				<div className="thumb">
					<img src={content.heroImage.fields.file.url} alt=""/>
				</div>
				<div className="meta">
					
				</div>
				<div className="body">
					<div className="text">
						<h3>{content.title}</h3>
						{content.body}
					</div>
					<div className="mt-3">
						<a href={`/single/${content.slug}`} className="btn btn-primary">Read More</a>
					</div>
				</div>
			</div>
		</div>
	)
}