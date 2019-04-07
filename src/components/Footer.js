import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
	render() {
		return(
			<footer className="footer">
				<span>Developed by <a href="https://github.com/RedEminence/">Evgenii Golubaev</a></span>
				<span>The weather icons created by <a href="https://www.freepik.com/free-photos-vectors/snow">bamdewanto - www.freepik.com</a></span>
			</footer>
		)
	}
}

export default Footer;