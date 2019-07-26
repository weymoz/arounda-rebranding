import React from 'react';
import style from './style.scss';
import Title from '@simple/Title';
import Description from '@simple/Description';

const WhySection = (props) => {
    return (
        <section className={style.section}>
            <div className={style.image}>
                <img src="assets/images/img-1.jpg" alt="" />
            </div>
            <div className={style.content}>
                <div className={style.titleWrapper}>
                    <Title text={'Why?'} />
                </div>
                <div className={style.descWrapper}>
                    <Description light={true} text='We strive to unfold new values for the humanity and create products for millions of people around the world'/>
                </div>
                <div className={style.datas}>
                    <div>
                        <div className={style.name}>TEAM SIZE</div>
                        <div className={style.number}>24+</div>
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