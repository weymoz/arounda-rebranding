import React from 'react';
import style from './style.scss';

const MoreInteresting = props => {
  return (
    <div className={style.MoreInteresting}>
      <div className={style.wrapTop}>
        <h1 className={style.title}>More interesting</h1>
        <a className={style.link} href='#'>
          All articles
        </a>
      </div>
      <div className={style.advices}>
        <a href='#'>
          <p>UX / UI</p>
          <h2>8 Things to know when designing augmented reality</h2>
          <p>19 July by Vladislav Gavriluk</p>
        </a>
        <a href='#'>
          <p>UX / UI</p>
          <h2>4 steps for choosing the right projects for your UX portfolio</h2>
          <p>19 July by Vladislav Gavriluk</p>
        </a>
      </div>
      <a className={style.linkBottom} href='#'>
        All articles
      </a>
    </div>
  );
};
export default MoreInteresting;
