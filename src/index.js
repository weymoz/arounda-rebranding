import React, { Component, Fragment } from "react";
import { render, findDOMNode } from 'react-dom';
import "./style.scss"
import Cursor from "@simple/Cursor";

import Header from "@sections/Header";

import WorkSection from "@sections/WorkSection";
import HeadingSection from "@sections/HeadingSection";
import AgencySection from "@sections/AgencySection";
import WhySection from "@sections/WhySection";
import WhatSection from "@sections/WhatSection";
import HowSection from "@sections/HowSection";
import BlogSection from "@sections/BlogSection";
import StartSection from "@sections/StartSection";
import Footer from "@sections/Footer";
import Aside from "@sections/Aside";

class App extends Component {
	state = {
		slowCursor: false,
		stopCursor: false,

	}

	// cursorMove = (e) => {

	// 	// const cursor = findDOMNode(this.cursor);
	// 	let x = e.nativeEvent.clientX;
	// 	let y = e.nativeEvent.clientY;


	// 	this.setState({
	// 		top: y,
	// 		left: x
	// 	})
		


	
	// 	// this.tween.to(cursor, .3, {autoAlpha: 1, top: `${y}`, left: `${x}`})
		

	// 	e.target.classList[1] === 'slowCursor' ? this.setState({slowCursor: true}) : this.setState({slowCursor: false})
	// 	e.target.parentElement.classList[1] === 'stopCursor' ? this.setState({stopCursor: true}) : this.setState({stopCursor: false})


	// }


	componentDidMount() {
		// const cursor = findDOMNode(this.cursor);

		// this.tween.set(cursor, {autoAlpha: 0})

	}


	render() {
		const {slowCursor, stopCursor} = this.state;
		return (
				<Fragment>
					<Cursor 
					slowCursor={slowCursor}
					stopCursor={stopCursor}
				/>
				<Aside/>
				<Header/>
				<HeadingSection/>
				<WorkSection/>
				<AgencySection/>
				<WhySection/>
				<WhatSection/>
				<HowSection/>
				<BlogSection/>
				<StartSection/>
				<Footer/>
				</Fragment>
		);
	}
}



render(
	<App />,
	document.querySelector('#app')
)