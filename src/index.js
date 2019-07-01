
import React, { Component, Fragment, Suspense } from "react";

import { TweenMax, TimelineMax } from 'gsap';
import { render } from 'react-dom';
import "./style.scss"
import Cursor from "@simple/Cursor";

import Header from "@sections/Header";
import Main from '@pages/Main'
import Footer from "@sections/Footer";
import Aside from "@sections/Aside";
import Preloader from '@simple/Preloader';

class App extends Component {
	state = {
		openMenu: false,
		preloader: true, 
	}

	componentDidMount() {
		this.setState({
			preloader: !this.state.preloader,
		})

		setTimeout(() => {
			this.tl();
		}, 100)
	}

	tl = () => {
			const mainTl = new TimelineMax();
			const headerTl = new TimelineMax();
			const mainSection = new TimelineMax();



			headerTl.add(this.header.tl);
			mainSection.add(this.main.tl)

			mainTl.add(mainSection, 'start').add(headerTl, '-=3.6')
		
    }

	toggleMenu = () => {
    const {openMenu} = this.state;
		this.setState({
			openMenu: !openMenu,
		})

		document.documentElement.classList.toggle('no-scroll')
    }	


	render() {
		const {openMenu, preloader} = this.state;

		
		return (
				preloader ? <Preloader/>
					:
				<Fragment>	
					<Cursor/>
					<Header 
						ref={el => {this.header = el}}
						toggleMenu={this.toggleMenu}
						openMenu={openMenu}
					/>
					<Aside openMenu={openMenu}/>
					<Main ref={el => this.main = el}/>
					<Footer/>
				</Fragment>
		);
	}
}



render(
	<App />,
	document.querySelector('#app')
)