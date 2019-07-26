import React from 'react';
import style from './style.scss';
import Title from '@simple/Title';
import Description from '@simple/Description';


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
                    <div className={style.content}>
                        <div className={style.titleWrapper}>
                            <Title text={'How?'}/>
                        </div>
                        <div className={style.descWrapper}>
                            <Description 
                                text='We use our capabilities to make successful digital products using our own user-oriented methods that create the results'
                                light={true}
                                />
                        </div>
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
        </section>
    )
};
export default HowSection;