import React from 'react';
import style from './style.scss';

const Aside = (props) => {
    const menu = [
        'Work',
        'Methods',
        'Services',
        'Blog',
        'Contact'
    ]
    const socials = [
        'dribbble',
        'instagram',
        'behance',
        'facebook'
    ]
    return (
        <aside className={style.aside}>
            <div className={style.wrapper}>
            <div className="container">
                <div className="grid">
                    <div className={style.ourWorks}>
                        {"Our amazing works"}
                    </div>
                    <div className={style.menu}>
                        <ul>
                            {menu.map((el,i) => {
                                return (
                                    <li key={i}>
                                        <a className={style.link} href="#">{el}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={style.socials}>
                        <ul>
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
            </div>
        </aside>
    )
};
export default Aside;