import React from 'react';
import Title from '@simple/Title';
import Subtitle from '@simple/Subtitle';
import style from './style.scss';
import LineSvg from '@assets/svg/line.svg';

const AgencySection = (props) => {
    return (
        <section className={style.section}>
            <div className="container">
                <div className='grid'>
                    <div className={style.content}>
                        <div className={style.titleWrapper}>
                            <Title text="Digital product agency"/>
                        </div>
                        <div className={style.desc}>
                            Our team consists strategists, designers, developers, and business analysts
                        </div>
                        <div className={style.subtitleWrapper}>
                            <Subtitle text={"We`re smart partner for startup founders and enterprice"}/>
                        </div>   
                    </div>
                    <div className={style.image}>
                        <LineSvg/>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default AgencySection;