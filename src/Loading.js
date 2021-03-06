import React from 'react';

const Loading = props => {
	return (
		<div className="ui active dimmer">
			<div className="ui big text loader">{props.children}</div>
		</div>
	);
};

export default Loading;
