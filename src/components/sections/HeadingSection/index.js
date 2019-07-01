import React, { Component } from 'react';
import {TimelineMax, Power4} from 'gsap';
import Heading from '@simple/Heading';
import Subtitle from '@simple/Subtitle';
import style from './style.scss';


export default class HeadingSection extends Component {

    get tl () {
        const tl = new TimelineMax();

        tl
            .fromTo(this.heading, 2.2, {scale: 1.1,autoAlpha: 0,}, {scale: 1, autoAlpha: 1,  ease: Power4.easeOut}, '+=1')
            .fromTo(this.subtitle, .5, {autoAlpha: 0, x: -20}, {autoAlpha: 1, x: 0, ease: Power4.easeInOut}, '-=1.5')

        return tl;
    }

    render() {
        return (
            <div className={style.headingSection}>
                <div className="container">
                    <div className="grid">
                        <div ref={el => this.heading = el} className={style.headingWrapper}>
                            <Heading />
                        </div>
                        <div ref={el => this.subtitle = el} className={style.subtitleWrapper}>
                            <Subtitle text={'Strategy, Design & Technology'}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
