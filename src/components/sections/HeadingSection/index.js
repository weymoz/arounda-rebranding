import React, { Component } from 'react';
import {TimelineLite, Power4} from 'gsap';
import Title from '@simple/Title';
import Subtitle from '@simple/Subtitle';
import style from './style.scss';


export default class HeadingSection extends Component {

    get tl () {
        const tl = new TimelineLite();

        tl
            .staggerFromTo(this.heading.childNodes, 1.2, {autoAlpha: 0, y: 10, ease: Power4.easeInOut}, { autoAlpha: 1, y: 0,  ease: Power4.easeInOut}, '.3', '=+.6')
            .staggerFromTo(this.subtitle.childNodes, .8, {autoAlpha: 0, y: 20,ease: Power4.easeInOut}, {autoAlpha: 1, y: 0, ease: Power4.easeInOut}, '.2', '-=1.4')

        return tl;
    }

    render() {
        const { showContent } = this.props;
        return (
            <div className={`${style.section} ${showContent ? style.show : null}`}>
                <div className={style.container}>
                        <div  className={style.titleWrapper}>
                            <h1 ref={el => this.heading = el} className={style.title}>
                                <span>Digital&nbsp;</span>
                                <span>product&nbsp;</span><br/>
                                <span>agency </span>
                            </h1>  
                        </div>
                        <div ref={el => this.subtitle = el} className={style.textWrapper}>
                            <p className={style.text}>We help create and evolve sensible digital products for startups and enterprise innovators</p>
                            <p className={style.link}>Modern-day UX/UI product team by <a className='stopCursor' target='_blank' href="https://dribbble.com/stories/2019/02/15/what-defines-good-ui-design">Dribbble</a></p>
                        </div>
                </div>
            </div>
        )
    }
}
