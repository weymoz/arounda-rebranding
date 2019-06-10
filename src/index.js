import React, { Component } from "react";
import { render, findDOMNode } from 'react-dom';
import "./style.scss"
import Cursor from "./components/Cursor";

import Header from "./components/Header";
import HeadingSection from "./components/HeadingSection";
import WorkSection from "./components/WorkSection";
import AgencySection from "./components/AgencySection";
import WhySection from "./components/WhySection";
import WhatSection from "./components/WhatSection";
import HowSection from "./components/HowSection";
import BlogSection from "./components/BlogSection";
import StartSection from "./components/StartSection";
import Footer from "./components/Footer";

class App extends Component {
	state = {
		slowCursor: false,
		stopCursor: false,
		top: 0,
		left: 0,
	}

	cursorMove = (e) => {

		// const cursor = findDOMNode(this.cursor);
		let x = e.nativeEvent.clientX;
		let y = e.nativeEvent.clientY;

		console.log('variables', x,y)
		console.log('native', e.nativeEvent.clientX, e.nativeEvent.clientY)

		this.setState({
			top: y,
			left: x
		})
		


	
		// this.tween.to(cursor, .3, {autoAlpha: 1, top: `${y}`, left: `${x}`})
		

		e.target.classList[1] === 'slowCursor' ? this.setState({slowCursor: true}) : this.setState({slowCursor: false})
		e.target.parentElement.classList[1] === 'stopCursor' ? this.setState({stopCursor: true}) : this.setState({stopCursor: false})


	}


	componentDidMount() {
		// const cursor = findDOMNode(this.cursor);

		// this.tween.set(cursor, {autoAlpha: 0})

	}


	render() {
		const {slowCursor, stopCursor, top, left } = this.state;
		return (
			<div className="wrapper" onMouseMove={this.cursorMove} onMouseEnter={this.cursorAnimate}>
				<Cursor 
					slowCursor={slowCursor}
					stopCursor={stopCursor}
					top={top}
					left={left}
				/>
				<Header />
				<HeadingSection/>
				<WorkSection/>
				<AgencySection/>
				<WhySection/>
				<WhatSection/>
				<HowSection/>
				<BlogSection/>
				<StartSection/>
				<Footer/>
			</div>
		);
	}
}



render(
	<App />,
	document.querySelector('#app')
)