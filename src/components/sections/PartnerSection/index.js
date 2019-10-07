import React from 'react';
import s from './style.scss';

const PartnerSection = props => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.titleWrapper}>
          <h3>Smart partner for</h3>
        </div>
        <div className={s.textWrapper}>
          <p>
            <span>Create and launch new web & mobile digital</span> <span>products for b2c/b2b</span>
          </p>
          <p>
            <span>Evolve existing digital products to meet new</span> <span>challenging goals </span>
          </p>
        </div>
        <div className={s.partnersWrapper}>
          <img src='/assets/images/gigziP.png' alt='gigzi' />
          <img src='/assets/images/velontoP.png' alt='velonto' />
          <img src='/assets/images/metr.png' alt='metricly' />
          <img src='/assets/images/squad.png' alt='squad' />
        </div>
      </div>
    </section>
  );
};
export default PartnerSection;
