import React from 'react';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';
import style from './style.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const WhoSection = ({title, titleThink, subtitle, desc, dark}) => {
    return (
        <section className={`${style.section} ${dark ? style.darkBg : ''}`}>
                    <div className={style.content}>
                        <div className={style.titleWrapper}>
                            <TitleSecondary text='Who?'/>
                        </div>
                        <div className={style.desc}>
                            <Description text='We are a team of digital product experts consisting of the experienced product managers, designers, developers, and business analysts. ' light={true}/>
                        </div>
                        <div className={style.subtitleWrapper}>
                            <p>Expertise in <span>fintech</span> and <span>food delivery</span> niches</p>
                        </div>   
                    </div>
                    <div className={style.image}>
                        <LazyLoadImage 
                            src={"assets/images/who.jpg"}
                            alt={"our team"}
                            effect='blur'
                            threshold={100}
                        />
                    </div>
        </section>
    )
};
export default WhoSection;