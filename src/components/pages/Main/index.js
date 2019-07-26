import React, {Component,Fragment} from 'react';
import {TimelineMax} from 'gsap';
import WorkSection from "@sections/WorkSection";
import HeadingSection from "@sections/HeadingSection";
import AgencySection from "@sections/AgencySection";
import WhySection from "@sections/WhySection";
import WhatSection from "@sections/WhatSection";
import HowSection from "@sections/HowSection";
import BlogSection from "@sections/BlogSection";
import StartSection from "@sections/StartSection";
import PartnerSection from "@sections/PartnerSection";
import VideoSection from "@sections/VideoSection";
import BackgroundAnimate from "@simple/BackgroundAnimate";

class Main extends Component {
    get tl() {
		const tl = new TimelineMax();
		const headingTl = new TimelineMax();
		const bgTl = new TimelineMax();
		



		headingTl.add(this.heading.tl);
		bgTl.add(this.bg.tween)

        tl.add(bgTl, 'start').add(headingTl, '-=.3')
        
        return tl;
	
    }
    render() {
        return (
            <Fragment>
                <HeadingSection ref={el => this.heading = el}/>
                <BackgroundAnimate ref={el => this.bg = el}/>
                <VideoSection/>
                <PartnerSection />
                <WorkSection/>
                <AgencySection
                    desc='We are a team of digital product experts consisting of the experienced product managers, designers, developers, and business analysts. '
                    title='Who?'
                    subtitle='Expertise in fintech and food delivery niches'
                />
                <WhySection/>
                <WhatSection/>
                <HowSection/>
                <BlogSection/>
                <StartSection/>
            </Fragment>
        )
    }
    
};
export default Main;