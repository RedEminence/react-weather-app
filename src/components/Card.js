import React, { Component } from 'react';
import Moment from 'react-moment';
import '../css/Card.css';

class Card extends Component {

	getImgURL(weather, imgType) {
		if (imgType === 'bg') {
			const imgURL = require(`../images/${weather[0].main.toLowerCase()}_bg.png`);
			return imgURL;
		} else {
			const imgURL = require(`../images/${weather[0].main.toLowerCase()}.png`);
			return imgURL;
		}
	}

	render() {
		const {data} = this.props;
		const error = this.props;
		return(
			<div id="weather-card">
				{error.error === 'default' ? (
				<div id="nothing-yet">
					<p>Type in a city's name to check its current weather!</p>
				</div>) : (!error.error ? (
				<div id="card-content" style={{backgroundImage: `url(${this.getImgURL(data.weather, 'bg')})`}}>
					<div className="left">
							<h1>{data.name}</h1>
            	<Moment id="time" format="LLL" date={new Date()} />
							<span id="weather">{data.weather[0].main.toLowerCase()}</span>
							<img id="weather-icon" alt="weather-icon" src={this.getImgURL(data.weather, 'icon')}/>
					</div>
					<div className="right">
						<span id="average">{Math.round(data.main.temp - 273.15)}°</span>
						<span id="min-max">{Math.round(data.main.temp_min - 273.15)}° / {Math.round(data.main.temp_max - 273.15)}°</span>
					</div>
				</div>) : (
				<div id="not-found">
					<p>City not found!</p>
				</div>
			))}
		</div>
		)

	}
}

export default Card;