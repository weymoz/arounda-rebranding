import React from 'react';
import style from './style.scss';
import TitleSecondary from '@simple/TitleSecondary';


const HowSection = (props) => {
    const services = [
        'Strategy',
        'UX Design',
        'UI Design',
        'Branding',
        'Development'
    ]
    return (
        <section className={style.section}>
            <div className="container">
                <div className='grid'>
                    <div className={style.content}>
                        <TitleSecondary text={'How?'}/>
                        <div className={style.subtitle}>Everything you need to make a successful digital product or service</div>
                    </div>
                    <div className={style.image}>
                        <img src="assets/images/img-3.png" alt=""/>
                    </div>
                    <div className={style.services}>
                        {services.map((el,i) => {
                            return (
                                <div className={style.item} key={i}>{el}</div>
                            )
                        })}
                    </div>
                    <div className={style.more}>
                        <a href="#" className={style.link}>
                            More about services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default HowSection;