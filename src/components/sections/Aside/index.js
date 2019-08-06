import React, {Component} from 'react';
import {TimelineLite, Power0} from 'gsap';
import { Link } from "react-router-dom";
import style from './style.scss';

class Aside extends Component{
    
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.openMenu){
            this.timeline();
        }else{
            this.clearStyles();
        }
        
    }
    
    timeline = () => {
        const tl = new TimelineLite();

        tl 
            .staggerTo(this.menu.childNodes, .3, {y: 0, autoAlpha: 1, ease: Power0.easeNone}, .1, '+=.5')
            .staggerTo(this.socials.childNodes, .3, {y: 0, autoAlpha: 1, ease: Power0.easeNone}, .1, '-=1')
    }

    clearStyles = () => {
        const tl = new TimelineLite();

        tl
            .set(this.menu.childNodes, {clearProps:"all"})
            .set(this.socials.childNodes, {clearProps:"all"})
    }

    

    render () {
        const menu = [
            ['Work', 'Our amazing works', '/works'],
            ['Methods','Our process', '/works'],
            ['Services', 'Our capabilities', '/services'],
            ['Blog', 'Our thoughts', '/works'],
            ['Contact', 'Let`s chat', '/contacts']
        ]
        const socials = [
            'dribbble',
            'instagram',
            'behance',
            'facebook'
        ]

        const {openMenu, handleCloseMenu} = this.props;
        return (
            <aside className={`${style.aside} ${openMenu ? style.active : ""}`}>
                <div className={style.wrapper}>
                    <div className="grid">
                        <div className={style.menu}>
                            <ul ref={el => this.menu = el}>
                                {menu.map((el,i) => {
                                    return (
                                        <li key={i}>
                                            <Link className={`${style.link} menu-link`} onClick={handleCloseMenu} to={el[2]}>{el[0]}</Link>
                                            <div className={style.desc}>{el[1]}</div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={style.socials}>
                            <ul ref={el => this.socials = el}>
                                {socials.map((el,i) => {
                                    return (
                                        <li key={i}>
                                            <a target='_blank' href="#">{el}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
    
};
export default Aside;