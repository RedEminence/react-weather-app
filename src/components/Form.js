import React, { Component } from 'react';
import '../css/Form.css';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: props.query,
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.query);
		this.setState({
			query: '',
		})
	}

	render() {
		return(
			<form id="get-weather-form" onSubmit={this.handleSubmit}>
				<input id="city" type="text" name="query" placeholder="City" onChange={this.handleChange} value={this.state.query}/>
				<input type="submit" value="Check weather"/>
			</form>
		)
	}
}

export default Form;