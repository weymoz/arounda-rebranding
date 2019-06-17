import React from 'react';
import style from './style.scss';
import TitleSecondary from '@simple/TitleSecondary'

const WhySection = (props) => {
    return (
        <section className={style.section}>
            <div className={style.image}>
                <img src="assets/images/img-1.jpg" alt=""/>
            </div>
            <div className="container">
                <div className='grid'>
                    <div className={style.content}>
                        <TitleSecondary text={'Why?'}/>
                        <div className={style.subtitle}>We strive build products for humanity</div>
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
                </div>
            </div>
        </section>
    )
};
export default WhySection;