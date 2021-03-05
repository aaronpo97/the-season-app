import './SeasonDisplay.css';

import React from 'react';

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const seasonConfig = {
	summer: {
		text: `Let's hit the beach!`,
		iconName: 'sun',
	},
	winter: {
		text: `Brrrr it's cold!`,
		iconName: 'snowflake',
	},
};

const SeasonDisplay = ({ lat, long }) => {
	const month = new Date().getMonth();
	const season = getSeason(lat, month);
	const { text, iconName } = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<div>
				<i className={`massive ${iconName} icon icon-left`}></i>
			</div>

			<div>
				<h1>
					{text} Your location: {`${lat}, ${long}`}
				</h1>
			</div>

			<div>
				<i className={`massive ${iconName} icon icon-right`}></i>
			</div>
		</div>
	);
};

export default SeasonDisplay;
