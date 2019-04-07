import React, { Component } from 'react';
import Form from './Form';
import Card from './Card';
import Footer from './Footer';
import '../css/App.css';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {	
			data: {},
			query: '',
			error: 'default',
		};
		this.fetchWeather = this.fetchWeather.bind(this);
	}


	async fetchWeather(query) {
		try {
			const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?APPID=81b50faeebfba8a5e8a97c0a8f23b409&q=${query}`, {mode: 'cors'});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const data = await response.json();
			this.setState({
				data: data,
				error: false,
			}); 
		} catch(error) {
			this.setState({
				error: true,
			}); 
		}
	}

	componentDidUpdate() {
		const body = document.querySelector('body');
		const obj = this.state.data;
		if(obj.hasOwnProperty('weather')) {
			const imgURL = require(`../images/${this.state.data.weather[0].main.toLowerCase()}_body.png`);
			body.style.background = `url(${imgURL})`;
		}
	}


  render() {
    return (	
      <div id="app">
	      <main>
		      <Form fetchWeather={this.fetchWeather} query={this.state.query} />
		      <Card data={this.state.data} error={this.state.error} />
		    </main>
	      <Footer />
      </div>
    );
  }
}

export default App;
