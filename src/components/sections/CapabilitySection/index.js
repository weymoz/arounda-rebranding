import React from 'react';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';
import style from './style.scss';

const CapabilitySection = (props) => {
    return (
        <section className={style.capability}>
            <div className={style.content}>
                <div className={style.titleWrapper}>
                    <TitleSecondary text='Capabilities' />
                </div>
                <div className={style.descWrapper}>
                    <Description text='We use our skills to make a successful digital product' />
                </div>
            </div>
            <div className={style.image}>
                <img src="assets/images/img-3.png" alt="lego" />
            </div>
            <div className={style.list}>
                <div>
                    <span className={style.item}>
                        Strategy
                            </span>
                </div>
                <div>
                    <span className={style.item}>
                        UI Design
                            </span>
                </div>
                <div>
                    <span className={style.item}>
                        Development
                            </span>
                </div>
                <div>
                    <span className={style.item}>
                        UX Design
                            </span>
                </div>
                <div>
                    <span className={style.item}>
                        Branding
                            </span>
                </div>
            </div>
        </section>
    )
};

export default CapabilitySection;