import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends React.Component {
	state = { lat: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({ lat: position.coords.latitude, long: position.coords.longitude, errorMessage: '' });
				console.log(position);
			},
			err => this.setState({ errorMessage: err.message })
		);
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage} </div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} long={this.state.long} />;
		}

		return <Loading>Getting user location.</Loading>;
	}
	render() {
		return <div>{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
