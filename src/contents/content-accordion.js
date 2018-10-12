import React from 'react';

export default ({content}) => {
	if(content !== undefined) {
		return (
			<div className="mb-5">
				<h3 className="nav-accordion" data-id={ content.slug }>{ content.title }<span className="fs fa-angle-down"></span></h3>
				<div id={ content.slug } className="content-accordion mt-5">
					<div className="row">
						<div className="col-12 col-sm-6">
							<div className="thumb">
								<img src={ content.heroImage.fields.file.url } />
							</div>
						</div>
						<div className="col-12 col-sm-6">
							<div className="text panel">
								{ content.description }
							</div>
						</div>
						<div className="col-12 text-center mt-5">
							<a href={`/single/${ content.slug} `} className="btn btn-primary">Learn More</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
	return null
}