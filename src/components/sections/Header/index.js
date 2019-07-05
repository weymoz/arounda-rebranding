import React, { Component } from 'react'
import {TimelineMax, Power4} from 'gsap';
import { Link } from "react-router-dom";

import style from './style.scss';

export default class Header extends Component {

    get tl() {
        const t = new TimelineMax();

        t   
            .set(this.logo.childNodes[7], {x: 480, y: -210, autoAlpha: 0})
            .set(this.burger.childNodes[0], {y: -4})
            .set(this.burger.childNodes[1], {y: 4})
            .set(this.burger.childNodes, {x: 20})
            .to(this.logo, .4, {autoAlpha: 1})
            .to(this.logo.childNodes[7], 1.4, {x: 0, y: 0, autoAlpha: 1, ease: Power4.easeOut}, '+=.4')
            .staggerFromTo(this.menu.childNodes, .3,{autoAlpha: 0, y: 10}, {autoAlpha: 1, y: 0}, 0.1, '-=1.8')
            .to(this.burger.childNodes, .3, {x: 0, ease: Power0.easeNone}, '-=1.2')
            .to(this.burger.childNodes[0], .3, {y: 0, ease: Power0.easeNone},'-=.6' )
            .to(this.burger.childNodes[1], .3, {y: 0, ease: Power0.easeNone}, '-=.6')

        return t;
    }


    render() {
        const {openMenu, toggleMenu} = this.props;
        return (
            <header  className={style.header}>
                <div className="container">
                    <div className={style.row}>
                        <a href="#"> 
                            <svg className={style.logo} ref={el => this.logo = el} width="105" height="32" viewBox="0 0 697.54 202.88" xmlns="http://www.w3.org/2000/svg">
                                <path d="m81.14 127.2v12.07h20v-91.46h-20.14v11.87a46.45 46.45 0 0 0 -41.28-13.86 43 43 0 0 0 -14.72 5.07 48.48 48.48 0 0 0 -25 42.64 49.46 49.46 0 0 0 1.5 12.14 47.61 47.61 0 0 0 6 14 48.22 48.22 0 0 0 10.28 11.63 44.31 44.31 0 0 0 14.94 8.21l1 .33.32.09a46.25 46.25 0 0 0 13.14 1.91h1.51.92a40.78 40.78 0 0 0 20.41-6 49.17 49.17 0 0 0 11.12-8.64zm-60.56-33.51c-.08-16.69 12.52-29.26 29.57-29.38 17.29-.13 30.21 12.53 30.08 29.44-.13 16.68-13 29.28-29.86 29.25s-29.72-12.64-29.79-29.31z"/>
                                <path d="m677.41 47.82v11.88a46.44 46.44 0 0 0 -41.25-13.87 43 43 0 0 0 -14.74 5.08 48.48 48.48 0 0 0 -25 42.63 49.46 49.46 0 0 0 1.5 12.14 47.62 47.62 0 0 0 6 14 48.22 48.22 0 0 0 10.28 11.63 44.32 44.32 0 0 0 14.94 8.21l1 .33.32.09a46.25 46.25 0 0 0 13.14 1.91h1.51.92a40.76 40.76 0 0 0 20.41-6 49.14 49.14 0 0 0 11-8.63v12.07h20v-91.47zm-30.61 75.18c-16.89 0-29.71-12.64-29.79-29.31s12.52-29.26 29.57-29.38c17.29-.13 30.21 12.53 30.08 29.44-.13 16.69-12.99 29.25-29.86 29.25z"/>
                                <path d="m564 59.7a46.44 46.44 0 0 0 -41.25-13.87 43 43 0 0 0 -14.75 5.08 48.47 48.47 0 0 0 -25 42.63 49.46 49.46 0 0 0 1.5 12.14 47.62 47.62 0 0 0 6 14 48.22 48.22 0 0 0 10.28 11.63 44.32 44.32 0 0 0 14.94 8.21l1 .33.32.09a46.25 46.25 0 0 0 13.14 1.91h1.51.92a40.76 40.76 0 0 0 20.41-6 49.14 49.14 0 0 0 11-8.63v12.07h20v-139.29l-20.02 7.67zm-30.6 63.3c-16.89 0-29.71-12.64-29.79-29.31s12.52-29.26 29.57-29.38c17.29-.13 30.21 12.53 30.08 29.44-.14 16.69-13 29.25-29.86 29.25z"/>
                                <path d="m139 59.7v-11.88h-19.78v91.46h20.24v-49.8c0-6.76 1.81-13.42 6.65-18.2s12.5-7.59 21.39-6.17v-19.73c-12.21.35-24.14 7.19-28.5 14.32z"/>
                                <path d="m358.12 47.83h-10.22v34.84c0 5.48-.06 11-.16 16.43-.18 8.67-2.9 16.49-11.43 21-16.56 8.74-33.26-.16-33.71-18.21-.07-2.86-.11-5.73-.14-8.59v-45.47h-20.79v54.07a52.16 52.16 0 0 0 1.19 10.72c3.55 17 17.35 29.19 36 29.16 11.52 0 24.08-6 29.32-14.34v11.84h19.82v-91.45h-9.85z"/>
                                <path d="m395.88 139.31h10.22v-34.84c0-5.48.06-11 .16-16.43.18-8.67 2.9-16.49 11.43-21 16.56-8.74 33.26.16 33.71 18.21.07 2.86.11 5.73.14 8.59v45.45h20.79v-54.04a52.16 52.16 0 0 0 -1.19-10.72c-3.55-17-17.35-29.19-36-29.16-11.52 0-24.08 6-29.32 14.34v-11.85h-19.82v91.45h9.85z"/>
                                <path d="m271 93.37a46.24 46.24 0 0 1 -3.39 17 50.83 50.83 0 0 1 -9.71 15.63 49.94 49.94 0 0 1 -15.56 11.42 51.13 51.13 0 0 1 -41.62.08 49.5 49.5 0 0 1 -25.32-27 47.67 47.67 0 0 1 -3.4-17.5 44.94 44.94 0 0 1 3.72-18 47.71 47.71 0 0 1 10.34-15.14 51.6 51.6 0 0 1 15.64-10.51 48.52 48.52 0 0 1 19.78-4 49.51 49.51 0 0 1 19.45 3.81 50.32 50.32 0 0 1 15.72 10.34 47.72 47.72 0 0 1 10.51 15.31 46.08 46.08 0 0 1 3.84 18.56zm-20 0a29.05 29.05 0 0 0 -2.11-10.87 30.4 30.4 0 0 0 -6-9.44 29 29 0 0 0 -9.29-6.64 30.53 30.53 0 0 0 -24.16 0 29 29 0 0 0 -9.29 6.64 30.13 30.13 0 0 0 -6 9.51 29.6 29.6 0 0 0 0 22 30.46 30.46 0 0 0 6 9.51 29.47 29.47 0 0 0 9.29 6.72 29.86 29.86 0 0 0 23.71.08 30.06 30.06 0 0 0 17.75-27.49z"/>
                                <path className={style.line} d="m50.59 202.88 68.63-26.35v-21.43l-68.63 26.41z"/>
                            </svg>
                        </a>
                        <nav>
                            <ul ref={el => this.menu = el} className={`${style.menu} ${openMenu ? style.active : ""}`}>
                                <li>
                                    <Link to="/work/">
                                        Works
                                    </Link>   
                                </li>
                                <li>
                                    <a href="#">
                                        Contact
                                    </a>   
                                </li>
                                <li className={style.btnWrapper}>
                                    <button className={style.btn} onClick={toggleMenu}>
                                        <svg ref={el => this.burger = el} height="12" viewBox="0 0 20 12" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#212121" d="m0 9h20v3h-20z"/>
                                            <path fill="#212121" d="m0 0h20v3h-20z"/>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}
