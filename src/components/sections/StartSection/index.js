import React, { Fragment } from 'react';
import style from './style.scss';

const StartSection = props => {
  return (
    <Fragment>
      <div className={style.title}>
        Got a project?
        <br />
        <div>Let's start.</div>
      </div>
    </Fragment>
  );
};
export default StartSection;
