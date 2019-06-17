import React from 'react';
import style from './style.scss';
import Logo from '@simple/Logo';

const Footer = (props) => {
    const positions = [
        'Project manager',
        'UI Designer'
    ];

    const socials = [
        'dribbble',
        'instagram',
        'behance',
        'facebook'
    ]
    return (
        <footer>
            <div className="container">
                <div className={style.footerTop}>
                    <div className={style.adress}>
                        <div className={style.title}>Odessa</div>
                        <div className={style.text}>
                            Gagarina Stret,<br/>
                            5/3, 65000
                        </div>
                    </div>
                    <div className={style.positions}>
                        <div className={style.title}>Open.positions</div>
                        <ul>
                            {positions.map((el, i) => {
                                return (
                                    <li key={i} className={style.text}>{el}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={style.contact}>
                        <div className={style.title}>Conatct us</div>
                        <a href="#" className={style.mail}>
                            info@arounda.agency
                        </a>
                    </div>
                    <div className={style.socials}>
                        <ul>
                        {socials.map((el,i) => {
                            return (
                                <li key={i}>
                                    <a href="#" className={style.link}>{el}</a>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                </div>
                <div className={style.footerBottom}>
                    <Logo/>
                    <div className={style.links}>
                        <a href="#">
                            Terms and Conditions
                        </a>
                        <a href="#">
                            Privacy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
};
export default Footer;