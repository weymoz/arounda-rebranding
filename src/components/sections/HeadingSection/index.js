import React, { Component } from 'react';
import {TimelineMax, Power4} from 'gsap';
import Title from '@simple/Title';
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
            <div className={style.section}>
                <div className={style.container}>
                        <div ref={el => this.heading = el} className={style.titleWrapper}>
                            <Title text='Digital product design agency'/>
                        </div>
                        <div ref={el => this.subtitle = el} className={style.textWrapper}>
                            <p className={style.text}>We help create and evolve sensible digital products for startups and enterprice innovators</p>
                            <p className={style.link}>Modern-day UX/UI product team by <a href="#">Dribbble</a></p>
                        </div>
                </div>
            </div>
        )
    }
}
