import React from 'react';
import style from './style.scss';
import Title from '@simple/Title';
import Description from '@simple/Description';

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
            <div className={style.content}>
                <div className={style.titleWrapper}>
                    <Title text={'Why?'}/>
                </div>
                <div className={style.descWrapper }>
                    <Description light={true} text='We love craft digital products with fresh branding and the best user experience that people will use every day'/>
                </div>
                
                <ul className={style.products}>
                    {products.map((el, i) => {
                        return (
                            <li key={i}>
                                <span className={style.item}>
                                    <span className={style.hover}>{el[0]}</span><br/>
                                    <span>{el[1]}</span>
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
};
export default WhatSection;