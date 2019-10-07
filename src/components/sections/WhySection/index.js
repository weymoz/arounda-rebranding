import React from 'react';
import style from './style.scss';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const WhySection = (props) => {
    return (
        <section className={style.section}>
            <div className={style.image}>
                <LazyLoadImage 
                    src={"assets/images/why.jpg"}
                    alt={"our team"}
                    effect='blur'
                    threshold={100}
                />
            </div>
            <div className={style.content}>
                <div className={style.titleWrapper}>
                    <TitleSecondary text={'Why?'} />
                </div>
                <div className={style.descWrapper}>
                    <Description light={true} text='We strive to unfold new values for the humanity and create products for millions of people around the world'/>
                </div>
                <div className={style.datas}>
                    <div>
                        <div className={style.name}>TEAM SIZE</div>
                        <div className={style.number}>21+</div>
                    </div>
                    <div>
                        <div className={style.name}>PRODUCTS LAUNCHED</div>
                        <div className={style.number}>89+</div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default WhySection;