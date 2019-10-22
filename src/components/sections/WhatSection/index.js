import React from 'react';
import style from './style.scss';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';
import {Link} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const WhatSection = (props) => {
    const products =[
        ['Complex', 'platforms'],
        ['Mobile', 'applications'],
        ['Web', 'applications'],
        ['Corporate', 'websites'],
        ['Landing', 'pages']
    ]
    return (
        <section className={style.section}>
            <div className={style.image}>
                <LazyLoadImage 
                    src={"assets/images/what.jpg"}
                    alt={"our team"}
                    effect='blur'
                    threshold={100}
                />
            </div>
            <div className={style.content}>
                <div className={style.titleWrapper}>
                    <TitleSecondary text={'What?'}/>
                </div>
                <div className={style.descWrapper }>
                    <Description light={true} text='We love craft digital products with fresh branding and the best user experience that people will use every day'/>
                </div>
                
                <ul className={style.products}>
                    {products.map((el, i) => {
                        return (
                            <li key={i}>
                                <Link to="/works" className={`${style.item} stopCursor`} tabIndex='-1'>
                                    <span className={style.hover}>{el[0]}</span><br/>
                                    <span>{el[1]}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
};
export default WhatSection;