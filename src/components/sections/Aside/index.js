import React, {Component} from 'react';
import {TimelineLite, Power0} from 'gsap';
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
            ['Work', 'Our amazing works'],
            ['Methods','Our amazing works'],
            ['Services', 'Our amazing works'],
            ['Blog', 'Our amazing works'],
            ['Contact', 'Our amazing works']
        ]
        const socials = [
            'dribbble',
            'instagram',
            'behance',
            'facebook'
        ]

        const {openMenu} = this.props;
        return (
            <aside className={`${style.aside} ${openMenu ? style.active : ""}`}>
                <div className={style.wrapper}>
                    <div className="grid">
                        <div className={style.menu}>
                            <ul ref={el => this.menu = el}>
                                {menu.map((el,i) => {
                                    return (
                                        <li key={i}>
                                            <a className={style.link} href="#">{el[0]}</a>
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
                                            <a href="#">{el}</a>
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