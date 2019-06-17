import React from 'react';
import style from './style.scss';
import TitleSecondary from '@simple/TitleSecondary';

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
                <img src="assets/images/img-2.jpg" alt=""/>
            </div>
            <div className="container">
                <div className='grid'>
                    <div className={style.content}>
                        <div className={style.titleWrapper}>
                            <TitleSecondary text={'What?'}/>
                        </div>
                        <div className={style.subtitle}>We build only digital products and services</div>
                        <div className={style.products}>
                            {products.map((el, i) => {
                                return (
                                    <div key={i} className={style.item}>
                                        <span className={style.hover}>{el[0]}</span><br/><span>{el[1]}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default WhatSection;