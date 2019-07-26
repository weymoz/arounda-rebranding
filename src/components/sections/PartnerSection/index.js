import React from 'react';
import TitleSecondary from '@simple/TitleSecondary';
import s from './style.scss';

const PartnerSection = (props) => {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.titleWrapper}>
                    <TitleSecondary  text='Smart partner for'/>
                </div>
                <div className={s.textWrapper}>
                    <p>Create and launch new web & mobile digital products for b2c/b2b</p>
                    <p>Evolve existing digital products to meet new challenging goals </p>
                </div>
                <div className={s.partnersWrapper}>
                    <img src="/assets/images/gigziP.png" alt="gigzi"/>
                    <img src="/assets/images/velontoP.png" alt="velonto"/>
                    <img src="/assets/images/metr.png" alt="metricly"/>
                    <img src="/assets/images/squad.png" alt="squad"/>
                </div>
            </div>
        </section>
    )
};
export default PartnerSection;