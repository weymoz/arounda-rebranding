import React from 'react';
import style from './style.scss';

const Hungry = props => {
  return (
    <div className={style.Hungry}>
      <div className={style.wrap}>
        <h2 className={style.title}>Hungry for more?</h2>
        <p className={style.description}>Sign up to our newsletter to get weekly updates on the newest design stories, case studies and tips</p>
        <form className={style.form}>
          <label className={style.email}>
            <p>Email address</p>
            <input type='email' />
          </label>
          <button type='submit'>Subscribe for our newsletters</button>
        </form>
      </div>
    </div>
  );
};
export default Hungry;
