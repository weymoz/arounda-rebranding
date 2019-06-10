import React from 'react';
import style from './style.scss';
import TitleSecondary from '../TitleSecondary';


const HowSection = (props) => {
    const services = [
        'Strategy',
        'UX Design',
        'UI Design',
        'Development',
        'Visual Identity'
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
                    <div className={style.experience}>
                        <div className={style.title}>
                            Our experience for your needs
                        </div>
                        <div className={style.desc}>
                            Our team is proficient in an array of services that can help elevate and empower your company or organization. 
                        </div>
                        <a href="#" className={style.link}>
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default HowSection;