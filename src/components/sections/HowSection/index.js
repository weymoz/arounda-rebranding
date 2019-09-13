import React from 'react';
import {Link} from 'react-router-dom';
import style from './style.scss';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';

const HowSection = (props) => {
    const services = [
        {
            title: 'Strategy',
            desc: 'It’s practice of designing products, processes, services, events, omnichannel journeys, and environments with a focus placed on the quality of the user experience and culturally relevant solutions.'
        },
        {
            title: 'UX Design',
            desc: 'It’s practice of designing products, processes, services, events, omnichannel journeys, and environments with a focus placed on the quality of the user experience and culturally relevant solutions.'
        },
        {
            title: 'UI Design',
            desc: 'It’s practice of designing products, processes, services, events, omnichannel journeys, and environments with a focus placed on the quality of the user experience and culturally relevant solutions.'
        },
        {
            title: 'Content',
            desc: 'It’s practice of designing products, processes, services, events, omnichannel journeys, and environments with a focus placed on the quality of the user experience and culturally relevant solutions.'
        },
        {
            title: 'Development',
            desc: 'It’s practice of designing products, processes, services, events, omnichannel journeys, and environments with a focus placed on the quality of the user experience and culturally relevant solutions.'
        },
    ]
    return (
        <section className={style.section}>
                    <div className={style.content}>
                        <div className={style.titleWrapper}>
                            <TitleSecondary text={'How?'}/>
                        </div>
                        <div className={style.descWrapper}>
                            <Description 
                                text='We use our capabilities to make successful digital products using our own user-oriented methods that create the&nbsp;results'
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
                                <div className={style.item} key={i} tabIndex='-1'>
                                    <div className={style.title}>{el.title}</div>
                                    <div className={style.desc}>
                                        {el.desc}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={style.more}>
                        <Link to={'/services'} className={style.link}>
                            More about expertise
                        </Link>
                    </div>
        </section>
    )
};
export default HowSection;