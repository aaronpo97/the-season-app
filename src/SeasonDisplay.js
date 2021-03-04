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

const SeasonDisplay = ({ lat }) => {
	const month = new Date().getMonth();
	const season = getSeason(lat, month);
	const { text, iconName } = seasonConfig[season];

	return (
		<div>
			<i className={`${iconName} icon`}></i>
			<h1>{text}</h1>
			<i className={`${iconName} icon`}></i>
		</div>
	);
};

export default SeasonDisplay;
