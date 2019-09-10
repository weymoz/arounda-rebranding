import React from 'react';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';
import style from './style.scss';
import { HashLink as Link } from 'react-router-hash-link';

import data from '@/data/ServiceSlide';

const CapabilitySection = props => {
  return (
    <section className={style.capability}>
      <div className={style.content}>
        <div className={style.titleWrapper}>
          <TitleSecondary text='Capabilities' />
        </div>
        <div className={style.descWrapper}>
          <Description
            light={true}
            text='We use our skills to make successful digital products that create results'
          />
        </div>
      </div>
      <div className={style.image}>
        <img src='assets/images/img-3.png' alt='lego' />
      </div>
      <div className={style.list}>
        {
          data.map(el => {
            return (
              <Link
                to={`/services/#${el.id}`} key={el.id}
                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                <span className={style.item} tabIndex='-1'>{el.title}</span>
              </Link>
            )
          })
        }
      </div>
    </section>
  );
};

export default CapabilitySection;
